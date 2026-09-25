---
layout: post
title: Decentralized Technologies
description: Collection about decentralized technologies.
---


## 1. Cryptographic Primitives (The Mathematical Foundation)

* **Hash Functions:** SHA-256, Keccak-256 (SHA-3), Blake3, Poseidon (ZK-optimized).
* **Public Key Cryptography (Asymmetric):** Elliptic Curve Cryptography (ECC), RSA.
* **Digital Signatures:** ECDSA, EdDSA, Schnorr Signatures, BLS (Boneh-Lynn-Shacham) Signatures.
* **Cryptographic Data Structures:** Merkle Trees, Verkle Trees, Sparse Merkle Trees, Cryptographic Accumulators, Bloom Filters.
* **Advanced Cryptography:**
* Polynomial Commitments (KZG Commitments)
* Multi-Party Computation (MPC)
* Fully Homomorphic Encryption (FHE)
* Verifiable Delay Functions (VDF)
* Hash Time-Locked Contracts (HTLCs)


## 2. Peer-to-Peer (P2P) Networking (The Communication Layer)

* **Network Topologies:** Mesh Networking, Unstructured vs. Structured P2P Networks.
* **Node Discovery & Routing:** Distributed Hash Tables (DHTs, e.g., Kademlia), Gossip Protocols, Epidemic Broadcast Trees.
* **P2P Stacks:** `libp2p` (Swarm, Transport, Multiplexing).
* **Connection Protocols:** NAT Traversal, Hole Punching, WebRTC, TCP/UDP configurations.

## 3. Distributed Consensus (The Agreement Layer)

* **Classical Consensus:** Byzantine Fault Tolerance (pBFT, Federated Byzantine Agreement).
* **Probabilistic/Nakamoto Consensus:** Proof of Work (PoW).
* **Stake-Based Consensus:** Proof of Stake (PoS), Delegated Proof of Stake (DPoS), Liquid Proof of Stake (LPoS), Nominated Proof of Stake (NPoS).
* **Alternative Sybil Resistance:** Proof of Authority (PoA), Proof of History (PoH), Proof of Space / Time / Capacity (Chia), Proof of Burn.
* **Hybrid & Advanced:** Directed Acyclic Graph (DAG) Consensus (Tangle, Hashgraph), Avalanche Consensus.
* **Consensus Mechanics:** Epochs, Slashing conditions, Long-range attack resistance, Probabilistic vs. Deterministic Finality.

## 4. Data Structures & State Management (The Ledger Layer)

* **Ledger Topologies:** Sequential Blockchains, Directed Acyclic Graphs (DAGs), Block-Lattice.
* **State Models:**
* UTXO (Unspent Transaction Output) Model [Bitcoin]
* Extended UTXO (eUTXO) [Cardano]
* Account / Balance Model [Ethereum]
* Actor Model (Cell Trees) [TON]

* **Database Engines:** LevelDB, PebbleDB, RocksDB, Memory-Mapped Files (AccountsDB).

## 5. Execution Environments & Virtual Machines (The Compute Layer)

* **Virtual Machines:** Ethereum Virtual Machine (EVM), WebAssembly (Wasm / Soroban), eBPF (Solana Sealevel), TON Virtual Machine (TVM).
* **Smart Contract Languages:** Solidity, Vyper, Rust, Move, Cairo, Haskell (Plutus), Tact, FunC.
* **Execution Models:** Single-threaded sequential execution, Parallel lock-based execution, Asynchronous message passing.
* **Security Tooling:** Formal Verification, Symbolic Execution, Fuzzing engines.

## 6. Scaling & Layer 2 Technologies (The Throughput Layer)

* **Off-Chain Channels:** State Channels, Payment Channels (Lightning Network, Raiden).
* **Rollups:**
* Optimistic Rollups (Fault Proofs)
* Zero-Knowledge (ZK) Rollups (Validity Proofs)


* **Alternative L2s:** Plasma Chains, Validiums, Volitions, Sidechains.
* **Layer 1 Scaling:** Execution Sharding, Data Sharding.
* **Rollup Infrastructure:** Sequencers (Centralized vs. Decentralized), Prover Networks.

## 7. Decentralized Storage & Data Availability (The Off-Chain Data Layer)

* **Content-Addressed Storage:** InterPlanetary File System (IPFS).
* **Decentralized Archival Networks:** Arweave, Filecoin, Sia, Swarm.
* **Data Availability (DA) Layers:** Celestia, EigenDA, Avail.
* **Decentralized Databases:** OrbitDB, Ceramic Network, GunDB, Tableland.

## 8. Interoperability & Bridging (The Cross-Chain Layer)

* **Bridge Architectures:** Lock-and-Mint, Burn-and-Mint, Atomic Swaps.
* **Standardized Protocols:** Inter-Blockchain Communication Protocol (IBC), Cross-Consensus Message Format (XCM), Cross-Chain Interoperability Protocol (CCIP).
* **Interoperability Networks:** LayerZero, Polkadot Relay Chains, Cosmos Hub, Wormhole.
* **Asset Representation:** Wrapped Assets, Liquid Staking Tokens (LSTs).

