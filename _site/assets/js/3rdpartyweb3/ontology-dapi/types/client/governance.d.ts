import { PeerPoolItem, PeerAttributes, StakeInfo } from './../api/types';
import { GovernanceApi } from '../api/governance';
import { Rpc } from '../rpc/rpc';
export declare class GovernanceApiImp implements GovernanceApi {
    private rpc;
    constructor(rpc: Rpc);
    stakePeers(args: {
        peerPubKeys: string[];
        amounts: string[];
        gasPrice?: string;
        gasLimit?: string;
    }): Promise<string>;
    redeemPeers(args: {
        peerPubKeys: string[];
        amounts: string[];
        gasPrice?: string;
        gasLimit?: string;
    }): Promise<string>;
    withdrawFeeReward(args: {
        gasPrice?: string;
        gasLimit?: string;
    }): Promise<string>;
    withdrawUnfrozenOnt(args: {
        peerPubKeys: string[];
        amounts: string[];
        gasPrice?: string;
        gasLimit?: string;
    }): Promise<string>;
    withdrawPeerUnboundOng(args: {
        gasPrice?: string;
        gasLimit?: string;
    }): Promise<string>;
    getAllPeerPool(): Promise<PeerPoolItem[]>;
    getAttributes(args: {
        peerPubKey: string;
    }): Promise<PeerAttributes>;
    getStakeInfo(args: {
        peerPubKey: string;
    }): Promise<StakeInfo>;
    getRewardFeeAmount(): Promise<string>;
}
