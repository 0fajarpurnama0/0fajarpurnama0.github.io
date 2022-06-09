import { TunnelOptions } from './tunnel';
export declare type MethodType = (...params: any[]) => any;
export declare class Rpc {
    private tunnel;
    private methods;
    constructor(options: TunnelOptions);
    call<RESULT = any>(method: string, ...params: any[]): Promise<RESULT>;
    register(name: string, method: MethodType): void;
    private messageHandler;
}
