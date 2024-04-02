export type CelestiaConfig = {
    enable: boolean;
    rpc: string;
    tendermint_rpc: string;
    eth_rpc: string;
    namespace_id: string;
    auth_token: string;
    is_poster: boolean;
    gas_price: number;
    event_channel_size: number;
    blobstreamx_address: string;
}