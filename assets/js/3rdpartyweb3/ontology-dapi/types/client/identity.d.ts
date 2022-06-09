import { IdentityApi } from '../api/identity';
import { OntIdAttribute, OntIdDDO } from '../api/types';
import { Rpc } from '../rpc/rpc';
export declare class IdentityApiImp implements IdentityApi {
    private rpc;
    constructor(rpc: Rpc);
    getIdentity(): Promise<string>;
    getDDO(args: {
        identity: string;
    }): Promise<OntIdDDO>;
    addAttributes(args: {
        attributes: OntIdAttribute[];
    }): Promise<void>;
    removeAttribute(args: {
        key: string;
    }): Promise<void>;
    addCredential(args: {
        tags: string[];
        credential: string;
    }): Promise<void>;
    getCredentials(): Promise<{
        tags: string[];
        credential: string;
    }[]>;
}
