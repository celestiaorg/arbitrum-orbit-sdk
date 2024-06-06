export type CelestiaConfig = {
    enable: boolean;
    gas_price: number;
    gas_multiplier: number;
    rpc: string;
    namespace_id: string;
    auth_token: string;
    noop_writer: boolean;
    validator_config?: CelestiaValidationConfig;
}

export type CelestiaValidationConfig = {
    tendermint_rpc: string;
    eth_rpc: string;
    blobstream: string;
}
