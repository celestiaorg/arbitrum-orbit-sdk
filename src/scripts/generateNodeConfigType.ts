import { execSync } from 'child_process';
import { readFileSync, rmSync } from 'fs';
import { Project, Writers } from 'ts-morph';

const { objectType } = Writers;

const nitroNodeImage = 'offchainlabs/nitro-node:v2.1.2-4c55843-dev';
const nitroNodeHelpOutputFile = 'nitro-node-help-output.txt';

function generateHeader() {
  return [
    `// ---`,
    `//`,
    `// THIS FILE IS AUTOMATICALLY GENERATED AND SHOULD NOT BE EDITED MANUALLY`,
    `//`,
    `// IMAGE: ${nitroNodeImage}`,
    `// TIMESTAMP: ${new Date().toISOString()}`,
    `// `,
    `// ---`,
  ].join('\n');
}

type CliOption = {
  name: string;
  type: string;
  docs: string[];
};

function parseCliOptions(fileContents: string): CliOption[] {
  const types: Record<string, string | undefined> = {
    string: 'string',
    strings: 'string[]',
    stringArray: 'string[]',
    int: 'number',
    uint: 'number',
    uint32: 'number',
    float: 'number',
    duration: 'number',
    boolean: 'boolean',
  };

  // split into lines
  let lines = fileContents.split('\n');
  // trim whitespaces
  lines = lines.map((line) => line.trim());
  // only leave lines that start with "--", i.e. the flag
  lines = lines.filter((line) => line.startsWith('--'));
  // sanitize the boolean types
  lines = lines.map((line) => {
    let split = line.split(' ');
    // if the flag is just a boolean, then the type is omitted from the --help output, e.g. "--init.force"
    // to make things simpler and consistent, we replace the empty string with boolean
    if (split[1] === '') {
      split[1] = 'boolean';
    }

    return split.join(' ');
  });

  return lines.map((line) => {
    const [name, type] = line.split(' ');

    // get the mapped type from go to typescript
    const sanitizedType = types[type];

    // docs is everything after the param name and type (and one space in between)
    const docsStart = name.length + 1 + type.length;
    const docs = line.slice(docsStart).trim();

    if (typeof sanitizedType === 'undefined') {
      throw new Error(`Unknown type: ${type}`);
    }

    return {
      // remove "--" from the name
      name: name.replace('--', ''),
      // map the go type to the typescript type
      type: sanitizedType,
      // copy the rest of the line as docs
      docs: [docs],
    };
  });
}

type CliOptionNestedObject = any;

function createCliOptionsNestedObject(options: CliOption[]): CliOptionNestedObject {
  const result: CliOptionNestedObject = {};

  options.forEach((option) => {
    let path = option.name.split('.');
    let current = result;

    for (let i = 0; i < path.length; i++) {
      if (!current[path[i]]) {
        if (i === path.length - 1) {
          current[path[i]] = option;
        } else {
          current[path[i]] = {};
        }
      }

      current = current[path[i]];
    }
  });

  return result;
}

//@ts-ignore
function getType(something: any) {
  if (typeof something === 'object' && 'type' in something) {
    return something.type;
  }

  return objectType({
    //@ts-ignore
    properties: Object.entries(something).map(([key, value]) => ({
      name: `'${key}'`,
      type: getType(value),
      //@ts-ignore
      docs: value.docs,
    })),
  });
}

function main() {
  // run --help on the nitro binary and save the output to a file
  execSync(`docker run --rm ${nitroNodeImage} --help >& ${nitroNodeHelpOutputFile}`);
  // read and parse the file
  const content = readFileSync(nitroNodeHelpOutputFile, 'utf8');
  const cliOptions = parseCliOptions(content);
  const obj = createCliOptionsNestedObject(cliOptions);

  const sourceFile = new Project().createSourceFile('./src/types/NodeConfig-Generated.ts', '', {
    overwrite: true,
  });

  // append header
  sourceFile.insertText(0, generateHeader());
  // append NodeConfig type declaration
  sourceFile.addTypeAlias({
    name: 'NodeConfig',
    // @ts-ignore
    type: getType(obj),
    docs: ['Nitro node configuration options'],
    isExported: true,
  });
  // save file to disk
  sourceFile.saveSync();

  rmSync(nitroNodeHelpOutputFile);
}

main();
