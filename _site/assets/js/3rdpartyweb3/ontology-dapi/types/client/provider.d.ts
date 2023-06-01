import { ProviderApi } from '../api/provider';
import { Provider } from '../api/types';
import { Rpc } from '../rpc/rpc';
export declare class ProviderApiImp implements ProviderApi {
    private rpc;
    constructor(rpc: Rpc);
    getProvider(): Promise<Provider>;
}
