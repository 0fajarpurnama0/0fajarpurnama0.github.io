import { StateChannelApi } from '../api/stateChannel';
import { Signature } from '../api/types';
import { Rpc } from '../rpc/rpc';
export declare class StateChannelApiImp implements StateChannelApi {
    private rpc;
    constructor(rpc: Rpc);
    login(): Promise<string>;
    sign(args: {
        channelId: string;
        scriptHash: string;
        message: string;
    }): Promise<Signature>;
}
