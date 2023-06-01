import { GovernanceApi } from './../api/governance';
import { DApi } from '../api';
import { AssetApi } from '../api/asset';
import { IdentityApi } from '../api/identity';
import { MessageApi } from '../api/message';
import { NetworkApi } from '../api/network';
import { ProviderApi } from '../api/provider';
import { SmartContractApi } from '../api/smartContract';
import { StateChannelApi } from '../api/stateChannel';
import { Rpc } from '../rpc/rpc';
export declare class DApiImp implements DApi {
    asset: AssetApi;
    identity: IdentityApi;
    message: MessageApi;
    network: NetworkApi;
    provider: ProviderApi;
    smartContract: SmartContractApi;
    stateChannel: StateChannelApi;
    utils: import("../api").UtilsApi;
    governance: GovernanceApi;
    constructor(rpc: Rpc);
}
