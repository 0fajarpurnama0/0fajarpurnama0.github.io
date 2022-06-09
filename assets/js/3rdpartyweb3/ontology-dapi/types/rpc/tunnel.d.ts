export declare type CallbackType = (msg: Request, caller: Caller) => Promise<Response> | void;
export declare type PostMessageType = (msg: Request) => Promise<Response>;
export declare type AddListenerType = (callback: CallbackType) => void;
export interface Caller {
    url?: string;
    id?: string;
}
export declare type MessageHandlerType = (msg: any, caller: Caller) => any;
export interface Request {
    payload: any;
    source: string;
    destination: string;
    type: 'dAPI.js';
}
export interface Response<TYPE = any> {
    destination: string;
    error?: any;
    payload?: TYPE;
    source: string;
    type: 'dAPI.js';
}
export interface TunnelOptions {
    source: string;
    destination: string;
    postMessage?: PostMessageType;
    addListener?: AddListenerType;
    messageHandler?: MessageHandlerType;
    logMessages?: boolean;
}
export declare class Tunnel<T = any> {
    private source;
    private destination;
    private postMessage?;
    private messageHandler?;
    private logMessages?;
    constructor(options: TunnelOptions);
    send<RESULT>(msg: T): Promise<RESULT>;
    private onMessage;
}