## 9. Decentralized Identity & Access (The User Layer)

* **Identity Standards:** Self-Sovereign Identity (SSI), Decentralized Identifiers (DIDs), Verifiable Credentials (VCs).
* **On-Chain Identity:** Soulbound Tokens (SBTs), Ethereum Name Service (ENS), Unstoppable Domains.
* **Wallet & Key Management:**
* Hierarchical Deterministic (HD) Wallets (BIP-39 Seed Phrases)
* Multi-Signature (Multi-sig) Wallets
* Account Abstraction (ERC-4337 / Smart Contract Wallets)
* Social Recovery Mechanisms

## 10. Oracles & Peripheral Infrastructure (The Middleware Layer)

* **Data Oracles:** Decentralized Price Feeds, Weather data, Off-chain API bridges (Chainlink, Pyth).
* **Compute Oracles & Automation:** Keepers, Decentralized Cron Jobs.
* **Randomness:** Verifiable Random Functions (VRF) for unbiased on-chain RNG.
* **Data Indexing:** The Graph (Subgraphs), Subsquid, Goldsky.
* **API Gateways:** JSON-RPC Nodes, WebSocket connections (Alchemy, Infura, QuickNode).

## 11. Privacy & Zero-Knowledge Technologies (The Confidentiality Layer)

* **Zero-Knowledge Proofs:** zk-SNARKs, zk-STARKs, Bulletproofs, PLONK, Halo2.
* **Transaction Obfuscation:** Ring Signatures, Stealth Addresses, Coin Mixers.
* **Hardware Privacy:** Trusted Execution Environments (TEEs) / Secure Enclaves (e.g., Intel SGX) used in decentralized networks.

## 12. Tokenomics & Decentralized Governance (The Socio-Economic Layer)

* **Organizational Structures:** Decentralized Autonomous Organizations (DAOs).
* **Governance Mechanics:** Token-weighted voting, Quadratic Voting, Conviction Voting, Time-lock Multi-sigs.
* **Economic Mechanisms:** Automated Market Makers (AMMs), Liquidity Pools, Bonding Curves, Staking Yields, Mechanism Design.

## 13. Decentralized Physical & AI Infrastructure (DePIN & DeAI)

* **DePIN (Decentralized Physical Infrastructure Networks):**
* Decentralized Compute & GPU Networks (Render, Akash, Golem).
* Decentralized Wireless & Sensor Networks (Helium, Hivemapper).


* **DeAI (Decentralized AI):** Zero-Knowledge Machine Learning (ZK-ML), Federated Learning on blockchains, Uncensored decentralized LLM hosting.

## 14. The dApp Stack (The Frontend Integration Layer)

* **Client Libraries:** `web3.js`, `ethers.js`, `viem`, `wagmi`.
* **Decentralized Hosting:** Fleek (hosting frontends on IPFS/Arweave).
* **Storage Gateways:** IPFS Gateways for rendering decentralized media in standard web browsers.

## 15. Maximal Extractable Value (MEV) & Transaction Ordering

* **Mempool Dynamics:** Public vs. Private Mempools, Dark Pools, Transaction Propagation delays.
* **MEV Extraction Strategies:** Front-running, Back-running, Sandwich Attacks, Cross-DEX Arbitrage, Liquidation Bots.
* **MEV Infrastructure:** Flashbots (`mev-boost`), Proposer-Builder Separation (PBS), Encrypted Mempools, Order Flow Auctions (OFAs).

## 16. Intent-Based Architectures & Execution Frameworks

* **Declarative vs. Imperative Paradigms:** Users specify *what outcome they want* (state change) rather than *how to execute it* (transactions/calls).
* **Intent Components:** Solvers / Searchers, Fillers, Coincidence of Wants (CoW) matching.
* **Account Abstraction Infrastructure (ERC-4337):** UserOperations (`UserOp`), Bundlers, Paymasters (gas abstraction), Smart Account Gateways.

## 17. Decentralized Security, Threat Modeling & Forensics

* **Protocol & Smart Contract Attack Vectors:** Reentrancy, Integer Overflow/Underflow, Flash Loan Exploits, Oracle Manipulation, Read-only Reentrancy, Access Control Vulnerabilities.
* **Network-Level Attack Vectors:** 51% Attacks, Sybil Attacks, Eclipse Attacks, Long-Range Attacks, Routing/BGP Attacks.
* **Security & Audit Tooling:** Static Analyzers (Slither), Fuzzers (Echidna, Foundry), Symbolic Execution Engines (Manticore), Formal Verification (Certora).
* **On-Chain Forensics:** Transaction tracing, Bytecode decompilation, Address tagging, Chain analysis.

## 18. Verifiable Off-Chain Compute (Coprocessors)

* **ZK Coprocessors:** Offloading expensive computation or historical data queries off-chain while returning a STARK/SNARK validity proof (e.g., Axiom, Brevis, Lagrange).
* **General-Purpose zkVMs:** RISC-V zero-knowledge virtual machines allowing rust/C++ off-chain execution with verifiable on-chain verification (e.g., SP1, Risc Zero).
* **Optimistic Computation Engines:** Interactive fraud-proof execution (e.g., TrueBit).