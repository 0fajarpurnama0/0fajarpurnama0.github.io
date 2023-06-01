import { SmartContractApi } from '../api/smartContract';
import { Parameter, Response, VmType } from '../api/types';
import { Rpc } from '../rpc/rpc';
export declare class SmartContractApiImp implements SmartContractApi {
    private rpc;
    constructor(rpc: Rpc);
    invoke(args: {
        scriptHash: string;
        operation: string;
        args?: Parameter[];
        gasPrice?: number;
        gasLimit?: number;
        requireIdentity?: boolean;
    }): Promise<Response>;
    invokeRead(args: {
        scriptHash: string;
        operation: string;
        args?: Parameter[];
    }): Promise<any>;
    deploy(args: {
        code: string;
        name?: string;
        version?: string;
        author?: string;
        email?: string;
        description?: string;
        vmType?: boolean | VmType;
        gasPrice?: number;
        gasLimit?: number;
    }): Promise<void>;
    invokeWasm(args: {
        scriptHash: string;
        operation: string;
        args?: Parameter[];
        gasPrice?: number;
        gasLimit?: number;
        requireIdentity?: boolean;
    }): Promise<Response>;
    invokeWasmRead(args: {
        scriptHash: string;
        operation: string;
        args?: Parameter[];
    }): Promise<any>;
}
