import { DApi, ExtensionType } from '../api';
declare let legacyDApi: DApi;
interface RegisterClientParams {
    logMessages?: boolean;
    logWarnings?: boolean;
    extension?: ExtensionType;
}
declare function registerClient({ logMessages, logWarnings, extension }: RegisterClientParams): DApi;
export { legacyDApi as api, registerClient };
