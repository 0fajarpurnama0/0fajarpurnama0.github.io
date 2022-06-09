import { DApi, ExtensionType } from './api';
interface RegisterContentProxyParams {
    logMessages?: boolean;
    logWarnings?: boolean;
    extension?: ExtensionType;
}
export declare function registerContentProxy({ logMessages, logWarnings, extension }: RegisterContentProxyParams): void;
export declare function registerProvider({ provider, logMessages }: {
    provider: DApi;
    logMessages: boolean;
}): void;
export {};
