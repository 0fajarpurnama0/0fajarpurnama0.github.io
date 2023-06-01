import { MessageApi } from '../api/message';
import { Signature } from '../api/types';
import { Rpc } from '../rpc/rpc';
export declare class MessageApiImp implements MessageApi {
    private rpc;
    constructor(rpc: Rpc);
    signMessageHash(args: {
        messageHash: string;
        useIdentity?: boolean;
    }): Promise<Signature>;
    verifyMessageHash(args: {
        messageHash: string;
        signature: Signature;
    }): Promise<boolean>;
    signMessage(args: {
        message: string;
        useIdentity?: boolean;
    }): Promise<Signature>;
    verifyMessage(args: {
        message: string;
        signature: Signature;
    }): Promise<boolean>;
}
