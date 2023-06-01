import { NetworkApi } from '../api/network';
import { Asset, Balance, Block, BlockWithTxList, Contract, GasPrice, MerkleProof, Network, Transaction } from '../api/types';
import { Rpc } from '../rpc/rpc';
export declare class NetworkApiImp implements NetworkApi {
    private rpc;
    constructor(rpc: Rpc);
    getNodeCount(): Promise<number>;
    getBlockHeight(): Promise<number>;
    getMerkleProof(args: {
        txHash: string;
    }): Promise<MerkleProof>;
    getStorage(args: {
        contract: string;
        key: string;
    }): Promise<string>;
    getAllowance(args: {
        asset: Asset;
        fromAddress: string;
        toAddress: string;
    }): Promise<number>;
    getAllowanceV2(args: {
        asset: Asset;
        fromAddress: string;
        toAddress: string;
    }): Promise<number>;
    getBlock(args: {
        block: number | string;
    }): Promise<Block>;
    getTransaction(args: {
        txHash: string;
    }): Promise<Transaction>;
    getNetwork(): Promise<Network>;
    getBalance(args: {
        address: string;
    }): Promise<Balance>;
    getBalanceV2(args: {
        address: string;
    }): Promise<Balance>;
    isConnected(): Promise<boolean>;
    getUnboundOng(args: {
        address: string;
    }): Promise<string>;
    getContract(args: {
        hash: string;
    }): Promise<Contract>;
    getSmartCodeEvent(args: {
        value: string | number;
    }): Promise<any>;
    getBlockHeightByTxHash(args: {
        hash: string;
    }): Promise<number>;
    getBlockHash(args: {
        height: number;
    }): Promise<string>;
    getBlockTxsByHeight(args: {
        height: number;
    }): Promise<BlockWithTxList>;
    getGasPrice(): Promise<GasPrice>;
    getGrantOng(args: {
        address: string;
    }): Promise<string>;
    getMempoolTxCount(): Promise<number[]>;
    getMempoolTxState(args: {
        hash: string;
    }): Promise<any>;
    getVersion(): Promise<string>;
}
