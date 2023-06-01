var eosjs_api;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/eosjs-api.ts":
/*!**************************!*\
  !*** ./src/eosjs-api.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @module API
 */
// copyright defined in eosjs/LICENSE.txt
/* eslint-disable max-classes-per-file */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionBuilder = exports.TransactionBuilder = exports.Api = void 0;
var pako_1 = __webpack_require__(/*! pako */ "./node_modules/pako/index.js");
var ser = __webpack_require__(/*! ./eosjs-serialize */ "./src/eosjs-serialize.ts");
var Api = /** @class */ (function () {
    /**
     * @param args
     * * `rpc`: Issues RPC calls
     * * `authorityProvider`: Get public keys needed to meet authorities in a transaction
     * * `abiProvider`: Supplies ABIs in raw form (binary)
     * * `signatureProvider`: Signs transactions
     * * `chainId`: Identifies chain
     * * `textEncoder`: `TextEncoder` instance to use. Pass in `null` if running in a browser
     * * `textDecoder`: `TextDecoder` instance to use. Pass in `null` if running in a browser
     */
    function Api(args) {
        /** Holds information needed to serialize contract actions */
        this.contracts = new Map();
        /** Fetched abis */
        this.cachedAbis = new Map();
        this.transactionExtensions = [
            { id: 1, type: 'resource_payer', keys: ['payer', 'max_net_bytes', 'max_cpu_us', 'max_memory_bytes'] },
        ];
        this.rpc = args.rpc;
        this.authorityProvider = args.authorityProvider || args.rpc;
        this.abiProvider = args.abiProvider || args.rpc;
        this.signatureProvider = args.signatureProvider;
        this.chainId = args.chainId;
        this.textEncoder = args.textEncoder;
        this.textDecoder = args.textDecoder;
        this.abiTypes = ser.getTypesFromAbi(ser.createAbiTypes());
        this.transactionTypes = ser.getTypesFromAbi(ser.createTransactionTypes());
    }
    /** Decodes an abi as Uint8Array into json. */
    Api.prototype.rawAbiToJson = function (rawAbi) {
        var buffer = new ser.SerialBuffer({
            textEncoder: this.textEncoder,
            textDecoder: this.textDecoder,
            array: rawAbi,
        });
        if (!ser.supportedAbiVersion(buffer.getString())) {
            throw new Error('Unsupported abi version');
        }
        buffer.restartRead();
        return this.abiTypes.get('abi_def').deserialize(buffer);
    };
    /** Encodes a json abi as Uint8Array. */
    Api.prototype.jsonToRawAbi = function (jsonAbi) {
        var buffer = new ser.SerialBuffer({
            textEncoder: this.textEncoder,
            textDecoder: this.textDecoder,
        });
        this.abiTypes.get('abi_def').serialize(buffer, jsonAbi);
        if (!ser.supportedAbiVersion(buffer.getString())) {
            throw new Error('Unsupported abi version');
        }
        return buffer.asUint8Array();
    };
    /** Get abi in both binary and structured forms. Fetch when needed. */
    Api.prototype.getCachedAbi = function (accountName, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            var cachedAbi, rawAbi, abi, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!reload && this.cachedAbis.get(accountName)) {
                            return [2 /*return*/, this.cachedAbis.get(accountName)];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.abiProvider.getRawAbi(accountName)];
                    case 2:
                        rawAbi = (_a.sent()).abi;
                        abi = this.rawAbiToJson(rawAbi);
                        cachedAbi = { rawAbi: rawAbi, abi: abi };
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        e_1.message = "fetching abi for " + accountName + ": " + e_1.message;
                        throw e_1;
                    case 4:
                        if (!cachedAbi) {
                            throw new Error("Missing abi for " + accountName);
                        }
                        this.cachedAbis.set(accountName, cachedAbi);
                        return [2 /*return*/, cachedAbi];
                }
            });
        });
    };
    /** Get abi in structured form. Fetch when needed. */
    Api.prototype.getAbi = function (accountName, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCachedAbi(accountName, reload)];
                    case 1: return [2 /*return*/, (_a.sent()).abi];
                }
            });
        });
    };
    /** Get abis needed by a transaction */
    Api.prototype.getTransactionAbis = function (transaction, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            var actions, accounts, uniqueAccounts, actionPromises;
            var _this = this;
            return __generator(this, function (_a) {
                actions = (transaction.context_free_actions || []).concat(transaction.actions);
                accounts = actions.map(function (action) { return action.account; });
                uniqueAccounts = new Set(accounts);
                actionPromises = __spreadArray([], __read(uniqueAccounts)).map(function (account) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = {
                                    accountName: account
                                };
                                return [4 /*yield*/, this.getCachedAbi(account, reload)];
                            case 1: return [2 /*return*/, (_a.abi = (_b.sent()).rawAbi,
                                    _a)];
                        }
                    });
                }); });
                return [2 /*return*/, Promise.all(actionPromises)];
            });
        });
    };
    /** Get data needed to serialize actions in a contract */
    Api.prototype.getContract = function (accountName, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            var abi, types, actions, _a, _b, _c, name_1, type, result;
            var e_2, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!reload && this.contracts.get(accountName)) {
                            return [2 /*return*/, this.contracts.get(accountName)];
                        }
                        return [4 /*yield*/, this.getAbi(accountName, reload)];
                    case 1:
                        abi = _e.sent();
                        types = ser.getTypesFromAbi(ser.createInitialTypes(), abi);
                        actions = new Map();
                        try {
                            for (_a = __values(abi.actions), _b = _a.next(); !_b.done; _b = _a.next()) {
                                _c = _b.value, name_1 = _c.name, type = _c.type;
                                actions.set(name_1, ser.getType(types, type));
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        result = { types: types, actions: actions };
                        this.contracts.set(accountName, result);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** Convert `value` to binary form. `type` must be a built-in abi type or in `transaction.abi.json`. */
    Api.prototype.serialize = function (buffer, type, value) {
        this.transactionTypes.get(type).serialize(buffer, value);
    };
    /** Convert data in `buffer` to structured form. `type` must be a built-in abi type or in `transaction.abi.json`. */
    Api.prototype.deserialize = function (buffer, type) {
        return this.transactionTypes.get(type).deserialize(buffer);
    };
    /** Convert a transaction to binary */
    Api.prototype.serializeTransaction = function (transaction) {
        var buffer = new ser.SerialBuffer({ textEncoder: this.textEncoder, textDecoder: this.textDecoder });
        this.serialize(buffer, 'transaction', __assign({ max_net_usage_words: 0, max_cpu_usage_ms: 0, delay_sec: 0, context_free_actions: [], actions: [], transaction_extensions: [] }, transaction));
        return buffer.asUint8Array();
    };
    /** Serialize context-free data */
    Api.prototype.serializeContextFreeData = function (contextFreeData) {
        var e_3, _a;
        if (!contextFreeData || !contextFreeData.length) {
            return null;
        }
        var buffer = new ser.SerialBuffer({ textEncoder: this.textEncoder, textDecoder: this.textDecoder });
        buffer.pushVaruint32(contextFreeData.length);
        try {
            for (var contextFreeData_1 = __values(contextFreeData), contextFreeData_1_1 = contextFreeData_1.next(); !contextFreeData_1_1.done; contextFreeData_1_1 = contextFreeData_1.next()) {
                var data = contextFreeData_1_1.value;
                buffer.pushBytes(data);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (contextFreeData_1_1 && !contextFreeData_1_1.done && (_a = contextFreeData_1.return)) _a.call(contextFreeData_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return buffer.asUint8Array();
    };
    /** Convert a transaction from binary. Leaves actions in hex. */
    Api.prototype.deserializeTransaction = function (transaction) {
        var buffer = new ser.SerialBuffer({ textEncoder: this.textEncoder, textDecoder: this.textDecoder });
        buffer.pushArray(transaction);
        return this.deserialize(buffer, 'transaction');
    };
    // Order of adding to transaction_extension is transaction_extension id ascending
    Api.prototype.serializeTransactionExtensions = function (transaction) {
        var transaction_extensions = [];
        if (transaction.resource_payer) {
            var extensionBuffer = new ser.SerialBuffer({ textEncoder: this.textEncoder, textDecoder: this.textDecoder });
            var types = ser.getTypesFromAbi(ser.createTransactionExtensionTypes());
            types.get('resource_payer').serialize(extensionBuffer, transaction.resource_payer);
            transaction_extensions = __spreadArray(__spreadArray([], __read(transaction_extensions)), [[1, ser.arrayToHex(extensionBuffer.asUint8Array())]]);
        }
        return transaction_extensions;
    };
    ;
    // Usage: transaction = {...transaction, ...this.deserializeTransactionExtensions(transaction.transaction_extensions)}
    Api.prototype.deserializeTransactionExtensions = function (data) {
        var _this = this;
        var transaction = {};
        data.forEach(function (extensionData) {
            var transactionExtension = _this.transactionExtensions.find(function (extension) { return extension.id === extensionData[0]; });
            if (transactionExtension === undefined) {
                throw new Error("Transaction Extension could not be determined: " + extensionData);
            }
            var types = ser.getTypesFromAbi(ser.createTransactionExtensionTypes());
            var extensionBuffer = new ser.SerialBuffer({ textEncoder: _this.textEncoder, textDecoder: _this.textDecoder });
            extensionBuffer.pushArray(ser.hexToUint8Array(extensionData[1]));
            var deserializedObj = types.get(transactionExtension.type).deserialize(extensionBuffer);
            if (extensionData[0] === 1) {
                deserializedObj.max_net_bytes = Number(deserializedObj.max_net_bytes);
                deserializedObj.max_cpu_us = Number(deserializedObj.max_cpu_us);
                deserializedObj.max_memory_bytes = Number(deserializedObj.max_memory_bytes);
                transaction.resource_payer = deserializedObj;
            }
        });
        return transaction;
    };
    ;
    // Transaction extensions are serialized and moved to `transaction_extensions`, deserialized objects are not needed on the transaction
    Api.prototype.deleteTransactionExtensionObjects = function (transaction) {
        delete transaction.resource_payer;
        return transaction;
    };
    /** Convert actions to hex */
    Api.prototype.serializeActions = function (actions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(actions.map(function (action) { return __awaiter(_this, void 0, void 0, function () {
                            var account, name, authorization, data, contract;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        account = action.account, name = action.name, authorization = action.authorization, data = action.data;
                                        return [4 /*yield*/, this.getContract(account)];
                                    case 1:
                                        contract = _a.sent();
                                        if (typeof data !== 'object') {
                                            return [2 /*return*/, action];
                                        }
                                        return [2 /*return*/, ser.serializeAction(contract, account, name, authorization, data, this.textEncoder, this.textDecoder)];
                                }
                            });
                        }); }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Convert actions from hex */
    Api.prototype.deserializeActions = function (actions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(actions.map(function (_a) {
                            var account = _a.account, name = _a.name, authorization = _a.authorization, data = _a.data;
                            return __awaiter(_this, void 0, void 0, function () {
                                var contract;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.getContract(account)];
                                        case 1:
                                            contract = _b.sent();
                                            return [2 /*return*/, ser.deserializeAction(contract, account, name, authorization, data, this.textEncoder, this.textDecoder)];
                                    }
                                });
                            });
                        }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Convert a transaction from binary. Also deserializes actions. */
    Api.prototype.deserializeTransactionWithActions = function (transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var deserializedTransaction, deserializedCFActions, deserializedActions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof transaction === 'string') {
                            transaction = ser.hexToUint8Array(transaction);
                        }
                        deserializedTransaction = this.deserializeTransaction(transaction);
                        return [4 /*yield*/, this.deserializeActions(deserializedTransaction.context_free_actions)];
                    case 1:
                        deserializedCFActions = _a.sent();
                        return [4 /*yield*/, this.deserializeActions(deserializedTransaction.actions)];
                    case 2:
                        deserializedActions = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, deserializedTransaction), { context_free_actions: deserializedCFActions, actions: deserializedActions })];
                }
            });
        });
    };
    /** Deflate a serialized object */
    Api.prototype.deflateSerializedArray = function (serializedArray) {
        return pako_1.deflate(serializedArray, { level: 9 });
    };
    /** Inflate a compressed serialized object */
    Api.prototype.inflateSerializedArray = function (compressedSerializedArray) {
        return pako_1.inflate(compressedSerializedArray);
    };
    /**
     * Create and optionally broadcast a transaction.
     *
     * Named Parameters:
     * `broadcast`: broadcast this transaction?
     * `sign`: sign this transaction?
     * `compression`: compress this transaction?
     * `readOnlyTrx`: read only transaction?
     * `returnFailureTraces`: return failure traces? (only available for read only transactions currently)
     *
     * If both `blocksBehind` and `expireSeconds` are present,
     * then fetch the block which is `blocksBehind` behind head block,
     * use it as a reference for TAPoS, and expire the transaction `expireSeconds` after that block's time.
     *
     * If both `useLastIrreversible` and `expireSeconds` are present,
     * then fetch the last irreversible block, use it as a reference for TAPoS,
     * and expire the transaction `expireSeconds` after that block's time.
     *
     * @returns node response if `broadcast`, `{signatures, serializedTransaction}` if `!broadcast`
     */
    Api.prototype.transact = function (transaction, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.broadcast, broadcast = _c === void 0 ? true : _c, _d = _b.sign, sign = _d === void 0 ? true : _d, readOnlyTrx = _b.readOnlyTrx, returnFailureTraces = _b.returnFailureTraces, requiredKeys = _b.requiredKeys, compression = _b.compression, blocksBehind = _b.blocksBehind, useLastIrreversible = _b.useLastIrreversible, expireSeconds = _b.expireSeconds;
        return __awaiter(this, void 0, void 0, function () {
            var info, abis, _e, serializedTransaction, serializedContextFreeData, pushTransactionArgs, availableKeys;
            var _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (typeof blocksBehind === 'number' && useLastIrreversible) {
                            throw new Error('Use either blocksBehind or useLastIrreversible');
                        }
                        if (!!this.chainId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rpc.get_info()];
                    case 1:
                        info = _g.sent();
                        this.chainId = info.chain_id;
                        _g.label = 2;
                    case 2:
                        if (!((typeof blocksBehind === 'number' || useLastIrreversible) && expireSeconds)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.generateTapos(info, transaction, blocksBehind, useLastIrreversible, expireSeconds)];
                    case 3:
                        transaction = _g.sent();
                        _g.label = 4;
                    case 4:
                        if (!this.hasRequiredTaposFields(transaction)) {
                            throw new Error('Required configuration or TAPOS fields are not present');
                        }
                        return [4 /*yield*/, this.getTransactionAbis(transaction)];
                    case 5:
                        abis = _g.sent();
                        _e = [__assign({}, transaction)];
                        _f = {};
                        return [4 /*yield*/, this.serializeTransactionExtensions(transaction)];
                    case 6:
                        _f.transaction_extensions = _g.sent();
                        return [4 /*yield*/, this.serializeActions(transaction.context_free_actions || [])];
                    case 7:
                        _f.context_free_actions = _g.sent();
                        return [4 /*yield*/, this.serializeActions(transaction.actions)];
                    case 8:
                        transaction = __assign.apply(void 0, _e.concat([(_f.actions = _g.sent(), _f)]));
                        transaction = this.deleteTransactionExtensionObjects(transaction);
                        serializedTransaction = this.serializeTransaction(transaction);
                        serializedContextFreeData = this.serializeContextFreeData(transaction.context_free_data);
                        pushTransactionArgs = {
                            serializedTransaction: serializedTransaction,
                            serializedContextFreeData: serializedContextFreeData,
                            signatures: []
                        };
                        if (!sign) return [3 /*break*/, 13];
                        if (!!requiredKeys) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.signatureProvider.getAvailableKeys()];
                    case 9:
                        availableKeys = _g.sent();
                        return [4 /*yield*/, this.authorityProvider.getRequiredKeys({ transaction: transaction, availableKeys: availableKeys })];
                    case 10:
                        requiredKeys = _g.sent();
                        _g.label = 11;
                    case 11: return [4 /*yield*/, this.signatureProvider.sign({
                            chainId: this.chainId,
                            requiredKeys: requiredKeys,
                            serializedTransaction: serializedTransaction,
                            serializedContextFreeData: serializedContextFreeData,
                            abis: abis,
                        })];
                    case 12:
                        pushTransactionArgs = _g.sent();
                        _g.label = 13;
                    case 13:
                        if (broadcast) {
                            if (compression) {
                                return [2 /*return*/, this.pushCompressedSignedTransaction(pushTransactionArgs, readOnlyTrx, returnFailureTraces)];
                            }
                            return [2 /*return*/, this.pushSignedTransaction(pushTransactionArgs, readOnlyTrx, returnFailureTraces)];
                        }
                        return [2 /*return*/, pushTransactionArgs];
                }
            });
        });
    };
    Api.prototype.query = function (account, short, query, _a) {
        var sign = _a.sign, requiredKeys = _a.requiredKeys, _b = _a.authorization, authorization = _b === void 0 ? [] : _b;
        return __awaiter(this, void 0, void 0, function () {
            var info, refBlock, queryBuffer, transaction, serializedTransaction, signatures, abis, availableKeys, signResponse, response, returnBuffer;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.rpc.get_info()];
                    case 1:
                        info = _c.sent();
                        return [4 /*yield*/, this.tryRefBlockFromGetInfo(info)];
                    case 2:
                        refBlock = _c.sent();
                        queryBuffer = new ser.SerialBuffer({ textEncoder: this.textEncoder, textDecoder: this.textDecoder });
                        ser.serializeQuery(queryBuffer, query);
                        transaction = __assign(__assign({}, ser.transactionHeader(refBlock, 60 * 30)), { context_free_actions: [], actions: [{
                                    account: account,
                                    name: 'queryit',
                                    authorization: authorization,
                                    data: ser.arrayToHex(queryBuffer.asUint8Array()),
                                }] });
                        serializedTransaction = this.serializeTransaction(transaction);
                        signatures = [];
                        if (!sign) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.getTransactionAbis(transaction)];
                    case 3:
                        abis = _c.sent();
                        if (!!requiredKeys) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.signatureProvider.getAvailableKeys()];
                    case 4:
                        availableKeys = _c.sent();
                        return [4 /*yield*/, this.authorityProvider.getRequiredKeys({ transaction: transaction, availableKeys: availableKeys })];
                    case 5:
                        requiredKeys = _c.sent();
                        _c.label = 6;
                    case 6: return [4 /*yield*/, this.signatureProvider.sign({
                            chainId: this.chainId,
                            requiredKeys: requiredKeys,
                            serializedTransaction: serializedTransaction,
                            serializedContextFreeData: null,
                            abis: abis,
                        })];
                    case 7:
                        signResponse = _c.sent();
                        signatures = signResponse.signatures;
                        _c.label = 8;
                    case 8: return [4 /*yield*/, this.rpc.send_transaction({
                            signatures: signatures,
                            compression: 0,
                            serializedTransaction: serializedTransaction
                        })];
                    case 9:
                        response = _c.sent();
                        returnBuffer = new ser.SerialBuffer({
                            textEncoder: this.textEncoder,
                            textDecoder: this.textDecoder,
                            array: ser.hexToUint8Array(response.processed.action_traces[0][1].return_value)
                        });
                        if (short) {
                            return [2 /*return*/, ser.deserializeAnyvarShort(returnBuffer)];
                        }
                        else {
                            return [2 /*return*/, ser.deserializeAnyvar(returnBuffer)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Broadcast a signed transaction */
    Api.prototype.pushSignedTransaction = function (_a, readOnlyTrx, returnFailureTraces) {
        var signatures = _a.signatures, serializedTransaction = _a.serializedTransaction, serializedContextFreeData = _a.serializedContextFreeData;
        if (readOnlyTrx === void 0) { readOnlyTrx = false; }
        if (returnFailureTraces === void 0) { returnFailureTraces = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (readOnlyTrx) {
                    return [2 /*return*/, this.rpc.push_ro_transaction({
                            signatures: signatures,
                            serializedTransaction: serializedTransaction,
                            serializedContextFreeData: serializedContextFreeData,
                        }, returnFailureTraces)];
                }
                return [2 /*return*/, this.rpc.push_transaction({
                        signatures: signatures,
                        serializedTransaction: serializedTransaction,
                        serializedContextFreeData: serializedContextFreeData
                    })];
            });
        });
    };
    Api.prototype.pushCompressedSignedTransaction = function (_a, readOnlyTrx, returnFailureTraces) {
        var signatures = _a.signatures, serializedTransaction = _a.serializedTransaction, serializedContextFreeData = _a.serializedContextFreeData;
        if (readOnlyTrx === void 0) { readOnlyTrx = false; }
        if (returnFailureTraces === void 0) { returnFailureTraces = false; }
        return __awaiter(this, void 0, void 0, function () {
            var compressedSerializedTransaction, compressedSerializedContextFreeData;
            return __generator(this, function (_b) {
                compressedSerializedTransaction = this.deflateSerializedArray(serializedTransaction);
                compressedSerializedContextFreeData = this.deflateSerializedArray(serializedContextFreeData || new Uint8Array(0));
                if (readOnlyTrx) {
                    return [2 /*return*/, this.rpc.push_ro_transaction({
                            signatures: signatures,
                            compression: 1,
                            serializedTransaction: compressedSerializedTransaction,
                            serializedContextFreeData: compressedSerializedContextFreeData
                        }, returnFailureTraces)];
                }
                return [2 /*return*/, this.rpc.push_transaction({
                        signatures: signatures,
                        compression: 1,
                        serializedTransaction: compressedSerializedTransaction,
                        serializedContextFreeData: compressedSerializedContextFreeData
                    })];
            });
        });
    };
    Api.prototype.generateTapos = function (info, transaction, blocksBehind, useLastIrreversible, expireSeconds) {
        return __awaiter(this, void 0, void 0, function () {
            var block, taposBlockNumber, refBlock, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!info) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rpc.get_info()];
                    case 1:
                        info = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!useLastIrreversible) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.tryRefBlockFromGetInfo(info)];
                    case 3:
                        block = _b.sent();
                        return [2 /*return*/, __assign(__assign({}, ser.transactionHeader(block, expireSeconds)), transaction)];
                    case 4:
                        taposBlockNumber = info.head_block_num - blocksBehind;
                        if (!(taposBlockNumber <= info.last_irreversible_block_num)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.tryGetBlockInfo(taposBlockNumber)];
                    case 5:
                        _a = _b.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.tryGetBlockHeaderState(taposBlockNumber)];
                    case 7:
                        _a = _b.sent();
                        _b.label = 8;
                    case 8:
                        refBlock = _a;
                        return [2 /*return*/, __assign(__assign({}, ser.transactionHeader(refBlock, expireSeconds)), transaction)];
                }
            });
        });
    };
    // eventually break out into TransactionValidator class
    Api.prototype.hasRequiredTaposFields = function (_a) {
        var expiration = _a.expiration, ref_block_num = _a.ref_block_num, ref_block_prefix = _a.ref_block_prefix;
        return !!(expiration && typeof (ref_block_num) === 'number' && typeof (ref_block_prefix) === 'number');
    };
    Api.prototype.tryGetBlockHeaderState = function (taposBlockNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.rpc.get_block_header_state(taposBlockNumber)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.tryGetBlockInfo(taposBlockNumber)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.tryGetBlockInfo = function (blockNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.rpc.get_block_info(blockNumber)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        return [4 /*yield*/, this.rpc.get_block(blockNumber)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.tryRefBlockFromGetInfo = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var block;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(info.hasOwnProperty('last_irreversible_block_id') &&
                            info.hasOwnProperty('last_irreversible_block_num') &&
                            info.hasOwnProperty('last_irreversible_block_time'))) return [3 /*break*/, 1];
                        return [2 /*return*/, {
                                block_num: info.last_irreversible_block_num,
                                id: info.last_irreversible_block_id,
                                timestamp: info.last_irreversible_block_time,
                            }];
                    case 1: return [4 /*yield*/, this.tryGetBlockInfo(info.last_irreversible_block_num)];
                    case 2:
                        block = _a.sent();
                        return [2 /*return*/, {
                                block_num: block.block_num,
                                id: block.id,
                                timestamp: block.timestamp,
                            }];
                }
            });
        });
    };
    Api.prototype.with = function (accountName) {
        return new ActionBuilder(this, accountName);
    };
    Api.prototype.buildTransaction = function (cb) {
        var tx = new TransactionBuilder(this);
        if (cb) {
            return cb(tx);
        }
        return tx;
    };
    return Api;
}()); // Api
exports.Api = Api;
var TransactionBuilder = /** @class */ (function () {
    function TransactionBuilder(api) {
        this.actions = [];
        this.contextFreeGroups = [];
        this.api = api;
    }
    TransactionBuilder.prototype.with = function (accountName) {
        var actionBuilder = new ActionBuilder(this.api, accountName);
        this.actions.push(actionBuilder);
        return actionBuilder;
    };
    TransactionBuilder.prototype.associateContextFree = function (contextFreeGroup) {
        this.contextFreeGroups.push(contextFreeGroup);
        return this;
    };
    TransactionBuilder.prototype.send = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var contextFreeDataSet, contextFreeActions, actions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contextFreeDataSet = [];
                        contextFreeActions = [];
                        actions = this.actions.map(function (actionBuilder) { return actionBuilder.serializedData; });
                        return [4 /*yield*/, Promise.all(this.contextFreeGroups.map(function (contextFreeCallback) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, action, contextFreeAction, contextFreeData;
                                return __generator(this, function (_b) {
                                    _a = contextFreeCallback({
                                        cfd: contextFreeDataSet.length,
                                        cfa: contextFreeActions.length
                                    }), action = _a.action, contextFreeAction = _a.contextFreeAction, contextFreeData = _a.contextFreeData;
                                    if (action) {
                                        actions.push(action);
                                    }
                                    if (contextFreeAction) {
                                        contextFreeActions.push(contextFreeAction);
                                    }
                                    if (contextFreeData) {
                                        contextFreeDataSet.push(contextFreeData);
                                    }
                                    return [2 /*return*/];
                                });
                            }); }))];
                    case 1:
                        _a.sent();
                        this.contextFreeGroups = [];
                        this.actions = [];
                        return [4 /*yield*/, this.api.transact({
                                context_free_data: contextFreeDataSet,
                                context_free_actions: contextFreeActions,
                                actions: actions
                            }, config)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TransactionBuilder;
}());
exports.TransactionBuilder = TransactionBuilder;
var ActionBuilder = /** @class */ (function () {
    function ActionBuilder(api, accountName) {
        this.api = api;
        this.accountName = accountName;
    }
    ActionBuilder.prototype.as = function (actorName) {
        if (actorName === void 0) { actorName = []; }
        var authorization = [];
        if (actorName && typeof actorName === 'string') {
            authorization = [{ actor: actorName, permission: 'active' }];
        }
        else {
            authorization = actorName;
        }
        return new ActionSerializer(this, this.api, this.accountName, authorization);
    };
    return ActionBuilder;
}());
exports.ActionBuilder = ActionBuilder;
var ActionSerializer = /** @class */ (function () {
    function ActionSerializer(parent, api, accountName, authorization) {
        var e_4, _a;
        var _this = this;
        var jsonAbi = api.cachedAbis.get(accountName);
        if (!jsonAbi) {
            throw new Error('ABI must be cached before using ActionBuilder, run api.getAbi()');
        }
        var types = ser.getTypesFromAbi(ser.createInitialTypes(), jsonAbi.abi);
        var actions = new Map();
        try {
            for (var _b = __values(jsonAbi.abi.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = _c.value, name_2 = _d.name, type = _d.type;
                actions.set(name_2, ser.getType(types, type));
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        actions.forEach(function (type, name) {
            var _a;
            Object.assign(_this, (_a = {},
                _a[name] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var data = {};
                    args.forEach(function (arg, index) {
                        var field = type.fields[index];
                        data[field.name] = arg;
                    });
                    var serializedData = ser.serializeAction({ types: types, actions: actions }, accountName, name, authorization, data, api.textEncoder, api.textDecoder);
                    parent.serializedData = serializedData;
                    return serializedData;
                },
                _a));
        });
    }
    return ActionSerializer;
}());


/***/ }),

/***/ "./src/eosjs-numeric.ts":
/*!******************************!*\
  !*** ./src/eosjs-numeric.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.signatureToString = exports.stringToSignature = exports.privateKeyToString = exports.privateKeyToLegacyString = exports.stringToPrivateKey = exports.convertLegacyPublicKeys = exports.convertLegacyPublicKey = exports.publicKeyToString = exports.publicKeyToLegacyString = exports.stringToPublicKey = exports.signatureDataSize = exports.privateKeyDataSize = exports.publicKeyDataSize = exports.KeyType = exports.base64ToBinary = exports.binaryToBase58 = exports.base58ToBinary = exports.signedBinaryToDecimal = exports.binaryToDecimal = exports.signedDecimalToBinary = exports.decimalToBinary = exports.negate = exports.isNegative = void 0;
/**
 * @module Numeric
 */
var hash_js_1 = __webpack_require__(/*! hash.js */ "./node_modules/hash.js/lib/hash.js");
// copyright defined in eosjs/LICENSE.txt
var ripemd160 = __webpack_require__(/*! ./ripemd */ "./src/ripemd.js").RIPEMD160.hash;
var base58Chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
var base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var create_base58_map = function () {
    var base58M = Array(256).fill(-1);
    for (var i = 0; i < base58Chars.length; ++i) {
        base58M[base58Chars.charCodeAt(i)] = i;
    }
    return base58M;
};
var base58Map = create_base58_map();
var create_base64_map = function () {
    var base64M = Array(256).fill(-1);
    for (var i = 0; i < base64Chars.length; ++i) {
        base64M[base64Chars.charCodeAt(i)] = i;
    }
    base64M['='.charCodeAt(0)] = 0;
    return base64M;
};
var base64Map = create_base64_map();
/** Is `bignum` a negative number? */
var isNegative = function (bignum) {
    return (bignum[bignum.length - 1] & 0x80) !== 0;
};
exports.isNegative = isNegative;
/** Negate `bignum` */
var negate = function (bignum) {
    var carry = 1;
    for (var i = 0; i < bignum.length; ++i) {
        var x = (~bignum[i] & 0xff) + carry;
        bignum[i] = x;
        carry = x >> 8;
    }
};
exports.negate = negate;
/**
 * Convert an unsigned decimal number in `s` to a bignum
 *
 * @param size bignum size (bytes)
 */
var decimalToBinary = function (size, s) {
    var result = new Uint8Array(size);
    for (var i = 0; i < s.length; ++i) {
        var srcDigit = s.charCodeAt(i);
        if (srcDigit < '0'.charCodeAt(0) || srcDigit > '9'.charCodeAt(0)) {
            throw new Error('invalid number');
        }
        var carry = srcDigit - '0'.charCodeAt(0);
        for (var j = 0; j < size; ++j) {
            var x = result[j] * 10 + carry;
            result[j] = x;
            carry = x >> 8;
        }
        if (carry) {
            throw new Error('number is out of range');
        }
    }
    return result;
};
exports.decimalToBinary = decimalToBinary;
/**
 * Convert a signed decimal number in `s` to a bignum
 *
 * @param size bignum size (bytes)
 */
var signedDecimalToBinary = function (size, s) {
    var negative = s[0] === '-';
    if (negative) {
        s = s.substr(1);
    }
    var result = exports.decimalToBinary(size, s);
    if (negative) {
        exports.negate(result);
        if (!exports.isNegative(result)) {
            throw new Error('number is out of range');
        }
    }
    else if (exports.isNegative(result)) {
        throw new Error('number is out of range');
    }
    return result;
};
exports.signedDecimalToBinary = signedDecimalToBinary;
/**
 * Convert `bignum` to an unsigned decimal number
 *
 * @param minDigits 0-pad result to this many digits
 */
var binaryToDecimal = function (bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    var result = Array(minDigits).fill('0'.charCodeAt(0));
    for (var i = bignum.length - 1; i >= 0; --i) {
        var carry = bignum[i];
        for (var j = 0; j < result.length; ++j) {
            var x = ((result[j] - '0'.charCodeAt(0)) << 8) + carry;
            result[j] = '0'.charCodeAt(0) + x % 10;
            carry = (x / 10) | 0;
        }
        while (carry) {
            result.push('0'.charCodeAt(0) + carry % 10);
            carry = (carry / 10) | 0;
        }
    }
    result.reverse();
    return String.fromCharCode.apply(String, __spreadArray([], __read(result)));
};
exports.binaryToDecimal = binaryToDecimal;
/**
 * Convert `bignum` to a signed decimal number
 *
 * @param minDigits 0-pad result to this many digits
 */
var signedBinaryToDecimal = function (bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    if (exports.isNegative(bignum)) {
        var x = bignum.slice();
        exports.negate(x);
        return '-' + exports.binaryToDecimal(x, minDigits);
    }
    return exports.binaryToDecimal(bignum, minDigits);
};
exports.signedBinaryToDecimal = signedBinaryToDecimal;
var base58ToBinaryVarSize = function (s) {
    var e_1, _a;
    var result = [];
    for (var i = 0; i < s.length; ++i) {
        var carry = base58Map[s.charCodeAt(i)];
        if (carry < 0) {
            throw new Error('invalid base-58 value');
        }
        for (var j = 0; j < result.length; ++j) {
            var x = result[j] * 58 + carry;
            result[j] = x & 0xff;
            carry = x >> 8;
        }
        if (carry) {
            result.push(carry);
        }
    }
    try {
        for (var s_1 = __values(s), s_1_1 = s_1.next(); !s_1_1.done; s_1_1 = s_1.next()) {
            var ch = s_1_1.value;
            if (ch === '1') {
                result.push(0);
            }
            else {
                break;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (s_1_1 && !s_1_1.done && (_a = s_1.return)) _a.call(s_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    result.reverse();
    return new Uint8Array(result);
};
/**
 * Convert an unsigned base-58 number in `s` to a bignum
 *
 * @param size bignum size (bytes)
 */
var base58ToBinary = function (size, s) {
    if (!size) {
        return base58ToBinaryVarSize(s);
    }
    var result = new Uint8Array(size);
    for (var i = 0; i < s.length; ++i) {
        var carry = base58Map[s.charCodeAt(i)];
        if (carry < 0) {
            throw new Error('invalid base-58 value');
        }
        for (var j = 0; j < size; ++j) {
            var x = result[j] * 58 + carry;
            result[j] = x;
            carry = x >> 8;
        }
        if (carry) {
            throw new Error('base-58 value is out of range');
        }
    }
    result.reverse();
    return result;
};
exports.base58ToBinary = base58ToBinary;
/**
 * Convert `bignum` to a base-58 number
 *
 * @param minDigits 0-pad result to this many digits
 */
var binaryToBase58 = function (bignum, minDigits) {
    var e_2, _a, e_3, _b;
    if (minDigits === void 0) { minDigits = 1; }
    var result = [];
    try {
        for (var bignum_1 = __values(bignum), bignum_1_1 = bignum_1.next(); !bignum_1_1.done; bignum_1_1 = bignum_1.next()) {
            var byte = bignum_1_1.value;
            var carry = byte;
            for (var j = 0; j < result.length; ++j) {
                var x = (base58Map[result[j]] << 8) + carry;
                result[j] = base58Chars.charCodeAt(x % 58);
                carry = (x / 58) | 0;
            }
            while (carry) {
                result.push(base58Chars.charCodeAt(carry % 58));
                carry = (carry / 58) | 0;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (bignum_1_1 && !bignum_1_1.done && (_a = bignum_1.return)) _a.call(bignum_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    try {
        for (var bignum_2 = __values(bignum), bignum_2_1 = bignum_2.next(); !bignum_2_1.done; bignum_2_1 = bignum_2.next()) {
            var byte = bignum_2_1.value;
            if (byte) {
                break;
            }
            else {
                result.push('1'.charCodeAt(0));
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (bignum_2_1 && !bignum_2_1.done && (_b = bignum_2.return)) _b.call(bignum_2);
        }
        finally { if (e_3) throw e_3.error; }
    }
    result.reverse();
    return String.fromCharCode.apply(String, __spreadArray([], __read(result)));
};
exports.binaryToBase58 = binaryToBase58;
/** Convert an unsigned base-64 number in `s` to a bignum */
var base64ToBinary = function (s) {
    var len = s.length;
    if ((len & 3) === 1 && s[len - 1] === '=') {
        len -= 1;
    } // fc appends an extra '='
    if ((len & 3) !== 0) {
        throw new Error('base-64 value is not padded correctly');
    }
    var groups = len >> 2;
    var bytes = groups * 3;
    if (len > 0 && s[len - 1] === '=') {
        if (s[len - 2] === '=') {
            bytes -= 2;
        }
        else {
            bytes -= 1;
        }
    }
    var result = new Uint8Array(bytes);
    for (var group = 0; group < groups; ++group) {
        var digit0 = base64Map[s.charCodeAt(group * 4 + 0)];
        var digit1 = base64Map[s.charCodeAt(group * 4 + 1)];
        var digit2 = base64Map[s.charCodeAt(group * 4 + 2)];
        var digit3 = base64Map[s.charCodeAt(group * 4 + 3)];
        result[group * 3 + 0] = (digit0 << 2) | (digit1 >> 4);
        if (group * 3 + 1 < bytes) {
            result[group * 3 + 1] = ((digit1 & 15) << 4) | (digit2 >> 2);
        }
        if (group * 3 + 2 < bytes) {
            result[group * 3 + 2] = ((digit2 & 3) << 6) | digit3;
        }
    }
    return result;
};
exports.base64ToBinary = base64ToBinary;
/** Key types this library supports */
var KeyType;
(function (KeyType) {
    KeyType[KeyType["k1"] = 0] = "k1";
    KeyType[KeyType["r1"] = 1] = "r1";
    KeyType[KeyType["wa"] = 2] = "wa";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
/** Public key data size, excluding type field */
exports.publicKeyDataSize = 33;
/** Private key data size, excluding type field */
exports.privateKeyDataSize = 32;
/** Signature data size, excluding type field */
exports.signatureDataSize = 65;
var digestSuffixRipemd160 = function (data, suffix) {
    var d = new Uint8Array(data.length + suffix.length);
    for (var i = 0; i < data.length; ++i) {
        d[i] = data[i];
    }
    for (var i = 0; i < suffix.length; ++i) {
        d[data.length + i] = suffix.charCodeAt(i);
    }
    return ripemd160(d);
};
var stringToKey = function (s, type, size, suffix) {
    var whole = exports.base58ToBinary(size ? size + 4 : 0, s);
    var result = { type: type, data: new Uint8Array(whole.buffer, 0, whole.length - 4) };
    var digest = new Uint8Array(digestSuffixRipemd160(result.data, suffix));
    if (digest[0] !== whole[whole.length - 4] || digest[1] !== whole[whole.length - 3]
        || digest[2] !== whole[whole.length - 2] || digest[3] !== whole[whole.length - 1]) {
        throw new Error('checksum doesn\'t match');
    }
    return result;
};
var keyToString = function (key, suffix, prefix) {
    var digest = new Uint8Array(digestSuffixRipemd160(key.data, suffix));
    var whole = new Uint8Array(key.data.length + 4);
    for (var i = 0; i < key.data.length; ++i) {
        whole[i] = key.data[i];
    }
    for (var i = 0; i < 4; ++i) {
        whole[i + key.data.length] = digest[i];
    }
    return prefix + exports.binaryToBase58(whole);
};
/** Convert key in `s` to binary form */
var stringToPublicKey = function (s) {
    if (typeof s !== 'string') {
        throw new Error('expected string containing public key');
    }
    if (s.substr(0, 3) === 'EOS') {
        var whole = exports.base58ToBinary(exports.publicKeyDataSize + 4, s.substr(3));
        var key = { type: KeyType.k1, data: new Uint8Array(exports.publicKeyDataSize) };
        for (var i = 0; i < exports.publicKeyDataSize; ++i) {
            key.data[i] = whole[i];
        }
        var digest = new Uint8Array(ripemd160(key.data));
        if (digest[0] !== whole[exports.publicKeyDataSize] || digest[1] !== whole[34]
            || digest[2] !== whole[35] || digest[3] !== whole[36]) {
            throw new Error('checksum doesn\'t match');
        }
        return key;
    }
    else if (s.substr(0, 7) === 'PUB_K1_') {
        return stringToKey(s.substr(7), KeyType.k1, exports.publicKeyDataSize, 'K1');
    }
    else if (s.substr(0, 7) === 'PUB_R1_') {
        return stringToKey(s.substr(7), KeyType.r1, exports.publicKeyDataSize, 'R1');
    }
    else if (s.substr(0, 7) === 'PUB_WA_') {
        return stringToKey(s.substr(7), KeyType.wa, 0, 'WA');
    }
    else {
        throw new Error('unrecognized public key format');
    }
};
exports.stringToPublicKey = stringToPublicKey;
/** Convert public `key` to legacy string (base-58) form */
var publicKeyToLegacyString = function (key) {
    if (key.type === KeyType.k1 && key.data.length === exports.publicKeyDataSize) {
        return keyToString(key, '', 'EOS');
    }
    else if (key.type === KeyType.r1 || key.type === KeyType.wa) {
        throw new Error('Key format not supported in legacy conversion');
    }
    else {
        throw new Error('unrecognized public key format');
    }
};
exports.publicKeyToLegacyString = publicKeyToLegacyString;
/** Convert `key` to string (base-58) form */
var publicKeyToString = function (key) {
    if (key.type === KeyType.k1 && key.data.length === exports.publicKeyDataSize) {
        return keyToString(key, 'K1', 'PUB_K1_');
    }
    else if (key.type === KeyType.r1 && key.data.length === exports.publicKeyDataSize) {
        return keyToString(key, 'R1', 'PUB_R1_');
    }
    else if (key.type === KeyType.wa) {
        return keyToString(key, 'WA', 'PUB_WA_');
    }
    else {
        throw new Error('unrecognized public key format');
    }
};
exports.publicKeyToString = publicKeyToString;
/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
 * Leaves other formats untouched
 */
var convertLegacyPublicKey = function (s) {
    if (s.substr(0, 3) === 'EOS') {
        return exports.publicKeyToString(exports.stringToPublicKey(s));
    }
    return s;
};
exports.convertLegacyPublicKey = convertLegacyPublicKey;
/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
 * Leaves other formats untouched
 */
var convertLegacyPublicKeys = function (keys) {
    return keys.map(exports.convertLegacyPublicKey);
};
exports.convertLegacyPublicKeys = convertLegacyPublicKeys;
/** Convert key in `s` to binary form */
var stringToPrivateKey = function (s) {
    if (typeof s !== 'string') {
        throw new Error('expected string containing private key');
    }
    if (s.substr(0, 7) === 'PVT_R1_') {
        return stringToKey(s.substr(7), KeyType.r1, exports.privateKeyDataSize, 'R1');
    }
    else if (s.substr(0, 7) === 'PVT_K1_') {
        return stringToKey(s.substr(7), KeyType.k1, exports.privateKeyDataSize, 'K1');
    }
    else {
        // todo: Verify checksum: sha256(sha256(key.data)).
        //       Not critical since a bad key will fail to produce a
        //       valid signature anyway.
        var whole = exports.base58ToBinary(exports.privateKeyDataSize + 5, s);
        var key = { type: KeyType.k1, data: new Uint8Array(exports.privateKeyDataSize) };
        if (whole[0] !== 0x80) {
            throw new Error('unrecognized private key type');
        }
        for (var i = 0; i < exports.privateKeyDataSize; ++i) {
            key.data[i] = whole[i + 1];
        }
        return key;
    }
};
exports.stringToPrivateKey = stringToPrivateKey;
/** Convert private `key` to legacy string (base-58) form */
var privateKeyToLegacyString = function (key) {
    if (key.type === KeyType.k1 && key.data.length === exports.privateKeyDataSize) {
        var whole_1 = [];
        whole_1.push(128);
        key.data.forEach(function (byte) { return whole_1.push(byte); });
        var digest = new Uint8Array(hash_js_1.sha256().update(hash_js_1.sha256().update(whole_1).digest()).digest());
        var result = new Uint8Array(exports.privateKeyDataSize + 5);
        for (var i = 0; i < whole_1.length; i++) {
            result[i] = whole_1[i];
        }
        for (var i = 0; i < 4; i++) {
            result[i + whole_1.length] = digest[i];
        }
        return exports.binaryToBase58(result);
    }
    else if (key.type === KeyType.r1 || key.type === KeyType.wa) {
        throw new Error('Key format not supported in legacy conversion');
    }
    else {
        throw new Error('unrecognized public key format');
    }
};
exports.privateKeyToLegacyString = privateKeyToLegacyString;
/** Convert `key` to string (base-58) form */
var privateKeyToString = function (key) {
    if (key.type === KeyType.r1) {
        return keyToString(key, 'R1', 'PVT_R1_');
    }
    else if (key.type === KeyType.k1) {
        return keyToString(key, 'K1', 'PVT_K1_');
    }
    else {
        throw new Error('unrecognized private key format');
    }
};
exports.privateKeyToString = privateKeyToString;
/** Convert key in `s` to binary form */
var stringToSignature = function (s) {
    if (typeof s !== 'string') {
        throw new Error('expected string containing signature');
    }
    if (s.substr(0, 7) === 'SIG_K1_') {
        return stringToKey(s.substr(7), KeyType.k1, exports.signatureDataSize, 'K1');
    }
    else if (s.substr(0, 7) === 'SIG_R1_') {
        return stringToKey(s.substr(7), KeyType.r1, exports.signatureDataSize, 'R1');
    }
    else if (s.substr(0, 7) === 'SIG_WA_') {
        return stringToKey(s.substr(7), KeyType.wa, 0, 'WA');
    }
    else {
        throw new Error('unrecognized signature format');
    }
};
exports.stringToSignature = stringToSignature;
/** Convert `signature` to string (base-58) form */
var signatureToString = function (signature) {
    if (signature.type === KeyType.k1) {
        return keyToString(signature, 'K1', 'SIG_K1_');
    }
    else if (signature.type === KeyType.r1) {
        return keyToString(signature, 'R1', 'SIG_R1_');
    }
    else if (signature.type === KeyType.wa) {
        return keyToString(signature, 'WA', 'SIG_WA_');
    }
    else {
        throw new Error('unrecognized signature format');
    }
};
exports.signatureToString = signatureToString;


/***/ }),

/***/ "./src/eosjs-serialize.ts":
/*!********************************!*\
  !*** ./src/eosjs-serialize.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @module Serialize
 */
// copyright defined in eosjs/LICENSE.txt
/* eslint-disable max-classes-per-file */
/* eslint-disable jsdoc/check-indentation */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serializeQuery = exports.deserializeAnyArray = exports.serializeAnyArray = exports.deserializeAnyObject = exports.serializeAnyObject = exports.deserializeAnyvarShort = exports.deserializeAnyvar = exports.serializeAnyvar = exports.deserializeAction = exports.deserializeActionData = exports.serializeAction = exports.serializeActionData = exports.transactionHeader = exports.getTypesFromAbi = exports.getType = exports.createTransactionTypes = exports.createTransactionExtensionTypes = exports.createAbiTypes = exports.createInitialTypes = exports.hexToUint8Array = exports.arrayToHex = exports.symbolToString = exports.stringToSymbol = exports.blockTimestampToDate = exports.dateToBlockTimestamp = exports.timePointSecToDate = exports.dateToTimePointSec = exports.timePointToDate = exports.dateToTimePoint = exports.supportedAbiVersion = exports.SerialBuffer = exports.SerializerState = void 0;
var numeric = __webpack_require__(/*! ./eosjs-numeric */ "./src/eosjs-numeric.ts");
/** State for serialize() and deserialize() */
var SerializerState = /** @class */ (function () {
    function SerializerState(options) {
        if (options === void 0) { options = {}; }
        /** Have any binary extensions been skipped? */
        this.skippedBinaryExtension = false;
        this.options = options;
    }
    return SerializerState;
}());
exports.SerializerState = SerializerState;
/** Serialize and deserialize data */
var SerialBuffer = /** @class */ (function () {
    /**
     * @param __namedParameters
     * `array`: `null` if serializing, or binary data to deserialize
     * `textEncoder`: `TextEncoder` instance to use. Pass in `null` if running in a browser
     * `textDecoder`: `TextDecider` instance to use. Pass in `null` if running in a browser
     */
    function SerialBuffer(_a) {
        var _b = _a === void 0 ? {} : _a, textEncoder = _b.textEncoder, textDecoder = _b.textDecoder, array = _b.array;
        /** Current position while reading (deserializing) */
        this.readPos = 0;
        this.array = array || new Uint8Array(1024);
        this.length = array ? array.length : 0;
        this.textEncoder = textEncoder || new TextEncoder();
        this.textDecoder = textDecoder || new TextDecoder('utf-8', { fatal: true });
    }
    /** Resize `array` if needed to have at least `size` bytes free */
    SerialBuffer.prototype.reserve = function (size) {
        if (this.length + size <= this.array.length) {
            return;
        }
        var l = this.array.length;
        while (this.length + size > l) {
            l = Math.ceil(l * 1.5);
        }
        var newArray = new Uint8Array(l);
        newArray.set(this.array);
        this.array = newArray;
    };
    /** Is there data available to read? */
    SerialBuffer.prototype.haveReadData = function () {
        return this.readPos < this.length;
    };
    /** Restart reading from the beginning */
    SerialBuffer.prototype.restartRead = function () {
        this.readPos = 0;
    };
    /** Return data with excess storage trimmed away */
    SerialBuffer.prototype.asUint8Array = function () {
        return new Uint8Array(this.array.buffer, this.array.byteOffset, this.length);
    };
    /** Append bytes */
    SerialBuffer.prototype.pushArray = function (v) {
        this.reserve(v.length);
        this.array.set(v, this.length);
        this.length += v.length;
    };
    /** Append bytes */
    SerialBuffer.prototype.push = function () {
        var v = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            v[_i] = arguments[_i];
        }
        this.pushArray(v);
    };
    /** Get a single byte */
    SerialBuffer.prototype.get = function () {
        if (this.readPos < this.length) {
            return this.array[this.readPos++];
        }
        throw new Error('Read past end of buffer');
    };
    /** Append bytes in `v`. Throws if `len` doesn't match `v.length` */
    SerialBuffer.prototype.pushUint8ArrayChecked = function (v, len) {
        if (v.length !== len) {
            throw new Error('Binary data has incorrect size');
        }
        this.pushArray(v);
    };
    /** Get `len` bytes */
    SerialBuffer.prototype.getUint8Array = function (len) {
        if (this.readPos + len > this.length) {
            throw new Error('Read past end of buffer');
        }
        var result = new Uint8Array(this.array.buffer, this.array.byteOffset + this.readPos, len);
        this.readPos += len;
        return result;
    };
    /** Skip `len` bytes */
    SerialBuffer.prototype.skip = function (len) {
        if (this.readPos + len > this.length) {
            throw new Error('Read past end of buffer');
        }
        this.readPos += len;
    };
    /** Append a `uint16` */
    SerialBuffer.prototype.pushUint16 = function (v) {
        this.push((v >> 0) & 0xff, (v >> 8) & 0xff);
    };
    /** Get a `uint16` */
    SerialBuffer.prototype.getUint16 = function () {
        var v = 0;
        v |= this.get() << 0;
        v |= this.get() << 8;
        return v;
    };
    /** Append a `uint32` */
    SerialBuffer.prototype.pushUint32 = function (v) {
        this.push((v >> 0) & 0xff, (v >> 8) & 0xff, (v >> 16) & 0xff, (v >> 24) & 0xff);
    };
    /** Get a `uint32` */
    SerialBuffer.prototype.getUint32 = function () {
        var v = 0;
        v |= this.get() << 0;
        v |= this.get() << 8;
        v |= this.get() << 16;
        v |= this.get() << 24;
        return v >>> 0;
    };
    /** Append a `uint64`. *Caution*: `number` only has 53 bits of precision */
    SerialBuffer.prototype.pushNumberAsUint64 = function (v) {
        this.pushUint32(v >>> 0);
        this.pushUint32(Math.floor(v / 4294967296) >>> 0);
    };
    /**
     * Get a `uint64` as a `number`. *Caution*: `number` only has 53 bits of precision; some values will change.
     * `numeric.binaryToDecimal(serialBuffer.getUint8Array(8))` recommended instead
     */
    SerialBuffer.prototype.getUint64AsNumber = function () {
        var low = this.getUint32();
        var high = this.getUint32();
        return (high >>> 0) * 4294967296 + (low >>> 0);
    };
    /** Append a `varuint32` */
    SerialBuffer.prototype.pushVaruint32 = function (v) {
        while (true) {
            if (v >>> 7) {
                this.push(0x80 | (v & 0x7f));
                v = v >>> 7;
            }
            else {
                this.push(v);
                break;
            }
        }
    };
    /** Get a `varuint32` */
    SerialBuffer.prototype.getVaruint32 = function () {
        var v = 0;
        var bit = 0;
        while (true) {
            var b = this.get();
            v |= (b & 0x7f) << bit;
            bit += 7;
            if (!(b & 0x80)) {
                break;
            }
        }
        return v >>> 0;
    };
    /** Append a `varint32` */
    SerialBuffer.prototype.pushVarint32 = function (v) {
        this.pushVaruint32((v << 1) ^ (v >> 31));
    };
    /** Get a `varint32` */
    SerialBuffer.prototype.getVarint32 = function () {
        var v = this.getVaruint32();
        if (v & 1) {
            return ((~v) >> 1) | 2147483648;
        }
        else {
            return v >>> 1;
        }
    };
    /** Append a `float32` */
    SerialBuffer.prototype.pushFloat32 = function (v) {
        this.pushArray(new Uint8Array((new Float32Array([v])).buffer));
    };
    /** Get a `float32` */
    SerialBuffer.prototype.getFloat32 = function () {
        return new Float32Array(this.getUint8Array(4).slice().buffer)[0];
    };
    /** Append a `float64` */
    SerialBuffer.prototype.pushFloat64 = function (v) {
        this.pushArray(new Uint8Array((new Float64Array([v])).buffer));
    };
    /** Get a `float64` */
    SerialBuffer.prototype.getFloat64 = function () {
        return new Float64Array(this.getUint8Array(8).slice().buffer)[0];
    };
    /** Append a `name` */
    SerialBuffer.prototype.pushName = function (s) {
        if (typeof s !== 'string') {
            throw new Error('Expected string containing name');
        }
        var regex = new RegExp(/^[.1-5a-z]{0,12}[.1-5a-j]?$/);
        if (!regex.test(s)) {
            throw new Error('Name should be less than 13 characters, or less than 14 if last character is between 1-5 or a-j, and only contain the following symbols .12345abcdefghijklmnopqrstuvwxyz'); // eslint-disable-line
        }
        var charToSymbol = function (c) {
            if (c >= 'a'.charCodeAt(0) && c <= 'z'.charCodeAt(0)) {
                return (c - 'a'.charCodeAt(0)) + 6;
            }
            if (c >= '1'.charCodeAt(0) && c <= '5'.charCodeAt(0)) {
                return (c - '1'.charCodeAt(0)) + 1;
            }
            return 0;
        };
        var a = new Uint8Array(8);
        var bit = 63;
        for (var i = 0; i < s.length; ++i) {
            var c = charToSymbol(s.charCodeAt(i));
            if (bit < 5) {
                c = c << 1;
            }
            for (var j = 4; j >= 0; --j) {
                if (bit >= 0) {
                    a[Math.floor(bit / 8)] |= ((c >> j) & 1) << (bit % 8);
                    --bit;
                }
            }
        }
        this.pushArray(a);
    };
    /** Get a `name` */
    SerialBuffer.prototype.getName = function () {
        var a = this.getUint8Array(8);
        var result = '';
        for (var bit = 63; bit >= 0;) {
            var c = 0;
            for (var i = 0; i < 5; ++i) {
                if (bit >= 0) {
                    c = (c << 1) | ((a[Math.floor(bit / 8)] >> (bit % 8)) & 1);
                    --bit;
                }
            }
            if (c >= 6) {
                result += String.fromCharCode(c + 'a'.charCodeAt(0) - 6);
            }
            else if (c >= 1) {
                result += String.fromCharCode(c + '1'.charCodeAt(0) - 1);
            }
            else {
                result += '.';
            }
        }
        while (result.endsWith('.')) {
            result = result.substr(0, result.length - 1);
        }
        return result;
    };
    /** Append length-prefixed binary data */
    SerialBuffer.prototype.pushBytes = function (v) {
        this.pushVaruint32(v.length);
        this.pushArray(v);
    };
    /** Get length-prefixed binary data */
    SerialBuffer.prototype.getBytes = function () {
        return this.getUint8Array(this.getVaruint32());
    };
    /** Append a string */
    SerialBuffer.prototype.pushString = function (v) {
        this.pushBytes(this.textEncoder.encode(v));
    };
    /** Get a string */
    SerialBuffer.prototype.getString = function () {
        return this.textDecoder.decode(this.getBytes());
    };
    /** Append a `symbol_code`. Unlike `symbol`, `symbol_code` doesn't include a precision. */
    SerialBuffer.prototype.pushSymbolCode = function (name) {
        if (typeof name !== 'string') {
            throw new Error('Expected string containing symbol_code');
        }
        var a = [];
        a.push.apply(a, __spreadArray([], __read(this.textEncoder.encode(name))));
        while (a.length < 8) {
            a.push(0);
        }
        this.pushArray(a.slice(0, 8));
    };
    /** Get a `symbol_code`. Unlike `symbol`, `symbol_code` doesn't include a precision. */
    SerialBuffer.prototype.getSymbolCode = function () {
        var a = this.getUint8Array(8);
        var len;
        for (len = 0; len < a.length; ++len) {
            if (!a[len]) {
                break;
            }
        }
        var name = this.textDecoder.decode(new Uint8Array(a.buffer, a.byteOffset, len));
        return name;
    };
    /** Append a `symbol` */
    SerialBuffer.prototype.pushSymbol = function (_a) {
        var name = _a.name, precision = _a.precision;
        if (!/^[A-Z]{1,7}$/.test(name)) {
            throw new Error('Expected symbol to be A-Z and between one and seven characters');
        }
        var a = [precision & 0xff];
        a.push.apply(a, __spreadArray([], __read(this.textEncoder.encode(name))));
        while (a.length < 8) {
            a.push(0);
        }
        this.pushArray(a.slice(0, 8));
    };
    /** Get a `symbol` */
    SerialBuffer.prototype.getSymbol = function () {
        var precision = this.get();
        var a = this.getUint8Array(7);
        var len;
        for (len = 0; len < a.length; ++len) {
            if (!a[len]) {
                break;
            }
        }
        var name = this.textDecoder.decode(new Uint8Array(a.buffer, a.byteOffset, len));
        return { name: name, precision: precision };
    };
    /** Append an asset */
    SerialBuffer.prototype.pushAsset = function (s) {
        if (typeof s !== 'string') {
            throw new Error('Expected string containing asset');
        }
        s = s.trim();
        var pos = 0;
        var amount = '';
        var precision = 0;
        if (s[pos] === '-') {
            amount += '-';
            ++pos;
        }
        var foundDigit = false;
        while (pos < s.length && s.charCodeAt(pos) >= '0'.charCodeAt(0) && s.charCodeAt(pos) <= '9'.charCodeAt(0)) {
            foundDigit = true;
            amount += s[pos];
            ++pos;
        }
        if (!foundDigit) {
            throw new Error('Asset must begin with a number');
        }
        if (s[pos] === '.') {
            ++pos;
            while (pos < s.length && s.charCodeAt(pos) >= '0'.charCodeAt(0) && s.charCodeAt(pos) <= '9'.charCodeAt(0)) {
                amount += s[pos];
                ++precision;
                ++pos;
            }
        }
        var name = s.substr(pos).trim();
        this.pushArray(numeric.signedDecimalToBinary(8, amount));
        this.pushSymbol({ name: name, precision: precision });
    };
    /** Get an asset */
    SerialBuffer.prototype.getAsset = function () {
        var amount = this.getUint8Array(8);
        var _a = this.getSymbol(), name = _a.name, precision = _a.precision;
        var s = numeric.signedBinaryToDecimal(amount, precision + 1);
        if (precision) {
            s = s.substr(0, s.length - precision) + '.' + s.substr(s.length - precision);
        }
        return s + ' ' + name;
    };
    /** Append a public key */
    SerialBuffer.prototype.pushPublicKey = function (s) {
        var key = numeric.stringToPublicKey(s);
        this.push(key.type);
        this.pushArray(key.data);
    };
    /** Get a public key */
    SerialBuffer.prototype.getPublicKey = function () {
        var type = this.get();
        var data;
        if (type === numeric.KeyType.wa) {
            var begin = this.readPos;
            this.skip(34);
            this.skip(this.getVaruint32());
            data = new Uint8Array(this.array.buffer, this.array.byteOffset + begin, this.readPos - begin);
        }
        else {
            data = this.getUint8Array(numeric.publicKeyDataSize);
        }
        return numeric.publicKeyToString({ type: type, data: data });
    };
    /** Append a private key */
    SerialBuffer.prototype.pushPrivateKey = function (s) {
        var key = numeric.stringToPrivateKey(s);
        this.push(key.type);
        this.pushArray(key.data);
    };
    /** Get a private key */
    SerialBuffer.prototype.getPrivateKey = function () {
        var type = this.get();
        var data = this.getUint8Array(numeric.privateKeyDataSize);
        return numeric.privateKeyToString({ type: type, data: data });
    };
    /** Append a signature */
    SerialBuffer.prototype.pushSignature = function (s) {
        var key = numeric.stringToSignature(s);
        this.push(key.type);
        this.pushArray(key.data);
    };
    /** Get a signature */
    SerialBuffer.prototype.getSignature = function () {
        var type = this.get();
        var data;
        if (type === numeric.KeyType.wa) {
            var begin = this.readPos;
            this.skip(65);
            this.skip(this.getVaruint32());
            this.skip(this.getVaruint32());
            data = new Uint8Array(this.array.buffer, this.array.byteOffset + begin, this.readPos - begin);
        }
        else {
            data = this.getUint8Array(numeric.signatureDataSize);
        }
        return numeric.signatureToString({ type: type, data: data });
    };
    return SerialBuffer;
}()); // SerialBuffer
exports.SerialBuffer = SerialBuffer;
/** Is this a supported ABI version? */
var supportedAbiVersion = function (version) {
    return version.startsWith('eosio::abi/1.');
};
exports.supportedAbiVersion = supportedAbiVersion;
var checkDateParse = function (date) {
    var result = Date.parse(date);
    if (Number.isNaN(result)) {
        throw new Error('Invalid time format');
    }
    return result;
};
/** Convert date in ISO format to `time_point` (miliseconds since epoch) */
var dateToTimePoint = function (date) {
    return Math.round(checkDateParse(date + 'Z') * 1000);
};
exports.dateToTimePoint = dateToTimePoint;
/** Convert `time_point` (miliseconds since epoch) to date in ISO format */
var timePointToDate = function (us) {
    var s = (new Date(us / 1000)).toISOString();
    return s.substr(0, s.length - 1);
};
exports.timePointToDate = timePointToDate;
/** Convert date in ISO format to `time_point_sec` (seconds since epoch) */
var dateToTimePointSec = function (date) {
    return Math.round(checkDateParse(date + 'Z') / 1000);
};
exports.dateToTimePointSec = dateToTimePointSec;
/** Convert `time_point_sec` (seconds since epoch) to to date in ISO format */
var timePointSecToDate = function (sec) {
    var s = (new Date(sec * 1000)).toISOString();
    return s.substr(0, s.length - 1);
};
exports.timePointSecToDate = timePointSecToDate;
/** Convert date in ISO format to `block_timestamp_type` (half-seconds since a different epoch) */
var dateToBlockTimestamp = function (date) {
    return Math.round((checkDateParse(date + 'Z') - 946684800000) / 500);
};
exports.dateToBlockTimestamp = dateToBlockTimestamp;
/** Convert `block_timestamp_type` (half-seconds since a different epoch) to to date in ISO format */
var blockTimestampToDate = function (slot) {
    var s = (new Date(slot * 500 + 946684800000)).toISOString();
    return s.substr(0, s.length - 1);
};
exports.blockTimestampToDate = blockTimestampToDate;
/** Convert `string` to `Symbol`. format: `precision,NAME`. */
var stringToSymbol = function (s) {
    if (typeof s !== 'string') {
        throw new Error('Expected string containing symbol');
    }
    var m = s.match(/^([0-9]+),([A-Z]+)$/);
    if (!m) {
        throw new Error('Invalid symbol');
    }
    return { name: m[2], precision: +m[1] };
};
exports.stringToSymbol = stringToSymbol;
/** Convert `Symbol` to `string`. format: `precision,NAME`. */
var symbolToString = function (_a) {
    var name = _a.name, precision = _a.precision;
    return precision + ',' + name;
};
exports.symbolToString = symbolToString;
/** Convert binary data to hex */
var arrayToHex = function (data) {
    var e_1, _a;
    var result = '';
    try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
            var x = data_1_1.value;
            result += ('00' + x.toString(16)).slice(-2);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result.toUpperCase();
};
exports.arrayToHex = arrayToHex;
/** Convert hex to binary data */
var hexToUint8Array = function (hex) {
    if (typeof hex !== 'string') {
        throw new Error('Expected string containing hex digits');
    }
    if (hex.length % 2) {
        throw new Error('Odd number of hex digits');
    }
    var l = hex.length / 2;
    var result = new Uint8Array(l);
    for (var i = 0; i < l; ++i) {
        var x = parseInt(hex.substr(i * 2, 2), 16);
        if (Number.isNaN(x)) {
            throw new Error('Expected hex string');
        }
        result[i] = x;
    }
    return result;
};
exports.hexToUint8Array = hexToUint8Array;
function serializeUnknown(buffer, data) {
    throw new Error('Don\'t know how to serialize ' + this.name);
}
function deserializeUnknown(buffer) {
    throw new Error('Don\'t know how to deserialize ' + this.name);
}
function serializeStruct(buffer, data, state, allowExtensions) {
    var e_2, _a;
    if (state === void 0) { state = new SerializerState(); }
    if (allowExtensions === void 0) { allowExtensions = true; }
    if (typeof data !== 'object') {
        throw new Error('expected object containing data: ' + JSON.stringify(data));
    }
    if (this.base) {
        this.base.serialize(buffer, data, state, allowExtensions);
    }
    try {
        for (var _b = __values(this.fields), _c = _b.next(); !_c.done; _c = _b.next()) {
            var field = _c.value;
            if (field.name in data) {
                if (state.skippedBinaryExtension) {
                    throw new Error('unexpected ' + this.name + '.' + field.name);
                }
                field.type.serialize(buffer, data[field.name], state, allowExtensions && field === this.fields[this.fields.length - 1]);
            }
            else {
                if (allowExtensions && field.type.extensionOf) {
                    state.skippedBinaryExtension = true;
                }
                else {
                    throw new Error('missing ' + this.name + '.' + field.name + ' (type=' + field.type.name + ')');
                }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
}
function deserializeStruct(buffer, state, allowExtensions) {
    var e_3, _a;
    if (state === void 0) { state = new SerializerState(); }
    if (allowExtensions === void 0) { allowExtensions = true; }
    var result;
    if (this.base) {
        result = this.base.deserialize(buffer, state, allowExtensions);
    }
    else {
        result = {};
    }
    try {
        for (var _b = __values(this.fields), _c = _b.next(); !_c.done; _c = _b.next()) {
            var field = _c.value;
            if (allowExtensions && field.type.extensionOf && !buffer.haveReadData()) {
                state.skippedBinaryExtension = true;
            }
            else {
                result[field.name] = field.type.deserialize(buffer, state, allowExtensions);
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return result;
}
function serializeVariant(buffer, data, state, allowExtensions) {
    if (!Array.isArray(data) || data.length !== 2 || typeof data[0] !== 'string') {
        throw new Error('expected variant: ["type", value]');
    }
    var i = this.fields.findIndex(function (field) { return field.name === data[0]; });
    if (i < 0) {
        throw new Error("type \"" + data[0] + "\" is not valid for variant");
    }
    buffer.pushVaruint32(i);
    this.fields[i].type.serialize(buffer, data[1], state, allowExtensions);
}
function deserializeVariant(buffer, state, allowExtensions) {
    var i = buffer.getVaruint32();
    if (i >= this.fields.length) {
        throw new Error("type index " + i + " is not valid for variant");
    }
    var field = this.fields[i];
    return [field.name, field.type.deserialize(buffer, state, allowExtensions)];
}
function serializeArray(buffer, data, state, allowExtensions) {
    var e_4, _a;
    buffer.pushVaruint32(data.length);
    try {
        for (var data_2 = __values(data), data_2_1 = data_2.next(); !data_2_1.done; data_2_1 = data_2.next()) {
            var item = data_2_1.value;
            this.arrayOf.serialize(buffer, item, state, false);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (data_2_1 && !data_2_1.done && (_a = data_2.return)) _a.call(data_2);
        }
        finally { if (e_4) throw e_4.error; }
    }
}
function deserializeArray(buffer, state, allowExtensions) {
    var len = buffer.getVaruint32();
    var result = [];
    for (var i = 0; i < len; ++i) {
        result.push(this.arrayOf.deserialize(buffer, state, false));
    }
    return result;
}
function serializeOptional(buffer, data, state, allowExtensions) {
    if (data === null || data === undefined) {
        buffer.push(0);
    }
    else {
        buffer.push(1);
        this.optionalOf.serialize(buffer, data, state, allowExtensions);
    }
}
function deserializeOptional(buffer, state, allowExtensions) {
    if (buffer.get()) {
        return this.optionalOf.deserialize(buffer, state, allowExtensions);
    }
    else {
        return null;
    }
}
function serializeExtension(buffer, data, state, allowExtensions) {
    this.extensionOf.serialize(buffer, data, state, allowExtensions);
}
function deserializeExtension(buffer, state, allowExtensions) {
    return this.extensionOf.deserialize(buffer, state, allowExtensions);
}
function serializeObject(buffer, data, state, allowExtensions) {
    var e_5, _a;
    var entries = Object.entries(data);
    buffer.pushVaruint32(entries.length);
    try {
        for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
            var _b = __read(entries_1_1.value, 2), key = _b[0], value = _b[1];
            var keyType = this.fields[0].type;
            var dataType = this.fields[1].type;
            keyType.serialize(buffer, key, state, allowExtensions);
            dataType.serialize(buffer, value, state, allowExtensions);
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
}
function deserializeObject(buffer, state, allowExtensions) {
    var len = buffer.getVaruint32();
    var result = {};
    for (var i = 0; i < len; ++i) {
        var keyType = this.fields[0].type;
        var dataType = this.fields[1].type;
        var key = keyType.deserialize(buffer, state, allowExtensions);
        result[key] = dataType.deserialize(buffer, state, allowExtensions);
    }
    return result;
}
function serializePair(buffer, data, state, allowExtensions) {
    var _this = this;
    buffer.pushVaruint32(data.length);
    data.forEach(function (item) {
        _this.fields[0].type.serialize(buffer, item[0], state, allowExtensions);
        _this.fields[1].type.serialize(buffer, item[1], state, allowExtensions);
    });
}
function deserializePair(buffer, state, allowExtensions) {
    var result = [];
    var len = buffer.getVaruint32();
    for (var i = 0; i < len; ++i) {
        result.push(this.fields[0].type.deserialize(buffer, state, allowExtensions));
        result.push(this.fields[1].type.deserialize(buffer, state, allowExtensions));
    }
    return result;
}
var createType = function (attrs) {
    return __assign({ name: '<missing name>', aliasOfName: '', arrayOf: null, optionalOf: null, extensionOf: null, baseName: '', base: null, fields: [], serialize: serializeUnknown, deserialize: deserializeUnknown }, attrs);
};
var checkRange = function (orig, converted) {
    if (Number.isNaN(+orig) || Number.isNaN(+converted) || (typeof orig !== 'number' && typeof orig !== 'string')) {
        throw new Error('Expected number');
    }
    if (+orig !== +converted) {
        throw new Error('Number is out of range');
    }
    return +orig;
};
/** Create the set of types built-in to the abi format */
var createInitialTypes = function () {
    var result = new Map(Object.entries({
        bool: createType({
            name: 'bool',
            serialize: function (buffer, data) {
                if (!(typeof data === 'boolean' || typeof data === 'number' && (data === 1 || data === 0))) {
                    throw new Error('Expected boolean or number equal to 1 or 0');
                }
                buffer.push(data ? 1 : 0);
            },
            deserialize: function (buffer) { return !!buffer.get(); },
        }),
        uint8: createType({
            name: 'uint8',
            serialize: function (buffer, data) { buffer.push(checkRange(data, data & 0xff)); },
            deserialize: function (buffer) { return buffer.get(); },
        }),
        int8: createType({
            name: 'int8',
            serialize: function (buffer, data) { buffer.push(checkRange(data, data << 24 >> 24)); },
            deserialize: function (buffer) { return buffer.get() << 24 >> 24; },
        }),
        uint16: createType({
            name: 'uint16',
            serialize: function (buffer, data) { buffer.pushUint16(checkRange(data, data & 0xffff)); },
            deserialize: function (buffer) { return buffer.getUint16(); },
        }),
        int16: createType({
            name: 'int16',
            serialize: function (buffer, data) { buffer.pushUint16(checkRange(data, data << 16 >> 16)); },
            deserialize: function (buffer) { return buffer.getUint16() << 16 >> 16; },
        }),
        uint32: createType({
            name: 'uint32',
            serialize: function (buffer, data) { buffer.pushUint32(checkRange(data, data >>> 0)); },
            deserialize: function (buffer) { return buffer.getUint32(); },
        }),
        uint64: createType({
            name: 'uint64',
            serialize: function (buffer, data) {
                buffer.pushArray(numeric.decimalToBinary(8, '' + data));
            },
            deserialize: function (buffer) { return numeric.binaryToDecimal(buffer.getUint8Array(8)); },
        }),
        int64: createType({
            name: 'int64',
            serialize: function (buffer, data) {
                buffer.pushArray(numeric.signedDecimalToBinary(8, '' + data));
            },
            deserialize: function (buffer) { return numeric.signedBinaryToDecimal(buffer.getUint8Array(8)); },
        }),
        int32: createType({
            name: 'int32',
            serialize: function (buffer, data) { buffer.pushUint32(checkRange(data, data | 0)); },
            deserialize: function (buffer) { return buffer.getUint32() | 0; },
        }),
        varuint32: createType({
            name: 'varuint32',
            serialize: function (buffer, data) { buffer.pushVaruint32(checkRange(data, data >>> 0)); },
            deserialize: function (buffer) { return buffer.getVaruint32(); },
        }),
        varint32: createType({
            name: 'varint32',
            serialize: function (buffer, data) { buffer.pushVarint32(checkRange(data, data | 0)); },
            deserialize: function (buffer) { return buffer.getVarint32(); },
        }),
        uint128: createType({
            name: 'uint128',
            serialize: function (buffer, data) { buffer.pushArray(numeric.decimalToBinary(16, '' + data)); },
            deserialize: function (buffer) { return numeric.binaryToDecimal(buffer.getUint8Array(16)); },
        }),
        int128: createType({
            name: 'int128',
            serialize: function (buffer, data) {
                buffer.pushArray(numeric.signedDecimalToBinary(16, '' + data));
            },
            deserialize: function (buffer) { return numeric.signedBinaryToDecimal(buffer.getUint8Array(16)); },
        }),
        float32: createType({
            name: 'float32',
            serialize: function (buffer, data) { buffer.pushFloat32(data); },
            deserialize: function (buffer) { return buffer.getFloat32(); },
        }),
        float64: createType({
            name: 'float64',
            serialize: function (buffer, data) { buffer.pushFloat64(data); },
            deserialize: function (buffer) { return buffer.getFloat64(); },
        }),
        float128: createType({
            name: 'float128',
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(exports.hexToUint8Array(data), 16); },
            deserialize: function (buffer) { return exports.arrayToHex(buffer.getUint8Array(16)); },
        }),
        bytes: createType({
            name: 'bytes',
            serialize: function (buffer, data) {
                if (data instanceof Uint8Array || Array.isArray(data)) {
                    buffer.pushBytes(data);
                }
                else {
                    buffer.pushBytes(exports.hexToUint8Array(data));
                }
            },
            deserialize: function (buffer, state) {
                if (state && state.options.bytesAsUint8Array) {
                    return buffer.getBytes();
                }
                else {
                    return exports.arrayToHex(buffer.getBytes());
                }
            },
        }),
        string: createType({
            name: 'string',
            serialize: function (buffer, data) { buffer.pushString(data); },
            deserialize: function (buffer) { return buffer.getString(); },
        }),
        name: createType({
            name: 'name',
            serialize: function (buffer, data) { buffer.pushName(data); },
            deserialize: function (buffer) { return buffer.getName(); },
        }),
        time_point: createType({
            name: 'time_point',
            serialize: function (buffer, data) { buffer.pushNumberAsUint64(exports.dateToTimePoint(data)); },
            deserialize: function (buffer) { return exports.timePointToDate(buffer.getUint64AsNumber()); },
        }),
        time_point_sec: createType({
            name: 'time_point_sec',
            serialize: function (buffer, data) { buffer.pushUint32(exports.dateToTimePointSec(data)); },
            deserialize: function (buffer) { return exports.timePointSecToDate(buffer.getUint32()); },
        }),
        block_timestamp_type: createType({
            name: 'block_timestamp_type',
            serialize: function (buffer, data) { buffer.pushUint32(exports.dateToBlockTimestamp(data)); },
            deserialize: function (buffer) { return exports.blockTimestampToDate(buffer.getUint32()); },
        }),
        symbol_code: createType({
            name: 'symbol_code',
            serialize: function (buffer, data) { buffer.pushSymbolCode(data); },
            deserialize: function (buffer) { return buffer.getSymbolCode(); },
        }),
        symbol: createType({
            name: 'symbol',
            serialize: function (buffer, data) { buffer.pushSymbol(exports.stringToSymbol(data)); },
            deserialize: function (buffer) { return exports.symbolToString(buffer.getSymbol()); },
        }),
        asset: createType({
            name: 'asset',
            serialize: function (buffer, data) { buffer.pushAsset(data); },
            deserialize: function (buffer) { return buffer.getAsset(); },
        }),
        checksum160: createType({
            name: 'checksum160',
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(exports.hexToUint8Array(data), 20); },
            deserialize: function (buffer) { return exports.arrayToHex(buffer.getUint8Array(20)); },
        }),
        checksum256: createType({
            name: 'checksum256',
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(exports.hexToUint8Array(data), 32); },
            deserialize: function (buffer) { return exports.arrayToHex(buffer.getUint8Array(32)); },
        }),
        checksum512: createType({
            name: 'checksum512',
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(exports.hexToUint8Array(data), 64); },
            deserialize: function (buffer) { return exports.arrayToHex(buffer.getUint8Array(64)); },
        }),
        public_key: createType({
            name: 'public_key',
            serialize: function (buffer, data) { buffer.pushPublicKey(data); },
            deserialize: function (buffer) { return buffer.getPublicKey(); },
        }),
        private_key: createType({
            name: 'private_key',
            serialize: function (buffer, data) { buffer.pushPrivateKey(data); },
            deserialize: function (buffer) { return buffer.getPrivateKey(); },
        }),
        signature: createType({
            name: 'signature',
            serialize: function (buffer, data) { buffer.pushSignature(data); },
            deserialize: function (buffer) { return buffer.getSignature(); },
        }),
    }));
    result.set('extended_asset', createType({
        name: 'extended_asset',
        baseName: '',
        fields: [
            { name: 'quantity', typeName: 'asset', type: result.get('asset') },
            { name: 'contract', typeName: 'name', type: result.get('name') },
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    return result;
}; // createInitialTypes()
exports.createInitialTypes = createInitialTypes;
var createAbiTypes = function () {
    var initialTypes = exports.createInitialTypes();
    initialTypes.set('extensions_entry', createType({
        name: 'extensions_entry',
        baseName: '',
        fields: [
            { name: 'tag', typeName: 'uint16', type: null },
            { name: 'value', typeName: 'bytes', type: null }
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('type_def', createType({
        name: 'type_def',
        baseName: '',
        fields: [
            { name: 'new_type_name', typeName: 'string', type: null },
            { name: 'type', typeName: 'string', type: null }
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('field_def', createType({
        name: 'field_def',
        baseName: '',
        fields: [
            { name: 'name', typeName: 'string', type: null },
            { name: 'type', typeName: 'string', type: null }
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('struct_def', createType({
        name: 'struct_def',
        baseName: '',
        fields: [
            { name: 'name', typeName: 'string', type: null },
            { name: 'base', typeName: 'string', type: null },
            { name: 'fields', typeName: 'field_def[]', type: null }
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('action_def', createType({
        name: 'action_def',
        baseName: '',
        fields: [
            { name: 'name', typeName: 'name', type: null },
            { name: 'type', typeName: 'string', type: null },
            { name: 'ricardian_contract', typeName: 'string', type: null }
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('table_def', createType({
        name: 'table_def',
        baseName: '',
        fields: [
            { name: 'name', typeName: 'name', type: null },
            { name: 'index_type', typeName: 'string', type: null },
            { name: 'key_names', typeName: 'string[]', type: null },
            { name: 'key_types', typeName: 'string[]', type: null },
            { name: 'type', typeName: 'string', type: null }
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('clause_pair', createType({
        name: 'clause_pair',
        baseName: '',
        fields: [
            { name: 'id', typeName: 'string', type: null },
            { name: 'body', typeName: 'string', type: null }
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('error_message', createType({
        name: 'error_message',
        baseName: '',
        fields: [
            { name: 'error_code', typeName: 'uint64', type: null },
            { name: 'error_msg', typeName: 'string', type: null }
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('variant_def', createType({
        name: 'variant_def',
        baseName: '',
        fields: [
            { name: 'name', typeName: 'string', type: null },
            { name: 'types', typeName: 'string[]', type: null }
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('action_result', createType({
        name: 'action_result',
        baseName: '',
        fields: [
            { name: 'name', typeName: 'name', type: null },
            { name: 'result_type', typeName: 'string', type: null }
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('primary_key_index_def', createType({
        name: 'primary_key_index_def',
        baseName: '',
        fields: [
            { name: 'name', typeName: 'name', type: null },
            { name: 'type', typeName: 'string', type: null }
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('secondary_index_def', createType({
        name: 'secondary_index_def',
        baseName: '',
        fields: [
            { name: 'type', typeName: 'string', type: null },
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('secondary_indices', createType({
        name: 'secondary_indices',
        baseName: '',
        fields: [
            { name: 'name', typeName: 'name', type: null },
            { name: 'secondary_index_def', typeName: 'secondary_index_def', type: null }
        ],
        serialize: serializeObject,
        deserialize: deserializeObject,
    }));
    initialTypes.set('kv_table_entry_def', createType({
        name: 'kv_table_entry_def',
        baseName: '',
        fields: [
            { name: 'type', typeName: 'string', type: null },
            { name: 'primary_index', typeName: 'primary_key_index_def', type: null },
            { name: 'secondary_indices', typeName: 'secondary_indices', type: null }
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('kv_table', createType({
        name: 'kv_table',
        baseName: '',
        fields: [
            { name: 'name', typeName: 'name', type: null },
            { name: 'kv_table_entry_def', typeName: 'kv_table_entry_def', type: null }
        ],
        serialize: serializeObject,
        deserialize: deserializeObject
    }));
    initialTypes.set('abi_def', createType({
        name: 'abi_def',
        baseName: '',
        fields: [
            { name: 'version', typeName: 'string', type: null },
            { name: 'types', typeName: 'type_def[]', type: null },
            { name: 'structs', typeName: 'struct_def[]', type: null },
            { name: 'actions', typeName: 'action_def[]', type: null },
            { name: 'tables', typeName: 'table_def[]', type: null },
            { name: 'ricardian_clauses', typeName: 'clause_pair[]', type: null },
            { name: 'error_messages', typeName: 'error_message[]', type: null },
            { name: 'abi_extensions', typeName: 'extensions_entry[]', type: null },
            { name: 'variants', typeName: 'variant_def[]$', type: null },
            { name: 'action_results', typeName: 'action_result[]$', type: null },
            { name: 'kv_tables', typeName: 'kv_table$', type: null },
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    return initialTypes;
};
exports.createAbiTypes = createAbiTypes;
var createTransactionExtensionTypes = function () {
    var initialTypes = exports.createInitialTypes();
    initialTypes.set('resource_payer', createType({
        name: 'resource_payer',
        baseName: '',
        fields: [
            { name: 'payer', typeName: 'name', type: null },
            { name: 'max_net_bytes', typeName: 'uint64', type: null },
            { name: 'max_cpu_us', typeName: 'uint64', type: null },
            { name: 'max_memory_bytes', typeName: 'uint64', type: null },
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    return initialTypes;
};
exports.createTransactionExtensionTypes = createTransactionExtensionTypes;
var createTransactionTypes = function () {
    var initialTypes = exports.createInitialTypes();
    initialTypes.set('permission_level', createType({
        name: 'permission_level',
        baseName: '',
        fields: [
            { name: 'actor', typeName: 'name', type: null },
            { name: 'permission', typeName: 'name', type: null },
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('action', createType({
        name: 'action',
        baseName: '',
        fields: [
            { name: 'account', typeName: 'name', type: null },
            { name: 'name', typeName: 'name', type: null },
            { name: 'authorization', typeName: 'permission_level[]', type: null },
            { name: 'data', typeName: 'bytes', type: null },
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('extension', createType({
        name: 'extension',
        baseName: '',
        fields: [
            { name: 'type', typeName: 'uint16', type: null },
            { name: 'data', typeName: 'bytes', type: null },
        ],
        serialize: serializePair,
        deserialize: deserializePair,
    }));
    initialTypes.set('transaction_header', createType({
        name: 'transaction_header',
        baseName: '',
        fields: [
            { name: 'expiration', typeName: 'time_point_sec', type: null },
            { name: 'ref_block_num', typeName: 'uint16', type: null },
            { name: 'ref_block_prefix', typeName: 'uint32', type: null },
            { name: 'max_net_usage_words', typeName: 'varuint32', type: null },
            { name: 'max_cpu_usage_ms', typeName: 'uint8', type: null },
            { name: 'delay_sec', typeName: 'varuint32', type: null },
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    initialTypes.set('transaction', createType({
        name: 'transaction',
        baseName: 'transaction_header',
        fields: [
            { name: 'context_free_actions', typeName: 'action[]', type: null },
            { name: 'actions', typeName: 'action[]', type: null },
            { name: 'transaction_extensions', typeName: 'extension', type: null }
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    return initialTypes;
};
exports.createTransactionTypes = createTransactionTypes;
/** Get type from `types` */
var getType = function (types, name) {
    var type = types.get(name);
    if (type && type.aliasOfName) {
        return exports.getType(types, type.aliasOfName);
    }
    if (type) {
        return type;
    }
    if (name.endsWith('[]')) {
        return createType({
            name: name,
            arrayOf: exports.getType(types, name.substr(0, name.length - 2)),
            serialize: serializeArray,
            deserialize: deserializeArray,
        });
    }
    if (name.endsWith('?')) {
        return createType({
            name: name,
            optionalOf: exports.getType(types, name.substr(0, name.length - 1)),
            serialize: serializeOptional,
            deserialize: deserializeOptional,
        });
    }
    if (name.endsWith('$')) {
        return createType({
            name: name,
            extensionOf: exports.getType(types, name.substr(0, name.length - 1)),
            serialize: serializeExtension,
            deserialize: deserializeExtension,
        });
    }
    throw new Error('Unknown type: ' + name);
};
exports.getType = getType;
/**
 * Get types from abi
 *
 * @param initialTypes Set of types to build on.
 * In most cases, it's best to fill this from a fresh call to `getTypesFromAbi()`.
 */
var getTypesFromAbi = function (initialTypes, abi) {
    var e_6, _a, e_7, _b, e_8, _c, e_9, _d, e_10, _e;
    var types = new Map(initialTypes);
    if (abi && abi.types) {
        try {
            for (var _f = __values(abi.types), _g = _f.next(); !_g.done; _g = _f.next()) {
                var _h = _g.value, new_type_name = _h.new_type_name, type = _h.type;
                types.set(new_type_name, createType({ name: new_type_name, aliasOfName: type }));
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
            }
            finally { if (e_6) throw e_6.error; }
        }
    }
    if (abi && abi.structs) {
        try {
            for (var _j = __values(abi.structs), _k = _j.next(); !_k.done; _k = _j.next()) {
                var _l = _k.value, name_1 = _l.name, base = _l.base, fields = _l.fields;
                types.set(name_1, createType({
                    name: name_1,
                    baseName: base,
                    fields: fields.map(function (_a) {
                        var n = _a.name, type = _a.type;
                        return ({ name: n, typeName: type, type: null });
                    }),
                    serialize: serializeStruct,
                    deserialize: deserializeStruct,
                }));
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
            }
            finally { if (e_7) throw e_7.error; }
        }
    }
    if (abi && abi.variants) {
        try {
            for (var _m = __values(abi.variants), _o = _m.next(); !_o.done; _o = _m.next()) {
                var _p = _o.value, name_2 = _p.name, t = _p.types;
                types.set(name_2, createType({
                    name: name_2,
                    fields: t.map(function (s) { return ({ name: s, typeName: s, type: null }); }),
                    serialize: serializeVariant,
                    deserialize: deserializeVariant,
                }));
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_o && !_o.done && (_c = _m.return)) _c.call(_m);
            }
            finally { if (e_8) throw e_8.error; }
        }
    }
    try {
        for (var types_1 = __values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
            var _q = __read(types_1_1.value, 2), name_3 = _q[0], type = _q[1];
            if (type.baseName) {
                type.base = exports.getType(types, type.baseName);
            }
            try {
                for (var _r = (e_10 = void 0, __values(type.fields)), _s = _r.next(); !_s.done; _s = _r.next()) {
                    var field = _s.value;
                    field.type = exports.getType(types, field.typeName);
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_s && !_s.done && (_e = _r.return)) _e.call(_r);
                }
                finally { if (e_10) throw e_10.error; }
            }
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (types_1_1 && !types_1_1.done && (_d = types_1.return)) _d.call(types_1);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return types;
}; // getTypesFromAbi
exports.getTypesFromAbi = getTypesFromAbi;
var reverseHex = function (h) {
    return h.substr(6, 2) + h.substr(4, 2) + h.substr(2, 2) + h.substr(0, 2);
};
/** TAPoS: Return transaction fields which reference `refBlock` and expire `expireSeconds` after `timestamp` */
var transactionHeader = function (refBlock, expireSeconds) {
    var timestamp = refBlock.header ? refBlock.header.timestamp : refBlock.timestamp;
    var prefix = parseInt(reverseHex(refBlock.id.substr(16, 8)), 16);
    return {
        expiration: exports.timePointSecToDate(exports.dateToTimePointSec(timestamp) + expireSeconds),
        ref_block_num: refBlock.block_num & 0xffff,
        ref_block_prefix: prefix,
    };
};
exports.transactionHeader = transactionHeader;
/** Convert action data to serialized form (hex) */
var serializeActionData = function (contract, account, name, data, textEncoder, textDecoder) {
    var action = contract.actions.get(name);
    if (!action) {
        throw new Error("Unknown action " + name + " in contract " + account);
    }
    var buffer = new SerialBuffer({ textEncoder: textEncoder, textDecoder: textDecoder });
    action.serialize(buffer, data);
    return exports.arrayToHex(buffer.asUint8Array());
};
exports.serializeActionData = serializeActionData;
/** Return action in serialized form */
var serializeAction = function (contract, account, name, authorization, data, textEncoder, textDecoder) {
    return {
        account: account,
        name: name,
        authorization: authorization,
        data: exports.serializeActionData(contract, account, name, data, textEncoder, textDecoder),
    };
};
exports.serializeAction = serializeAction;
/** Deserialize action data. If `data` is a `string`, then it's assumed to be in hex. */
var deserializeActionData = function (contract, account, name, data, textEncoder, textDecoder) {
    var action = contract.actions.get(name);
    if (typeof data === 'string') {
        data = exports.hexToUint8Array(data);
    }
    if (!action) {
        throw new Error("Unknown action " + name + " in contract " + account);
    }
    var buffer = new SerialBuffer({ textDecoder: textDecoder, textEncoder: textEncoder });
    buffer.pushArray(data);
    return action.deserialize(buffer);
};
exports.deserializeActionData = deserializeActionData;
/** Deserialize action. If `data` is a `string`, then it's assumed to be in hex. */
var deserializeAction = function (contract, account, name, authorization, data, textEncoder, textDecoder) {
    return {
        account: account,
        name: name,
        authorization: authorization,
        data: exports.deserializeActionData(contract, account, name, data, textEncoder, textDecoder),
    };
};
exports.deserializeAction = deserializeAction;
var serializeAnyvar = function (buffer, anyvar) {
    var _a, _b, _c, _d, _e, _f, _g;
    var def;
    var value;
    if (anyvar === null) {
        _a = __read([anyvarDefs.null_t, anyvar], 2), def = _a[0], value = _a[1];
    }
    else if (typeof anyvar === 'string') {
        _b = __read([anyvarDefs.string, anyvar], 2), def = _b[0], value = _b[1];
    }
    else if (typeof anyvar === 'number') {
        _c = __read([anyvarDefs.int32, anyvar], 2), def = _c[0], value = _c[1];
    }
    else if (anyvar instanceof Uint8Array) {
        _d = __read([anyvarDefs.bytes, anyvar], 2), def = _d[0], value = _d[1];
    }
    else if (Array.isArray(anyvar)) {
        _e = __read([anyvarDefs.any_array, anyvar], 2), def = _e[0], value = _e[1];
    }
    else if (Object.keys(anyvar).length === 2 && anyvar.hasOwnProperty('type') && anyvar.hasOwnProperty('value')) {
        _f = __read([anyvarDefs[anyvar.type], anyvar.value], 2), def = _f[0], value = _f[1];
    }
    else {
        _g = __read([anyvarDefs.any_object, anyvar], 2), def = _g[0], value = _g[1];
    }
    buffer.pushVaruint32(def.index);
    def.type.serialize(buffer, value);
};
exports.serializeAnyvar = serializeAnyvar;
var deserializeAnyvar = function (buffer, state) {
    var defIndex = buffer.getVaruint32();
    if (defIndex >= anyvarDefsByIndex.length) {
        throw new Error('Tried to deserialize unknown anyvar type');
    }
    var def = anyvarDefsByIndex[defIndex];
    var value = def.type.deserialize(buffer, state);
    if (state && state.options.useShortForm || def.useShortForm) {
        return value;
    }
    else {
        return { type: def.type.name, value: value };
    }
};
exports.deserializeAnyvar = deserializeAnyvar;
var deserializeAnyvarShort = function (buffer) {
    return exports.deserializeAnyvar(buffer, new SerializerState({ useShortForm: true }));
};
exports.deserializeAnyvarShort = deserializeAnyvarShort;
var serializeAnyObject = function (buffer, obj) {
    var e_11, _a;
    var entries = Object.entries(obj);
    buffer.pushVaruint32(entries.length);
    try {
        for (var entries_2 = __values(entries), entries_2_1 = entries_2.next(); !entries_2_1.done; entries_2_1 = entries_2.next()) {
            var _b = __read(entries_2_1.value, 2), key = _b[0], value = _b[1];
            buffer.pushString(key);
            exports.serializeAnyvar(buffer, value);
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (entries_2_1 && !entries_2_1.done && (_a = entries_2.return)) _a.call(entries_2);
        }
        finally { if (e_11) throw e_11.error; }
    }
};
exports.serializeAnyObject = serializeAnyObject;
var deserializeAnyObject = function (buffer, state) {
    var len = buffer.getVaruint32();
    var result = {};
    for (var i = 0; i < len; ++i) {
        var key = buffer.getString();
        if (key in result) {
            var j = 1;
            while (key + '_' + j in result) {
                ++j;
            }
            key = key + '_' + j;
        }
        result[key] = exports.deserializeAnyvar(buffer, state);
    }
    return result;
};
exports.deserializeAnyObject = deserializeAnyObject;
var serializeAnyArray = function (buffer, arr) {
    var e_12, _a;
    buffer.pushVaruint32(arr.length);
    try {
        for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var x = arr_1_1.value;
            exports.serializeAnyvar(buffer, x);
        }
    }
    catch (e_12_1) { e_12 = { error: e_12_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
        }
        finally { if (e_12) throw e_12.error; }
    }
};
exports.serializeAnyArray = serializeAnyArray;
var deserializeAnyArray = function (buffer, state) {
    var len = buffer.getVaruint32();
    var result = [];
    for (var i = 0; i < len; ++i) {
        result.push(exports.deserializeAnyvar(buffer, state));
    }
    return result;
};
exports.deserializeAnyArray = deserializeAnyArray;
var addAdditionalTypes = function () {
    var initialTypes = exports.createInitialTypes();
    initialTypes.set('null_t', createType({
        name: 'null_t',
        serialize: function (buffer, anyvar) { },
        deserialize: function (buffer, state) { }
    }));
    initialTypes.set('any_object', createType({
        name: 'any_object',
        serialize: exports.serializeAnyObject,
        deserialize: exports.deserializeAnyObject
    }));
    initialTypes.set('any_array', createType({
        name: 'any_array',
        serialize: exports.serializeAnyArray,
        deserialize: exports.deserializeAnyArray
    }));
    return initialTypes;
};
var additionalTypes = addAdditionalTypes();
var anyvarDefs = {
    null_t: { index: 0, useShortForm: true, type: additionalTypes.get('null_t') },
    int64: { index: 1, useShortForm: false, type: additionalTypes.get('int64') },
    uint64: { index: 2, useShortForm: false, type: additionalTypes.get('uint64') },
    int32: { index: 3, useShortForm: true, type: additionalTypes.get('int32') },
    uint32: { index: 4, useShortForm: false, type: additionalTypes.get('uint32') },
    int16: { index: 5, useShortForm: false, type: additionalTypes.get('int16') },
    uint16: { index: 6, useShortForm: false, type: additionalTypes.get('uint16') },
    int8: { index: 7, useShortForm: false, type: additionalTypes.get('int8') },
    uint8: { index: 8, useShortForm: false, type: additionalTypes.get('uint8') },
    time_point: { index: 9, useShortForm: false, type: additionalTypes.get('time_point') },
    checksum256: { index: 10, useShortForm: false, type: additionalTypes.get('checksum256') },
    float64: { index: 11, useShortForm: false, type: additionalTypes.get('float64') },
    string: { index: 12, useShortForm: true, type: additionalTypes.get('string') },
    any_object: { index: 13, useShortForm: true, type: additionalTypes.get('any_object') },
    any_array: { index: 14, useShortForm: true, type: additionalTypes.get('any_array') },
    bytes: { index: 15, useShortForm: false, type: additionalTypes.get('bytes') },
    symbol: { index: 16, useShortForm: false, type: additionalTypes.get('symbol') },
    symbol_code: { index: 17, useShortForm: false, type: additionalTypes.get('symbol_code') },
    asset: { index: 18, useShortForm: false, type: additionalTypes.get('asset') },
};
var anyvarDefsByIndex = [
    anyvarDefs.null_t,
    anyvarDefs.int64,
    anyvarDefs.uint64,
    anyvarDefs.int32,
    anyvarDefs.uint32,
    anyvarDefs.int16,
    anyvarDefs.uint16,
    anyvarDefs.int8,
    anyvarDefs.uint8,
    anyvarDefs.time_point,
    anyvarDefs.checksum256,
    anyvarDefs.float64,
    anyvarDefs.string,
    anyvarDefs.any_object,
    anyvarDefs.any_array,
    anyvarDefs.bytes,
    anyvarDefs.symbol,
    anyvarDefs.symbol_code,
    anyvarDefs.asset,
];
var serializeQuery = function (buffer, query) {
    var _a, _b, _c, e_13, _d;
    var method;
    var arg;
    var filter;
    if (typeof query === 'string') {
        method = query;
    }
    else if (Array.isArray(query) && query.length === 2) {
        _a = __read(query, 2), method = _a[0], filter = _a[1];
    }
    else if (Array.isArray(query) && query.length === 3) {
        _b = __read(query, 3), method = _b[0], arg = _b[1], filter = _b[2];
    }
    else {
        _c = __read([query.method, query.arg, query.filter], 3), method = _c[0], arg = _c[1], filter = _c[2];
    }
    buffer.pushString(method);
    if (arg === undefined) {
        buffer.push(0);
    }
    else {
        buffer.push(1);
        exports.serializeAnyvar(buffer, arg);
    }
    if (filter === undefined) {
        buffer.push(0);
    }
    else {
        buffer.pushVaruint32(filter.length);
        try {
            for (var filter_1 = __values(filter), filter_1_1 = filter_1.next(); !filter_1_1.done; filter_1_1 = filter_1.next()) {
                var q = filter_1_1.value;
                exports.serializeQuery(buffer, q);
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (filter_1_1 && !filter_1_1.done && (_d = filter_1.return)) _d.call(filter_1);
            }
            finally { if (e_13) throw e_13.error; }
        }
    }
};
exports.serializeQuery = serializeQuery;


/***/ }),

/***/ "./src/ripemd.js":
/*!***********************!*\
  !*** ./src/ripemd.js ***!
  \***********************/
/***/ ((module) => {

// https://gist.githubusercontent.com/wlzla000/bac83df6d3c51916c4dd0bc947e46947/raw/7ee3462b095ab22580ddaf191f44a590da6fe33b/RIPEMD-160.js

/*
	RIPEMD-160.js

		developed
			by K. (https://github.com/wlzla000)
			on December 27-29, 2017,

		licensed under


		the MIT license

		Copyright (c) 2017 K.

		 Permission is hereby granted, free of charge, to any person
		obtaining a copy of this software and associated documentation
		files (the "Software"), to deal in the Software without
		restriction, including without limitation the rights to use,
		copy, modify, merge, publish, distribute, sublicense, and/or
		sell copies of the Software, and to permit persons to whom the
		Software is furnished to do so, subject to the following
		conditions:

		 The above copyright notice and this permission notice shall be
		included in all copies or substantial portions of the Software.

		 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
		OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
		HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
		WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
		FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
		OTHER DEALINGS IN THE SOFTWARE.
*/



class RIPEMD160
{
    constructor()
    {
        // https://webcache.googleusercontent.com/search?q=cache:CnLOgolTHYEJ:https://www.cosic.esat.kuleuven.be/publications/article-317.pdf
        // http://shodhganga.inflibnet.ac.in/bitstream/10603/22978/13/13_appendix.pdf
    }

    static get_n_pad_bytes(message_size /* in bytes, 1 byte is 8 bits. */)
    {
        //  Obtain the number of bytes needed to pad the message.
        // It does not contain the size of the message size information.
        /*
			https://webcache.googleusercontent.com/search?q=cache:CnLOgolTHYEJ:https://www.cosic.esat.kuleuven.be/publications/article-317.pdf

			The Cryptographic Hash Function RIPEMD-160

			written by
				Bart Preneel,
				Hans Dobbertin,
				Antoon Bosselaers
			in
				1997.

			--------------------------------------------------

			§5     Description of RIPEMD-160

			......

			 In order to guarantee that the total input size is a
			multiple of 512 bits, the input is padded in the same
			way as for all the members of the MD4-family: one
			appends a single 1 followed by a string of 0s (the
			number of 0s lies between 0 and 511); the last 64 bits
			of the extended input contain the binary representation
			of the input size in bits, least significant byte first.
		*/
        /*
			https://tools.ietf.org/rfc/rfc1186.txt

			RFC 1186: MD4 Message Digest Algorithm.

			written by
				Ronald Linn Rivest
			in
				October 1990.

			--------------------------------------------------

			§3     MD4 Algorithm Description

			......

			Step 1. Append padding bits

			 The message is "padded" (extended) so that its length
			(in bits) is congruent to 448, modulo 512. That is, the
			message is extended so that it is just 64 bits shy of
			being a multiple of 512 bits long. Padding is always
			performed, even if the length of the message is already
			congruent to 448, modulo 512 (in which case 512 bits of
			padding are added).

			 Padding is performed as follows: a single "1" bit is
			appended to the message, and then enough zero bits are
			appended so that the length in bits of the padded
			message becomes congruent to 448, modulo 512.

			Step 2. Append length

			 A 64-bit representation of b (the length of the message
			before the padding bits were added) is appended to the
			result of the previous step. In the unlikely event that
			b is greater than 2^64, then only the low-order 64 bits
			of b are used. (These bits are appended as two 32-bit
			words and appended low-order word first in accordance
			with the previous conventions.)

			 At this point the resulting message (after padding with
			bits and with b) has a length that is an exact multiple
			of 512 bits. Equivalently, this message has a length
			that is an exact multiple of 16 (32-bit) words. Let
			M[0 ... N-1] denote the words of the resulting message,
			where N is a multiple of 16.
		*/
        // https://crypto.stackexchange.com/a/32407/54568
        /*
			Example case  # 1
				[0 bit: message.]
				[1 bit: 1.]
				[447 bits: 0.]
				[64 bits: message size information.]

			Example case  # 2
				[512-bits: message]
				[1 bit: 1.]
				[447 bits: 0.]
				[64 bits: message size information.]

			Example case  # 3
				[(512 - 64 = 448) bits: message.]
				[1 bit: 1.]
				[511 bits: 0.]
				[64 bits: message size information.]

			Example case  # 4
				[(512 - 65 = 447) bits: message.]
				[1 bit: 1.]
				[0 bit: 0.]
				[64 bits: message size information.]
		*/
        // The number of padding zero bits:
        //      511 - [{(message size in bits) + 64} (mod 512)]
        return 64 - ((message_size + 8) & 0b00111111 /* 63 */);
    }
    static pad(message /* An ArrayBuffer. */)
    {
        const message_size = message.byteLength;
        const n_pad = RIPEMD160.get_n_pad_bytes(message_size);

        //  `Number.MAX_SAFE_INTEGER` is ((2 ** 53) - 1) and
        // bitwise operation in Javascript is done on 32-bits operands.
        const divmod = (dividend, divisor) => [
            Math.floor(dividend / divisor),
            dividend % divisor
        ];
        /*
To shift

   00000000 000????? ???????? ???????? ???????? ???????? ???????? ????????
                                     t o
   00000000 ???????? ???????? ???????? ???????? ???????? ???????? ?????000

--------------------------------------------------------------------------------

Method #1

    00000000 000????? ???????? ????????  ???????? ???????? ???????? ????????
   [00000000 000AAAAA AAAAAAAA AAAAAAAA] (<A> captured)
   [00000000 AAAAAAAA AAAAAAAA AAAAA000] (<A> shifted)
                         (<B> captured) [BBBBBBBB BBBBBBBB BBBBBBBB BBBBBBBB]
                     (<B> shifted) [BBB][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
   [00000000 AAAAAAAA AAAAAAAA AAAAABBB] (<A> & <B_2> merged)
   [00000000 AAAAAAAA AAAAAAAA AAAAABBB][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
    00000000 ???????? ???????? ????????  ???????? ???????? ???????? ?????000

		const uint32_max_plus_1 = 0x100000000; // (2 ** 32)
		const [
			msg_byte_size_most, // Value range [0, (2 ** 21) - 1].
			msg_byte_size_least // Value range [0, (2 ** 32) - 1].
		] = divmod(message_size, uint32_max_plus_1);
		const [
			carry, // Value range [0, 7].
			msg_bit_size_least // Value range [0, (2 ** 32) - 8].
		] = divmod(message_byte_size_least * 8, uint32_max_plus_1);
		const message_bit_size_most = message_byte_size_most * 8
			+ carry; // Value range [0, (2 ** 24) - 1].

--------------------------------------------------------------------------------

Method #2
    00000000 000????? ???????? ????????  ???????? ???????? ???????? ????????
      [00000 000AAAAA AAAAAAAA AAAAAAAA  AAA] (<A> captured)
                         (<B> captured) [000BBBBB BBBBBBBB BBBBBBBB BBBBBBBB]
                          (<B> shifted) [BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
   [00000000 AAAAAAAA AAAAAAAA AAAAAAAA][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
    00000000 ???????? ???????? ????????  ???????? ???????? ???????? ?????000

		*/
        const [
            msg_bit_size_most,
            msg_bit_size_least
        ] = divmod(message_size, 536870912 /* (2 ** 29) */)
            .map((x, index) => (index ? (x * 8) : x));

        // `ArrayBuffer.transfer()` is not supported.
        const padded = new Uint8Array(message_size + n_pad + 8);
        padded.set(new Uint8Array(message), 0);
        const data_view = new DataView(padded.buffer);
        data_view.setUint8(message_size, 0b10000000);
        data_view.setUint32(
            message_size + n_pad,
            msg_bit_size_least,
            true // Little-endian
        );
        data_view.setUint32(
            message_size + n_pad + 4,
            msg_bit_size_most,
            true // Little-endian
        );

        return padded.buffer;
    }

    static f(j, x, y, z)
    {
        if(0 <= j && j <= 15)
        { // Exclusive-OR
            return x ^ y ^ z;
        }
        if(16 <= j && j <= 31)
        { // Multiplexing (muxing)
            return (x & y) | (~x & z);
        }
        if(32 <= j && j <= 47)
        {
            return (x | ~y) ^ z;
        }
        if(48 <= j && j <= 63)
        { // Multiplexing (muxing)
            return (x & z) | (y & ~z);
        }
        if(64 <= j && j <= 79)
        {
            return x ^ (y | ~z);
        }
    }
    static K(j)
    {
        if(0 <= j && j <= 15)
        {
            return 0x00000000;
        }
        if(16 <= j && j <= 31)
        {
            // Math.floor((2 ** 30) * Math.SQRT2)
            return 0x5A827999;
        }
        if(32 <= j && j <= 47)
        {
            // Math.floor((2 ** 30) * Math.sqrt(3))
            return 0x6ED9EBA1;
        }
        if(48 <= j && j <= 63)
        {
            // Math.floor((2 ** 30) * Math.sqrt(5))
            return 0x8F1BBCDC;
        }
        if(64 <= j && j <= 79)
        {
            // Math.floor((2 ** 30) * Math.sqrt(7))
            return 0xA953FD4E;
        }
    }
    static KP(j) // K'
    {
        if(0 <= j && j <= 15)
        {
            // Math.floor((2 ** 30) * Math.cbrt(2))
            return 0x50A28BE6;
        }
        if(16 <= j && j <= 31)
        {
            // Math.floor((2 ** 30) * Math.cbrt(3))
            return 0x5C4DD124;
        }
        if(32 <= j && j <= 47)
        {
            // Math.floor((2 ** 30) * Math.cbrt(5))
            return 0x6D703EF3;
        }
        if(48 <= j && j <= 63)
        {
            // Math.floor((2 ** 30) * Math.cbrt(7))
            return 0x7A6D76E9;
        }
        if(64 <= j && j <= 79)
        {
            return 0x00000000;
        }
    }
    static add_modulo32(/* ...... */)
    {
        // 1.  Modulo addition (addition modulo) is associative.
        //    https://proofwiki.org/wiki/Modulo_Addition_is_Associative
 		// 2.  Bitwise operation in Javascript
        //    is done on 32-bits operands
        //    and results in a 32-bits value.
        return Array
            .from(arguments)
            .reduce((a, b) => (a + b), 0) | 0;
    }
    static rol32(value, count)
    { // Cyclic left shift (rotate) on 32-bits value.
        return (value << count) | (value >>> (32 - count));
    }
    static hash(message /* An ArrayBuffer. */)
    {
        // ////////       Padding       //////////

        // The padded message.
        const padded = RIPEMD160.pad(message);

        // ////////     Compression     //////////

        // Message word selectors.
        const r = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
            7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
            3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
            1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
            4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
        ];
        const rP = [ // r'
            5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
            6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
            15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
            8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
            12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
        ];

        // Amounts for 'rotate left' operation.
        const s = [
            11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
            7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
            11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
            11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
            9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
        ];
        const sP = [ // s'
            8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
            9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
            9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
            15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
            8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
        ];

        // The size, in bytes, of a word.
        const word_size = 4;

        // The size, in bytes, of a 16-words block.
        const block_size = 64;

        // The number of the 16-words blocks.
        const t = padded.byteLength / block_size;

        //  The message after padding consists of t 16-word blocks that
        // are denoted with X_i[j], with 0≤i≤(t − 1) and 0≤j≤15.
        const X = (new Array(t))
            .fill(undefined)
            .map((_, i) => j => (
                new DataView(
                    padded, i * block_size, block_size
                ).getUint32(
                    j * word_size,
                    true // Little-endian
                )
            ));

        //  The result of RIPEMD-160 is contained in five 32-bit words,
        // which form the internal state of the algorithm. The final
        // content of these five 32-bit words is converted to a 160-bit
        // string, again using the little-endian convention.
        const h = [
            0x67452301, // h_0
            0xEFCDAB89, // h_1
            0x98BADCFE, // h_2
            0x10325476, // h_3
            0xC3D2E1F0  // h_4
        ];

        for(let i = 0; i < t; ++i)
        {
            let A = h[0]; let B = h[1]; let C = h[2]; let D = h[3]; let E = h[4];
            let AP = A; let BP = B; let CP = C; let DP = D; let EP = E;
            for(let j = 0; j < 80; ++j)
            {
                // Left rounds
                let T = RIPEMD160.add_modulo32( // eslint-disable-line no-shadow
                    RIPEMD160.rol32(
                        RIPEMD160.add_modulo32(
                            A,
                            RIPEMD160.f(j, B, C, D),
                            X[i](r[j]),
                            RIPEMD160.K(j)
                        ),
                        s[j]
                    ),
                    E
                );
                A = E;
                E = D;
                D = RIPEMD160.rol32(C, 10);
                C = B;
                B = T;

                // Right rounds
                T = RIPEMD160.add_modulo32(
                    RIPEMD160.rol32(
                        RIPEMD160.add_modulo32(
                            AP,
                            RIPEMD160.f(
                                79 - j,
                                BP,
                                CP,
                                DP
                            ),
                            X[i](rP[j]),
                            RIPEMD160.KP(j)
                        ),
                        sP[j]
                    ),
                    EP
                );
                AP = EP;
                EP = DP;
                DP = RIPEMD160.rol32(CP, 10);
                CP = BP;
                BP = T;
            }
            const T = RIPEMD160.add_modulo32(h[1], C, DP);
            h[1] = RIPEMD160.add_modulo32(h[2], D, EP);
            h[2] = RIPEMD160.add_modulo32(h[3], E, AP);
            h[3] = RIPEMD160.add_modulo32(h[4], A, BP);
            h[4] = RIPEMD160.add_modulo32(h[0], B, CP);
            h[0] = T;
        }

        //  The final output string then consists of the concatenatation
        // of h_0, h_1, h_2, h_3, and h_4 after converting each h_i to a
        // 4-byte string using the little-endian convention.
        const result = new ArrayBuffer(20);
        const data_view = new DataView(result);
        h.forEach((h_i, i) => data_view.setUint32(i * 4, h_i, true));
        return result;
    }
}

module.exports = {
    RIPEMD160
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"eosjs_api": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_name_"] = self["webpackChunk_name_"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["externals"], () => (__webpack_require__("./src/eosjs-api.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	eosjs_api = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZW9zanMtYXBpLnRzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9lb3Nqcy1udW1lcmljLnRzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9lb3Nqcy1zZXJpYWxpemUudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3JpcGVtZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7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QTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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bnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG4gKiBAbW9kdWxlIEFQSVxyXG4gKi9cclxuLy8gY29weXJpZ2h0IGRlZmluZWQgaW4gZW9zanMvTElDRU5TRS50eHRcclxuLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn07XHJcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWN0aW9uQnVpbGRlciA9IGV4cG9ydHMuVHJhbnNhY3Rpb25CdWlsZGVyID0gZXhwb3J0cy5BcGkgPSB2b2lkIDA7XHJcbnZhciBwYWtvXzEgPSByZXF1aXJlKFwicGFrb1wiKTtcclxudmFyIHNlciA9IHJlcXVpcmUoXCIuL2Vvc2pzLXNlcmlhbGl6ZVwiKTtcclxudmFyIEFwaSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGFyZ3NcclxuICAgICAqICogYHJwY2A6IElzc3VlcyBSUEMgY2FsbHNcclxuICAgICAqICogYGF1dGhvcml0eVByb3ZpZGVyYDogR2V0IHB1YmxpYyBrZXlzIG5lZWRlZCB0byBtZWV0IGF1dGhvcml0aWVzIGluIGEgdHJhbnNhY3Rpb25cclxuICAgICAqICogYGFiaVByb3ZpZGVyYDogU3VwcGxpZXMgQUJJcyBpbiByYXcgZm9ybSAoYmluYXJ5KVxyXG4gICAgICogKiBgc2lnbmF0dXJlUHJvdmlkZXJgOiBTaWducyB0cmFuc2FjdGlvbnNcclxuICAgICAqICogYGNoYWluSWRgOiBJZGVudGlmaWVzIGNoYWluXHJcbiAgICAgKiAqIGB0ZXh0RW5jb2RlcmA6IGBUZXh0RW5jb2RlcmAgaW5zdGFuY2UgdG8gdXNlLiBQYXNzIGluIGBudWxsYCBpZiBydW5uaW5nIGluIGEgYnJvd3NlclxyXG4gICAgICogKiBgdGV4dERlY29kZXJgOiBgVGV4dERlY29kZXJgIGluc3RhbmNlIHRvIHVzZS4gUGFzcyBpbiBgbnVsbGAgaWYgcnVubmluZyBpbiBhIGJyb3dzZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gQXBpKGFyZ3MpIHtcclxuICAgICAgICAvKiogSG9sZHMgaW5mb3JtYXRpb24gbmVlZGVkIHRvIHNlcmlhbGl6ZSBjb250cmFjdCBhY3Rpb25zICovXHJcbiAgICAgICAgdGhpcy5jb250cmFjdHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgLyoqIEZldGNoZWQgYWJpcyAqL1xyXG4gICAgICAgIHRoaXMuY2FjaGVkQWJpcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uRXh0ZW5zaW9ucyA9IFtcclxuICAgICAgICAgICAgeyBpZDogMSwgdHlwZTogJ3Jlc291cmNlX3BheWVyJywga2V5czogWydwYXllcicsICdtYXhfbmV0X2J5dGVzJywgJ21heF9jcHVfdXMnLCAnbWF4X21lbW9yeV9ieXRlcyddIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnJwYyA9IGFyZ3MucnBjO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXR5UHJvdmlkZXIgPSBhcmdzLmF1dGhvcml0eVByb3ZpZGVyIHx8IGFyZ3MucnBjO1xyXG4gICAgICAgIHRoaXMuYWJpUHJvdmlkZXIgPSBhcmdzLmFiaVByb3ZpZGVyIHx8IGFyZ3MucnBjO1xyXG4gICAgICAgIHRoaXMuc2lnbmF0dXJlUHJvdmlkZXIgPSBhcmdzLnNpZ25hdHVyZVByb3ZpZGVyO1xyXG4gICAgICAgIHRoaXMuY2hhaW5JZCA9IGFyZ3MuY2hhaW5JZDtcclxuICAgICAgICB0aGlzLnRleHRFbmNvZGVyID0gYXJncy50ZXh0RW5jb2RlcjtcclxuICAgICAgICB0aGlzLnRleHREZWNvZGVyID0gYXJncy50ZXh0RGVjb2RlcjtcclxuICAgICAgICB0aGlzLmFiaVR5cGVzID0gc2VyLmdldFR5cGVzRnJvbUFiaShzZXIuY3JlYXRlQWJpVHlwZXMoKSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblR5cGVzID0gc2VyLmdldFR5cGVzRnJvbUFiaShzZXIuY3JlYXRlVHJhbnNhY3Rpb25UeXBlcygpKTtcclxuICAgIH1cclxuICAgIC8qKiBEZWNvZGVzIGFuIGFiaSBhcyBVaW50OEFycmF5IGludG8ganNvbi4gKi9cclxuICAgIEFwaS5wcm90b3R5cGUucmF3QWJpVG9Kc29uID0gZnVuY3Rpb24gKHJhd0FiaSkge1xyXG4gICAgICAgIHZhciBidWZmZXIgPSBuZXcgc2VyLlNlcmlhbEJ1ZmZlcih7XHJcbiAgICAgICAgICAgIHRleHRFbmNvZGVyOiB0aGlzLnRleHRFbmNvZGVyLFxyXG4gICAgICAgICAgICB0ZXh0RGVjb2RlcjogdGhpcy50ZXh0RGVjb2RlcixcclxuICAgICAgICAgICAgYXJyYXk6IHJhd0FiaSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXNlci5zdXBwb3J0ZWRBYmlWZXJzaW9uKGJ1ZmZlci5nZXRTdHJpbmcoKSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBhYmkgdmVyc2lvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWZmZXIucmVzdGFydFJlYWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hYmlUeXBlcy5nZXQoJ2FiaV9kZWYnKS5kZXNlcmlhbGl6ZShidWZmZXIpO1xyXG4gICAgfTtcclxuICAgIC8qKiBFbmNvZGVzIGEganNvbiBhYmkgYXMgVWludDhBcnJheS4gKi9cclxuICAgIEFwaS5wcm90b3R5cGUuanNvblRvUmF3QWJpID0gZnVuY3Rpb24gKGpzb25BYmkpIHtcclxuICAgICAgICB2YXIgYnVmZmVyID0gbmV3IHNlci5TZXJpYWxCdWZmZXIoe1xyXG4gICAgICAgICAgICB0ZXh0RW5jb2RlcjogdGhpcy50ZXh0RW5jb2RlcixcclxuICAgICAgICAgICAgdGV4dERlY29kZXI6IHRoaXMudGV4dERlY29kZXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hYmlUeXBlcy5nZXQoJ2FiaV9kZWYnKS5zZXJpYWxpemUoYnVmZmVyLCBqc29uQWJpKTtcclxuICAgICAgICBpZiAoIXNlci5zdXBwb3J0ZWRBYmlWZXJzaW9uKGJ1ZmZlci5nZXRTdHJpbmcoKSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBhYmkgdmVyc2lvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyLmFzVWludDhBcnJheSgpO1xyXG4gICAgfTtcclxuICAgIC8qKiBHZXQgYWJpIGluIGJvdGggYmluYXJ5IGFuZCBzdHJ1Y3R1cmVkIGZvcm1zLiBGZXRjaCB3aGVuIG5lZWRlZC4gKi9cclxuICAgIEFwaS5wcm90b3R5cGUuZ2V0Q2FjaGVkQWJpID0gZnVuY3Rpb24gKGFjY291bnROYW1lLCByZWxvYWQpIHtcclxuICAgICAgICBpZiAocmVsb2FkID09PSB2b2lkIDApIHsgcmVsb2FkID0gZmFsc2U7IH1cclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjYWNoZWRBYmksIHJhd0FiaSwgYWJpLCBlXzE7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVsb2FkICYmIHRoaXMuY2FjaGVkQWJpcy5nZXQoYWNjb3VudE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5jYWNoZWRBYmlzLmdldChhY2NvdW50TmFtZSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuYWJpUHJvdmlkZXIuZ2V0UmF3QWJpKGFjY291bnROYW1lKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdBYmkgPSAoX2Euc2VudCgpKS5hYmk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiaSA9IHRoaXMucmF3QWJpVG9Kc29uKHJhd0FiaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlZEFiaSA9IHsgcmF3QWJpOiByYXdBYmksIGFiaTogYWJpIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEubWVzc2FnZSA9IFwiZmV0Y2hpbmcgYWJpIGZvciBcIiArIGFjY291bnROYW1lICsgXCI6IFwiICsgZV8xLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FjaGVkQWJpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGFiaSBmb3IgXCIgKyBhY2NvdW50TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZWRBYmlzLnNldChhY2NvdW50TmFtZSwgY2FjaGVkQWJpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGNhY2hlZEFiaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBHZXQgYWJpIGluIHN0cnVjdHVyZWQgZm9ybS4gRmV0Y2ggd2hlbiBuZWVkZWQuICovXHJcbiAgICBBcGkucHJvdG90eXBlLmdldEFiaSA9IGZ1bmN0aW9uIChhY2NvdW50TmFtZSwgcmVsb2FkKSB7XHJcbiAgICAgICAgaWYgKHJlbG9hZCA9PT0gdm9pZCAwKSB7IHJlbG9hZCA9IGZhbHNlOyB9XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldENhY2hlZEFiaShhY2NvdW50TmFtZSwgcmVsb2FkKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgKF9hLnNlbnQoKSkuYWJpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIEdldCBhYmlzIG5lZWRlZCBieSBhIHRyYW5zYWN0aW9uICovXHJcbiAgICBBcGkucHJvdG90eXBlLmdldFRyYW5zYWN0aW9uQWJpcyA9IGZ1bmN0aW9uICh0cmFuc2FjdGlvbiwgcmVsb2FkKSB7XHJcbiAgICAgICAgaWYgKHJlbG9hZCA9PT0gdm9pZCAwKSB7IHJlbG9hZCA9IGZhbHNlOyB9XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYWN0aW9ucywgYWNjb3VudHMsIHVuaXF1ZUFjY291bnRzLCBhY3Rpb25Qcm9taXNlcztcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9ucyA9ICh0cmFuc2FjdGlvbi5jb250ZXh0X2ZyZWVfYWN0aW9ucyB8fCBbXSkuY29uY2F0KHRyYW5zYWN0aW9uLmFjdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgYWNjb3VudHMgPSBhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBhY3Rpb24uYWNjb3VudDsgfSk7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVBY2NvdW50cyA9IG5ldyBTZXQoYWNjb3VudHMpO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uUHJvbWlzZXMgPSBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQodW5pcXVlQWNjb3VudHMpKS5tYXAoZnVuY3Rpb24gKGFjY291bnQpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lOiBhY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldENhY2hlZEFiaShhY2NvdW50LCByZWxvYWQpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChfYS5hYmkgPSAoX2Iuc2VudCgpKS5yYXdBYmksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pOyB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLmFsbChhY3Rpb25Qcm9taXNlcyldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogR2V0IGRhdGEgbmVlZGVkIHRvIHNlcmlhbGl6ZSBhY3Rpb25zIGluIGEgY29udHJhY3QgKi9cclxuICAgIEFwaS5wcm90b3R5cGUuZ2V0Q29udHJhY3QgPSBmdW5jdGlvbiAoYWNjb3VudE5hbWUsIHJlbG9hZCkge1xyXG4gICAgICAgIGlmIChyZWxvYWQgPT09IHZvaWQgMCkgeyByZWxvYWQgPSBmYWxzZTsgfVxyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFiaSwgdHlwZXMsIGFjdGlvbnMsIF9hLCBfYiwgX2MsIG5hbWVfMSwgdHlwZSwgcmVzdWx0O1xyXG4gICAgICAgICAgICB2YXIgZV8yLCBfZDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWxvYWQgJiYgdGhpcy5jb250cmFjdHMuZ2V0KGFjY291bnROYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuY29udHJhY3RzLmdldChhY2NvdW50TmFtZSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0QWJpKGFjY291bnROYW1lLCByZWxvYWQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiaSA9IF9lLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXMgPSBzZXIuZ2V0VHlwZXNGcm9tQWJpKHNlci5jcmVhdGVJbml0aWFsVHlwZXMoKSwgYWJpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2EgPSBfX3ZhbHVlcyhhYmkuYWN0aW9ucyksIF9iID0gX2EubmV4dCgpOyAhX2IuZG9uZTsgX2IgPSBfYS5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyA9IF9iLnZhbHVlLCBuYW1lXzEgPSBfYy5uYW1lLCB0eXBlID0gX2MudHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldChuYW1lXzEsIHNlci5nZXRUeXBlKHR5cGVzLCB0eXBlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfYiAmJiAhX2IuZG9uZSAmJiAoX2QgPSBfYS5yZXR1cm4pKSBfZC5jYWxsKF9hKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7IHR5cGVzOiB0eXBlcywgYWN0aW9uczogYWN0aW9ucyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyYWN0cy5zZXQoYWNjb3VudE5hbWUsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogQ29udmVydCBgdmFsdWVgIHRvIGJpbmFyeSBmb3JtLiBgdHlwZWAgbXVzdCBiZSBhIGJ1aWx0LWluIGFiaSB0eXBlIG9yIGluIGB0cmFuc2FjdGlvbi5hYmkuanNvbmAuICovXHJcbiAgICBBcGkucHJvdG90eXBlLnNlcmlhbGl6ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHR5cGUsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblR5cGVzLmdldCh0eXBlKS5zZXJpYWxpemUoYnVmZmVyLCB2YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIENvbnZlcnQgZGF0YSBpbiBgYnVmZmVyYCB0byBzdHJ1Y3R1cmVkIGZvcm0uIGB0eXBlYCBtdXN0IGJlIGEgYnVpbHQtaW4gYWJpIHR5cGUgb3IgaW4gYHRyYW5zYWN0aW9uLmFiaS5qc29uYC4gKi9cclxuICAgIEFwaS5wcm90b3R5cGUuZGVzZXJpYWxpemUgPSBmdW5jdGlvbiAoYnVmZmVyLCB0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNhY3Rpb25UeXBlcy5nZXQodHlwZSkuZGVzZXJpYWxpemUoYnVmZmVyKTtcclxuICAgIH07XHJcbiAgICAvKiogQ29udmVydCBhIHRyYW5zYWN0aW9uIHRvIGJpbmFyeSAqL1xyXG4gICAgQXBpLnByb3RvdHlwZS5zZXJpYWxpemVUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uICh0cmFuc2FjdGlvbikge1xyXG4gICAgICAgIHZhciBidWZmZXIgPSBuZXcgc2VyLlNlcmlhbEJ1ZmZlcih7IHRleHRFbmNvZGVyOiB0aGlzLnRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlcjogdGhpcy50ZXh0RGVjb2RlciB9KTtcclxuICAgICAgICB0aGlzLnNlcmlhbGl6ZShidWZmZXIsICd0cmFuc2FjdGlvbicsIF9fYXNzaWduKHsgbWF4X25ldF91c2FnZV93b3JkczogMCwgbWF4X2NwdV91c2FnZV9tczogMCwgZGVsYXlfc2VjOiAwLCBjb250ZXh0X2ZyZWVfYWN0aW9uczogW10sIGFjdGlvbnM6IFtdLCB0cmFuc2FjdGlvbl9leHRlbnNpb25zOiBbXSB9LCB0cmFuc2FjdGlvbikpO1xyXG4gICAgICAgIHJldHVybiBidWZmZXIuYXNVaW50OEFycmF5KCk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFNlcmlhbGl6ZSBjb250ZXh0LWZyZWUgZGF0YSAqL1xyXG4gICAgQXBpLnByb3RvdHlwZS5zZXJpYWxpemVDb250ZXh0RnJlZURhdGEgPSBmdW5jdGlvbiAoY29udGV4dEZyZWVEYXRhKSB7XHJcbiAgICAgICAgdmFyIGVfMywgX2E7XHJcbiAgICAgICAgaWYgKCFjb250ZXh0RnJlZURhdGEgfHwgIWNvbnRleHRGcmVlRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBidWZmZXIgPSBuZXcgc2VyLlNlcmlhbEJ1ZmZlcih7IHRleHRFbmNvZGVyOiB0aGlzLnRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlcjogdGhpcy50ZXh0RGVjb2RlciB9KTtcclxuICAgICAgICBidWZmZXIucHVzaFZhcnVpbnQzMihjb250ZXh0RnJlZURhdGEubGVuZ3RoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjb250ZXh0RnJlZURhdGFfMSA9IF9fdmFsdWVzKGNvbnRleHRGcmVlRGF0YSksIGNvbnRleHRGcmVlRGF0YV8xXzEgPSBjb250ZXh0RnJlZURhdGFfMS5uZXh0KCk7ICFjb250ZXh0RnJlZURhdGFfMV8xLmRvbmU7IGNvbnRleHRGcmVlRGF0YV8xXzEgPSBjb250ZXh0RnJlZURhdGFfMS5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gY29udGV4dEZyZWVEYXRhXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoQnl0ZXMoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0RnJlZURhdGFfMV8xICYmICFjb250ZXh0RnJlZURhdGFfMV8xLmRvbmUgJiYgKF9hID0gY29udGV4dEZyZWVEYXRhXzEucmV0dXJuKSkgX2EuY2FsbChjb250ZXh0RnJlZURhdGFfMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyLmFzVWludDhBcnJheSgpO1xyXG4gICAgfTtcclxuICAgIC8qKiBDb252ZXJ0IGEgdHJhbnNhY3Rpb24gZnJvbSBiaW5hcnkuIExlYXZlcyBhY3Rpb25zIGluIGhleC4gKi9cclxuICAgIEFwaS5wcm90b3R5cGUuZGVzZXJpYWxpemVUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uICh0cmFuc2FjdGlvbikge1xyXG4gICAgICAgIHZhciBidWZmZXIgPSBuZXcgc2VyLlNlcmlhbEJ1ZmZlcih7IHRleHRFbmNvZGVyOiB0aGlzLnRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlcjogdGhpcy50ZXh0RGVjb2RlciB9KTtcclxuICAgICAgICBidWZmZXIucHVzaEFycmF5KHRyYW5zYWN0aW9uKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZShidWZmZXIsICd0cmFuc2FjdGlvbicpO1xyXG4gICAgfTtcclxuICAgIC8vIE9yZGVyIG9mIGFkZGluZyB0byB0cmFuc2FjdGlvbl9leHRlbnNpb24gaXMgdHJhbnNhY3Rpb25fZXh0ZW5zaW9uIGlkIGFzY2VuZGluZ1xyXG4gICAgQXBpLnByb3RvdHlwZS5zZXJpYWxpemVUcmFuc2FjdGlvbkV4dGVuc2lvbnMgPSBmdW5jdGlvbiAodHJhbnNhY3Rpb24pIHtcclxuICAgICAgICB2YXIgdHJhbnNhY3Rpb25fZXh0ZW5zaW9ucyA9IFtdO1xyXG4gICAgICAgIGlmICh0cmFuc2FjdGlvbi5yZXNvdXJjZV9wYXllcikge1xyXG4gICAgICAgICAgICB2YXIgZXh0ZW5zaW9uQnVmZmVyID0gbmV3IHNlci5TZXJpYWxCdWZmZXIoeyB0ZXh0RW5jb2RlcjogdGhpcy50ZXh0RW5jb2RlciwgdGV4dERlY29kZXI6IHRoaXMudGV4dERlY29kZXIgfSk7XHJcbiAgICAgICAgICAgIHZhciB0eXBlcyA9IHNlci5nZXRUeXBlc0Zyb21BYmkoc2VyLmNyZWF0ZVRyYW5zYWN0aW9uRXh0ZW5zaW9uVHlwZXMoKSk7XHJcbiAgICAgICAgICAgIHR5cGVzLmdldCgncmVzb3VyY2VfcGF5ZXInKS5zZXJpYWxpemUoZXh0ZW5zaW9uQnVmZmVyLCB0cmFuc2FjdGlvbi5yZXNvdXJjZV9wYXllcik7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uX2V4dGVuc2lvbnMgPSBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZCh0cmFuc2FjdGlvbl9leHRlbnNpb25zKSksIFtbMSwgc2VyLmFycmF5VG9IZXgoZXh0ZW5zaW9uQnVmZmVyLmFzVWludDhBcnJheSgpKV1dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uX2V4dGVuc2lvbnM7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8gVXNhZ2U6IHRyYW5zYWN0aW9uID0gey4uLnRyYW5zYWN0aW9uLCAuLi50aGlzLmRlc2VyaWFsaXplVHJhbnNhY3Rpb25FeHRlbnNpb25zKHRyYW5zYWN0aW9uLnRyYW5zYWN0aW9uX2V4dGVuc2lvbnMpfVxyXG4gICAgQXBpLnByb3RvdHlwZS5kZXNlcmlhbGl6ZVRyYW5zYWN0aW9uRXh0ZW5zaW9ucyA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgdHJhbnNhY3Rpb24gPSB7fTtcclxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGV4dGVuc2lvbkRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIHRyYW5zYWN0aW9uRXh0ZW5zaW9uID0gX3RoaXMudHJhbnNhY3Rpb25FeHRlbnNpb25zLmZpbmQoZnVuY3Rpb24gKGV4dGVuc2lvbikgeyByZXR1cm4gZXh0ZW5zaW9uLmlkID09PSBleHRlbnNpb25EYXRhWzBdOyB9KTtcclxuICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uRXh0ZW5zaW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRyYW5zYWN0aW9uIEV4dGVuc2lvbiBjb3VsZCBub3QgYmUgZGV0ZXJtaW5lZDogXCIgKyBleHRlbnNpb25EYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdHlwZXMgPSBzZXIuZ2V0VHlwZXNGcm9tQWJpKHNlci5jcmVhdGVUcmFuc2FjdGlvbkV4dGVuc2lvblR5cGVzKCkpO1xyXG4gICAgICAgICAgICB2YXIgZXh0ZW5zaW9uQnVmZmVyID0gbmV3IHNlci5TZXJpYWxCdWZmZXIoeyB0ZXh0RW5jb2RlcjogX3RoaXMudGV4dEVuY29kZXIsIHRleHREZWNvZGVyOiBfdGhpcy50ZXh0RGVjb2RlciB9KTtcclxuICAgICAgICAgICAgZXh0ZW5zaW9uQnVmZmVyLnB1c2hBcnJheShzZXIuaGV4VG9VaW50OEFycmF5KGV4dGVuc2lvbkRhdGFbMV0pKTtcclxuICAgICAgICAgICAgdmFyIGRlc2VyaWFsaXplZE9iaiA9IHR5cGVzLmdldCh0cmFuc2FjdGlvbkV4dGVuc2lvbi50eXBlKS5kZXNlcmlhbGl6ZShleHRlbnNpb25CdWZmZXIpO1xyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uRGF0YVswXSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZGVzZXJpYWxpemVkT2JqLm1heF9uZXRfYnl0ZXMgPSBOdW1iZXIoZGVzZXJpYWxpemVkT2JqLm1heF9uZXRfYnl0ZXMpO1xyXG4gICAgICAgICAgICAgICAgZGVzZXJpYWxpemVkT2JqLm1heF9jcHVfdXMgPSBOdW1iZXIoZGVzZXJpYWxpemVkT2JqLm1heF9jcHVfdXMpO1xyXG4gICAgICAgICAgICAgICAgZGVzZXJpYWxpemVkT2JqLm1heF9tZW1vcnlfYnl0ZXMgPSBOdW1iZXIoZGVzZXJpYWxpemVkT2JqLm1heF9tZW1vcnlfYnl0ZXMpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ucmVzb3VyY2VfcGF5ZXIgPSBkZXNlcmlhbGl6ZWRPYmo7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb247XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLy8gVHJhbnNhY3Rpb24gZXh0ZW5zaW9ucyBhcmUgc2VyaWFsaXplZCBhbmQgbW92ZWQgdG8gYHRyYW5zYWN0aW9uX2V4dGVuc2lvbnNgLCBkZXNlcmlhbGl6ZWQgb2JqZWN0cyBhcmUgbm90IG5lZWRlZCBvbiB0aGUgdHJhbnNhY3Rpb25cclxuICAgIEFwaS5wcm90b3R5cGUuZGVsZXRlVHJhbnNhY3Rpb25FeHRlbnNpb25PYmplY3RzID0gZnVuY3Rpb24gKHRyYW5zYWN0aW9uKSB7XHJcbiAgICAgICAgZGVsZXRlIHRyYW5zYWN0aW9uLnJlc291cmNlX3BheWVyO1xyXG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgIH07XHJcbiAgICAvKiogQ29udmVydCBhY3Rpb25zIHRvIGhleCAqL1xyXG4gICAgQXBpLnByb3RvdHlwZS5zZXJpYWxpemVBY3Rpb25zID0gZnVuY3Rpb24gKGFjdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UuYWxsKGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY2NvdW50LCBuYW1lLCBhdXRob3JpemF0aW9uLCBkYXRhLCBjb250cmFjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQgPSBhY3Rpb24uYWNjb3VudCwgbmFtZSA9IGFjdGlvbi5uYW1lLCBhdXRob3JpemF0aW9uID0gYWN0aW9uLmF1dGhvcml6YXRpb24sIGRhdGEgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0Q29udHJhY3QoYWNjb3VudCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFjdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgYWN0aW9uXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBzZXIuc2VyaWFsaXplQWN0aW9uKGNvbnRyYWN0LCBhY2NvdW50LCBuYW1lLCBhdXRob3JpemF0aW9uLCBkYXRhLCB0aGlzLnRleHRFbmNvZGVyLCB0aGlzLnRleHREZWNvZGVyKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBDb252ZXJ0IGFjdGlvbnMgZnJvbSBoZXggKi9cclxuICAgIEFwaS5wcm90b3R5cGUuZGVzZXJpYWxpemVBY3Rpb25zID0gZnVuY3Rpb24gKGFjdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UuYWxsKGFjdGlvbnMubWFwKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjY291bnQgPSBfYS5hY2NvdW50LCBuYW1lID0gX2EubmFtZSwgYXV0aG9yaXphdGlvbiA9IF9hLmF1dGhvcml6YXRpb24sIGRhdGEgPSBfYS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udHJhY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0Q29udHJhY3QoYWNjb3VudCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYWN0ID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBzZXIuZGVzZXJpYWxpemVBY3Rpb24oY29udHJhY3QsIGFjY291bnQsIG5hbWUsIGF1dGhvcml6YXRpb24sIGRhdGEsIHRoaXMudGV4dEVuY29kZXIsIHRoaXMudGV4dERlY29kZXIpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIENvbnZlcnQgYSB0cmFuc2FjdGlvbiBmcm9tIGJpbmFyeS4gQWxzbyBkZXNlcmlhbGl6ZXMgYWN0aW9ucy4gKi9cclxuICAgIEFwaS5wcm90b3R5cGUuZGVzZXJpYWxpemVUcmFuc2FjdGlvbldpdGhBY3Rpb25zID0gZnVuY3Rpb24gKHRyYW5zYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZGVzZXJpYWxpemVkVHJhbnNhY3Rpb24sIGRlc2VyaWFsaXplZENGQWN0aW9ucywgZGVzZXJpYWxpemVkQWN0aW9ucztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2FjdGlvbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gc2VyLmhleFRvVWludDhBcnJheSh0cmFuc2FjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzZXJpYWxpemVkVHJhbnNhY3Rpb24gPSB0aGlzLmRlc2VyaWFsaXplVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmRlc2VyaWFsaXplQWN0aW9ucyhkZXNlcmlhbGl6ZWRUcmFuc2FjdGlvbi5jb250ZXh0X2ZyZWVfYWN0aW9ucyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzZXJpYWxpemVkQ0ZBY3Rpb25zID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmRlc2VyaWFsaXplQWN0aW9ucyhkZXNlcmlhbGl6ZWRUcmFuc2FjdGlvbi5hY3Rpb25zKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNlcmlhbGl6ZWRBY3Rpb25zID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgX19hc3NpZ24oX19hc3NpZ24oe30sIGRlc2VyaWFsaXplZFRyYW5zYWN0aW9uKSwgeyBjb250ZXh0X2ZyZWVfYWN0aW9uczogZGVzZXJpYWxpemVkQ0ZBY3Rpb25zLCBhY3Rpb25zOiBkZXNlcmlhbGl6ZWRBY3Rpb25zIH0pXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIERlZmxhdGUgYSBzZXJpYWxpemVkIG9iamVjdCAqL1xyXG4gICAgQXBpLnByb3RvdHlwZS5kZWZsYXRlU2VyaWFsaXplZEFycmF5ID0gZnVuY3Rpb24gKHNlcmlhbGl6ZWRBcnJheSkge1xyXG4gICAgICAgIHJldHVybiBwYWtvXzEuZGVmbGF0ZShzZXJpYWxpemVkQXJyYXksIHsgbGV2ZWw6IDkgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIEluZmxhdGUgYSBjb21wcmVzc2VkIHNlcmlhbGl6ZWQgb2JqZWN0ICovXHJcbiAgICBBcGkucHJvdG90eXBlLmluZmxhdGVTZXJpYWxpemVkQXJyYXkgPSBmdW5jdGlvbiAoY29tcHJlc3NlZFNlcmlhbGl6ZWRBcnJheSkge1xyXG4gICAgICAgIHJldHVybiBwYWtvXzEuaW5mbGF0ZShjb21wcmVzc2VkU2VyaWFsaXplZEFycmF5KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbmQgb3B0aW9uYWxseSBicm9hZGNhc3QgYSB0cmFuc2FjdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBOYW1lZCBQYXJhbWV0ZXJzOlxyXG4gICAgICogYGJyb2FkY2FzdGA6IGJyb2FkY2FzdCB0aGlzIHRyYW5zYWN0aW9uP1xyXG4gICAgICogYHNpZ25gOiBzaWduIHRoaXMgdHJhbnNhY3Rpb24/XHJcbiAgICAgKiBgY29tcHJlc3Npb25gOiBjb21wcmVzcyB0aGlzIHRyYW5zYWN0aW9uP1xyXG4gICAgICogYHJlYWRPbmx5VHJ4YDogcmVhZCBvbmx5IHRyYW5zYWN0aW9uP1xyXG4gICAgICogYHJldHVybkZhaWx1cmVUcmFjZXNgOiByZXR1cm4gZmFpbHVyZSB0cmFjZXM/IChvbmx5IGF2YWlsYWJsZSBmb3IgcmVhZCBvbmx5IHRyYW5zYWN0aW9ucyBjdXJyZW50bHkpXHJcbiAgICAgKlxyXG4gICAgICogSWYgYm90aCBgYmxvY2tzQmVoaW5kYCBhbmQgYGV4cGlyZVNlY29uZHNgIGFyZSBwcmVzZW50LFxyXG4gICAgICogdGhlbiBmZXRjaCB0aGUgYmxvY2sgd2hpY2ggaXMgYGJsb2Nrc0JlaGluZGAgYmVoaW5kIGhlYWQgYmxvY2ssXHJcbiAgICAgKiB1c2UgaXQgYXMgYSByZWZlcmVuY2UgZm9yIFRBUG9TLCBhbmQgZXhwaXJlIHRoZSB0cmFuc2FjdGlvbiBgZXhwaXJlU2Vjb25kc2AgYWZ0ZXIgdGhhdCBibG9jaydzIHRpbWUuXHJcbiAgICAgKlxyXG4gICAgICogSWYgYm90aCBgdXNlTGFzdElycmV2ZXJzaWJsZWAgYW5kIGBleHBpcmVTZWNvbmRzYCBhcmUgcHJlc2VudCxcclxuICAgICAqIHRoZW4gZmV0Y2ggdGhlIGxhc3QgaXJyZXZlcnNpYmxlIGJsb2NrLCB1c2UgaXQgYXMgYSByZWZlcmVuY2UgZm9yIFRBUG9TLFxyXG4gICAgICogYW5kIGV4cGlyZSB0aGUgdHJhbnNhY3Rpb24gYGV4cGlyZVNlY29uZHNgIGFmdGVyIHRoYXQgYmxvY2sncyB0aW1lLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIG5vZGUgcmVzcG9uc2UgaWYgYGJyb2FkY2FzdGAsIGB7c2lnbmF0dXJlcywgc2VyaWFsaXplZFRyYW5zYWN0aW9ufWAgaWYgYCFicm9hZGNhc3RgXHJcbiAgICAgKi9cclxuICAgIEFwaS5wcm90b3R5cGUudHJhbnNhY3QgPSBmdW5jdGlvbiAodHJhbnNhY3Rpb24sIF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIF9jID0gX2IuYnJvYWRjYXN0LCBicm9hZGNhc3QgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IF9iLnNpZ24sIHNpZ24gPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kLCByZWFkT25seVRyeCA9IF9iLnJlYWRPbmx5VHJ4LCByZXR1cm5GYWlsdXJlVHJhY2VzID0gX2IucmV0dXJuRmFpbHVyZVRyYWNlcywgcmVxdWlyZWRLZXlzID0gX2IucmVxdWlyZWRLZXlzLCBjb21wcmVzc2lvbiA9IF9iLmNvbXByZXNzaW9uLCBibG9ja3NCZWhpbmQgPSBfYi5ibG9ja3NCZWhpbmQsIHVzZUxhc3RJcnJldmVyc2libGUgPSBfYi51c2VMYXN0SXJyZXZlcnNpYmxlLCBleHBpcmVTZWNvbmRzID0gX2IuZXhwaXJlU2Vjb25kcztcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmZvLCBhYmlzLCBfZSwgc2VyaWFsaXplZFRyYW5zYWN0aW9uLCBzZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhLCBwdXNoVHJhbnNhY3Rpb25BcmdzLCBhdmFpbGFibGVLZXlzO1xyXG4gICAgICAgICAgICB2YXIgX2Y7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2cpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2cubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvY2tzQmVoaW5kID09PSAnbnVtYmVyJyAmJiB1c2VMYXN0SXJyZXZlcnNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZSBlaXRoZXIgYmxvY2tzQmVoaW5kIG9yIHVzZUxhc3RJcnJldmVyc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmNoYWluSWQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJwYy5nZXRfaW5mbygpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8gPSBfZy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhaW5JZCA9IGluZm8uY2hhaW5faWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9nLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKCh0eXBlb2YgYmxvY2tzQmVoaW5kID09PSAnbnVtYmVyJyB8fCB1c2VMYXN0SXJyZXZlcnNpYmxlKSAmJiBleHBpcmVTZWNvbmRzKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2VuZXJhdGVUYXBvcyhpbmZvLCB0cmFuc2FjdGlvbiwgYmxvY2tzQmVoaW5kLCB1c2VMYXN0SXJyZXZlcnNpYmxlLCBleHBpcmVTZWNvbmRzKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IF9nLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2cubGFiZWwgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhhc1JlcXVpcmVkVGFwb3NGaWVsZHModHJhbnNhY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3IgVEFQT1MgZmllbGRzIGFyZSBub3QgcHJlc2VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0VHJhbnNhY3Rpb25BYmlzKHRyYW5zYWN0aW9uKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhYmlzID0gX2cuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZSA9IFtfX2Fzc2lnbih7fSwgdHJhbnNhY3Rpb24pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2YgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zZXJpYWxpemVUcmFuc2FjdGlvbkV4dGVuc2lvbnModHJhbnNhY3Rpb24pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mLnRyYW5zYWN0aW9uX2V4dGVuc2lvbnMgPSBfZy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2VyaWFsaXplQWN0aW9ucyh0cmFuc2FjdGlvbi5jb250ZXh0X2ZyZWVfYWN0aW9ucyB8fCBbXSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2YuY29udGV4dF9mcmVlX2FjdGlvbnMgPSBfZy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2VyaWFsaXplQWN0aW9ucyh0cmFuc2FjdGlvbi5hY3Rpb25zKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IF9fYXNzaWduLmFwcGx5KHZvaWQgMCwgX2UuY29uY2F0KFsoX2YuYWN0aW9ucyA9IF9nLnNlbnQoKSwgX2YpXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IHRoaXMuZGVsZXRlVHJhbnNhY3Rpb25FeHRlbnNpb25PYmplY3RzKHRyYW5zYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZFRyYW5zYWN0aW9uID0gdGhpcy5zZXJpYWxpemVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRDb250ZXh0RnJlZURhdGEgPSB0aGlzLnNlcmlhbGl6ZUNvbnRleHRGcmVlRGF0YSh0cmFuc2FjdGlvbi5jb250ZXh0X2ZyZWVfZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hUcmFuc2FjdGlvbkFyZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkVHJhbnNhY3Rpb246IHNlcmlhbGl6ZWRUcmFuc2FjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRDb250ZXh0RnJlZURhdGE6IHNlcmlhbGl6ZWRDb250ZXh0RnJlZURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmVzOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNpZ24pIHJldHVybiBbMyAvKmJyZWFrKi8sIDEzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhcmVxdWlyZWRLZXlzKSByZXR1cm4gWzMgLypicmVhayovLCAxMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2lnbmF0dXJlUHJvdmlkZXIuZ2V0QXZhaWxhYmxlS2V5cygpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUtleXMgPSBfZy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuYXV0aG9yaXR5UHJvdmlkZXIuZ2V0UmVxdWlyZWRLZXlzKHsgdHJhbnNhY3Rpb246IHRyYW5zYWN0aW9uLCBhdmFpbGFibGVLZXlzOiBhdmFpbGFibGVLZXlzIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZEtleXMgPSBfZy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9nLmxhYmVsID0gMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zaWduYXR1cmVQcm92aWRlci5zaWduKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6IHRoaXMuY2hhaW5JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkS2V5czogcmVxdWlyZWRLZXlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZFRyYW5zYWN0aW9uOiBzZXJpYWxpemVkVHJhbnNhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhOiBzZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJpczogYWJpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hUcmFuc2FjdGlvbkFyZ3MgPSBfZy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9nLmxhYmVsID0gMTM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJyb2FkY2FzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXByZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMucHVzaENvbXByZXNzZWRTaWduZWRUcmFuc2FjdGlvbihwdXNoVHJhbnNhY3Rpb25BcmdzLCByZWFkT25seVRyeCwgcmV0dXJuRmFpbHVyZVRyYWNlcyldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMucHVzaFNpZ25lZFRyYW5zYWN0aW9uKHB1c2hUcmFuc2FjdGlvbkFyZ3MsIHJlYWRPbmx5VHJ4LCByZXR1cm5GYWlsdXJlVHJhY2VzKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHB1c2hUcmFuc2FjdGlvbkFyZ3NdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBBcGkucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGFjY291bnQsIHNob3J0LCBxdWVyeSwgX2EpIHtcclxuICAgICAgICB2YXIgc2lnbiA9IF9hLnNpZ24sIHJlcXVpcmVkS2V5cyA9IF9hLnJlcXVpcmVkS2V5cywgX2IgPSBfYS5hdXRob3JpemF0aW9uLCBhdXRob3JpemF0aW9uID0gX2IgPT09IHZvaWQgMCA/IFtdIDogX2I7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW5mbywgcmVmQmxvY2ssIHF1ZXJ5QnVmZmVyLCB0cmFuc2FjdGlvbiwgc2VyaWFsaXplZFRyYW5zYWN0aW9uLCBzaWduYXR1cmVzLCBhYmlzLCBhdmFpbGFibGVLZXlzLCBzaWduUmVzcG9uc2UsIHJlc3BvbnNlLCByZXR1cm5CdWZmZXI7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucnBjLmdldF9pbmZvKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbyA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy50cnlSZWZCbG9ja0Zyb21HZXRJbmZvKGluZm8pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJsb2NrID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeUJ1ZmZlciA9IG5ldyBzZXIuU2VyaWFsQnVmZmVyKHsgdGV4dEVuY29kZXI6IHRoaXMudGV4dEVuY29kZXIsIHRleHREZWNvZGVyOiB0aGlzLnRleHREZWNvZGVyIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXIuc2VyaWFsaXplUXVlcnkocXVlcnlCdWZmZXIsIHF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc2VyLnRyYW5zYWN0aW9uSGVhZGVyKHJlZkJsb2NrLCA2MCAqIDMwKSksIHsgY29udGV4dF9mcmVlX2FjdGlvbnM6IFtdLCBhY3Rpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50OiBhY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHNlci5hcnJheVRvSGV4KHF1ZXJ5QnVmZmVyLmFzVWludDhBcnJheSgpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZFRyYW5zYWN0aW9uID0gdGhpcy5zZXJpYWxpemVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaWduKSByZXR1cm4gWzMgLypicmVhayovLCA4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRUcmFuc2FjdGlvbkFiaXModHJhbnNhY3Rpb24pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiaXMgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXJlcXVpcmVkS2V5cykgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2lnbmF0dXJlUHJvdmlkZXIuZ2V0QXZhaWxhYmxlS2V5cygpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUtleXMgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuYXV0aG9yaXR5UHJvdmlkZXIuZ2V0UmVxdWlyZWRLZXlzKHsgdHJhbnNhY3Rpb246IHRyYW5zYWN0aW9uLCBhdmFpbGFibGVLZXlzOiBhdmFpbGFibGVLZXlzIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkS2V5cyA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zaWduYXR1cmVQcm92aWRlci5zaWduKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6IHRoaXMuY2hhaW5JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkS2V5czogcmVxdWlyZWRLZXlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZFRyYW5zYWN0aW9uOiBzZXJpYWxpemVkVHJhbnNhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJpczogYWJpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnblJlc3BvbnNlID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmVzID0gc2lnblJlc3BvbnNlLnNpZ25hdHVyZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gODtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucnBjLnNlbmRfdHJhbnNhY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlczogc2lnbmF0dXJlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByZXNzaW9uOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZFRyYW5zYWN0aW9uOiBzZXJpYWxpemVkVHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkJ1ZmZlciA9IG5ldyBzZXIuU2VyaWFsQnVmZmVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRFbmNvZGVyOiB0aGlzLnRleHRFbmNvZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29kZXI6IHRoaXMudGV4dERlY29kZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheTogc2VyLmhleFRvVWludDhBcnJheShyZXNwb25zZS5wcm9jZXNzZWQuYWN0aW9uX3RyYWNlc1swXVsxXS5yZXR1cm5fdmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBzZXIuZGVzZXJpYWxpemVBbnl2YXJTaG9ydChyZXR1cm5CdWZmZXIpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBzZXIuZGVzZXJpYWxpemVBbnl2YXIocmV0dXJuQnVmZmVyKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogQnJvYWRjYXN0IGEgc2lnbmVkIHRyYW5zYWN0aW9uICovXHJcbiAgICBBcGkucHJvdG90eXBlLnB1c2hTaWduZWRUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uIChfYSwgcmVhZE9ubHlUcngsIHJldHVybkZhaWx1cmVUcmFjZXMpIHtcclxuICAgICAgICB2YXIgc2lnbmF0dXJlcyA9IF9hLnNpZ25hdHVyZXMsIHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiA9IF9hLnNlcmlhbGl6ZWRUcmFuc2FjdGlvbiwgc2VyaWFsaXplZENvbnRleHRGcmVlRGF0YSA9IF9hLnNlcmlhbGl6ZWRDb250ZXh0RnJlZURhdGE7XHJcbiAgICAgICAgaWYgKHJlYWRPbmx5VHJ4ID09PSB2b2lkIDApIHsgcmVhZE9ubHlUcnggPSBmYWxzZTsgfVxyXG4gICAgICAgIGlmIChyZXR1cm5GYWlsdXJlVHJhY2VzID09PSB2b2lkIDApIHsgcmV0dXJuRmFpbHVyZVRyYWNlcyA9IGZhbHNlOyB9XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVhZE9ubHlUcngpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5ycGMucHVzaF9yb190cmFuc2FjdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmVzOiBzaWduYXR1cmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZFRyYW5zYWN0aW9uOiBzZXJpYWxpemVkVHJhbnNhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhOiBzZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXR1cm5GYWlsdXJlVHJhY2VzKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5ycGMucHVzaF90cmFuc2FjdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZXM6IHNpZ25hdHVyZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRUcmFuc2FjdGlvbjogc2VyaWFsaXplZFRyYW5zYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhOiBzZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBBcGkucHJvdG90eXBlLnB1c2hDb21wcmVzc2VkU2lnbmVkVHJhbnNhY3Rpb24gPSBmdW5jdGlvbiAoX2EsIHJlYWRPbmx5VHJ4LCByZXR1cm5GYWlsdXJlVHJhY2VzKSB7XHJcbiAgICAgICAgdmFyIHNpZ25hdHVyZXMgPSBfYS5zaWduYXR1cmVzLCBzZXJpYWxpemVkVHJhbnNhY3Rpb24gPSBfYS5zZXJpYWxpemVkVHJhbnNhY3Rpb24sIHNlcmlhbGl6ZWRDb250ZXh0RnJlZURhdGEgPSBfYS5zZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhO1xyXG4gICAgICAgIGlmIChyZWFkT25seVRyeCA9PT0gdm9pZCAwKSB7IHJlYWRPbmx5VHJ4ID0gZmFsc2U7IH1cclxuICAgICAgICBpZiAocmV0dXJuRmFpbHVyZVRyYWNlcyA9PT0gdm9pZCAwKSB7IHJldHVybkZhaWx1cmVUcmFjZXMgPSBmYWxzZTsgfVxyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbXByZXNzZWRTZXJpYWxpemVkVHJhbnNhY3Rpb24sIGNvbXByZXNzZWRTZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wcmVzc2VkU2VyaWFsaXplZFRyYW5zYWN0aW9uID0gdGhpcy5kZWZsYXRlU2VyaWFsaXplZEFycmF5KHNlcmlhbGl6ZWRUcmFuc2FjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjb21wcmVzc2VkU2VyaWFsaXplZENvbnRleHRGcmVlRGF0YSA9IHRoaXMuZGVmbGF0ZVNlcmlhbGl6ZWRBcnJheShzZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhIHx8IG5ldyBVaW50OEFycmF5KDApKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZWFkT25seVRyeCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnJwYy5wdXNoX3JvX3RyYW5zYWN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZXM6IHNpZ25hdHVyZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcmVzc2lvbjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRUcmFuc2FjdGlvbjogY29tcHJlc3NlZFNlcmlhbGl6ZWRUcmFuc2FjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRDb250ZXh0RnJlZURhdGE6IGNvbXByZXNzZWRTZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJldHVybkZhaWx1cmVUcmFjZXMpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnJwYy5wdXNoX3RyYW5zYWN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlczogc2lnbmF0dXJlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJlc3Npb246IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRUcmFuc2FjdGlvbjogY29tcHJlc3NlZFNlcmlhbGl6ZWRUcmFuc2FjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZENvbnRleHRGcmVlRGF0YTogY29tcHJlc3NlZFNlcmlhbGl6ZWRDb250ZXh0RnJlZURhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEFwaS5wcm90b3R5cGUuZ2VuZXJhdGVUYXBvcyA9IGZ1bmN0aW9uIChpbmZvLCB0cmFuc2FjdGlvbiwgYmxvY2tzQmVoaW5kLCB1c2VMYXN0SXJyZXZlcnNpYmxlLCBleHBpcmVTZWNvbmRzKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmxvY2ssIHRhcG9zQmxvY2tOdW1iZXIsIHJlZkJsb2NrLCBfYTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhaW5mbykgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucnBjLmdldF9pbmZvKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VMYXN0SXJyZXZlcnNpYmxlKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy50cnlSZWZCbG9ja0Zyb21HZXRJbmZvKGluZm8pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgX19hc3NpZ24oX19hc3NpZ24oe30sIHNlci50cmFuc2FjdGlvbkhlYWRlcihibG9jaywgZXhwaXJlU2Vjb25kcykpLCB0cmFuc2FjdGlvbildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFwb3NCbG9ja051bWJlciA9IGluZm8uaGVhZF9ibG9ja19udW0gLSBibG9ja3NCZWhpbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRhcG9zQmxvY2tOdW1iZXIgPD0gaW5mby5sYXN0X2lycmV2ZXJzaWJsZV9ibG9ja19udW0pKSByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy50cnlHZXRCbG9ja0luZm8odGFwb3NCbG9ja051bWJlcildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy50cnlHZXRCbG9ja0hlYWRlclN0YXRlKHRhcG9zQmxvY2tOdW1iZXIpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZCbG9jayA9IF9hO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgX19hc3NpZ24oX19hc3NpZ24oe30sIHNlci50cmFuc2FjdGlvbkhlYWRlcihyZWZCbG9jaywgZXhwaXJlU2Vjb25kcykpLCB0cmFuc2FjdGlvbildO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvLyBldmVudHVhbGx5IGJyZWFrIG91dCBpbnRvIFRyYW5zYWN0aW9uVmFsaWRhdG9yIGNsYXNzXHJcbiAgICBBcGkucHJvdG90eXBlLmhhc1JlcXVpcmVkVGFwb3NGaWVsZHMgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgZXhwaXJhdGlvbiA9IF9hLmV4cGlyYXRpb24sIHJlZl9ibG9ja19udW0gPSBfYS5yZWZfYmxvY2tfbnVtLCByZWZfYmxvY2tfcHJlZml4ID0gX2EucmVmX2Jsb2NrX3ByZWZpeDtcclxuICAgICAgICByZXR1cm4gISEoZXhwaXJhdGlvbiAmJiB0eXBlb2YgKHJlZl9ibG9ja19udW0pID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgKHJlZl9ibG9ja19wcmVmaXgpID09PSAnbnVtYmVyJyk7XHJcbiAgICB9O1xyXG4gICAgQXBpLnByb3RvdHlwZS50cnlHZXRCbG9ja0hlYWRlclN0YXRlID0gZnVuY3Rpb24gKHRhcG9zQmxvY2tOdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlcnJvcl8xO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJwYy5nZXRfYmxvY2tfaGVhZGVyX3N0YXRlKHRhcG9zQmxvY2tOdW1iZXIpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy50cnlHZXRCbG9ja0luZm8odGFwb3NCbG9ja051bWJlcildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEFwaS5wcm90b3R5cGUudHJ5R2V0QmxvY2tJbmZvID0gZnVuY3Rpb24gKGJsb2NrTnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZXJyb3JfMjtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5ycGMuZ2V0X2Jsb2NrX2luZm8oYmxvY2tOdW1iZXIpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5ycGMuZ2V0X2Jsb2NrKGJsb2NrTnVtYmVyKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQXBpLnByb3RvdHlwZS50cnlSZWZCbG9ja0Zyb21HZXRJbmZvID0gZnVuY3Rpb24gKGluZm8pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBibG9jaztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoaW5mby5oYXNPd25Qcm9wZXJ0eSgnbGFzdF9pcnJldmVyc2libGVfYmxvY2tfaWQnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5oYXNPd25Qcm9wZXJ0eSgnbGFzdF9pcnJldmVyc2libGVfYmxvY2tfbnVtJykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm8uaGFzT3duUHJvcGVydHkoJ2xhc3RfaXJyZXZlcnNpYmxlX2Jsb2NrX3RpbWUnKSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX251bTogaW5mby5sYXN0X2lycmV2ZXJzaWJsZV9ibG9ja19udW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGluZm8ubGFzdF9pcnJldmVyc2libGVfYmxvY2tfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBpbmZvLmxhc3RfaXJyZXZlcnNpYmxlX2Jsb2NrX3RpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMudHJ5R2V0QmxvY2tJbmZvKGluZm8ubGFzdF9pcnJldmVyc2libGVfYmxvY2tfbnVtKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jayA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja19udW06IGJsb2NrLmJsb2NrX251bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogYmxvY2suaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBibG9jay50aW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQXBpLnByb3RvdHlwZS53aXRoID0gZnVuY3Rpb24gKGFjY291bnROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBY3Rpb25CdWlsZGVyKHRoaXMsIGFjY291bnROYW1lKTtcclxuICAgIH07XHJcbiAgICBBcGkucHJvdG90eXBlLmJ1aWxkVHJhbnNhY3Rpb24gPSBmdW5jdGlvbiAoY2IpIHtcclxuICAgICAgICB2YXIgdHggPSBuZXcgVHJhbnNhY3Rpb25CdWlsZGVyKHRoaXMpO1xyXG4gICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2IodHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHg7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFwaTtcclxufSgpKTsgLy8gQXBpXHJcbmV4cG9ydHMuQXBpID0gQXBpO1xyXG52YXIgVHJhbnNhY3Rpb25CdWlsZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHJhbnNhY3Rpb25CdWlsZGVyKGFwaSkge1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29udGV4dEZyZWVHcm91cHMgPSBbXTtcclxuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcclxuICAgIH1cclxuICAgIFRyYW5zYWN0aW9uQnVpbGRlci5wcm90b3R5cGUud2l0aCA9IGZ1bmN0aW9uIChhY2NvdW50TmFtZSkge1xyXG4gICAgICAgIHZhciBhY3Rpb25CdWlsZGVyID0gbmV3IEFjdGlvbkJ1aWxkZXIodGhpcy5hcGksIGFjY291bnROYW1lKTtcclxuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb25CdWlsZGVyKTtcclxuICAgICAgICByZXR1cm4gYWN0aW9uQnVpbGRlcjtcclxuICAgIH07XHJcbiAgICBUcmFuc2FjdGlvbkJ1aWxkZXIucHJvdG90eXBlLmFzc29jaWF0ZUNvbnRleHRGcmVlID0gZnVuY3Rpb24gKGNvbnRleHRGcmVlR3JvdXApIHtcclxuICAgICAgICB0aGlzLmNvbnRleHRGcmVlR3JvdXBzLnB1c2goY29udGV4dEZyZWVHcm91cCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNhY3Rpb25CdWlsZGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRleHRGcmVlRGF0YVNldCwgY29udGV4dEZyZWVBY3Rpb25zLCBhY3Rpb25zO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0RnJlZURhdGFTZXQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dEZyZWVBY3Rpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMgPSB0aGlzLmFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb25CdWlsZGVyKSB7IHJldHVybiBhY3Rpb25CdWlsZGVyLnNlcmlhbGl6ZWREYXRhOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwodGhpcy5jb250ZXh0RnJlZUdyb3Vwcy5tYXAoZnVuY3Rpb24gKGNvbnRleHRGcmVlQ2FsbGJhY2spIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIGFjdGlvbiwgY29udGV4dEZyZWVBY3Rpb24sIGNvbnRleHRGcmVlRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gY29udGV4dEZyZWVDYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZmQ6IGNvbnRleHRGcmVlRGF0YVNldC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZmE6IGNvbnRleHRGcmVlQWN0aW9ucy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGFjdGlvbiA9IF9hLmFjdGlvbiwgY29udGV4dEZyZWVBY3Rpb24gPSBfYS5jb250ZXh0RnJlZUFjdGlvbiwgY29udGV4dEZyZWVEYXRhID0gX2EuY29udGV4dEZyZWVEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dEZyZWVBY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRGcmVlQWN0aW9ucy5wdXNoKGNvbnRleHRGcmVlQWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dEZyZWVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0RnJlZURhdGFTZXQucHVzaChjb250ZXh0RnJlZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRGcmVlR3JvdXBzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmFwaS50cmFuc2FjdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9mcmVlX2RhdGE6IGNvbnRleHRGcmVlRGF0YVNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2ZyZWVfYWN0aW9uczogY29udGV4dEZyZWVBY3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IGFjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNvbmZpZyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUcmFuc2FjdGlvbkJ1aWxkZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVHJhbnNhY3Rpb25CdWlsZGVyID0gVHJhbnNhY3Rpb25CdWlsZGVyO1xyXG52YXIgQWN0aW9uQnVpbGRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFjdGlvbkJ1aWxkZXIoYXBpLCBhY2NvdW50TmFtZSkge1xyXG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xyXG4gICAgICAgIHRoaXMuYWNjb3VudE5hbWUgPSBhY2NvdW50TmFtZTtcclxuICAgIH1cclxuICAgIEFjdGlvbkJ1aWxkZXIucHJvdG90eXBlLmFzID0gZnVuY3Rpb24gKGFjdG9yTmFtZSkge1xyXG4gICAgICAgIGlmIChhY3Rvck5hbWUgPT09IHZvaWQgMCkgeyBhY3Rvck5hbWUgPSBbXTsgfVxyXG4gICAgICAgIHZhciBhdXRob3JpemF0aW9uID0gW107XHJcbiAgICAgICAgaWYgKGFjdG9yTmFtZSAmJiB0eXBlb2YgYWN0b3JOYW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uID0gW3sgYWN0b3I6IGFjdG9yTmFtZSwgcGVybWlzc2lvbjogJ2FjdGl2ZScgfV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uID0gYWN0b3JOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEFjdGlvblNlcmlhbGl6ZXIodGhpcywgdGhpcy5hcGksIHRoaXMuYWNjb3VudE5hbWUsIGF1dGhvcml6YXRpb24pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBY3Rpb25CdWlsZGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLkFjdGlvbkJ1aWxkZXIgPSBBY3Rpb25CdWlsZGVyO1xyXG52YXIgQWN0aW9uU2VyaWFsaXplciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFjdGlvblNlcmlhbGl6ZXIocGFyZW50LCBhcGksIGFjY291bnROYW1lLCBhdXRob3JpemF0aW9uKSB7XHJcbiAgICAgICAgdmFyIGVfNCwgX2E7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIganNvbkFiaSA9IGFwaS5jYWNoZWRBYmlzLmdldChhY2NvdW50TmFtZSk7XHJcbiAgICAgICAgaWYgKCFqc29uQWJpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQUJJIG11c3QgYmUgY2FjaGVkIGJlZm9yZSB1c2luZyBBY3Rpb25CdWlsZGVyLCBydW4gYXBpLmdldEFiaSgpJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0eXBlcyA9IHNlci5nZXRUeXBlc0Zyb21BYmkoc2VyLmNyZWF0ZUluaXRpYWxUeXBlcygpLCBqc29uQWJpLmFiaSk7XHJcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhqc29uQWJpLmFiaS5hY3Rpb25zKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9kID0gX2MudmFsdWUsIG5hbWVfMiA9IF9kLm5hbWUsIHR5cGUgPSBfZC50eXBlO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zZXQobmFtZV8yLCBzZXIuZ2V0VHlwZSh0eXBlcywgdHlwZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlXzRfMSkgeyBlXzQgPSB7IGVycm9yOiBlXzRfMSB9OyB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzQpIHRocm93IGVfNC5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHR5cGUsIG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKF90aGlzLCAoX2EgPSB7fSxcclxuICAgICAgICAgICAgICAgIF9hW25hbWVdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoYXJnLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSB0eXBlLmZpZWxkc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbZmllbGQubmFtZV0gPSBhcmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWREYXRhID0gc2VyLnNlcmlhbGl6ZUFjdGlvbih7IHR5cGVzOiB0eXBlcywgYWN0aW9uczogYWN0aW9ucyB9LCBhY2NvdW50TmFtZSwgbmFtZSwgYXV0aG9yaXphdGlvbiwgZGF0YSwgYXBpLnRleHRFbmNvZGVyLCBhcGkudGV4dERlY29kZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5zZXJpYWxpemVkRGF0YSA9IHNlcmlhbGl6ZWREYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVkRGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBfYSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFjdGlvblNlcmlhbGl6ZXI7XHJcbn0oKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn07XHJcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufTtcclxudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zaWduYXR1cmVUb1N0cmluZyA9IGV4cG9ydHMuc3RyaW5nVG9TaWduYXR1cmUgPSBleHBvcnRzLnByaXZhdGVLZXlUb1N0cmluZyA9IGV4cG9ydHMucHJpdmF0ZUtleVRvTGVnYWN5U3RyaW5nID0gZXhwb3J0cy5zdHJpbmdUb1ByaXZhdGVLZXkgPSBleHBvcnRzLmNvbnZlcnRMZWdhY3lQdWJsaWNLZXlzID0gZXhwb3J0cy5jb252ZXJ0TGVnYWN5UHVibGljS2V5ID0gZXhwb3J0cy5wdWJsaWNLZXlUb1N0cmluZyA9IGV4cG9ydHMucHVibGljS2V5VG9MZWdhY3lTdHJpbmcgPSBleHBvcnRzLnN0cmluZ1RvUHVibGljS2V5ID0gZXhwb3J0cy5zaWduYXR1cmVEYXRhU2l6ZSA9IGV4cG9ydHMucHJpdmF0ZUtleURhdGFTaXplID0gZXhwb3J0cy5wdWJsaWNLZXlEYXRhU2l6ZSA9IGV4cG9ydHMuS2V5VHlwZSA9IGV4cG9ydHMuYmFzZTY0VG9CaW5hcnkgPSBleHBvcnRzLmJpbmFyeVRvQmFzZTU4ID0gZXhwb3J0cy5iYXNlNThUb0JpbmFyeSA9IGV4cG9ydHMuc2lnbmVkQmluYXJ5VG9EZWNpbWFsID0gZXhwb3J0cy5iaW5hcnlUb0RlY2ltYWwgPSBleHBvcnRzLnNpZ25lZERlY2ltYWxUb0JpbmFyeSA9IGV4cG9ydHMuZGVjaW1hbFRvQmluYXJ5ID0gZXhwb3J0cy5uZWdhdGUgPSBleHBvcnRzLmlzTmVnYXRpdmUgPSB2b2lkIDA7XHJcbi8qKlxyXG4gKiBAbW9kdWxlIE51bWVyaWNcclxuICovXHJcbnZhciBoYXNoX2pzXzEgPSByZXF1aXJlKFwiaGFzaC5qc1wiKTtcclxuLy8gY29weXJpZ2h0IGRlZmluZWQgaW4gZW9zanMvTElDRU5TRS50eHRcclxudmFyIHJpcGVtZDE2MCA9IHJlcXVpcmUoJy4vcmlwZW1kJykuUklQRU1EMTYwLmhhc2g7XHJcbnZhciBiYXNlNThDaGFycyA9ICcxMjM0NTY3ODlBQkNERUZHSEpLTE1OUFFSU1RVVldYWVphYmNkZWZnaGlqa21ub3BxcnN0dXZ3eHl6JztcclxudmFyIGJhc2U2NENoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xyXG52YXIgY3JlYXRlX2Jhc2U1OF9tYXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYmFzZTU4TSA9IEFycmF5KDI1NikuZmlsbCgtMSk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhc2U1OENoYXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgYmFzZTU4TVtiYXNlNThDaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmFzZTU4TTtcclxufTtcclxudmFyIGJhc2U1OE1hcCA9IGNyZWF0ZV9iYXNlNThfbWFwKCk7XHJcbnZhciBjcmVhdGVfYmFzZTY0X21hcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBiYXNlNjRNID0gQXJyYXkoMjU2KS5maWxsKC0xKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmFzZTY0Q2hhcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBiYXNlNjRNW2Jhc2U2NENoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcclxuICAgIH1cclxuICAgIGJhc2U2NE1bJz0nLmNoYXJDb2RlQXQoMCldID0gMDtcclxuICAgIHJldHVybiBiYXNlNjRNO1xyXG59O1xyXG52YXIgYmFzZTY0TWFwID0gY3JlYXRlX2Jhc2U2NF9tYXAoKTtcclxuLyoqIElzIGBiaWdudW1gIGEgbmVnYXRpdmUgbnVtYmVyPyAqL1xyXG52YXIgaXNOZWdhdGl2ZSA9IGZ1bmN0aW9uIChiaWdudW0pIHtcclxuICAgIHJldHVybiAoYmlnbnVtW2JpZ251bS5sZW5ndGggLSAxXSAmIDB4ODApICE9PSAwO1xyXG59O1xyXG5leHBvcnRzLmlzTmVnYXRpdmUgPSBpc05lZ2F0aXZlO1xyXG4vKiogTmVnYXRlIGBiaWdudW1gICovXHJcbnZhciBuZWdhdGUgPSBmdW5jdGlvbiAoYmlnbnVtKSB7XHJcbiAgICB2YXIgY2FycnkgPSAxO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaWdudW0ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICB2YXIgeCA9ICh+YmlnbnVtW2ldICYgMHhmZikgKyBjYXJyeTtcclxuICAgICAgICBiaWdudW1baV0gPSB4O1xyXG4gICAgICAgIGNhcnJ5ID0geCA+PiA4O1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLm5lZ2F0ZSA9IG5lZ2F0ZTtcclxuLyoqXHJcbiAqIENvbnZlcnQgYW4gdW5zaWduZWQgZGVjaW1hbCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtXHJcbiAqXHJcbiAqIEBwYXJhbSBzaXplIGJpZ251bSBzaXplIChieXRlcylcclxuICovXHJcbnZhciBkZWNpbWFsVG9CaW5hcnkgPSBmdW5jdGlvbiAoc2l6ZSwgcykge1xyXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgdmFyIHNyY0RpZ2l0ID0gcy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChzcmNEaWdpdCA8ICcwJy5jaGFyQ29kZUF0KDApIHx8IHNyY0RpZ2l0ID4gJzknLmNoYXJDb2RlQXQoMCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIG51bWJlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY2FycnkgPSBzcmNEaWdpdCAtICcwJy5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgKytqKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gcmVzdWx0W2pdICogMTAgKyBjYXJyeTtcclxuICAgICAgICAgICAgcmVzdWx0W2pdID0geDtcclxuICAgICAgICAgICAgY2FycnkgPSB4ID4+IDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYXJyeSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ251bWJlciBpcyBvdXQgb2YgcmFuZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5leHBvcnRzLmRlY2ltYWxUb0JpbmFyeSA9IGRlY2ltYWxUb0JpbmFyeTtcclxuLyoqXHJcbiAqIENvbnZlcnQgYSBzaWduZWQgZGVjaW1hbCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtXHJcbiAqXHJcbiAqIEBwYXJhbSBzaXplIGJpZ251bSBzaXplIChieXRlcylcclxuICovXHJcbnZhciBzaWduZWREZWNpbWFsVG9CaW5hcnkgPSBmdW5jdGlvbiAoc2l6ZSwgcykge1xyXG4gICAgdmFyIG5lZ2F0aXZlID0gc1swXSA9PT0gJy0nO1xyXG4gICAgaWYgKG5lZ2F0aXZlKSB7XHJcbiAgICAgICAgcyA9IHMuc3Vic3RyKDEpO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlc3VsdCA9IGV4cG9ydHMuZGVjaW1hbFRvQmluYXJ5KHNpemUsIHMpO1xyXG4gICAgaWYgKG5lZ2F0aXZlKSB7XHJcbiAgICAgICAgZXhwb3J0cy5uZWdhdGUocmVzdWx0KTtcclxuICAgICAgICBpZiAoIWV4cG9ydHMuaXNOZWdhdGl2ZShyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbnVtYmVyIGlzIG91dCBvZiByYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGV4cG9ydHMuaXNOZWdhdGl2ZShyZXN1bHQpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdudW1iZXIgaXMgb3V0IG9mIHJhbmdlJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5leHBvcnRzLnNpZ25lZERlY2ltYWxUb0JpbmFyeSA9IHNpZ25lZERlY2ltYWxUb0JpbmFyeTtcclxuLyoqXHJcbiAqIENvbnZlcnQgYGJpZ251bWAgdG8gYW4gdW5zaWduZWQgZGVjaW1hbCBudW1iZXJcclxuICpcclxuICogQHBhcmFtIG1pbkRpZ2l0cyAwLXBhZCByZXN1bHQgdG8gdGhpcyBtYW55IGRpZ2l0c1xyXG4gKi9cclxudmFyIGJpbmFyeVRvRGVjaW1hbCA9IGZ1bmN0aW9uIChiaWdudW0sIG1pbkRpZ2l0cykge1xyXG4gICAgaWYgKG1pbkRpZ2l0cyA9PT0gdm9pZCAwKSB7IG1pbkRpZ2l0cyA9IDE7IH1cclxuICAgIHZhciByZXN1bHQgPSBBcnJheShtaW5EaWdpdHMpLmZpbGwoJzAnLmNoYXJDb2RlQXQoMCkpO1xyXG4gICAgZm9yICh2YXIgaSA9IGJpZ251bS5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBjYXJyeSA9IGJpZ251bVtpXTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlc3VsdC5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICB2YXIgeCA9ICgocmVzdWx0W2pdIC0gJzAnLmNoYXJDb2RlQXQoMCkpIDw8IDgpICsgY2Fycnk7XHJcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9ICcwJy5jaGFyQ29kZUF0KDApICsgeCAlIDEwO1xyXG4gICAgICAgICAgICBjYXJyeSA9ICh4IC8gMTApIHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGNhcnJ5KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCcwJy5jaGFyQ29kZUF0KDApICsgY2FycnkgJSAxMCk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gMTApIHwgMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHQucmV2ZXJzZSgpO1xyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQocmVzdWx0KSkpO1xyXG59O1xyXG5leHBvcnRzLmJpbmFyeVRvRGVjaW1hbCA9IGJpbmFyeVRvRGVjaW1hbDtcclxuLyoqXHJcbiAqIENvbnZlcnQgYGJpZ251bWAgdG8gYSBzaWduZWQgZGVjaW1hbCBudW1iZXJcclxuICpcclxuICogQHBhcmFtIG1pbkRpZ2l0cyAwLXBhZCByZXN1bHQgdG8gdGhpcyBtYW55IGRpZ2l0c1xyXG4gKi9cclxudmFyIHNpZ25lZEJpbmFyeVRvRGVjaW1hbCA9IGZ1bmN0aW9uIChiaWdudW0sIG1pbkRpZ2l0cykge1xyXG4gICAgaWYgKG1pbkRpZ2l0cyA9PT0gdm9pZCAwKSB7IG1pbkRpZ2l0cyA9IDE7IH1cclxuICAgIGlmIChleHBvcnRzLmlzTmVnYXRpdmUoYmlnbnVtKSkge1xyXG4gICAgICAgIHZhciB4ID0gYmlnbnVtLnNsaWNlKCk7XHJcbiAgICAgICAgZXhwb3J0cy5uZWdhdGUoeCk7XHJcbiAgICAgICAgcmV0dXJuICctJyArIGV4cG9ydHMuYmluYXJ5VG9EZWNpbWFsKHgsIG1pbkRpZ2l0cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXhwb3J0cy5iaW5hcnlUb0RlY2ltYWwoYmlnbnVtLCBtaW5EaWdpdHMpO1xyXG59O1xyXG5leHBvcnRzLnNpZ25lZEJpbmFyeVRvRGVjaW1hbCA9IHNpZ25lZEJpbmFyeVRvRGVjaW1hbDtcclxudmFyIGJhc2U1OFRvQmluYXJ5VmFyU2l6ZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICB2YXIgZV8xLCBfYTtcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHZhciBjYXJyeSA9IGJhc2U1OE1hcFtzLmNoYXJDb2RlQXQoaSldO1xyXG4gICAgICAgIGlmIChjYXJyeSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGJhc2UtNTggdmFsdWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZXN1bHQubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgdmFyIHggPSByZXN1bHRbal0gKiA1OCArIGNhcnJ5O1xyXG4gICAgICAgICAgICByZXN1bHRbal0gPSB4ICYgMHhmZjtcclxuICAgICAgICAgICAgY2FycnkgPSB4ID4+IDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYXJyeSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChjYXJyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBmb3IgKHZhciBzXzEgPSBfX3ZhbHVlcyhzKSwgc18xXzEgPSBzXzEubmV4dCgpOyAhc18xXzEuZG9uZTsgc18xXzEgPSBzXzEubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHNfMV8xLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoc18xXzEgJiYgIXNfMV8xLmRvbmUgJiYgKF9hID0gc18xLnJldHVybikpIF9hLmNhbGwoc18xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0LnJldmVyc2UoKTtcclxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShyZXN1bHQpO1xyXG59O1xyXG4vKipcclxuICogQ29udmVydCBhbiB1bnNpZ25lZCBiYXNlLTU4IG51bWJlciBpbiBgc2AgdG8gYSBiaWdudW1cclxuICpcclxuICogQHBhcmFtIHNpemUgYmlnbnVtIHNpemUgKGJ5dGVzKVxyXG4gKi9cclxudmFyIGJhc2U1OFRvQmluYXJ5ID0gZnVuY3Rpb24gKHNpemUsIHMpIHtcclxuICAgIGlmICghc2l6ZSkge1xyXG4gICAgICAgIHJldHVybiBiYXNlNThUb0JpbmFyeVZhclNpemUocyk7XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICB2YXIgY2FycnkgPSBiYXNlNThNYXBbcy5jaGFyQ29kZUF0KGkpXTtcclxuICAgICAgICBpZiAoY2FycnkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBiYXNlLTU4IHZhbHVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgKytqKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gcmVzdWx0W2pdICogNTggKyBjYXJyeTtcclxuICAgICAgICAgICAgcmVzdWx0W2pdID0geDtcclxuICAgICAgICAgICAgY2FycnkgPSB4ID4+IDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYXJyeSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Jhc2UtNTggdmFsdWUgaXMgb3V0IG9mIHJhbmdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0LnJldmVyc2UoKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbmV4cG9ydHMuYmFzZTU4VG9CaW5hcnkgPSBiYXNlNThUb0JpbmFyeTtcclxuLyoqXHJcbiAqIENvbnZlcnQgYGJpZ251bWAgdG8gYSBiYXNlLTU4IG51bWJlclxyXG4gKlxyXG4gKiBAcGFyYW0gbWluRGlnaXRzIDAtcGFkIHJlc3VsdCB0byB0aGlzIG1hbnkgZGlnaXRzXHJcbiAqL1xyXG52YXIgYmluYXJ5VG9CYXNlNTggPSBmdW5jdGlvbiAoYmlnbnVtLCBtaW5EaWdpdHMpIHtcclxuICAgIHZhciBlXzIsIF9hLCBlXzMsIF9iO1xyXG4gICAgaWYgKG1pbkRpZ2l0cyA9PT0gdm9pZCAwKSB7IG1pbkRpZ2l0cyA9IDE7IH1cclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yICh2YXIgYmlnbnVtXzEgPSBfX3ZhbHVlcyhiaWdudW0pLCBiaWdudW1fMV8xID0gYmlnbnVtXzEubmV4dCgpOyAhYmlnbnVtXzFfMS5kb25lOyBiaWdudW1fMV8xID0gYmlnbnVtXzEubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBieXRlID0gYmlnbnVtXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIGNhcnJ5ID0gYnl0ZTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZXN1bHQubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gKGJhc2U1OE1hcFtyZXN1bHRbal1dIDw8IDgpICsgY2Fycnk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbal0gPSBiYXNlNThDaGFycy5jaGFyQ29kZUF0KHggJSA1OCk7XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9ICh4IC8gNTgpIHwgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aGlsZSAoY2FycnkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGJhc2U1OENoYXJzLmNoYXJDb2RlQXQoY2FycnkgJSA1OCkpO1xyXG4gICAgICAgICAgICAgICAgY2FycnkgPSAoY2FycnkgLyA1OCkgfCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChiaWdudW1fMV8xICYmICFiaWdudW1fMV8xLmRvbmUgJiYgKF9hID0gYmlnbnVtXzEucmV0dXJuKSkgX2EuY2FsbChiaWdudW1fMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yICh2YXIgYmlnbnVtXzIgPSBfX3ZhbHVlcyhiaWdudW0pLCBiaWdudW1fMl8xID0gYmlnbnVtXzIubmV4dCgpOyAhYmlnbnVtXzJfMS5kb25lOyBiaWdudW1fMl8xID0gYmlnbnVtXzIubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBieXRlID0gYmlnbnVtXzJfMS52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKGJ5dGUpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goJzEnLmNoYXJDb2RlQXQoMCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChiaWdudW1fMl8xICYmICFiaWdudW1fMl8xLmRvbmUgJiYgKF9iID0gYmlnbnVtXzIucmV0dXJuKSkgX2IuY2FsbChiaWdudW1fMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJlc3VsdC5yZXZlcnNlKCk7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChyZXN1bHQpKSk7XHJcbn07XHJcbmV4cG9ydHMuYmluYXJ5VG9CYXNlNTggPSBiaW5hcnlUb0Jhc2U1ODtcclxuLyoqIENvbnZlcnQgYW4gdW5zaWduZWQgYmFzZS02NCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtICovXHJcbnZhciBiYXNlNjRUb0JpbmFyeSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICB2YXIgbGVuID0gcy5sZW5ndGg7XHJcbiAgICBpZiAoKGxlbiAmIDMpID09PSAxICYmIHNbbGVuIC0gMV0gPT09ICc9Jykge1xyXG4gICAgICAgIGxlbiAtPSAxO1xyXG4gICAgfSAvLyBmYyBhcHBlbmRzIGFuIGV4dHJhICc9J1xyXG4gICAgaWYgKChsZW4gJiAzKSAhPT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYmFzZS02NCB2YWx1ZSBpcyBub3QgcGFkZGVkIGNvcnJlY3RseScpO1xyXG4gICAgfVxyXG4gICAgdmFyIGdyb3VwcyA9IGxlbiA+PiAyO1xyXG4gICAgdmFyIGJ5dGVzID0gZ3JvdXBzICogMztcclxuICAgIGlmIChsZW4gPiAwICYmIHNbbGVuIC0gMV0gPT09ICc9Jykge1xyXG4gICAgICAgIGlmIChzW2xlbiAtIDJdID09PSAnPScpIHtcclxuICAgICAgICAgICAgYnl0ZXMgLT0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGJ5dGVzIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGJ5dGVzKTtcclxuICAgIGZvciAodmFyIGdyb3VwID0gMDsgZ3JvdXAgPCBncm91cHM7ICsrZ3JvdXApIHtcclxuICAgICAgICB2YXIgZGlnaXQwID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAwKV07XHJcbiAgICAgICAgdmFyIGRpZ2l0MSA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMSldO1xyXG4gICAgICAgIHZhciBkaWdpdDIgPSBiYXNlNjRNYXBbcy5jaGFyQ29kZUF0KGdyb3VwICogNCArIDIpXTtcclxuICAgICAgICB2YXIgZGlnaXQzID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAzKV07XHJcbiAgICAgICAgcmVzdWx0W2dyb3VwICogMyArIDBdID0gKGRpZ2l0MCA8PCAyKSB8IChkaWdpdDEgPj4gNCk7XHJcbiAgICAgICAgaWYgKGdyb3VwICogMyArIDEgPCBieXRlcykge1xyXG4gICAgICAgICAgICByZXN1bHRbZ3JvdXAgKiAzICsgMV0gPSAoKGRpZ2l0MSAmIDE1KSA8PCA0KSB8IChkaWdpdDIgPj4gMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChncm91cCAqIDMgKyAyIDwgYnl0ZXMpIHtcclxuICAgICAgICAgICAgcmVzdWx0W2dyb3VwICogMyArIDJdID0gKChkaWdpdDIgJiAzKSA8PCA2KSB8IGRpZ2l0MztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5leHBvcnRzLmJhc2U2NFRvQmluYXJ5ID0gYmFzZTY0VG9CaW5hcnk7XHJcbi8qKiBLZXkgdHlwZXMgdGhpcyBsaWJyYXJ5IHN1cHBvcnRzICovXHJcbnZhciBLZXlUeXBlO1xyXG4oZnVuY3Rpb24gKEtleVR5cGUpIHtcclxuICAgIEtleVR5cGVbS2V5VHlwZVtcImsxXCJdID0gMF0gPSBcImsxXCI7XHJcbiAgICBLZXlUeXBlW0tleVR5cGVbXCJyMVwiXSA9IDFdID0gXCJyMVwiO1xyXG4gICAgS2V5VHlwZVtLZXlUeXBlW1wid2FcIl0gPSAyXSA9IFwid2FcIjtcclxufSkoS2V5VHlwZSA9IGV4cG9ydHMuS2V5VHlwZSB8fCAoZXhwb3J0cy5LZXlUeXBlID0ge30pKTtcclxuLyoqIFB1YmxpYyBrZXkgZGF0YSBzaXplLCBleGNsdWRpbmcgdHlwZSBmaWVsZCAqL1xyXG5leHBvcnRzLnB1YmxpY0tleURhdGFTaXplID0gMzM7XHJcbi8qKiBQcml2YXRlIGtleSBkYXRhIHNpemUsIGV4Y2x1ZGluZyB0eXBlIGZpZWxkICovXHJcbmV4cG9ydHMucHJpdmF0ZUtleURhdGFTaXplID0gMzI7XHJcbi8qKiBTaWduYXR1cmUgZGF0YSBzaXplLCBleGNsdWRpbmcgdHlwZSBmaWVsZCAqL1xyXG5leHBvcnRzLnNpZ25hdHVyZURhdGFTaXplID0gNjU7XHJcbnZhciBkaWdlc3RTdWZmaXhSaXBlbWQxNjAgPSBmdW5jdGlvbiAoZGF0YSwgc3VmZml4KSB7XHJcbiAgICB2YXIgZCA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoICsgc3VmZml4Lmxlbmd0aCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBkW2ldID0gZGF0YVtpXTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3VmZml4Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgZFtkYXRhLmxlbmd0aCArIGldID0gc3VmZml4LmNoYXJDb2RlQXQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmlwZW1kMTYwKGQpO1xyXG59O1xyXG52YXIgc3RyaW5nVG9LZXkgPSBmdW5jdGlvbiAocywgdHlwZSwgc2l6ZSwgc3VmZml4KSB7XHJcbiAgICB2YXIgd2hvbGUgPSBleHBvcnRzLmJhc2U1OFRvQmluYXJ5KHNpemUgPyBzaXplICsgNCA6IDAsIHMpO1xyXG4gICAgdmFyIHJlc3VsdCA9IHsgdHlwZTogdHlwZSwgZGF0YTogbmV3IFVpbnQ4QXJyYXkod2hvbGUuYnVmZmVyLCAwLCB3aG9sZS5sZW5ndGggLSA0KSB9O1xyXG4gICAgdmFyIGRpZ2VzdCA9IG5ldyBVaW50OEFycmF5KGRpZ2VzdFN1ZmZpeFJpcGVtZDE2MChyZXN1bHQuZGF0YSwgc3VmZml4KSk7XHJcbiAgICBpZiAoZGlnZXN0WzBdICE9PSB3aG9sZVt3aG9sZS5sZW5ndGggLSA0XSB8fCBkaWdlc3RbMV0gIT09IHdob2xlW3dob2xlLmxlbmd0aCAtIDNdXHJcbiAgICAgICAgfHwgZGlnZXN0WzJdICE9PSB3aG9sZVt3aG9sZS5sZW5ndGggLSAyXSB8fCBkaWdlc3RbM10gIT09IHdob2xlW3dob2xlLmxlbmd0aCAtIDFdKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjaGVja3N1bSBkb2VzblxcJ3QgbWF0Y2gnKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBrZXlUb1N0cmluZyA9IGZ1bmN0aW9uIChrZXksIHN1ZmZpeCwgcHJlZml4KSB7XHJcbiAgICB2YXIgZGlnZXN0ID0gbmV3IFVpbnQ4QXJyYXkoZGlnZXN0U3VmZml4UmlwZW1kMTYwKGtleS5kYXRhLCBzdWZmaXgpKTtcclxuICAgIHZhciB3aG9sZSA9IG5ldyBVaW50OEFycmF5KGtleS5kYXRhLmxlbmd0aCArIDQpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXkuZGF0YS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHdob2xlW2ldID0ga2V5LmRhdGFbaV07XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG4gICAgICAgIHdob2xlW2kgKyBrZXkuZGF0YS5sZW5ndGhdID0gZGlnZXN0W2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZWZpeCArIGV4cG9ydHMuYmluYXJ5VG9CYXNlNTgod2hvbGUpO1xyXG59O1xyXG4vKiogQ29udmVydCBrZXkgaW4gYHNgIHRvIGJpbmFyeSBmb3JtICovXHJcbnZhciBzdHJpbmdUb1B1YmxpY0tleSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBwdWJsaWMga2V5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAocy5zdWJzdHIoMCwgMykgPT09ICdFT1MnKSB7XHJcbiAgICAgICAgdmFyIHdob2xlID0gZXhwb3J0cy5iYXNlNThUb0JpbmFyeShleHBvcnRzLnB1YmxpY0tleURhdGFTaXplICsgNCwgcy5zdWJzdHIoMykpO1xyXG4gICAgICAgIHZhciBrZXkgPSB7IHR5cGU6IEtleVR5cGUuazEsIGRhdGE6IG5ldyBVaW50OEFycmF5KGV4cG9ydHMucHVibGljS2V5RGF0YVNpemUpIH07XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBvcnRzLnB1YmxpY0tleURhdGFTaXplOyArK2kpIHtcclxuICAgICAgICAgICAga2V5LmRhdGFbaV0gPSB3aG9sZVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRpZ2VzdCA9IG5ldyBVaW50OEFycmF5KHJpcGVtZDE2MChrZXkuZGF0YSkpO1xyXG4gICAgICAgIGlmIChkaWdlc3RbMF0gIT09IHdob2xlW2V4cG9ydHMucHVibGljS2V5RGF0YVNpemVdIHx8IGRpZ2VzdFsxXSAhPT0gd2hvbGVbMzRdXHJcbiAgICAgICAgICAgIHx8IGRpZ2VzdFsyXSAhPT0gd2hvbGVbMzVdIHx8IGRpZ2VzdFszXSAhPT0gd2hvbGVbMzZdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2hlY2tzdW0gZG9lc25cXCd0IG1hdGNoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gJ1BVQl9LMV8nKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCBLZXlUeXBlLmsxLCBleHBvcnRzLnB1YmxpY0tleURhdGFTaXplLCAnSzEnKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSAnUFVCX1IxXycpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUucjEsIGV4cG9ydHMucHVibGljS2V5RGF0YVNpemUsICdSMScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocy5zdWJzdHIoMCwgNykgPT09ICdQVUJfV0FfJykge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS53YSwgMCwgJ1dBJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VucmVjb2duaXplZCBwdWJsaWMga2V5IGZvcm1hdCcpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLnN0cmluZ1RvUHVibGljS2V5ID0gc3RyaW5nVG9QdWJsaWNLZXk7XHJcbi8qKiBDb252ZXJ0IHB1YmxpYyBga2V5YCB0byBsZWdhY3kgc3RyaW5nIChiYXNlLTU4KSBmb3JtICovXHJcbnZhciBwdWJsaWNLZXlUb0xlZ2FjeVN0cmluZyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgIGlmIChrZXkudHlwZSA9PT0gS2V5VHlwZS5rMSAmJiBrZXkuZGF0YS5sZW5ndGggPT09IGV4cG9ydHMucHVibGljS2V5RGF0YVNpemUpIHtcclxuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCAnJywgJ0VPUycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoa2V5LnR5cGUgPT09IEtleVR5cGUucjEgfHwga2V5LnR5cGUgPT09IEtleVR5cGUud2EpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0tleSBmb3JtYXQgbm90IHN1cHBvcnRlZCBpbiBsZWdhY3kgY29udmVyc2lvbicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnJlY29nbml6ZWQgcHVibGljIGtleSBmb3JtYXQnKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5wdWJsaWNLZXlUb0xlZ2FjeVN0cmluZyA9IHB1YmxpY0tleVRvTGVnYWN5U3RyaW5nO1xyXG4vKiogQ29udmVydCBga2V5YCB0byBzdHJpbmcgKGJhc2UtNTgpIGZvcm0gKi9cclxudmFyIHB1YmxpY0tleVRvU3RyaW5nID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgaWYgKGtleS50eXBlID09PSBLZXlUeXBlLmsxICYmIGtleS5kYXRhLmxlbmd0aCA9PT0gZXhwb3J0cy5wdWJsaWNLZXlEYXRhU2l6ZSkge1xyXG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhrZXksICdLMScsICdQVUJfSzFfJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChrZXkudHlwZSA9PT0gS2V5VHlwZS5yMSAmJiBrZXkuZGF0YS5sZW5ndGggPT09IGV4cG9ydHMucHVibGljS2V5RGF0YVNpemUpIHtcclxuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCAnUjEnLCAnUFVCX1IxXycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoa2V5LnR5cGUgPT09IEtleVR5cGUud2EpIHtcclxuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCAnV0EnLCAnUFVCX1dBXycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnJlY29nbml6ZWQgcHVibGljIGtleSBmb3JtYXQnKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5wdWJsaWNLZXlUb1N0cmluZyA9IHB1YmxpY0tleVRvU3RyaW5nO1xyXG4vKiogSWYgYSBrZXkgaXMgaW4gdGhlIGxlZ2FjeSBmb3JtYXQgKGBFT1NgIHByZWZpeCksIHRoZW4gY29udmVydCBpdCB0byB0aGUgbmV3IGZvcm1hdCAoYFBVQl9LMV9gKS5cclxuICogTGVhdmVzIG90aGVyIGZvcm1hdHMgdW50b3VjaGVkXHJcbiAqL1xyXG52YXIgY29udmVydExlZ2FjeVB1YmxpY0tleSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICBpZiAocy5zdWJzdHIoMCwgMykgPT09ICdFT1MnKSB7XHJcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMucHVibGljS2V5VG9TdHJpbmcoZXhwb3J0cy5zdHJpbmdUb1B1YmxpY0tleShzKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcztcclxufTtcclxuZXhwb3J0cy5jb252ZXJ0TGVnYWN5UHVibGljS2V5ID0gY29udmVydExlZ2FjeVB1YmxpY0tleTtcclxuLyoqIElmIGEga2V5IGlzIGluIHRoZSBsZWdhY3kgZm9ybWF0IChgRU9TYCBwcmVmaXgpLCB0aGVuIGNvbnZlcnQgaXQgdG8gdGhlIG5ldyBmb3JtYXQgKGBQVUJfSzFfYCkuXHJcbiAqIExlYXZlcyBvdGhlciBmb3JtYXRzIHVudG91Y2hlZFxyXG4gKi9cclxudmFyIGNvbnZlcnRMZWdhY3lQdWJsaWNLZXlzID0gZnVuY3Rpb24gKGtleXMpIHtcclxuICAgIHJldHVybiBrZXlzLm1hcChleHBvcnRzLmNvbnZlcnRMZWdhY3lQdWJsaWNLZXkpO1xyXG59O1xyXG5leHBvcnRzLmNvbnZlcnRMZWdhY3lQdWJsaWNLZXlzID0gY29udmVydExlZ2FjeVB1YmxpY0tleXM7XHJcbi8qKiBDb252ZXJ0IGtleSBpbiBgc2AgdG8gYmluYXJ5IGZvcm0gKi9cclxudmFyIHN0cmluZ1RvUHJpdmF0ZUtleSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBwcml2YXRlIGtleScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHMuc3Vic3RyKDAsIDcpID09PSAnUFZUX1IxXycpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUucjEsIGV4cG9ydHMucHJpdmF0ZUtleURhdGFTaXplLCAnUjEnKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSAnUFZUX0sxXycpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUuazEsIGV4cG9ydHMucHJpdmF0ZUtleURhdGFTaXplLCAnSzEnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIHRvZG86IFZlcmlmeSBjaGVja3N1bTogc2hhMjU2KHNoYTI1NihrZXkuZGF0YSkpLlxyXG4gICAgICAgIC8vICAgICAgIE5vdCBjcml0aWNhbCBzaW5jZSBhIGJhZCBrZXkgd2lsbCBmYWlsIHRvIHByb2R1Y2UgYVxyXG4gICAgICAgIC8vICAgICAgIHZhbGlkIHNpZ25hdHVyZSBhbnl3YXkuXHJcbiAgICAgICAgdmFyIHdob2xlID0gZXhwb3J0cy5iYXNlNThUb0JpbmFyeShleHBvcnRzLnByaXZhdGVLZXlEYXRhU2l6ZSArIDUsIHMpO1xyXG4gICAgICAgIHZhciBrZXkgPSB7IHR5cGU6IEtleVR5cGUuazEsIGRhdGE6IG5ldyBVaW50OEFycmF5KGV4cG9ydHMucHJpdmF0ZUtleURhdGFTaXplKSB9O1xyXG4gICAgICAgIGlmICh3aG9sZVswXSAhPT0gMHg4MCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VucmVjb2duaXplZCBwcml2YXRlIGtleSB0eXBlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwb3J0cy5wcml2YXRlS2V5RGF0YVNpemU7ICsraSkge1xyXG4gICAgICAgICAgICBrZXkuZGF0YVtpXSA9IHdob2xlW2kgKyAxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5zdHJpbmdUb1ByaXZhdGVLZXkgPSBzdHJpbmdUb1ByaXZhdGVLZXk7XHJcbi8qKiBDb252ZXJ0IHByaXZhdGUgYGtleWAgdG8gbGVnYWN5IHN0cmluZyAoYmFzZS01OCkgZm9ybSAqL1xyXG52YXIgcHJpdmF0ZUtleVRvTGVnYWN5U3RyaW5nID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgaWYgKGtleS50eXBlID09PSBLZXlUeXBlLmsxICYmIGtleS5kYXRhLmxlbmd0aCA9PT0gZXhwb3J0cy5wcml2YXRlS2V5RGF0YVNpemUpIHtcclxuICAgICAgICB2YXIgd2hvbGVfMSA9IFtdO1xyXG4gICAgICAgIHdob2xlXzEucHVzaCgxMjgpO1xyXG4gICAgICAgIGtleS5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGJ5dGUpIHsgcmV0dXJuIHdob2xlXzEucHVzaChieXRlKTsgfSk7XHJcbiAgICAgICAgdmFyIGRpZ2VzdCA9IG5ldyBVaW50OEFycmF5KGhhc2hfanNfMS5zaGEyNTYoKS51cGRhdGUoaGFzaF9qc18xLnNoYTI1NigpLnVwZGF0ZSh3aG9sZV8xKS5kaWdlc3QoKSkuZGlnZXN0KCkpO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgVWludDhBcnJheShleHBvcnRzLnByaXZhdGVLZXlEYXRhU2l6ZSArIDUpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd2hvbGVfMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHRbaV0gPSB3aG9sZV8xW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHRbaSArIHdob2xlXzEubGVuZ3RoXSA9IGRpZ2VzdFtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuYmluYXJ5VG9CYXNlNTgocmVzdWx0KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGtleS50eXBlID09PSBLZXlUeXBlLnIxIHx8IGtleS50eXBlID09PSBLZXlUeXBlLndhKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdLZXkgZm9ybWF0IG5vdCBzdXBwb3J0ZWQgaW4gbGVnYWN5IGNvbnZlcnNpb24nKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5yZWNvZ25pemVkIHB1YmxpYyBrZXkgZm9ybWF0Jyk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMucHJpdmF0ZUtleVRvTGVnYWN5U3RyaW5nID0gcHJpdmF0ZUtleVRvTGVnYWN5U3RyaW5nO1xyXG4vKiogQ29udmVydCBga2V5YCB0byBzdHJpbmcgKGJhc2UtNTgpIGZvcm0gKi9cclxudmFyIHByaXZhdGVLZXlUb1N0cmluZyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgIGlmIChrZXkudHlwZSA9PT0gS2V5VHlwZS5yMSkge1xyXG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhrZXksICdSMScsICdQVlRfUjFfJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChrZXkudHlwZSA9PT0gS2V5VHlwZS5rMSkge1xyXG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhrZXksICdLMScsICdQVlRfSzFfJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VucmVjb2duaXplZCBwcml2YXRlIGtleSBmb3JtYXQnKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5wcml2YXRlS2V5VG9TdHJpbmcgPSBwcml2YXRlS2V5VG9TdHJpbmc7XHJcbi8qKiBDb252ZXJ0IGtleSBpbiBgc2AgdG8gYmluYXJ5IGZvcm0gKi9cclxudmFyIHN0cmluZ1RvU2lnbmF0dXJlID0gZnVuY3Rpb24gKHMpIHtcclxuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2V4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIHNpZ25hdHVyZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHMuc3Vic3RyKDAsIDcpID09PSAnU0lHX0sxXycpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUuazEsIGV4cG9ydHMuc2lnbmF0dXJlRGF0YVNpemUsICdLMScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocy5zdWJzdHIoMCwgNykgPT09ICdTSUdfUjFfJykge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS5yMSwgZXhwb3J0cy5zaWduYXR1cmVEYXRhU2l6ZSwgJ1IxJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gJ1NJR19XQV8nKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCBLZXlUeXBlLndhLCAwLCAnV0EnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5yZWNvZ25pemVkIHNpZ25hdHVyZSBmb3JtYXQnKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5zdHJpbmdUb1NpZ25hdHVyZSA9IHN0cmluZ1RvU2lnbmF0dXJlO1xyXG4vKiogQ29udmVydCBgc2lnbmF0dXJlYCB0byBzdHJpbmcgKGJhc2UtNTgpIGZvcm0gKi9cclxudmFyIHNpZ25hdHVyZVRvU3RyaW5nID0gZnVuY3Rpb24gKHNpZ25hdHVyZSkge1xyXG4gICAgaWYgKHNpZ25hdHVyZS50eXBlID09PSBLZXlUeXBlLmsxKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKHNpZ25hdHVyZSwgJ0sxJywgJ1NJR19LMV8nKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNpZ25hdHVyZS50eXBlID09PSBLZXlUeXBlLnIxKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKHNpZ25hdHVyZSwgJ1IxJywgJ1NJR19SMV8nKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNpZ25hdHVyZS50eXBlID09PSBLZXlUeXBlLndhKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKHNpZ25hdHVyZSwgJ1dBJywgJ1NJR19XQV8nKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5yZWNvZ25pemVkIHNpZ25hdHVyZSBmb3JtYXQnKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5zaWduYXR1cmVUb1N0cmluZyA9IHNpZ25hdHVyZVRvU3RyaW5nO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLyoqXHJcbiAqIEBtb2R1bGUgU2VyaWFsaXplXHJcbiAqL1xyXG4vLyBjb3B5cmlnaHQgZGVmaW5lZCBpbiBlb3Nqcy9MSUNFTlNFLnR4dFxyXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBqc2RvYy9jaGVjay1pbmRlbnRhdGlvbiAqL1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufTtcclxudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59O1xyXG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNlcmlhbGl6ZVF1ZXJ5ID0gZXhwb3J0cy5kZXNlcmlhbGl6ZUFueUFycmF5ID0gZXhwb3J0cy5zZXJpYWxpemVBbnlBcnJheSA9IGV4cG9ydHMuZGVzZXJpYWxpemVBbnlPYmplY3QgPSBleHBvcnRzLnNlcmlhbGl6ZUFueU9iamVjdCA9IGV4cG9ydHMuZGVzZXJpYWxpemVBbnl2YXJTaG9ydCA9IGV4cG9ydHMuZGVzZXJpYWxpemVBbnl2YXIgPSBleHBvcnRzLnNlcmlhbGl6ZUFueXZhciA9IGV4cG9ydHMuZGVzZXJpYWxpemVBY3Rpb24gPSBleHBvcnRzLmRlc2VyaWFsaXplQWN0aW9uRGF0YSA9IGV4cG9ydHMuc2VyaWFsaXplQWN0aW9uID0gZXhwb3J0cy5zZXJpYWxpemVBY3Rpb25EYXRhID0gZXhwb3J0cy50cmFuc2FjdGlvbkhlYWRlciA9IGV4cG9ydHMuZ2V0VHlwZXNGcm9tQWJpID0gZXhwb3J0cy5nZXRUeXBlID0gZXhwb3J0cy5jcmVhdGVUcmFuc2FjdGlvblR5cGVzID0gZXhwb3J0cy5jcmVhdGVUcmFuc2FjdGlvbkV4dGVuc2lvblR5cGVzID0gZXhwb3J0cy5jcmVhdGVBYmlUeXBlcyA9IGV4cG9ydHMuY3JlYXRlSW5pdGlhbFR5cGVzID0gZXhwb3J0cy5oZXhUb1VpbnQ4QXJyYXkgPSBleHBvcnRzLmFycmF5VG9IZXggPSBleHBvcnRzLnN5bWJvbFRvU3RyaW5nID0gZXhwb3J0cy5zdHJpbmdUb1N5bWJvbCA9IGV4cG9ydHMuYmxvY2tUaW1lc3RhbXBUb0RhdGUgPSBleHBvcnRzLmRhdGVUb0Jsb2NrVGltZXN0YW1wID0gZXhwb3J0cy50aW1lUG9pbnRTZWNUb0RhdGUgPSBleHBvcnRzLmRhdGVUb1RpbWVQb2ludFNlYyA9IGV4cG9ydHMudGltZVBvaW50VG9EYXRlID0gZXhwb3J0cy5kYXRlVG9UaW1lUG9pbnQgPSBleHBvcnRzLnN1cHBvcnRlZEFiaVZlcnNpb24gPSBleHBvcnRzLlNlcmlhbEJ1ZmZlciA9IGV4cG9ydHMuU2VyaWFsaXplclN0YXRlID0gdm9pZCAwO1xyXG52YXIgbnVtZXJpYyA9IHJlcXVpcmUoXCIuL2Vvc2pzLW51bWVyaWNcIik7XHJcbi8qKiBTdGF0ZSBmb3Igc2VyaWFsaXplKCkgYW5kIGRlc2VyaWFsaXplKCkgKi9cclxudmFyIFNlcmlhbGl6ZXJTdGF0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNlcmlhbGl6ZXJTdGF0ZShvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgICAgICAvKiogSGF2ZSBhbnkgYmluYXJ5IGV4dGVuc2lvbnMgYmVlbiBza2lwcGVkPyAqL1xyXG4gICAgICAgIHRoaXMuc2tpcHBlZEJpbmFyeUV4dGVuc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU2VyaWFsaXplclN0YXRlO1xyXG59KCkpO1xyXG5leHBvcnRzLlNlcmlhbGl6ZXJTdGF0ZSA9IFNlcmlhbGl6ZXJTdGF0ZTtcclxuLyoqIFNlcmlhbGl6ZSBhbmQgZGVzZXJpYWxpemUgZGF0YSAqL1xyXG52YXIgU2VyaWFsQnVmZmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gX19uYW1lZFBhcmFtZXRlcnNcclxuICAgICAqIGBhcnJheWA6IGBudWxsYCBpZiBzZXJpYWxpemluZywgb3IgYmluYXJ5IGRhdGEgdG8gZGVzZXJpYWxpemVcclxuICAgICAqIGB0ZXh0RW5jb2RlcmA6IGBUZXh0RW5jb2RlcmAgaW5zdGFuY2UgdG8gdXNlLiBQYXNzIGluIGBudWxsYCBpZiBydW5uaW5nIGluIGEgYnJvd3NlclxyXG4gICAgICogYHRleHREZWNvZGVyYDogYFRleHREZWNpZGVyYCBpbnN0YW5jZSB0byB1c2UuIFBhc3MgaW4gYG51bGxgIGlmIHJ1bm5pbmcgaW4gYSBicm93c2VyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFNlcmlhbEJ1ZmZlcihfYSkge1xyXG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCB0ZXh0RW5jb2RlciA9IF9iLnRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlciA9IF9iLnRleHREZWNvZGVyLCBhcnJheSA9IF9iLmFycmF5O1xyXG4gICAgICAgIC8qKiBDdXJyZW50IHBvc2l0aW9uIHdoaWxlIHJlYWRpbmcgKGRlc2VyaWFsaXppbmcpICovXHJcbiAgICAgICAgdGhpcy5yZWFkUG9zID0gMDtcclxuICAgICAgICB0aGlzLmFycmF5ID0gYXJyYXkgfHwgbmV3IFVpbnQ4QXJyYXkoMTAyNCk7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0RW5jb2RlciA9IHRleHRFbmNvZGVyIHx8IG5ldyBUZXh0RW5jb2RlcigpO1xyXG4gICAgICAgIHRoaXMudGV4dERlY29kZXIgPSB0ZXh0RGVjb2RlciB8fCBuZXcgVGV4dERlY29kZXIoJ3V0Zi04JywgeyBmYXRhbDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIC8qKiBSZXNpemUgYGFycmF5YCBpZiBuZWVkZWQgdG8gaGF2ZSBhdCBsZWFzdCBgc2l6ZWAgYnl0ZXMgZnJlZSAqL1xyXG4gICAgU2VyaWFsQnVmZmVyLnByb3RvdHlwZS5yZXNlcnZlID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICAgICAgICBpZiAodGhpcy5sZW5ndGggKyBzaXplIDw9IHRoaXMuYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGwgPSB0aGlzLmFycmF5Lmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAodGhpcy5sZW5ndGggKyBzaXplID4gbCkge1xyXG4gICAgICAgICAgICBsID0gTWF0aC5jZWlsKGwgKiAxLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmV3QXJyYXkgPSBuZXcgVWludDhBcnJheShsKTtcclxuICAgICAgICBuZXdBcnJheS5zZXQodGhpcy5hcnJheSk7XHJcbiAgICAgICAgdGhpcy5hcnJheSA9IG5ld0FycmF5O1xyXG4gICAgfTtcclxuICAgIC8qKiBJcyB0aGVyZSBkYXRhIGF2YWlsYWJsZSB0byByZWFkPyAqL1xyXG4gICAgU2VyaWFsQnVmZmVyLnByb3RvdHlwZS5oYXZlUmVhZERhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFBvcyA8IHRoaXMubGVuZ3RoO1xyXG4gICAgfTtcclxuICAgIC8qKiBSZXN0YXJ0IHJlYWRpbmcgZnJvbSB0aGUgYmVnaW5uaW5nICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLnJlc3RhcnRSZWFkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucmVhZFBvcyA9IDA7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJldHVybiBkYXRhIHdpdGggZXhjZXNzIHN0b3JhZ2UgdHJpbW1lZCBhd2F5ICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLmFzVWludDhBcnJheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodGhpcy5hcnJheS5idWZmZXIsIHRoaXMuYXJyYXkuYnl0ZU9mZnNldCwgdGhpcy5sZW5ndGgpO1xyXG4gICAgfTtcclxuICAgIC8qKiBBcHBlbmQgYnl0ZXMgKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUucHVzaEFycmF5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB0aGlzLnJlc2VydmUodi5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuYXJyYXkuc2V0KHYsIHRoaXMubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLmxlbmd0aCArPSB2Lmxlbmd0aDtcclxuICAgIH07XHJcbiAgICAvKiogQXBwZW5kIGJ5dGVzICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHYgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2W19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVzaEFycmF5KHYpO1xyXG4gICAgfTtcclxuICAgIC8qKiBHZXQgYSBzaW5nbGUgYnl0ZSAqL1xyXG4gICAgU2VyaWFsQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZFBvcyA8IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFycmF5W3RoaXMucmVhZFBvcysrXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFkIHBhc3QgZW5kIG9mIGJ1ZmZlcicpO1xyXG4gICAgfTtcclxuICAgIC8qKiBBcHBlbmQgYnl0ZXMgaW4gYHZgLiBUaHJvd3MgaWYgYGxlbmAgZG9lc24ndCBtYXRjaCBgdi5sZW5ndGhgICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLnB1c2hVaW50OEFycmF5Q2hlY2tlZCA9IGZ1bmN0aW9uICh2LCBsZW4pIHtcclxuICAgICAgICBpZiAodi5sZW5ndGggIT09IGxlbikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JpbmFyeSBkYXRhIGhhcyBpbmNvcnJlY3Qgc2l6ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnB1c2hBcnJheSh2KTtcclxuICAgIH07XHJcbiAgICAvKiogR2V0IGBsZW5gIGJ5dGVzICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLmdldFVpbnQ4QXJyYXkgPSBmdW5jdGlvbiAobGVuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZFBvcyArIGxlbiA+IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhZCBwYXN0IGVuZCBvZiBidWZmZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHRoaXMuYXJyYXkuYnVmZmVyLCB0aGlzLmFycmF5LmJ5dGVPZmZzZXQgKyB0aGlzLnJlYWRQb3MsIGxlbik7XHJcbiAgICAgICAgdGhpcy5yZWFkUG9zICs9IGxlbjtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIC8qKiBTa2lwIGBsZW5gIGJ5dGVzICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLnNraXAgPSBmdW5jdGlvbiAobGVuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZFBvcyArIGxlbiA+IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhZCBwYXN0IGVuZCBvZiBidWZmZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWFkUG9zICs9IGxlbjtcclxuICAgIH07XHJcbiAgICAvKiogQXBwZW5kIGEgYHVpbnQxNmAgKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUucHVzaFVpbnQxNiA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKCh2ID4+IDApICYgMHhmZiwgKHYgPj4gOCkgJiAweGZmKTtcclxuICAgIH07XHJcbiAgICAvKiogR2V0IGEgYHVpbnQxNmAgKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUuZ2V0VWludDE2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2ID0gMDtcclxuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgMDtcclxuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgODtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIH07XHJcbiAgICAvKiogQXBwZW5kIGEgYHVpbnQzMmAgKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUucHVzaFVpbnQzMiA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKCh2ID4+IDApICYgMHhmZiwgKHYgPj4gOCkgJiAweGZmLCAodiA+PiAxNikgJiAweGZmLCAodiA+PiAyNCkgJiAweGZmKTtcclxuICAgIH07XHJcbiAgICAvKiogR2V0IGEgYHVpbnQzMmAgKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUuZ2V0VWludDMyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2ID0gMDtcclxuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgMDtcclxuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgODtcclxuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgMTY7XHJcbiAgICAgICAgdiB8PSB0aGlzLmdldCgpIDw8IDI0O1xyXG4gICAgICAgIHJldHVybiB2ID4+PiAwO1xyXG4gICAgfTtcclxuICAgIC8qKiBBcHBlbmQgYSBgdWludDY0YC4gKkNhdXRpb24qOiBgbnVtYmVyYCBvbmx5IGhhcyA1MyBiaXRzIG9mIHByZWNpc2lvbiAqL1xyXG4gICAgU2VyaWFsQnVmZmVyLnByb3RvdHlwZS5wdXNoTnVtYmVyQXNVaW50NjQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHRoaXMucHVzaFVpbnQzMih2ID4+PiAwKTtcclxuICAgICAgICB0aGlzLnB1c2hVaW50MzIoTWF0aC5mbG9vcih2IC8gNDI5NDk2NzI5NikgPj4+IDApO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgYHVpbnQ2NGAgYXMgYSBgbnVtYmVyYC4gKkNhdXRpb24qOiBgbnVtYmVyYCBvbmx5IGhhcyA1MyBiaXRzIG9mIHByZWNpc2lvbjsgc29tZSB2YWx1ZXMgd2lsbCBjaGFuZ2UuXHJcbiAgICAgKiBgbnVtZXJpYy5iaW5hcnlUb0RlY2ltYWwoc2VyaWFsQnVmZmVyLmdldFVpbnQ4QXJyYXkoOCkpYCByZWNvbW1lbmRlZCBpbnN0ZWFkXHJcbiAgICAgKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUuZ2V0VWludDY0QXNOdW1iZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxvdyA9IHRoaXMuZ2V0VWludDMyKCk7XHJcbiAgICAgICAgdmFyIGhpZ2ggPSB0aGlzLmdldFVpbnQzMigpO1xyXG4gICAgICAgIHJldHVybiAoaGlnaCA+Pj4gMCkgKiA0Mjk0OTY3Mjk2ICsgKGxvdyA+Pj4gMCk7XHJcbiAgICB9O1xyXG4gICAgLyoqIEFwcGVuZCBhIGB2YXJ1aW50MzJgICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLnB1c2hWYXJ1aW50MzIgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2ID4+PiA3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2goMHg4MCB8ICh2ICYgMHg3ZikpO1xyXG4gICAgICAgICAgICAgICAgdiA9IHYgPj4+IDc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2godik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKiogR2V0IGEgYHZhcnVpbnQzMmAgKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUuZ2V0VmFydWludDMyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2ID0gMDtcclxuICAgICAgICB2YXIgYml0ID0gMDtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICB2YXIgYiA9IHRoaXMuZ2V0KCk7XHJcbiAgICAgICAgICAgIHYgfD0gKGIgJiAweDdmKSA8PCBiaXQ7XHJcbiAgICAgICAgICAgIGJpdCArPSA3O1xyXG4gICAgICAgICAgICBpZiAoIShiICYgMHg4MCkpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2ID4+PiAwO1xyXG4gICAgfTtcclxuICAgIC8qKiBBcHBlbmQgYSBgdmFyaW50MzJgICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLnB1c2hWYXJpbnQzMiA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdGhpcy5wdXNoVmFydWludDMyKCh2IDw8IDEpIF4gKHYgPj4gMzEpKTtcclxuICAgIH07XHJcbiAgICAvKiogR2V0IGEgYHZhcmludDMyYCAqL1xyXG4gICAgU2VyaWFsQnVmZmVyLnByb3RvdHlwZS5nZXRWYXJpbnQzMiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0VmFydWludDMyKCk7XHJcbiAgICAgICAgaWYgKHYgJiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKH52KSA+PiAxKSB8IDIxNDc0ODM2NDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdiA+Pj4gMTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqIEFwcGVuZCBhIGBmbG9hdDMyYCAqL1xyXG4gICAgU2VyaWFsQnVmZmVyLnByb3RvdHlwZS5wdXNoRmxvYXQzMiA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkobmV3IFVpbnQ4QXJyYXkoKG5ldyBGbG9hdDMyQXJyYXkoW3ZdKSkuYnVmZmVyKSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIEdldCBhIGBmbG9hdDMyYCAqL1xyXG4gICAgU2VyaWFsQnVmZmVyLnByb3RvdHlwZS5nZXRGbG9hdDMyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZ2V0VWludDhBcnJheSg0KS5zbGljZSgpLmJ1ZmZlcilbMF07XHJcbiAgICB9O1xyXG4gICAgLyoqIEFwcGVuZCBhIGBmbG9hdDY0YCAqL1xyXG4gICAgU2VyaWFsQnVmZmVyLnByb3RvdHlwZS5wdXNoRmxvYXQ2NCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkobmV3IFVpbnQ4QXJyYXkoKG5ldyBGbG9hdDY0QXJyYXkoW3ZdKSkuYnVmZmVyKSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIEdldCBhIGBmbG9hdDY0YCAqL1xyXG4gICAgU2VyaWFsQnVmZmVyLnByb3RvdHlwZS5nZXRGbG9hdDY0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmxvYXQ2NEFycmF5KHRoaXMuZ2V0VWludDhBcnJheSg4KS5zbGljZSgpLmJ1ZmZlcilbMF07XHJcbiAgICB9O1xyXG4gICAgLyoqIEFwcGVuZCBhIGBuYW1lYCAqL1xyXG4gICAgU2VyaWFsQnVmZmVyLnByb3RvdHlwZS5wdXNoTmFtZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIG5hbWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgvXlsuMS01YS16XXswLDEyfVsuMS01YS1qXT8kLyk7XHJcbiAgICAgICAgaWYgKCFyZWdleC50ZXN0KHMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBzaG91bGQgYmUgbGVzcyB0aGFuIDEzIGNoYXJhY3RlcnMsIG9yIGxlc3MgdGhhbiAxNCBpZiBsYXN0IGNoYXJhY3RlciBpcyBiZXR3ZWVuIDEtNSBvciBhLWosIGFuZCBvbmx5IGNvbnRhaW4gdGhlIGZvbGxvd2luZyBzeW1ib2xzIC4xMjM0NWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6Jyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNoYXJUb1N5bWJvbCA9IGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIGlmIChjID49ICdhJy5jaGFyQ29kZUF0KDApICYmIGMgPD0gJ3onLmNoYXJDb2RlQXQoMCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYyAtICdhJy5jaGFyQ29kZUF0KDApKSArIDY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMgPj0gJzEnLmNoYXJDb2RlQXQoMCkgJiYgYyA8PSAnNScuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChjIC0gJzEnLmNoYXJDb2RlQXQoMCkpICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBhID0gbmV3IFVpbnQ4QXJyYXkoOCk7XHJcbiAgICAgICAgdmFyIGJpdCA9IDYzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB2YXIgYyA9IGNoYXJUb1N5bWJvbChzLmNoYXJDb2RlQXQoaSkpO1xyXG4gICAgICAgICAgICBpZiAoYml0IDwgNSkge1xyXG4gICAgICAgICAgICAgICAgYyA9IGMgPDwgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gNDsgaiA+PSAwOyAtLWopIHtcclxuICAgICAgICAgICAgICAgIGlmIChiaXQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFbTWF0aC5mbG9vcihiaXQgLyA4KV0gfD0gKChjID4+IGopICYgMSkgPDwgKGJpdCAlIDgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYml0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVzaEFycmF5KGEpO1xyXG4gICAgfTtcclxuICAgIC8qKiBHZXQgYSBgbmFtZWAgKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuZ2V0VWludDhBcnJheSg4KTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgYml0ID0gNjM7IGJpdCA+PSAwOykge1xyXG4gICAgICAgICAgICB2YXIgYyA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYml0ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjID0gKGMgPDwgMSkgfCAoKGFbTWF0aC5mbG9vcihiaXQgLyA4KV0gPj4gKGJpdCAlIDgpKSAmIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYml0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjID49IDYpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMgKyAnYScuY2hhckNvZGVBdCgwKSAtIDYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGMgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyArICcxJy5jaGFyQ29kZUF0KDApIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gJy4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChyZXN1bHQuZW5kc1dpdGgoJy4nKSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyKDAsIHJlc3VsdC5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICAvKiogQXBwZW5kIGxlbmd0aC1wcmVmaXhlZCBiaW5hcnkgZGF0YSAqL1xyXG4gICAgU2VyaWFsQnVmZmVyLnByb3RvdHlwZS5wdXNoQnl0ZXMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHRoaXMucHVzaFZhcnVpbnQzMih2Lmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkodik7XHJcbiAgICB9O1xyXG4gICAgLyoqIEdldCBsZW5ndGgtcHJlZml4ZWQgYmluYXJ5IGRhdGEgKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUuZ2V0Qnl0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VWludDhBcnJheSh0aGlzLmdldFZhcnVpbnQzMigpKTtcclxuICAgIH07XHJcbiAgICAvKiogQXBwZW5kIGEgc3RyaW5nICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLnB1c2hTdHJpbmcgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHRoaXMucHVzaEJ5dGVzKHRoaXMudGV4dEVuY29kZXIuZW5jb2RlKHYpKTtcclxuICAgIH07XHJcbiAgICAvKiogR2V0IGEgc3RyaW5nICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLmdldFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0RGVjb2Rlci5kZWNvZGUodGhpcy5nZXRCeXRlcygpKTtcclxuICAgIH07XHJcbiAgICAvKiogQXBwZW5kIGEgYHN5bWJvbF9jb2RlYC4gVW5saWtlIGBzeW1ib2xgLCBgc3ltYm9sX2NvZGVgIGRvZXNuJ3QgaW5jbHVkZSBhIHByZWNpc2lvbi4gKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUucHVzaFN5bWJvbENvZGUgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBzeW1ib2xfY29kZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYSA9IFtdO1xyXG4gICAgICAgIGEucHVzaC5hcHBseShhLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQodGhpcy50ZXh0RW5jb2Rlci5lbmNvZGUobmFtZSkpKSk7XHJcbiAgICAgICAgd2hpbGUgKGEubGVuZ3RoIDwgOCkge1xyXG4gICAgICAgICAgICBhLnB1c2goMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVzaEFycmF5KGEuc2xpY2UoMCwgOCkpO1xyXG4gICAgfTtcclxuICAgIC8qKiBHZXQgYSBgc3ltYm9sX2NvZGVgLiBVbmxpa2UgYHN5bWJvbGAsIGBzeW1ib2xfY29kZWAgZG9lc24ndCBpbmNsdWRlIGEgcHJlY2lzaW9uLiAqL1xyXG4gICAgU2VyaWFsQnVmZmVyLnByb3RvdHlwZS5nZXRTeW1ib2xDb2RlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5nZXRVaW50OEFycmF5KDgpO1xyXG4gICAgICAgIHZhciBsZW47XHJcbiAgICAgICAgZm9yIChsZW4gPSAwOyBsZW4gPCBhLmxlbmd0aDsgKytsZW4pIHtcclxuICAgICAgICAgICAgaWYgKCFhW2xlbl0pIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuYW1lID0gdGhpcy50ZXh0RGVjb2Rlci5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoYS5idWZmZXIsIGEuYnl0ZU9mZnNldCwgbGVuKSk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9O1xyXG4gICAgLyoqIEFwcGVuZCBhIGBzeW1ib2xgICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLnB1c2hTeW1ib2wgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHByZWNpc2lvbiA9IF9hLnByZWNpc2lvbjtcclxuICAgICAgICBpZiAoIS9eW0EtWl17MSw3fSQvLnRlc3QobmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBzeW1ib2wgdG8gYmUgQS1aIGFuZCBiZXR3ZWVuIG9uZSBhbmQgc2V2ZW4gY2hhcmFjdGVycycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYSA9IFtwcmVjaXNpb24gJiAweGZmXTtcclxuICAgICAgICBhLnB1c2guYXBwbHkoYSwgX19zcHJlYWRBcnJheShbXSwgX19yZWFkKHRoaXMudGV4dEVuY29kZXIuZW5jb2RlKG5hbWUpKSkpO1xyXG4gICAgICAgIHdoaWxlIChhLmxlbmd0aCA8IDgpIHtcclxuICAgICAgICAgICAgYS5wdXNoKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnB1c2hBcnJheShhLnNsaWNlKDAsIDgpKTtcclxuICAgIH07XHJcbiAgICAvKiogR2V0IGEgYHN5bWJvbGAgKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUuZ2V0U3ltYm9sID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwcmVjaXNpb24gPSB0aGlzLmdldCgpO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5nZXRVaW50OEFycmF5KDcpO1xyXG4gICAgICAgIHZhciBsZW47XHJcbiAgICAgICAgZm9yIChsZW4gPSAwOyBsZW4gPCBhLmxlbmd0aDsgKytsZW4pIHtcclxuICAgICAgICAgICAgaWYgKCFhW2xlbl0pIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuYW1lID0gdGhpcy50ZXh0RGVjb2Rlci5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoYS5idWZmZXIsIGEuYnl0ZU9mZnNldCwgbGVuKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogbmFtZSwgcHJlY2lzaW9uOiBwcmVjaXNpb24gfTtcclxuICAgIH07XHJcbiAgICAvKiogQXBwZW5kIGFuIGFzc2V0ICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLnB1c2hBc3NldCA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIGFzc2V0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHMgPSBzLnRyaW0oKTtcclxuICAgICAgICB2YXIgcG9zID0gMDtcclxuICAgICAgICB2YXIgYW1vdW50ID0gJyc7XHJcbiAgICAgICAgdmFyIHByZWNpc2lvbiA9IDA7XHJcbiAgICAgICAgaWYgKHNbcG9zXSA9PT0gJy0nKSB7XHJcbiAgICAgICAgICAgIGFtb3VudCArPSAnLSc7XHJcbiAgICAgICAgICAgICsrcG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZm91bmREaWdpdCA9IGZhbHNlO1xyXG4gICAgICAgIHdoaWxlIChwb3MgPCBzLmxlbmd0aCAmJiBzLmNoYXJDb2RlQXQocG9zKSA+PSAnMCcuY2hhckNvZGVBdCgwKSAmJiBzLmNoYXJDb2RlQXQocG9zKSA8PSAnOScuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICBmb3VuZERpZ2l0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgYW1vdW50ICs9IHNbcG9zXTtcclxuICAgICAgICAgICAgKytwb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZm91bmREaWdpdCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fzc2V0IG11c3QgYmVnaW4gd2l0aCBhIG51bWJlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc1twb3NdID09PSAnLicpIHtcclxuICAgICAgICAgICAgKytwb3M7XHJcbiAgICAgICAgICAgIHdoaWxlIChwb3MgPCBzLmxlbmd0aCAmJiBzLmNoYXJDb2RlQXQocG9zKSA+PSAnMCcuY2hhckNvZGVBdCgwKSAmJiBzLmNoYXJDb2RlQXQocG9zKSA8PSAnOScuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50ICs9IHNbcG9zXTtcclxuICAgICAgICAgICAgICAgICsrcHJlY2lzaW9uO1xyXG4gICAgICAgICAgICAgICAgKytwb3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5hbWUgPSBzLnN1YnN0cihwb3MpLnRyaW0oKTtcclxuICAgICAgICB0aGlzLnB1c2hBcnJheShudW1lcmljLnNpZ25lZERlY2ltYWxUb0JpbmFyeSg4LCBhbW91bnQpKTtcclxuICAgICAgICB0aGlzLnB1c2hTeW1ib2woeyBuYW1lOiBuYW1lLCBwcmVjaXNpb246IHByZWNpc2lvbiB9KTtcclxuICAgIH07XHJcbiAgICAvKiogR2V0IGFuIGFzc2V0ICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLmdldEFzc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhbW91bnQgPSB0aGlzLmdldFVpbnQ4QXJyYXkoOCk7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5nZXRTeW1ib2woKSwgbmFtZSA9IF9hLm5hbWUsIHByZWNpc2lvbiA9IF9hLnByZWNpc2lvbjtcclxuICAgICAgICB2YXIgcyA9IG51bWVyaWMuc2lnbmVkQmluYXJ5VG9EZWNpbWFsKGFtb3VudCwgcHJlY2lzaW9uICsgMSk7XHJcbiAgICAgICAgaWYgKHByZWNpc2lvbikge1xyXG4gICAgICAgICAgICBzID0gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSBwcmVjaXNpb24pICsgJy4nICsgcy5zdWJzdHIocy5sZW5ndGggLSBwcmVjaXNpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcyArICcgJyArIG5hbWU7XHJcbiAgICB9O1xyXG4gICAgLyoqIEFwcGVuZCBhIHB1YmxpYyBrZXkgKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUucHVzaFB1YmxpY0tleSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IG51bWVyaWMuc3RyaW5nVG9QdWJsaWNLZXkocyk7XHJcbiAgICAgICAgdGhpcy5wdXNoKGtleS50eXBlKTtcclxuICAgICAgICB0aGlzLnB1c2hBcnJheShrZXkuZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIEdldCBhIHB1YmxpYyBrZXkgKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUuZ2V0UHVibGljS2V5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0eXBlID0gdGhpcy5nZXQoKTtcclxuICAgICAgICB2YXIgZGF0YTtcclxuICAgICAgICBpZiAodHlwZSA9PT0gbnVtZXJpYy5LZXlUeXBlLndhKSB7XHJcbiAgICAgICAgICAgIHZhciBiZWdpbiA9IHRoaXMucmVhZFBvcztcclxuICAgICAgICAgICAgdGhpcy5za2lwKDM0KTtcclxuICAgICAgICAgICAgdGhpcy5za2lwKHRoaXMuZ2V0VmFydWludDMyKCkpO1xyXG4gICAgICAgICAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5hcnJheS5idWZmZXIsIHRoaXMuYXJyYXkuYnl0ZU9mZnNldCArIGJlZ2luLCB0aGlzLnJlYWRQb3MgLSBiZWdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5nZXRVaW50OEFycmF5KG51bWVyaWMucHVibGljS2V5RGF0YVNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtZXJpYy5wdWJsaWNLZXlUb1N0cmluZyh7IHR5cGU6IHR5cGUsIGRhdGE6IGRhdGEgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIEFwcGVuZCBhIHByaXZhdGUga2V5ICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLnB1c2hQcml2YXRlS2V5ID0gZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICB2YXIga2V5ID0gbnVtZXJpYy5zdHJpbmdUb1ByaXZhdGVLZXkocyk7XHJcbiAgICAgICAgdGhpcy5wdXNoKGtleS50eXBlKTtcclxuICAgICAgICB0aGlzLnB1c2hBcnJheShrZXkuZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIEdldCBhIHByaXZhdGUga2V5ICovXHJcbiAgICBTZXJpYWxCdWZmZXIucHJvdG90eXBlLmdldFByaXZhdGVLZXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHR5cGUgPSB0aGlzLmdldCgpO1xyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5nZXRVaW50OEFycmF5KG51bWVyaWMucHJpdmF0ZUtleURhdGFTaXplKTtcclxuICAgICAgICByZXR1cm4gbnVtZXJpYy5wcml2YXRlS2V5VG9TdHJpbmcoeyB0eXBlOiB0eXBlLCBkYXRhOiBkYXRhIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBBcHBlbmQgYSBzaWduYXR1cmUgKi9cclxuICAgIFNlcmlhbEJ1ZmZlci5wcm90b3R5cGUucHVzaFNpZ25hdHVyZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IG51bWVyaWMuc3RyaW5nVG9TaWduYXR1cmUocyk7XHJcbiAgICAgICAgdGhpcy5wdXNoKGtleS50eXBlKTtcclxuICAgICAgICB0aGlzLnB1c2hBcnJheShrZXkuZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIEdldCBhIHNpZ25hdHVyZSAqL1xyXG4gICAgU2VyaWFsQnVmZmVyLnByb3RvdHlwZS5nZXRTaWduYXR1cmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHR5cGUgPSB0aGlzLmdldCgpO1xyXG4gICAgICAgIHZhciBkYXRhO1xyXG4gICAgICAgIGlmICh0eXBlID09PSBudW1lcmljLktleVR5cGUud2EpIHtcclxuICAgICAgICAgICAgdmFyIGJlZ2luID0gdGhpcy5yZWFkUG9zO1xyXG4gICAgICAgICAgICB0aGlzLnNraXAoNjUpO1xyXG4gICAgICAgICAgICB0aGlzLnNraXAodGhpcy5nZXRWYXJ1aW50MzIoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpcCh0aGlzLmdldFZhcnVpbnQzMigpKTtcclxuICAgICAgICAgICAgZGF0YSA9IG5ldyBVaW50OEFycmF5KHRoaXMuYXJyYXkuYnVmZmVyLCB0aGlzLmFycmF5LmJ5dGVPZmZzZXQgKyBiZWdpbiwgdGhpcy5yZWFkUG9zIC0gYmVnaW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2V0VWludDhBcnJheShudW1lcmljLnNpZ25hdHVyZURhdGFTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bWVyaWMuc2lnbmF0dXJlVG9TdHJpbmcoeyB0eXBlOiB0eXBlLCBkYXRhOiBkYXRhIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTZXJpYWxCdWZmZXI7XHJcbn0oKSk7IC8vIFNlcmlhbEJ1ZmZlclxyXG5leHBvcnRzLlNlcmlhbEJ1ZmZlciA9IFNlcmlhbEJ1ZmZlcjtcclxuLyoqIElzIHRoaXMgYSBzdXBwb3J0ZWQgQUJJIHZlcnNpb24/ICovXHJcbnZhciBzdXBwb3J0ZWRBYmlWZXJzaW9uID0gZnVuY3Rpb24gKHZlcnNpb24pIHtcclxuICAgIHJldHVybiB2ZXJzaW9uLnN0YXJ0c1dpdGgoJ2Vvc2lvOjphYmkvMS4nKTtcclxufTtcclxuZXhwb3J0cy5zdXBwb3J0ZWRBYmlWZXJzaW9uID0gc3VwcG9ydGVkQWJpVmVyc2lvbjtcclxudmFyIGNoZWNrRGF0ZVBhcnNlID0gZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgIHZhciByZXN1bHQgPSBEYXRlLnBhcnNlKGRhdGUpO1xyXG4gICAgaWYgKE51bWJlci5pc05hTihyZXN1bHQpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRpbWUgZm9ybWF0Jyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG4vKiogQ29udmVydCBkYXRlIGluIElTTyBmb3JtYXQgdG8gYHRpbWVfcG9pbnRgIChtaWxpc2Vjb25kcyBzaW5jZSBlcG9jaCkgKi9cclxudmFyIGRhdGVUb1RpbWVQb2ludCA9IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChjaGVja0RhdGVQYXJzZShkYXRlICsgJ1onKSAqIDEwMDApO1xyXG59O1xyXG5leHBvcnRzLmRhdGVUb1RpbWVQb2ludCA9IGRhdGVUb1RpbWVQb2ludDtcclxuLyoqIENvbnZlcnQgYHRpbWVfcG9pbnRgIChtaWxpc2Vjb25kcyBzaW5jZSBlcG9jaCkgdG8gZGF0ZSBpbiBJU08gZm9ybWF0ICovXHJcbnZhciB0aW1lUG9pbnRUb0RhdGUgPSBmdW5jdGlvbiAodXMpIHtcclxuICAgIHZhciBzID0gKG5ldyBEYXRlKHVzIC8gMTAwMCkpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICByZXR1cm4gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSAxKTtcclxufTtcclxuZXhwb3J0cy50aW1lUG9pbnRUb0RhdGUgPSB0aW1lUG9pbnRUb0RhdGU7XHJcbi8qKiBDb252ZXJ0IGRhdGUgaW4gSVNPIGZvcm1hdCB0byBgdGltZV9wb2ludF9zZWNgIChzZWNvbmRzIHNpbmNlIGVwb2NoKSAqL1xyXG52YXIgZGF0ZVRvVGltZVBvaW50U2VjID0gZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGNoZWNrRGF0ZVBhcnNlKGRhdGUgKyAnWicpIC8gMTAwMCk7XHJcbn07XHJcbmV4cG9ydHMuZGF0ZVRvVGltZVBvaW50U2VjID0gZGF0ZVRvVGltZVBvaW50U2VjO1xyXG4vKiogQ29udmVydCBgdGltZV9wb2ludF9zZWNgIChzZWNvbmRzIHNpbmNlIGVwb2NoKSB0byB0byBkYXRlIGluIElTTyBmb3JtYXQgKi9cclxudmFyIHRpbWVQb2ludFNlY1RvRGF0ZSA9IGZ1bmN0aW9uIChzZWMpIHtcclxuICAgIHZhciBzID0gKG5ldyBEYXRlKHNlYyAqIDEwMDApKS50b0lTT1N0cmluZygpO1xyXG4gICAgcmV0dXJuIHMuc3Vic3RyKDAsIHMubGVuZ3RoIC0gMSk7XHJcbn07XHJcbmV4cG9ydHMudGltZVBvaW50U2VjVG9EYXRlID0gdGltZVBvaW50U2VjVG9EYXRlO1xyXG4vKiogQ29udmVydCBkYXRlIGluIElTTyBmb3JtYXQgdG8gYGJsb2NrX3RpbWVzdGFtcF90eXBlYCAoaGFsZi1zZWNvbmRzIHNpbmNlIGEgZGlmZmVyZW50IGVwb2NoKSAqL1xyXG52YXIgZGF0ZVRvQmxvY2tUaW1lc3RhbXAgPSBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKGNoZWNrRGF0ZVBhcnNlKGRhdGUgKyAnWicpIC0gOTQ2Njg0ODAwMDAwKSAvIDUwMCk7XHJcbn07XHJcbmV4cG9ydHMuZGF0ZVRvQmxvY2tUaW1lc3RhbXAgPSBkYXRlVG9CbG9ja1RpbWVzdGFtcDtcclxuLyoqIENvbnZlcnQgYGJsb2NrX3RpbWVzdGFtcF90eXBlYCAoaGFsZi1zZWNvbmRzIHNpbmNlIGEgZGlmZmVyZW50IGVwb2NoKSB0byB0byBkYXRlIGluIElTTyBmb3JtYXQgKi9cclxudmFyIGJsb2NrVGltZXN0YW1wVG9EYXRlID0gZnVuY3Rpb24gKHNsb3QpIHtcclxuICAgIHZhciBzID0gKG5ldyBEYXRlKHNsb3QgKiA1MDAgKyA5NDY2ODQ4MDAwMDApKS50b0lTT1N0cmluZygpO1xyXG4gICAgcmV0dXJuIHMuc3Vic3RyKDAsIHMubGVuZ3RoIC0gMSk7XHJcbn07XHJcbmV4cG9ydHMuYmxvY2tUaW1lc3RhbXBUb0RhdGUgPSBibG9ja1RpbWVzdGFtcFRvRGF0ZTtcclxuLyoqIENvbnZlcnQgYHN0cmluZ2AgdG8gYFN5bWJvbGAuIGZvcm1hdDogYHByZWNpc2lvbixOQU1FYC4gKi9cclxudmFyIHN0cmluZ1RvU3ltYm9sID0gZnVuY3Rpb24gKHMpIHtcclxuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIHN5bWJvbCcpO1xyXG4gICAgfVxyXG4gICAgdmFyIG0gPSBzLm1hdGNoKC9eKFswLTldKyksKFtBLVpdKykkLyk7XHJcbiAgICBpZiAoIW0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3ltYm9sJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBuYW1lOiBtWzJdLCBwcmVjaXNpb246ICttWzFdIH07XHJcbn07XHJcbmV4cG9ydHMuc3RyaW5nVG9TeW1ib2wgPSBzdHJpbmdUb1N5bWJvbDtcclxuLyoqIENvbnZlcnQgYFN5bWJvbGAgdG8gYHN0cmluZ2AuIGZvcm1hdDogYHByZWNpc2lvbixOQU1FYC4gKi9cclxudmFyIHN5bWJvbFRvU3RyaW5nID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHByZWNpc2lvbiA9IF9hLnByZWNpc2lvbjtcclxuICAgIHJldHVybiBwcmVjaXNpb24gKyAnLCcgKyBuYW1lO1xyXG59O1xyXG5leHBvcnRzLnN5bWJvbFRvU3RyaW5nID0gc3ltYm9sVG9TdHJpbmc7XHJcbi8qKiBDb252ZXJ0IGJpbmFyeSBkYXRhIHRvIGhleCAqL1xyXG52YXIgYXJyYXlUb0hleCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICB2YXIgZV8xLCBfYTtcclxuICAgIHZhciByZXN1bHQgPSAnJztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yICh2YXIgZGF0YV8xID0gX192YWx1ZXMoZGF0YSksIGRhdGFfMV8xID0gZGF0YV8xLm5leHQoKTsgIWRhdGFfMV8xLmRvbmU7IGRhdGFfMV8xID0gZGF0YV8xLm5leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIgeCA9IGRhdGFfMV8xLnZhbHVlO1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gKCcwMCcgKyB4LnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YV8xXzEgJiYgIWRhdGFfMV8xLmRvbmUgJiYgKF9hID0gZGF0YV8xLnJldHVybikpIF9hLmNhbGwoZGF0YV8xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdC50b1VwcGVyQ2FzZSgpO1xyXG59O1xyXG5leHBvcnRzLmFycmF5VG9IZXggPSBhcnJheVRvSGV4O1xyXG4vKiogQ29udmVydCBoZXggdG8gYmluYXJ5IGRhdGEgKi9cclxudmFyIGhleFRvVWludDhBcnJheSA9IGZ1bmN0aW9uIChoZXgpIHtcclxuICAgIGlmICh0eXBlb2YgaGV4ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgaGV4IGRpZ2l0cycpO1xyXG4gICAgfVxyXG4gICAgaWYgKGhleC5sZW5ndGggJSAyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPZGQgbnVtYmVyIG9mIGhleCBkaWdpdHMnKTtcclxuICAgIH1cclxuICAgIHZhciBsID0gaGV4Lmxlbmd0aCAvIDI7XHJcbiAgICB2YXIgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkobCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgIHZhciB4ID0gcGFyc2VJbnQoaGV4LnN1YnN0cihpICogMiwgMiksIDE2KTtcclxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgaGV4IHN0cmluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHRbaV0gPSB4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuZXhwb3J0cy5oZXhUb1VpbnQ4QXJyYXkgPSBoZXhUb1VpbnQ4QXJyYXk7XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZVVua25vd24oYnVmZmVyLCBkYXRhKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvblxcJ3Qga25vdyBob3cgdG8gc2VyaWFsaXplICcgKyB0aGlzLm5hbWUpO1xyXG59XHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplVW5rbm93bihidWZmZXIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRG9uXFwndCBrbm93IGhvdyB0byBkZXNlcmlhbGl6ZSAnICsgdGhpcy5uYW1lKTtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVTdHJ1Y3QoYnVmZmVyLCBkYXRhLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKSB7XHJcbiAgICB2YXIgZV8yLCBfYTtcclxuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0gbmV3IFNlcmlhbGl6ZXJTdGF0ZSgpOyB9XHJcbiAgICBpZiAoYWxsb3dFeHRlbnNpb25zID09PSB2b2lkIDApIHsgYWxsb3dFeHRlbnNpb25zID0gdHJ1ZTsgfVxyXG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgb2JqZWN0IGNvbnRhaW5pbmcgZGF0YTogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJhc2UpIHtcclxuICAgICAgICB0aGlzLmJhc2Uuc2VyaWFsaXplKGJ1ZmZlciwgZGF0YSwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyk7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5maWVsZHMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IF9jLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoZmllbGQubmFtZSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc2tpcHBlZEJpbmFyeUV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5leHBlY3RlZCAnICsgdGhpcy5uYW1lICsgJy4nICsgZmllbGQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaWVsZC50eXBlLnNlcmlhbGl6ZShidWZmZXIsIGRhdGFbZmllbGQubmFtZV0sIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMgJiYgZmllbGQgPT09IHRoaXMuZmllbGRzW3RoaXMuZmllbGRzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhbGxvd0V4dGVuc2lvbnMgJiYgZmllbGQudHlwZS5leHRlbnNpb25PZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnNraXBwZWRCaW5hcnlFeHRlbnNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nICcgKyB0aGlzLm5hbWUgKyAnLicgKyBmaWVsZC5uYW1lICsgJyAodHlwZT0nICsgZmllbGQudHlwZS5uYW1lICsgJyknKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZVN0cnVjdChidWZmZXIsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpIHtcclxuICAgIHZhciBlXzMsIF9hO1xyXG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHsgc3RhdGUgPSBuZXcgU2VyaWFsaXplclN0YXRlKCk7IH1cclxuICAgIGlmIChhbGxvd0V4dGVuc2lvbnMgPT09IHZvaWQgMCkgeyBhbGxvd0V4dGVuc2lvbnMgPSB0cnVlOyB9XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgaWYgKHRoaXMuYmFzZSkge1xyXG4gICAgICAgIHJlc3VsdCA9IHRoaXMuYmFzZS5kZXNlcmlhbGl6ZShidWZmZXIsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0ge307XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5maWVsZHMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IF9jLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dFeHRlbnNpb25zICYmIGZpZWxkLnR5cGUuZXh0ZW5zaW9uT2YgJiYgIWJ1ZmZlci5oYXZlUmVhZERhdGEoKSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2tpcHBlZEJpbmFyeUV4dGVuc2lvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbZmllbGQubmFtZV0gPSBmaWVsZC50eXBlLmRlc2VyaWFsaXplKGJ1ZmZlciwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZV8zXzEpIHsgZV8zID0geyBlcnJvcjogZV8zXzEgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZVZhcmlhbnQoYnVmZmVyLCBkYXRhLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkgfHwgZGF0YS5sZW5ndGggIT09IDIgfHwgdHlwZW9mIGRhdGFbMF0gIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCB2YXJpYW50OiBbXCJ0eXBlXCIsIHZhbHVlXScpO1xyXG4gICAgfVxyXG4gICAgdmFyIGkgPSB0aGlzLmZpZWxkcy5maW5kSW5kZXgoZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiBmaWVsZC5uYW1lID09PSBkYXRhWzBdOyB9KTtcclxuICAgIGlmIChpIDwgMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInR5cGUgXFxcIlwiICsgZGF0YVswXSArIFwiXFxcIiBpcyBub3QgdmFsaWQgZm9yIHZhcmlhbnRcIik7XHJcbiAgICB9XHJcbiAgICBidWZmZXIucHVzaFZhcnVpbnQzMihpKTtcclxuICAgIHRoaXMuZmllbGRzW2ldLnR5cGUuc2VyaWFsaXplKGJ1ZmZlciwgZGF0YVsxXSwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyk7XHJcbn1cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVWYXJpYW50KGJ1ZmZlciwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucykge1xyXG4gICAgdmFyIGkgPSBidWZmZXIuZ2V0VmFydWludDMyKCk7XHJcbiAgICBpZiAoaSA+PSB0aGlzLmZpZWxkcy5sZW5ndGgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0eXBlIGluZGV4IFwiICsgaSArIFwiIGlzIG5vdCB2YWxpZCBmb3IgdmFyaWFudFwiKTtcclxuICAgIH1cclxuICAgIHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldO1xyXG4gICAgcmV0dXJuIFtmaWVsZC5uYW1lLCBmaWVsZC50eXBlLmRlc2VyaWFsaXplKGJ1ZmZlciwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyldO1xyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZUFycmF5KGJ1ZmZlciwgZGF0YSwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucykge1xyXG4gICAgdmFyIGVfNCwgX2E7XHJcbiAgICBidWZmZXIucHVzaFZhcnVpbnQzMihkYXRhLmxlbmd0aCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIGRhdGFfMiA9IF9fdmFsdWVzKGRhdGEpLCBkYXRhXzJfMSA9IGRhdGFfMi5uZXh0KCk7ICFkYXRhXzJfMS5kb25lOyBkYXRhXzJfMSA9IGRhdGFfMi5uZXh0KCkpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBkYXRhXzJfMS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5hcnJheU9mLnNlcmlhbGl6ZShidWZmZXIsIGl0ZW0sIHN0YXRlLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfNF8xKSB7IGVfNCA9IHsgZXJyb3I6IGVfNF8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhXzJfMSAmJiAhZGF0YV8yXzEuZG9uZSAmJiAoX2EgPSBkYXRhXzIucmV0dXJuKSkgX2EuY2FsbChkYXRhXzIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfNCkgdGhyb3cgZV80LmVycm9yOyB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVBcnJheShidWZmZXIsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpIHtcclxuICAgIHZhciBsZW4gPSBidWZmZXIuZ2V0VmFydWludDMyKCk7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5hcnJheU9mLmRlc2VyaWFsaXplKGJ1ZmZlciwgc3RhdGUsIGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZU9wdGlvbmFsKGJ1ZmZlciwgZGF0YSwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucykge1xyXG4gICAgaWYgKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYnVmZmVyLnB1c2goMCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBidWZmZXIucHVzaCgxKTtcclxuICAgICAgICB0aGlzLm9wdGlvbmFsT2Yuc2VyaWFsaXplKGJ1ZmZlciwgZGF0YSwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVPcHRpb25hbChidWZmZXIsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpIHtcclxuICAgIGlmIChidWZmZXIuZ2V0KCkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25hbE9mLmRlc2VyaWFsaXplKGJ1ZmZlciwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVFeHRlbnNpb24oYnVmZmVyLCBkYXRhLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKSB7XHJcbiAgICB0aGlzLmV4dGVuc2lvbk9mLnNlcmlhbGl6ZShidWZmZXIsIGRhdGEsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xyXG59XHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplRXh0ZW5zaW9uKGJ1ZmZlciwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uT2YuZGVzZXJpYWxpemUoYnVmZmVyLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKTtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVPYmplY3QoYnVmZmVyLCBkYXRhLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKSB7XHJcbiAgICB2YXIgZV81LCBfYTtcclxuICAgIHZhciBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YSk7XHJcbiAgICBidWZmZXIucHVzaFZhcnVpbnQzMihlbnRyaWVzLmxlbmd0aCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIGVudHJpZXNfMSA9IF9fdmFsdWVzKGVudHJpZXMpLCBlbnRyaWVzXzFfMSA9IGVudHJpZXNfMS5uZXh0KCk7ICFlbnRyaWVzXzFfMS5kb25lOyBlbnRyaWVzXzFfMSA9IGVudHJpZXNfMS5uZXh0KCkpIHtcclxuICAgICAgICAgICAgdmFyIF9iID0gX19yZWFkKGVudHJpZXNfMV8xLnZhbHVlLCAyKSwga2V5ID0gX2JbMF0sIHZhbHVlID0gX2JbMV07XHJcbiAgICAgICAgICAgIHZhciBrZXlUeXBlID0gdGhpcy5maWVsZHNbMF0udHlwZTtcclxuICAgICAgICAgICAgdmFyIGRhdGFUeXBlID0gdGhpcy5maWVsZHNbMV0udHlwZTtcclxuICAgICAgICAgICAga2V5VHlwZS5zZXJpYWxpemUoYnVmZmVyLCBrZXksIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xyXG4gICAgICAgICAgICBkYXRhVHlwZS5zZXJpYWxpemUoYnVmZmVyLCB2YWx1ZSwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfNV8xKSB7IGVfNSA9IHsgZXJyb3I6IGVfNV8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyaWVzXzFfMSAmJiAhZW50cmllc18xXzEuZG9uZSAmJiAoX2EgPSBlbnRyaWVzXzEucmV0dXJuKSkgX2EuY2FsbChlbnRyaWVzXzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfNSkgdGhyb3cgZV81LmVycm9yOyB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVPYmplY3QoYnVmZmVyLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKSB7XHJcbiAgICB2YXIgbGVuID0gYnVmZmVyLmdldFZhcnVpbnQzMigpO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgIHZhciBrZXlUeXBlID0gdGhpcy5maWVsZHNbMF0udHlwZTtcclxuICAgICAgICB2YXIgZGF0YVR5cGUgPSB0aGlzLmZpZWxkc1sxXS50eXBlO1xyXG4gICAgICAgIHZhciBrZXkgPSBrZXlUeXBlLmRlc2VyaWFsaXplKGJ1ZmZlciwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyk7XHJcbiAgICAgICAgcmVzdWx0W2tleV0gPSBkYXRhVHlwZS5kZXNlcmlhbGl6ZShidWZmZXIsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVQYWlyKGJ1ZmZlciwgZGF0YSwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucykge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIGJ1ZmZlci5wdXNoVmFydWludDMyKGRhdGEubGVuZ3RoKTtcclxuICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIF90aGlzLmZpZWxkc1swXS50eXBlLnNlcmlhbGl6ZShidWZmZXIsIGl0ZW1bMF0sIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xyXG4gICAgICAgIF90aGlzLmZpZWxkc1sxXS50eXBlLnNlcmlhbGl6ZShidWZmZXIsIGl0ZW1bMV0sIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVQYWlyKGJ1ZmZlciwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucykge1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgdmFyIGxlbiA9IGJ1ZmZlci5nZXRWYXJ1aW50MzIoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICByZXN1bHQucHVzaCh0aGlzLmZpZWxkc1swXS50eXBlLmRlc2VyaWFsaXplKGJ1ZmZlciwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucykpO1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZmllbGRzWzFdLnR5cGUuZGVzZXJpYWxpemUoYnVmZmVyLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbnZhciBjcmVhdGVUeXBlID0gZnVuY3Rpb24gKGF0dHJzKSB7XHJcbiAgICByZXR1cm4gX19hc3NpZ24oeyBuYW1lOiAnPG1pc3NpbmcgbmFtZT4nLCBhbGlhc09mTmFtZTogJycsIGFycmF5T2Y6IG51bGwsIG9wdGlvbmFsT2Y6IG51bGwsIGV4dGVuc2lvbk9mOiBudWxsLCBiYXNlTmFtZTogJycsIGJhc2U6IG51bGwsIGZpZWxkczogW10sIHNlcmlhbGl6ZTogc2VyaWFsaXplVW5rbm93biwgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplVW5rbm93biB9LCBhdHRycyk7XHJcbn07XHJcbnZhciBjaGVja1JhbmdlID0gZnVuY3Rpb24gKG9yaWcsIGNvbnZlcnRlZCkge1xyXG4gICAgaWYgKE51bWJlci5pc05hTigrb3JpZykgfHwgTnVtYmVyLmlzTmFOKCtjb252ZXJ0ZWQpIHx8ICh0eXBlb2Ygb3JpZyAhPT0gJ251bWJlcicgJiYgdHlwZW9mIG9yaWcgIT09ICdzdHJpbmcnKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbnVtYmVyJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoK29yaWcgIT09ICtjb252ZXJ0ZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ051bWJlciBpcyBvdXQgb2YgcmFuZ2UnKTtcclxuICAgIH1cclxuICAgIHJldHVybiArb3JpZztcclxufTtcclxuLyoqIENyZWF0ZSB0aGUgc2V0IG9mIHR5cGVzIGJ1aWx0LWluIHRvIHRoZSBhYmkgZm9ybWF0ICovXHJcbnZhciBjcmVhdGVJbml0aWFsVHlwZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gbmV3IE1hcChPYmplY3QuZW50cmllcyh7XHJcbiAgICAgICAgYm9vbDogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdib29sJyxcclxuICAgICAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISh0eXBlb2YgZGF0YSA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJyAmJiAoZGF0YSA9PT0gMSB8fCBkYXRhID09PSAwKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGJvb2xlYW4gb3IgbnVtYmVyIGVxdWFsIHRvIDEgb3IgMCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goZGF0YSA/IDEgOiAwKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuICEhYnVmZmVyLmdldCgpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHVpbnQ4OiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3VpbnQ4JyxcclxuICAgICAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyLCBkYXRhKSB7IGJ1ZmZlci5wdXNoKGNoZWNrUmFuZ2UoZGF0YSwgZGF0YSAmIDB4ZmYpKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXQoKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBpbnQ4OiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2ludDgnLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIsIGRhdGEpIHsgYnVmZmVyLnB1c2goY2hlY2tSYW5nZShkYXRhLCBkYXRhIDw8IDI0ID4+IDI0KSk7IH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0KCkgPDwgMjQgPj4gMjQ7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdWludDE2OiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3VpbnQxNicsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlciwgZGF0YSkgeyBidWZmZXIucHVzaFVpbnQxNihjaGVja1JhbmdlKGRhdGEsIGRhdGEgJiAweGZmZmYpKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRVaW50MTYoKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBpbnQxNjogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdpbnQxNicsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlciwgZGF0YSkgeyBidWZmZXIucHVzaFVpbnQxNihjaGVja1JhbmdlKGRhdGEsIGRhdGEgPDwgMTYgPj4gMTYpKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRVaW50MTYoKSA8PCAxNiA+PiAxNjsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICB1aW50MzI6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAndWludDMyJyxcclxuICAgICAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyLCBkYXRhKSB7IGJ1ZmZlci5wdXNoVWludDMyKGNoZWNrUmFuZ2UoZGF0YSwgZGF0YSA+Pj4gMCkpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFVpbnQzMigpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHVpbnQ2NDogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICd1aW50NjQnLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoQXJyYXkobnVtZXJpYy5kZWNpbWFsVG9CaW5hcnkoOCwgJycgKyBkYXRhKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyKSB7IHJldHVybiBudW1lcmljLmJpbmFyeVRvRGVjaW1hbChidWZmZXIuZ2V0VWludDhBcnJheSg4KSk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaW50NjQ6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnaW50NjQnLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoQXJyYXkobnVtZXJpYy5zaWduZWREZWNpbWFsVG9CaW5hcnkoOCwgJycgKyBkYXRhKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyKSB7IHJldHVybiBudW1lcmljLnNpZ25lZEJpbmFyeVRvRGVjaW1hbChidWZmZXIuZ2V0VWludDhBcnJheSg4KSk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaW50MzI6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnaW50MzInLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIsIGRhdGEpIHsgYnVmZmVyLnB1c2hVaW50MzIoY2hlY2tSYW5nZShkYXRhLCBkYXRhIHwgMCkpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFVpbnQzMigpIHwgMDsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICB2YXJ1aW50MzI6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAndmFydWludDMyJyxcclxuICAgICAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyLCBkYXRhKSB7IGJ1ZmZlci5wdXNoVmFydWludDMyKGNoZWNrUmFuZ2UoZGF0YSwgZGF0YSA+Pj4gMCkpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFZhcnVpbnQzMigpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHZhcmludDMyOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3ZhcmludDMyJyxcclxuICAgICAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyLCBkYXRhKSB7IGJ1ZmZlci5wdXNoVmFyaW50MzIoY2hlY2tSYW5nZShkYXRhLCBkYXRhIHwgMCkpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFZhcmludDMyKCk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdWludDEyODogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICd1aW50MTI4JyxcclxuICAgICAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyLCBkYXRhKSB7IGJ1ZmZlci5wdXNoQXJyYXkobnVtZXJpYy5kZWNpbWFsVG9CaW5hcnkoMTYsICcnICsgZGF0YSkpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlcikgeyByZXR1cm4gbnVtZXJpYy5iaW5hcnlUb0RlY2ltYWwoYnVmZmVyLmdldFVpbnQ4QXJyYXkoMTYpKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBpbnQxMjg6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnaW50MTI4JyxcclxuICAgICAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIucHVzaEFycmF5KG51bWVyaWMuc2lnbmVkRGVjaW1hbFRvQmluYXJ5KDE2LCAnJyArIGRhdGEpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuIG51bWVyaWMuc2lnbmVkQmluYXJ5VG9EZWNpbWFsKGJ1ZmZlci5nZXRVaW50OEFycmF5KDE2KSk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmxvYXQzMjogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdmbG9hdDMyJyxcclxuICAgICAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyLCBkYXRhKSB7IGJ1ZmZlci5wdXNoRmxvYXQzMihkYXRhKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRGbG9hdDMyKCk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmxvYXQ2NDogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdmbG9hdDY0JyxcclxuICAgICAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyLCBkYXRhKSB7IGJ1ZmZlci5wdXNoRmxvYXQ2NChkYXRhKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRGbG9hdDY0KCk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmxvYXQxMjg6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnZmxvYXQxMjgnLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIsIGRhdGEpIHsgYnVmZmVyLnB1c2hVaW50OEFycmF5Q2hlY2tlZChleHBvcnRzLmhleFRvVWludDhBcnJheShkYXRhKSwgMTYpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlcikgeyByZXR1cm4gZXhwb3J0cy5hcnJheVRvSGV4KGJ1ZmZlci5nZXRVaW50OEFycmF5KDE2KSk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYnl0ZXM6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYnl0ZXMnLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSB8fCBBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLnB1c2hCeXRlcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoQnl0ZXMoZXhwb3J0cy5oZXhUb1VpbnQ4QXJyYXkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlciwgc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5vcHRpb25zLmJ5dGVzQXNVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlci5nZXRCeXRlcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuYXJyYXlUb0hleChidWZmZXIuZ2V0Qnl0ZXMoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3RyaW5nOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlciwgZGF0YSkgeyBidWZmZXIucHVzaFN0cmluZyhkYXRhKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRTdHJpbmcoKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBuYW1lOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIsIGRhdGEpIHsgYnVmZmVyLnB1c2hOYW1lKGRhdGEpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldE5hbWUoKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICB0aW1lX3BvaW50OiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3RpbWVfcG9pbnQnLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIsIGRhdGEpIHsgYnVmZmVyLnB1c2hOdW1iZXJBc1VpbnQ2NChleHBvcnRzLmRhdGVUb1RpbWVQb2ludChkYXRhKSk7IH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyKSB7IHJldHVybiBleHBvcnRzLnRpbWVQb2ludFRvRGF0ZShidWZmZXIuZ2V0VWludDY0QXNOdW1iZXIoKSk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGltZV9wb2ludF9zZWM6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAndGltZV9wb2ludF9zZWMnLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIsIGRhdGEpIHsgYnVmZmVyLnB1c2hVaW50MzIoZXhwb3J0cy5kYXRlVG9UaW1lUG9pbnRTZWMoZGF0YSkpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlcikgeyByZXR1cm4gZXhwb3J0cy50aW1lUG9pbnRTZWNUb0RhdGUoYnVmZmVyLmdldFVpbnQzMigpKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBibG9ja190aW1lc3RhbXBfdHlwZTogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdibG9ja190aW1lc3RhbXBfdHlwZScsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlciwgZGF0YSkgeyBidWZmZXIucHVzaFVpbnQzMihleHBvcnRzLmRhdGVUb0Jsb2NrVGltZXN0YW1wKGRhdGEpKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuIGV4cG9ydHMuYmxvY2tUaW1lc3RhbXBUb0RhdGUoYnVmZmVyLmdldFVpbnQzMigpKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBzeW1ib2xfY29kZTogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdzeW1ib2xfY29kZScsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlciwgZGF0YSkgeyBidWZmZXIucHVzaFN5bWJvbENvZGUoZGF0YSk7IH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0U3ltYm9sQ29kZSgpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN5bWJvbDogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdzeW1ib2wnLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIsIGRhdGEpIHsgYnVmZmVyLnB1c2hTeW1ib2woZXhwb3J0cy5zdHJpbmdUb1N5bWJvbChkYXRhKSk7IH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyKSB7IHJldHVybiBleHBvcnRzLnN5bWJvbFRvU3RyaW5nKGJ1ZmZlci5nZXRTeW1ib2woKSk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYXNzZXQ6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYXNzZXQnLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIsIGRhdGEpIHsgYnVmZmVyLnB1c2hBc3NldChkYXRhKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRBc3NldCgpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNoZWNrc3VtMTYwOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2NoZWNrc3VtMTYwJyxcclxuICAgICAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyLCBkYXRhKSB7IGJ1ZmZlci5wdXNoVWludDhBcnJheUNoZWNrZWQoZXhwb3J0cy5oZXhUb1VpbnQ4QXJyYXkoZGF0YSksIDIwKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuIGV4cG9ydHMuYXJyYXlUb0hleChidWZmZXIuZ2V0VWludDhBcnJheSgyMCkpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNoZWNrc3VtMjU2OiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2NoZWNrc3VtMjU2JyxcclxuICAgICAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyLCBkYXRhKSB7IGJ1ZmZlci5wdXNoVWludDhBcnJheUNoZWNrZWQoZXhwb3J0cy5oZXhUb1VpbnQ4QXJyYXkoZGF0YSksIDMyKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuIGV4cG9ydHMuYXJyYXlUb0hleChidWZmZXIuZ2V0VWludDhBcnJheSgzMikpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNoZWNrc3VtNTEyOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2NoZWNrc3VtNTEyJyxcclxuICAgICAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyLCBkYXRhKSB7IGJ1ZmZlci5wdXNoVWludDhBcnJheUNoZWNrZWQoZXhwb3J0cy5oZXhUb1VpbnQ4QXJyYXkoZGF0YSksIDY0KTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuIGV4cG9ydHMuYXJyYXlUb0hleChidWZmZXIuZ2V0VWludDhBcnJheSg2NCkpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHB1YmxpY19rZXk6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAncHVibGljX2tleScsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlciwgZGF0YSkgeyBidWZmZXIucHVzaFB1YmxpY0tleShkYXRhKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRQdWJsaWNLZXkoKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBwcml2YXRlX2tleTogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwcml2YXRlX2tleScsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKGJ1ZmZlciwgZGF0YSkgeyBidWZmZXIucHVzaFByaXZhdGVLZXkoZGF0YSk7IH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0UHJpdmF0ZUtleSgpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHNpZ25hdHVyZTogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdzaWduYXR1cmUnLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIsIGRhdGEpIHsgYnVmZmVyLnB1c2hTaWduYXR1cmUoZGF0YSk7IH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0U2lnbmF0dXJlKCk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgICByZXN1bHQuc2V0KCdleHRlbmRlZF9hc3NldCcsIGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgIG5hbWU6ICdleHRlbmRlZF9hc3NldCcsXHJcbiAgICAgICAgYmFzZU5hbWU6ICcnLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6ICdxdWFudGl0eScsIHR5cGVOYW1lOiAnYXNzZXQnLCB0eXBlOiByZXN1bHQuZ2V0KCdhc3NldCcpIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2NvbnRyYWN0JywgdHlwZU5hbWU6ICduYW1lJywgdHlwZTogcmVzdWx0LmdldCgnbmFtZScpIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZVN0cnVjdCxcclxuICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICB9KSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59OyAvLyBjcmVhdGVJbml0aWFsVHlwZXMoKVxyXG5leHBvcnRzLmNyZWF0ZUluaXRpYWxUeXBlcyA9IGNyZWF0ZUluaXRpYWxUeXBlcztcclxudmFyIGNyZWF0ZUFiaVR5cGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGluaXRpYWxUeXBlcyA9IGV4cG9ydHMuY3JlYXRlSW5pdGlhbFR5cGVzKCk7XHJcbiAgICBpbml0aWFsVHlwZXMuc2V0KCdleHRlbnNpb25zX2VudHJ5JywgY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgbmFtZTogJ2V4dGVuc2lvbnNfZW50cnknLFxyXG4gICAgICAgIGJhc2VOYW1lOiAnJyxcclxuICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgeyBuYW1lOiAndGFnJywgdHlwZU5hbWU6ICd1aW50MTYnLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ3ZhbHVlJywgdHlwZU5hbWU6ICdieXRlcycsIHR5cGU6IG51bGwgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplU3RydWN0LFxyXG4gICAgfSkpO1xyXG4gICAgaW5pdGlhbFR5cGVzLnNldCgndHlwZV9kZWYnLCBjcmVhdGVUeXBlKHtcclxuICAgICAgICBuYW1lOiAndHlwZV9kZWYnLFxyXG4gICAgICAgIGJhc2VOYW1lOiAnJyxcclxuICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgeyBuYW1lOiAnbmV3X3R5cGVfbmFtZScsIHR5cGVOYW1lOiAnc3RyaW5nJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICd0eXBlJywgdHlwZU5hbWU6ICdzdHJpbmcnLCB0eXBlOiBudWxsIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplU3RydWN0LFxyXG4gICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZVN0cnVjdCxcclxuICAgIH0pKTtcclxuICAgIGluaXRpYWxUeXBlcy5zZXQoJ2ZpZWxkX2RlZicsIGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgIG5hbWU6ICdmaWVsZF9kZWYnLFxyXG4gICAgICAgIGJhc2VOYW1lOiAnJyxcclxuICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgeyBuYW1lOiAnbmFtZScsIHR5cGVOYW1lOiAnc3RyaW5nJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICd0eXBlJywgdHlwZU5hbWU6ICdzdHJpbmcnLCB0eXBlOiBudWxsIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplU3RydWN0LFxyXG4gICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZVN0cnVjdCxcclxuICAgIH0pKTtcclxuICAgIGluaXRpYWxUeXBlcy5zZXQoJ3N0cnVjdF9kZWYnLCBjcmVhdGVUeXBlKHtcclxuICAgICAgICBuYW1lOiAnc3RydWN0X2RlZicsXHJcbiAgICAgICAgYmFzZU5hbWU6ICcnLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6ICduYW1lJywgdHlwZU5hbWU6ICdzdHJpbmcnLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2Jhc2UnLCB0eXBlTmFtZTogJ3N0cmluZycsIHR5cGU6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnZmllbGRzJywgdHlwZU5hbWU6ICdmaWVsZF9kZWZbXScsIHR5cGU6IG51bGwgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplU3RydWN0LFxyXG4gICAgfSkpO1xyXG4gICAgaW5pdGlhbFR5cGVzLnNldCgnYWN0aW9uX2RlZicsIGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgIG5hbWU6ICdhY3Rpb25fZGVmJyxcclxuICAgICAgICBiYXNlTmFtZTogJycsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ25hbWUnLCB0eXBlTmFtZTogJ25hbWUnLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ3R5cGUnLCB0eXBlTmFtZTogJ3N0cmluZycsIHR5cGU6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAncmljYXJkaWFuX2NvbnRyYWN0JywgdHlwZU5hbWU6ICdzdHJpbmcnLCB0eXBlOiBudWxsIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplU3RydWN0LFxyXG4gICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZVN0cnVjdCxcclxuICAgIH0pKTtcclxuICAgIGluaXRpYWxUeXBlcy5zZXQoJ3RhYmxlX2RlZicsIGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgIG5hbWU6ICd0YWJsZV9kZWYnLFxyXG4gICAgICAgIGJhc2VOYW1lOiAnJyxcclxuICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgeyBuYW1lOiAnbmFtZScsIHR5cGVOYW1lOiAnbmFtZScsIHR5cGU6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnaW5kZXhfdHlwZScsIHR5cGVOYW1lOiAnc3RyaW5nJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdrZXlfbmFtZXMnLCB0eXBlTmFtZTogJ3N0cmluZ1tdJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdrZXlfdHlwZXMnLCB0eXBlTmFtZTogJ3N0cmluZ1tdJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICd0eXBlJywgdHlwZU5hbWU6ICdzdHJpbmcnLCB0eXBlOiBudWxsIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplU3RydWN0LFxyXG4gICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZVN0cnVjdCxcclxuICAgIH0pKTtcclxuICAgIGluaXRpYWxUeXBlcy5zZXQoJ2NsYXVzZV9wYWlyJywgY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgbmFtZTogJ2NsYXVzZV9wYWlyJyxcclxuICAgICAgICBiYXNlTmFtZTogJycsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2lkJywgdHlwZU5hbWU6ICdzdHJpbmcnLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2JvZHknLCB0eXBlTmFtZTogJ3N0cmluZycsIHR5cGU6IG51bGwgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplU3RydWN0LFxyXG4gICAgfSkpO1xyXG4gICAgaW5pdGlhbFR5cGVzLnNldCgnZXJyb3JfbWVzc2FnZScsIGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgIG5hbWU6ICdlcnJvcl9tZXNzYWdlJyxcclxuICAgICAgICBiYXNlTmFtZTogJycsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2Vycm9yX2NvZGUnLCB0eXBlTmFtZTogJ3VpbnQ2NCcsIHR5cGU6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnZXJyb3JfbXNnJywgdHlwZU5hbWU6ICdzdHJpbmcnLCB0eXBlOiBudWxsIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplU3RydWN0LFxyXG4gICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZVN0cnVjdCxcclxuICAgIH0pKTtcclxuICAgIGluaXRpYWxUeXBlcy5zZXQoJ3ZhcmlhbnRfZGVmJywgY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgbmFtZTogJ3ZhcmlhbnRfZGVmJyxcclxuICAgICAgICBiYXNlTmFtZTogJycsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ25hbWUnLCB0eXBlTmFtZTogJ3N0cmluZycsIHR5cGU6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAndHlwZXMnLCB0eXBlTmFtZTogJ3N0cmluZ1tdJywgdHlwZTogbnVsbCB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZVN0cnVjdCxcclxuICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICB9KSk7XHJcbiAgICBpbml0aWFsVHlwZXMuc2V0KCdhY3Rpb25fcmVzdWx0JywgY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgbmFtZTogJ2FjdGlvbl9yZXN1bHQnLFxyXG4gICAgICAgIGJhc2VOYW1lOiAnJyxcclxuICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgeyBuYW1lOiAnbmFtZScsIHR5cGVOYW1lOiAnbmFtZScsIHR5cGU6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAncmVzdWx0X3R5cGUnLCB0eXBlTmFtZTogJ3N0cmluZycsIHR5cGU6IG51bGwgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplU3RydWN0LFxyXG4gICAgfSkpO1xyXG4gICAgaW5pdGlhbFR5cGVzLnNldCgncHJpbWFyeV9rZXlfaW5kZXhfZGVmJywgY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgbmFtZTogJ3ByaW1hcnlfa2V5X2luZGV4X2RlZicsXHJcbiAgICAgICAgYmFzZU5hbWU6ICcnLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6ICduYW1lJywgdHlwZU5hbWU6ICduYW1lJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICd0eXBlJywgdHlwZU5hbWU6ICdzdHJpbmcnLCB0eXBlOiBudWxsIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplU3RydWN0LFxyXG4gICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZVN0cnVjdCxcclxuICAgIH0pKTtcclxuICAgIGluaXRpYWxUeXBlcy5zZXQoJ3NlY29uZGFyeV9pbmRleF9kZWYnLCBjcmVhdGVUeXBlKHtcclxuICAgICAgICBuYW1lOiAnc2Vjb25kYXJ5X2luZGV4X2RlZicsXHJcbiAgICAgICAgYmFzZU5hbWU6ICcnLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6ICd0eXBlJywgdHlwZU5hbWU6ICdzdHJpbmcnLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZVN0cnVjdCxcclxuICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICB9KSk7XHJcbiAgICBpbml0aWFsVHlwZXMuc2V0KCdzZWNvbmRhcnlfaW5kaWNlcycsIGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgIG5hbWU6ICdzZWNvbmRhcnlfaW5kaWNlcycsXHJcbiAgICAgICAgYmFzZU5hbWU6ICcnLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6ICduYW1lJywgdHlwZU5hbWU6ICduYW1lJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdzZWNvbmRhcnlfaW5kZXhfZGVmJywgdHlwZU5hbWU6ICdzZWNvbmRhcnlfaW5kZXhfZGVmJywgdHlwZTogbnVsbCB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZU9iamVjdCxcclxuICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVPYmplY3QsXHJcbiAgICB9KSk7XHJcbiAgICBpbml0aWFsVHlwZXMuc2V0KCdrdl90YWJsZV9lbnRyeV9kZWYnLCBjcmVhdGVUeXBlKHtcclxuICAgICAgICBuYW1lOiAna3ZfdGFibGVfZW50cnlfZGVmJyxcclxuICAgICAgICBiYXNlTmFtZTogJycsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ3R5cGUnLCB0eXBlTmFtZTogJ3N0cmluZycsIHR5cGU6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAncHJpbWFyeV9pbmRleCcsIHR5cGVOYW1lOiAncHJpbWFyeV9rZXlfaW5kZXhfZGVmJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdzZWNvbmRhcnlfaW5kaWNlcycsIHR5cGVOYW1lOiAnc2Vjb25kYXJ5X2luZGljZXMnLCB0eXBlOiBudWxsIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplU3RydWN0LFxyXG4gICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZVN0cnVjdCxcclxuICAgIH0pKTtcclxuICAgIGluaXRpYWxUeXBlcy5zZXQoJ2t2X3RhYmxlJywgY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgbmFtZTogJ2t2X3RhYmxlJyxcclxuICAgICAgICBiYXNlTmFtZTogJycsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ25hbWUnLCB0eXBlTmFtZTogJ25hbWUnLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2t2X3RhYmxlX2VudHJ5X2RlZicsIHR5cGVOYW1lOiAna3ZfdGFibGVfZW50cnlfZGVmJywgdHlwZTogbnVsbCB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZU9iamVjdCxcclxuICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVPYmplY3RcclxuICAgIH0pKTtcclxuICAgIGluaXRpYWxUeXBlcy5zZXQoJ2FiaV9kZWYnLCBjcmVhdGVUeXBlKHtcclxuICAgICAgICBuYW1lOiAnYWJpX2RlZicsXHJcbiAgICAgICAgYmFzZU5hbWU6ICcnLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6ICd2ZXJzaW9uJywgdHlwZU5hbWU6ICdzdHJpbmcnLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ3R5cGVzJywgdHlwZU5hbWU6ICd0eXBlX2RlZltdJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdzdHJ1Y3RzJywgdHlwZU5hbWU6ICdzdHJ1Y3RfZGVmW10nLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2FjdGlvbnMnLCB0eXBlTmFtZTogJ2FjdGlvbl9kZWZbXScsIHR5cGU6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAndGFibGVzJywgdHlwZU5hbWU6ICd0YWJsZV9kZWZbXScsIHR5cGU6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAncmljYXJkaWFuX2NsYXVzZXMnLCB0eXBlTmFtZTogJ2NsYXVzZV9wYWlyW10nLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2Vycm9yX21lc3NhZ2VzJywgdHlwZU5hbWU6ICdlcnJvcl9tZXNzYWdlW10nLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2FiaV9leHRlbnNpb25zJywgdHlwZU5hbWU6ICdleHRlbnNpb25zX2VudHJ5W10nLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ3ZhcmlhbnRzJywgdHlwZU5hbWU6ICd2YXJpYW50X2RlZltdJCcsIHR5cGU6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnYWN0aW9uX3Jlc3VsdHMnLCB0eXBlTmFtZTogJ2FjdGlvbl9yZXN1bHRbXSQnLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2t2X3RhYmxlcycsIHR5cGVOYW1lOiAna3ZfdGFibGUkJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplU3RydWN0LFxyXG4gICAgfSkpO1xyXG4gICAgcmV0dXJuIGluaXRpYWxUeXBlcztcclxufTtcclxuZXhwb3J0cy5jcmVhdGVBYmlUeXBlcyA9IGNyZWF0ZUFiaVR5cGVzO1xyXG52YXIgY3JlYXRlVHJhbnNhY3Rpb25FeHRlbnNpb25UeXBlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpbml0aWFsVHlwZXMgPSBleHBvcnRzLmNyZWF0ZUluaXRpYWxUeXBlcygpO1xyXG4gICAgaW5pdGlhbFR5cGVzLnNldCgncmVzb3VyY2VfcGF5ZXInLCBjcmVhdGVUeXBlKHtcclxuICAgICAgICBuYW1lOiAncmVzb3VyY2VfcGF5ZXInLFxyXG4gICAgICAgIGJhc2VOYW1lOiAnJyxcclxuICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgeyBuYW1lOiAncGF5ZXInLCB0eXBlTmFtZTogJ25hbWUnLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ21heF9uZXRfYnl0ZXMnLCB0eXBlTmFtZTogJ3VpbnQ2NCcsIHR5cGU6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnbWF4X2NwdV91cycsIHR5cGVOYW1lOiAndWludDY0JywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdtYXhfbWVtb3J5X2J5dGVzJywgdHlwZU5hbWU6ICd1aW50NjQnLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZVN0cnVjdCxcclxuICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICB9KSk7XHJcbiAgICByZXR1cm4gaW5pdGlhbFR5cGVzO1xyXG59O1xyXG5leHBvcnRzLmNyZWF0ZVRyYW5zYWN0aW9uRXh0ZW5zaW9uVHlwZXMgPSBjcmVhdGVUcmFuc2FjdGlvbkV4dGVuc2lvblR5cGVzO1xyXG52YXIgY3JlYXRlVHJhbnNhY3Rpb25UeXBlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpbml0aWFsVHlwZXMgPSBleHBvcnRzLmNyZWF0ZUluaXRpYWxUeXBlcygpO1xyXG4gICAgaW5pdGlhbFR5cGVzLnNldCgncGVybWlzc2lvbl9sZXZlbCcsIGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgIG5hbWU6ICdwZXJtaXNzaW9uX2xldmVsJyxcclxuICAgICAgICBiYXNlTmFtZTogJycsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2FjdG9yJywgdHlwZU5hbWU6ICduYW1lJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdwZXJtaXNzaW9uJywgdHlwZU5hbWU6ICduYW1lJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplU3RydWN0LFxyXG4gICAgfSkpO1xyXG4gICAgaW5pdGlhbFR5cGVzLnNldCgnYWN0aW9uJywgY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgbmFtZTogJ2FjdGlvbicsXHJcbiAgICAgICAgYmFzZU5hbWU6ICcnLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6ICdhY2NvdW50JywgdHlwZU5hbWU6ICduYW1lJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICduYW1lJywgdHlwZU5hbWU6ICduYW1lJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdhdXRob3JpemF0aW9uJywgdHlwZU5hbWU6ICdwZXJtaXNzaW9uX2xldmVsW10nLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2RhdGEnLCB0eXBlTmFtZTogJ2J5dGVzJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplU3RydWN0LFxyXG4gICAgfSkpO1xyXG4gICAgaW5pdGlhbFR5cGVzLnNldCgnZXh0ZW5zaW9uJywgY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgbmFtZTogJ2V4dGVuc2lvbicsXHJcbiAgICAgICAgYmFzZU5hbWU6ICcnLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6ICd0eXBlJywgdHlwZU5hbWU6ICd1aW50MTYnLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2RhdGEnLCB0eXBlTmFtZTogJ2J5dGVzJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVQYWlyLFxyXG4gICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZVBhaXIsXHJcbiAgICB9KSk7XHJcbiAgICBpbml0aWFsVHlwZXMuc2V0KCd0cmFuc2FjdGlvbl9oZWFkZXInLCBjcmVhdGVUeXBlKHtcclxuICAgICAgICBuYW1lOiAndHJhbnNhY3Rpb25faGVhZGVyJyxcclxuICAgICAgICBiYXNlTmFtZTogJycsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2V4cGlyYXRpb24nLCB0eXBlTmFtZTogJ3RpbWVfcG9pbnRfc2VjJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdyZWZfYmxvY2tfbnVtJywgdHlwZU5hbWU6ICd1aW50MTYnLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ3JlZl9ibG9ja19wcmVmaXgnLCB0eXBlTmFtZTogJ3VpbnQzMicsIHR5cGU6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnbWF4X25ldF91c2FnZV93b3JkcycsIHR5cGVOYW1lOiAndmFydWludDMyJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdtYXhfY3B1X3VzYWdlX21zJywgdHlwZU5hbWU6ICd1aW50OCcsIHR5cGU6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnZGVsYXlfc2VjJywgdHlwZU5hbWU6ICd2YXJ1aW50MzInLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZVN0cnVjdCxcclxuICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICB9KSk7XHJcbiAgICBpbml0aWFsVHlwZXMuc2V0KCd0cmFuc2FjdGlvbicsIGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgIG5hbWU6ICd0cmFuc2FjdGlvbicsXHJcbiAgICAgICAgYmFzZU5hbWU6ICd0cmFuc2FjdGlvbl9oZWFkZXInLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6ICdjb250ZXh0X2ZyZWVfYWN0aW9ucycsIHR5cGVOYW1lOiAnYWN0aW9uW10nLCB0eXBlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2FjdGlvbnMnLCB0eXBlTmFtZTogJ2FjdGlvbltdJywgdHlwZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICd0cmFuc2FjdGlvbl9leHRlbnNpb25zJywgdHlwZU5hbWU6ICdleHRlbnNpb24nLCB0eXBlOiBudWxsIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplU3RydWN0LFxyXG4gICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZVN0cnVjdCxcclxuICAgIH0pKTtcclxuICAgIHJldHVybiBpbml0aWFsVHlwZXM7XHJcbn07XHJcbmV4cG9ydHMuY3JlYXRlVHJhbnNhY3Rpb25UeXBlcyA9IGNyZWF0ZVRyYW5zYWN0aW9uVHlwZXM7XHJcbi8qKiBHZXQgdHlwZSBmcm9tIGB0eXBlc2AgKi9cclxudmFyIGdldFR5cGUgPSBmdW5jdGlvbiAodHlwZXMsIG5hbWUpIHtcclxuICAgIHZhciB0eXBlID0gdHlwZXMuZ2V0KG5hbWUpO1xyXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5hbGlhc09mTmFtZSkge1xyXG4gICAgICAgIHJldHVybiBleHBvcnRzLmdldFR5cGUodHlwZXMsIHR5cGUuYWxpYXNPZk5hbWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZTtcclxuICAgIH1cclxuICAgIGlmIChuYW1lLmVuZHNXaXRoKCdbXScpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBhcnJheU9mOiBleHBvcnRzLmdldFR5cGUodHlwZXMsIG5hbWUuc3Vic3RyKDAsIG5hbWUubGVuZ3RoIC0gMikpLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZUFycmF5LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVBcnJheSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChuYW1lLmVuZHNXaXRoKCc/JykpIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIG9wdGlvbmFsT2Y6IGV4cG9ydHMuZ2V0VHlwZSh0eXBlcywgbmFtZS5zdWJzdHIoMCwgbmFtZS5sZW5ndGggLSAxKSksXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplT3B0aW9uYWwsXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZU9wdGlvbmFsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKG5hbWUuZW5kc1dpdGgoJyQnKSkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgZXh0ZW5zaW9uT2Y6IGV4cG9ydHMuZ2V0VHlwZSh0eXBlcywgbmFtZS5zdWJzdHIoMCwgbmFtZS5sZW5ndGggLSAxKSksXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplRXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVFeHRlbnNpb24sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdHlwZTogJyArIG5hbWUpO1xyXG59O1xyXG5leHBvcnRzLmdldFR5cGUgPSBnZXRUeXBlO1xyXG4vKipcclxuICogR2V0IHR5cGVzIGZyb20gYWJpXHJcbiAqXHJcbiAqIEBwYXJhbSBpbml0aWFsVHlwZXMgU2V0IG9mIHR5cGVzIHRvIGJ1aWxkIG9uLlxyXG4gKiBJbiBtb3N0IGNhc2VzLCBpdCdzIGJlc3QgdG8gZmlsbCB0aGlzIGZyb20gYSBmcmVzaCBjYWxsIHRvIGBnZXRUeXBlc0Zyb21BYmkoKWAuXHJcbiAqL1xyXG52YXIgZ2V0VHlwZXNGcm9tQWJpID0gZnVuY3Rpb24gKGluaXRpYWxUeXBlcywgYWJpKSB7XHJcbiAgICB2YXIgZV82LCBfYSwgZV83LCBfYiwgZV84LCBfYywgZV85LCBfZCwgZV8xMCwgX2U7XHJcbiAgICB2YXIgdHlwZXMgPSBuZXcgTWFwKGluaXRpYWxUeXBlcyk7XHJcbiAgICBpZiAoYWJpICYmIGFiaS50eXBlcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9mID0gX192YWx1ZXMoYWJpLnR5cGVzKSwgX2cgPSBfZi5uZXh0KCk7ICFfZy5kb25lOyBfZyA9IF9mLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9oID0gX2cudmFsdWUsIG5ld190eXBlX25hbWUgPSBfaC5uZXdfdHlwZV9uYW1lLCB0eXBlID0gX2gudHlwZTtcclxuICAgICAgICAgICAgICAgIHR5cGVzLnNldChuZXdfdHlwZV9uYW1lLCBjcmVhdGVUeXBlKHsgbmFtZTogbmV3X3R5cGVfbmFtZSwgYWxpYXNPZk5hbWU6IHR5cGUgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlXzZfMSkgeyBlXzYgPSB7IGVycm9yOiBlXzZfMSB9OyB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2cgJiYgIV9nLmRvbmUgJiYgKF9hID0gX2YucmV0dXJuKSkgX2EuY2FsbChfZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzYpIHRocm93IGVfNi5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChhYmkgJiYgYWJpLnN0cnVjdHMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaiA9IF9fdmFsdWVzKGFiaS5zdHJ1Y3RzKSwgX2sgPSBfai5uZXh0KCk7ICFfay5kb25lOyBfayA9IF9qLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9sID0gX2sudmFsdWUsIG5hbWVfMSA9IF9sLm5hbWUsIGJhc2UgPSBfbC5iYXNlLCBmaWVsZHMgPSBfbC5maWVsZHM7XHJcbiAgICAgICAgICAgICAgICB0eXBlcy5zZXQobmFtZV8xLCBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZU5hbWU6IGJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBmaWVsZHMubWFwKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IF9hLm5hbWUsIHR5cGUgPSBfYS50eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHsgbmFtZTogbiwgdHlwZU5hbWU6IHR5cGUsIHR5cGU6IG51bGwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplU3RydWN0LFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlXzdfMSkgeyBlXzcgPSB7IGVycm9yOiBlXzdfMSB9OyB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2sgJiYgIV9rLmRvbmUgJiYgKF9iID0gX2oucmV0dXJuKSkgX2IuY2FsbChfaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzcpIHRocm93IGVfNy5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChhYmkgJiYgYWJpLnZhcmlhbnRzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX20gPSBfX3ZhbHVlcyhhYmkudmFyaWFudHMpLCBfbyA9IF9tLm5leHQoKTsgIV9vLmRvbmU7IF9vID0gX20ubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3AgPSBfby52YWx1ZSwgbmFtZV8yID0gX3AubmFtZSwgdCA9IF9wLnR5cGVzO1xyXG4gICAgICAgICAgICAgICAgdHlwZXMuc2V0KG5hbWVfMiwgY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZV8yLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczogdC5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuICh7IG5hbWU6IHMsIHR5cGVOYW1lOiBzLCB0eXBlOiBudWxsIH0pOyB9KSxcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZVZhcmlhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplVmFyaWFudCxcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV84XzEpIHsgZV84ID0geyBlcnJvcjogZV84XzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9vICYmICFfby5kb25lICYmIChfYyA9IF9tLnJldHVybikpIF9jLmNhbGwoX20pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV84KSB0aHJvdyBlXzguZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIHR5cGVzXzEgPSBfX3ZhbHVlcyh0eXBlcyksIHR5cGVzXzFfMSA9IHR5cGVzXzEubmV4dCgpOyAhdHlwZXNfMV8xLmRvbmU7IHR5cGVzXzFfMSA9IHR5cGVzXzEubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBfcSA9IF9fcmVhZCh0eXBlc18xXzEudmFsdWUsIDIpLCBuYW1lXzMgPSBfcVswXSwgdHlwZSA9IF9xWzFdO1xyXG4gICAgICAgICAgICBpZiAodHlwZS5iYXNlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdHlwZS5iYXNlID0gZXhwb3J0cy5nZXRUeXBlKHR5cGVzLCB0eXBlLmJhc2VOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX3IgPSAoZV8xMCA9IHZvaWQgMCwgX192YWx1ZXModHlwZS5maWVsZHMpKSwgX3MgPSBfci5uZXh0KCk7ICFfcy5kb25lOyBfcyA9IF9yLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IF9zLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPSBleHBvcnRzLmdldFR5cGUodHlwZXMsIGZpZWxkLnR5cGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZV8xMF8xKSB7IGVfMTAgPSB7IGVycm9yOiBlXzEwXzEgfTsgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9zICYmICFfcy5kb25lICYmIChfZSA9IF9yLnJldHVybikpIF9lLmNhbGwoX3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEwKSB0aHJvdyBlXzEwLmVycm9yOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZV85XzEpIHsgZV85ID0geyBlcnJvcjogZV85XzEgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVzXzFfMSAmJiAhdHlwZXNfMV8xLmRvbmUgJiYgKF9kID0gdHlwZXNfMS5yZXR1cm4pKSBfZC5jYWxsKHR5cGVzXzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfOSkgdGhyb3cgZV85LmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHlwZXM7XHJcbn07IC8vIGdldFR5cGVzRnJvbUFiaVxyXG5leHBvcnRzLmdldFR5cGVzRnJvbUFiaSA9IGdldFR5cGVzRnJvbUFiaTtcclxudmFyIHJldmVyc2VIZXggPSBmdW5jdGlvbiAoaCkge1xyXG4gICAgcmV0dXJuIGguc3Vic3RyKDYsIDIpICsgaC5zdWJzdHIoNCwgMikgKyBoLnN1YnN0cigyLCAyKSArIGguc3Vic3RyKDAsIDIpO1xyXG59O1xyXG4vKiogVEFQb1M6IFJldHVybiB0cmFuc2FjdGlvbiBmaWVsZHMgd2hpY2ggcmVmZXJlbmNlIGByZWZCbG9ja2AgYW5kIGV4cGlyZSBgZXhwaXJlU2Vjb25kc2AgYWZ0ZXIgYHRpbWVzdGFtcGAgKi9cclxudmFyIHRyYW5zYWN0aW9uSGVhZGVyID0gZnVuY3Rpb24gKHJlZkJsb2NrLCBleHBpcmVTZWNvbmRzKSB7XHJcbiAgICB2YXIgdGltZXN0YW1wID0gcmVmQmxvY2suaGVhZGVyID8gcmVmQmxvY2suaGVhZGVyLnRpbWVzdGFtcCA6IHJlZkJsb2NrLnRpbWVzdGFtcDtcclxuICAgIHZhciBwcmVmaXggPSBwYXJzZUludChyZXZlcnNlSGV4KHJlZkJsb2NrLmlkLnN1YnN0cigxNiwgOCkpLCAxNik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGV4cGlyYXRpb246IGV4cG9ydHMudGltZVBvaW50U2VjVG9EYXRlKGV4cG9ydHMuZGF0ZVRvVGltZVBvaW50U2VjKHRpbWVzdGFtcCkgKyBleHBpcmVTZWNvbmRzKSxcclxuICAgICAgICByZWZfYmxvY2tfbnVtOiByZWZCbG9jay5ibG9ja19udW0gJiAweGZmZmYsXHJcbiAgICAgICAgcmVmX2Jsb2NrX3ByZWZpeDogcHJlZml4LFxyXG4gICAgfTtcclxufTtcclxuZXhwb3J0cy50cmFuc2FjdGlvbkhlYWRlciA9IHRyYW5zYWN0aW9uSGVhZGVyO1xyXG4vKiogQ29udmVydCBhY3Rpb24gZGF0YSB0byBzZXJpYWxpemVkIGZvcm0gKGhleCkgKi9cclxudmFyIHNlcmlhbGl6ZUFjdGlvbkRhdGEgPSBmdW5jdGlvbiAoY29udHJhY3QsIGFjY291bnQsIG5hbWUsIGRhdGEsIHRleHRFbmNvZGVyLCB0ZXh0RGVjb2Rlcikge1xyXG4gICAgdmFyIGFjdGlvbiA9IGNvbnRyYWN0LmFjdGlvbnMuZ2V0KG5hbWUpO1xyXG4gICAgaWYgKCFhY3Rpb24pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGFjdGlvbiBcIiArIG5hbWUgKyBcIiBpbiBjb250cmFjdCBcIiArIGFjY291bnQpO1xyXG4gICAgfVxyXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBTZXJpYWxCdWZmZXIoeyB0ZXh0RW5jb2RlcjogdGV4dEVuY29kZXIsIHRleHREZWNvZGVyOiB0ZXh0RGVjb2RlciB9KTtcclxuICAgIGFjdGlvbi5zZXJpYWxpemUoYnVmZmVyLCBkYXRhKTtcclxuICAgIHJldHVybiBleHBvcnRzLmFycmF5VG9IZXgoYnVmZmVyLmFzVWludDhBcnJheSgpKTtcclxufTtcclxuZXhwb3J0cy5zZXJpYWxpemVBY3Rpb25EYXRhID0gc2VyaWFsaXplQWN0aW9uRGF0YTtcclxuLyoqIFJldHVybiBhY3Rpb24gaW4gc2VyaWFsaXplZCBmb3JtICovXHJcbnZhciBzZXJpYWxpemVBY3Rpb24gPSBmdW5jdGlvbiAoY29udHJhY3QsIGFjY291bnQsIG5hbWUsIGF1dGhvcml6YXRpb24sIGRhdGEsIHRleHRFbmNvZGVyLCB0ZXh0RGVjb2Rlcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhY2NvdW50OiBhY2NvdW50LFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYXV0aG9yaXphdGlvbixcclxuICAgICAgICBkYXRhOiBleHBvcnRzLnNlcmlhbGl6ZUFjdGlvbkRhdGEoY29udHJhY3QsIGFjY291bnQsIG5hbWUsIGRhdGEsIHRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlciksXHJcbiAgICB9O1xyXG59O1xyXG5leHBvcnRzLnNlcmlhbGl6ZUFjdGlvbiA9IHNlcmlhbGl6ZUFjdGlvbjtcclxuLyoqIERlc2VyaWFsaXplIGFjdGlvbiBkYXRhLiBJZiBgZGF0YWAgaXMgYSBgc3RyaW5nYCwgdGhlbiBpdCdzIGFzc3VtZWQgdG8gYmUgaW4gaGV4LiAqL1xyXG52YXIgZGVzZXJpYWxpemVBY3Rpb25EYXRhID0gZnVuY3Rpb24gKGNvbnRyYWN0LCBhY2NvdW50LCBuYW1lLCBkYXRhLCB0ZXh0RW5jb2RlciwgdGV4dERlY29kZXIpIHtcclxuICAgIHZhciBhY3Rpb24gPSBjb250cmFjdC5hY3Rpb25zLmdldChuYW1lKTtcclxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBkYXRhID0gZXhwb3J0cy5oZXhUb1VpbnQ4QXJyYXkoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFjdGlvbikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gYWN0aW9uIFwiICsgbmFtZSArIFwiIGluIGNvbnRyYWN0IFwiICsgYWNjb3VudCk7XHJcbiAgICB9XHJcbiAgICB2YXIgYnVmZmVyID0gbmV3IFNlcmlhbEJ1ZmZlcih7IHRleHREZWNvZGVyOiB0ZXh0RGVjb2RlciwgdGV4dEVuY29kZXI6IHRleHRFbmNvZGVyIH0pO1xyXG4gICAgYnVmZmVyLnB1c2hBcnJheShkYXRhKTtcclxuICAgIHJldHVybiBhY3Rpb24uZGVzZXJpYWxpemUoYnVmZmVyKTtcclxufTtcclxuZXhwb3J0cy5kZXNlcmlhbGl6ZUFjdGlvbkRhdGEgPSBkZXNlcmlhbGl6ZUFjdGlvbkRhdGE7XHJcbi8qKiBEZXNlcmlhbGl6ZSBhY3Rpb24uIElmIGBkYXRhYCBpcyBhIGBzdHJpbmdgLCB0aGVuIGl0J3MgYXNzdW1lZCB0byBiZSBpbiBoZXguICovXHJcbnZhciBkZXNlcmlhbGl6ZUFjdGlvbiA9IGZ1bmN0aW9uIChjb250cmFjdCwgYWNjb3VudCwgbmFtZSwgYXV0aG9yaXphdGlvbiwgZGF0YSwgdGV4dEVuY29kZXIsIHRleHREZWNvZGVyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFjY291bnQ6IGFjY291bnQsXHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICBhdXRob3JpemF0aW9uOiBhdXRob3JpemF0aW9uLFxyXG4gICAgICAgIGRhdGE6IGV4cG9ydHMuZGVzZXJpYWxpemVBY3Rpb25EYXRhKGNvbnRyYWN0LCBhY2NvdW50LCBuYW1lLCBkYXRhLCB0ZXh0RW5jb2RlciwgdGV4dERlY29kZXIpLFxyXG4gICAgfTtcclxufTtcclxuZXhwb3J0cy5kZXNlcmlhbGl6ZUFjdGlvbiA9IGRlc2VyaWFsaXplQWN0aW9uO1xyXG52YXIgc2VyaWFsaXplQW55dmFyID0gZnVuY3Rpb24gKGJ1ZmZlciwgYW55dmFyKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2c7XHJcbiAgICB2YXIgZGVmO1xyXG4gICAgdmFyIHZhbHVlO1xyXG4gICAgaWYgKGFueXZhciA9PT0gbnVsbCkge1xyXG4gICAgICAgIF9hID0gX19yZWFkKFthbnl2YXJEZWZzLm51bGxfdCwgYW55dmFyXSwgMiksIGRlZiA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIGFueXZhciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBfYiA9IF9fcmVhZChbYW55dmFyRGVmcy5zdHJpbmcsIGFueXZhcl0sIDIpLCBkZWYgPSBfYlswXSwgdmFsdWUgPSBfYlsxXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBhbnl2YXIgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgX2MgPSBfX3JlYWQoW2FueXZhckRlZnMuaW50MzIsIGFueXZhcl0sIDIpLCBkZWYgPSBfY1swXSwgdmFsdWUgPSBfY1sxXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGFueXZhciBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICBfZCA9IF9fcmVhZChbYW55dmFyRGVmcy5ieXRlcywgYW55dmFyXSwgMiksIGRlZiA9IF9kWzBdLCB2YWx1ZSA9IF9kWzFdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhbnl2YXIpKSB7XHJcbiAgICAgICAgX2UgPSBfX3JlYWQoW2FueXZhckRlZnMuYW55X2FycmF5LCBhbnl2YXJdLCAyKSwgZGVmID0gX2VbMF0sIHZhbHVlID0gX2VbMV07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChPYmplY3Qua2V5cyhhbnl2YXIpLmxlbmd0aCA9PT0gMiAmJiBhbnl2YXIuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSAmJiBhbnl2YXIuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcclxuICAgICAgICBfZiA9IF9fcmVhZChbYW55dmFyRGVmc1thbnl2YXIudHlwZV0sIGFueXZhci52YWx1ZV0sIDIpLCBkZWYgPSBfZlswXSwgdmFsdWUgPSBfZlsxXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIF9nID0gX19yZWFkKFthbnl2YXJEZWZzLmFueV9vYmplY3QsIGFueXZhcl0sIDIpLCBkZWYgPSBfZ1swXSwgdmFsdWUgPSBfZ1sxXTtcclxuICAgIH1cclxuICAgIGJ1ZmZlci5wdXNoVmFydWludDMyKGRlZi5pbmRleCk7XHJcbiAgICBkZWYudHlwZS5zZXJpYWxpemUoYnVmZmVyLCB2YWx1ZSk7XHJcbn07XHJcbmV4cG9ydHMuc2VyaWFsaXplQW55dmFyID0gc2VyaWFsaXplQW55dmFyO1xyXG52YXIgZGVzZXJpYWxpemVBbnl2YXIgPSBmdW5jdGlvbiAoYnVmZmVyLCBzdGF0ZSkge1xyXG4gICAgdmFyIGRlZkluZGV4ID0gYnVmZmVyLmdldFZhcnVpbnQzMigpO1xyXG4gICAgaWYgKGRlZkluZGV4ID49IGFueXZhckRlZnNCeUluZGV4Lmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVHJpZWQgdG8gZGVzZXJpYWxpemUgdW5rbm93biBhbnl2YXIgdHlwZScpO1xyXG4gICAgfVxyXG4gICAgdmFyIGRlZiA9IGFueXZhckRlZnNCeUluZGV4W2RlZkluZGV4XTtcclxuICAgIHZhciB2YWx1ZSA9IGRlZi50eXBlLmRlc2VyaWFsaXplKGJ1ZmZlciwgc3RhdGUpO1xyXG4gICAgaWYgKHN0YXRlICYmIHN0YXRlLm9wdGlvbnMudXNlU2hvcnRGb3JtIHx8IGRlZi51c2VTaG9ydEZvcm0pIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4geyB0eXBlOiBkZWYudHlwZS5uYW1lLCB2YWx1ZTogdmFsdWUgfTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5kZXNlcmlhbGl6ZUFueXZhciA9IGRlc2VyaWFsaXplQW55dmFyO1xyXG52YXIgZGVzZXJpYWxpemVBbnl2YXJTaG9ydCA9IGZ1bmN0aW9uIChidWZmZXIpIHtcclxuICAgIHJldHVybiBleHBvcnRzLmRlc2VyaWFsaXplQW55dmFyKGJ1ZmZlciwgbmV3IFNlcmlhbGl6ZXJTdGF0ZSh7IHVzZVNob3J0Rm9ybTogdHJ1ZSB9KSk7XHJcbn07XHJcbmV4cG9ydHMuZGVzZXJpYWxpemVBbnl2YXJTaG9ydCA9IGRlc2VyaWFsaXplQW55dmFyU2hvcnQ7XHJcbnZhciBzZXJpYWxpemVBbnlPYmplY3QgPSBmdW5jdGlvbiAoYnVmZmVyLCBvYmopIHtcclxuICAgIHZhciBlXzExLCBfYTtcclxuICAgIHZhciBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMob2JqKTtcclxuICAgIGJ1ZmZlci5wdXNoVmFydWludDMyKGVudHJpZXMubGVuZ3RoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yICh2YXIgZW50cmllc18yID0gX192YWx1ZXMoZW50cmllcyksIGVudHJpZXNfMl8xID0gZW50cmllc18yLm5leHQoKTsgIWVudHJpZXNfMl8xLmRvbmU7IGVudHJpZXNfMl8xID0gZW50cmllc18yLm5leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIgX2IgPSBfX3JlYWQoZW50cmllc18yXzEudmFsdWUsIDIpLCBrZXkgPSBfYlswXSwgdmFsdWUgPSBfYlsxXTtcclxuICAgICAgICAgICAgYnVmZmVyLnB1c2hTdHJpbmcoa2V5KTtcclxuICAgICAgICAgICAgZXhwb3J0cy5zZXJpYWxpemVBbnl2YXIoYnVmZmVyLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfMTFfMSkgeyBlXzExID0geyBlcnJvcjogZV8xMV8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyaWVzXzJfMSAmJiAhZW50cmllc18yXzEuZG9uZSAmJiAoX2EgPSBlbnRyaWVzXzIucmV0dXJuKSkgX2EuY2FsbChlbnRyaWVzXzIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMTEpIHRocm93IGVfMTEuZXJyb3I7IH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5zZXJpYWxpemVBbnlPYmplY3QgPSBzZXJpYWxpemVBbnlPYmplY3Q7XHJcbnZhciBkZXNlcmlhbGl6ZUFueU9iamVjdCA9IGZ1bmN0aW9uIChidWZmZXIsIHN0YXRlKSB7XHJcbiAgICB2YXIgbGVuID0gYnVmZmVyLmdldFZhcnVpbnQzMigpO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgIHZhciBrZXkgPSBidWZmZXIuZ2V0U3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKGtleSBpbiByZXN1bHQpIHtcclxuICAgICAgICAgICAgdmFyIGogPSAxO1xyXG4gICAgICAgICAgICB3aGlsZSAoa2V5ICsgJ18nICsgaiBpbiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICsrajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXkgPSBrZXkgKyAnXycgKyBqO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHRba2V5XSA9IGV4cG9ydHMuZGVzZXJpYWxpemVBbnl2YXIoYnVmZmVyLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5leHBvcnRzLmRlc2VyaWFsaXplQW55T2JqZWN0ID0gZGVzZXJpYWxpemVBbnlPYmplY3Q7XHJcbnZhciBzZXJpYWxpemVBbnlBcnJheSA9IGZ1bmN0aW9uIChidWZmZXIsIGFycikge1xyXG4gICAgdmFyIGVfMTIsIF9hO1xyXG4gICAgYnVmZmVyLnB1c2hWYXJ1aW50MzIoYXJyLmxlbmd0aCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIGFycl8xID0gX192YWx1ZXMoYXJyKSwgYXJyXzFfMSA9IGFycl8xLm5leHQoKTsgIWFycl8xXzEuZG9uZTsgYXJyXzFfMSA9IGFycl8xLm5leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIgeCA9IGFycl8xXzEudmFsdWU7XHJcbiAgICAgICAgICAgIGV4cG9ydHMuc2VyaWFsaXplQW55dmFyKGJ1ZmZlciwgeCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfMTJfMSkgeyBlXzEyID0geyBlcnJvcjogZV8xMl8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJfMV8xICYmICFhcnJfMV8xLmRvbmUgJiYgKF9hID0gYXJyXzEucmV0dXJuKSkgX2EuY2FsbChhcnJfMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xMikgdGhyb3cgZV8xMi5lcnJvcjsgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLnNlcmlhbGl6ZUFueUFycmF5ID0gc2VyaWFsaXplQW55QXJyYXk7XHJcbnZhciBkZXNlcmlhbGl6ZUFueUFycmF5ID0gZnVuY3Rpb24gKGJ1ZmZlciwgc3RhdGUpIHtcclxuICAgIHZhciBsZW4gPSBidWZmZXIuZ2V0VmFydWludDMyKCk7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goZXhwb3J0cy5kZXNlcmlhbGl6ZUFueXZhcihidWZmZXIsIHN0YXRlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5leHBvcnRzLmRlc2VyaWFsaXplQW55QXJyYXkgPSBkZXNlcmlhbGl6ZUFueUFycmF5O1xyXG52YXIgYWRkQWRkaXRpb25hbFR5cGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGluaXRpYWxUeXBlcyA9IGV4cG9ydHMuY3JlYXRlSW5pdGlhbFR5cGVzKCk7XHJcbiAgICBpbml0aWFsVHlwZXMuc2V0KCdudWxsX3QnLCBjcmVhdGVUeXBlKHtcclxuICAgICAgICBuYW1lOiAnbnVsbF90JyxcclxuICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXIsIGFueXZhcikgeyB9LFxyXG4gICAgICAgIGRlc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVyLCBzdGF0ZSkgeyB9XHJcbiAgICB9KSk7XHJcbiAgICBpbml0aWFsVHlwZXMuc2V0KCdhbnlfb2JqZWN0JywgY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgbmFtZTogJ2FueV9vYmplY3QnLFxyXG4gICAgICAgIHNlcmlhbGl6ZTogZXhwb3J0cy5zZXJpYWxpemVBbnlPYmplY3QsXHJcbiAgICAgICAgZGVzZXJpYWxpemU6IGV4cG9ydHMuZGVzZXJpYWxpemVBbnlPYmplY3RcclxuICAgIH0pKTtcclxuICAgIGluaXRpYWxUeXBlcy5zZXQoJ2FueV9hcnJheScsIGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgIG5hbWU6ICdhbnlfYXJyYXknLFxyXG4gICAgICAgIHNlcmlhbGl6ZTogZXhwb3J0cy5zZXJpYWxpemVBbnlBcnJheSxcclxuICAgICAgICBkZXNlcmlhbGl6ZTogZXhwb3J0cy5kZXNlcmlhbGl6ZUFueUFycmF5XHJcbiAgICB9KSk7XHJcbiAgICByZXR1cm4gaW5pdGlhbFR5cGVzO1xyXG59O1xyXG52YXIgYWRkaXRpb25hbFR5cGVzID0gYWRkQWRkaXRpb25hbFR5cGVzKCk7XHJcbnZhciBhbnl2YXJEZWZzID0ge1xyXG4gICAgbnVsbF90OiB7IGluZGV4OiAwLCB1c2VTaG9ydEZvcm06IHRydWUsIHR5cGU6IGFkZGl0aW9uYWxUeXBlcy5nZXQoJ251bGxfdCcpIH0sXHJcbiAgICBpbnQ2NDogeyBpbmRleDogMSwgdXNlU2hvcnRGb3JtOiBmYWxzZSwgdHlwZTogYWRkaXRpb25hbFR5cGVzLmdldCgnaW50NjQnKSB9LFxyXG4gICAgdWludDY0OiB7IGluZGV4OiAyLCB1c2VTaG9ydEZvcm06IGZhbHNlLCB0eXBlOiBhZGRpdGlvbmFsVHlwZXMuZ2V0KCd1aW50NjQnKSB9LFxyXG4gICAgaW50MzI6IHsgaW5kZXg6IDMsIHVzZVNob3J0Rm9ybTogdHJ1ZSwgdHlwZTogYWRkaXRpb25hbFR5cGVzLmdldCgnaW50MzInKSB9LFxyXG4gICAgdWludDMyOiB7IGluZGV4OiA0LCB1c2VTaG9ydEZvcm06IGZhbHNlLCB0eXBlOiBhZGRpdGlvbmFsVHlwZXMuZ2V0KCd1aW50MzInKSB9LFxyXG4gICAgaW50MTY6IHsgaW5kZXg6IDUsIHVzZVNob3J0Rm9ybTogZmFsc2UsIHR5cGU6IGFkZGl0aW9uYWxUeXBlcy5nZXQoJ2ludDE2JykgfSxcclxuICAgIHVpbnQxNjogeyBpbmRleDogNiwgdXNlU2hvcnRGb3JtOiBmYWxzZSwgdHlwZTogYWRkaXRpb25hbFR5cGVzLmdldCgndWludDE2JykgfSxcclxuICAgIGludDg6IHsgaW5kZXg6IDcsIHVzZVNob3J0Rm9ybTogZmFsc2UsIHR5cGU6IGFkZGl0aW9uYWxUeXBlcy5nZXQoJ2ludDgnKSB9LFxyXG4gICAgdWludDg6IHsgaW5kZXg6IDgsIHVzZVNob3J0Rm9ybTogZmFsc2UsIHR5cGU6IGFkZGl0aW9uYWxUeXBlcy5nZXQoJ3VpbnQ4JykgfSxcclxuICAgIHRpbWVfcG9pbnQ6IHsgaW5kZXg6IDksIHVzZVNob3J0Rm9ybTogZmFsc2UsIHR5cGU6IGFkZGl0aW9uYWxUeXBlcy5nZXQoJ3RpbWVfcG9pbnQnKSB9LFxyXG4gICAgY2hlY2tzdW0yNTY6IHsgaW5kZXg6IDEwLCB1c2VTaG9ydEZvcm06IGZhbHNlLCB0eXBlOiBhZGRpdGlvbmFsVHlwZXMuZ2V0KCdjaGVja3N1bTI1NicpIH0sXHJcbiAgICBmbG9hdDY0OiB7IGluZGV4OiAxMSwgdXNlU2hvcnRGb3JtOiBmYWxzZSwgdHlwZTogYWRkaXRpb25hbFR5cGVzLmdldCgnZmxvYXQ2NCcpIH0sXHJcbiAgICBzdHJpbmc6IHsgaW5kZXg6IDEyLCB1c2VTaG9ydEZvcm06IHRydWUsIHR5cGU6IGFkZGl0aW9uYWxUeXBlcy5nZXQoJ3N0cmluZycpIH0sXHJcbiAgICBhbnlfb2JqZWN0OiB7IGluZGV4OiAxMywgdXNlU2hvcnRGb3JtOiB0cnVlLCB0eXBlOiBhZGRpdGlvbmFsVHlwZXMuZ2V0KCdhbnlfb2JqZWN0JykgfSxcclxuICAgIGFueV9hcnJheTogeyBpbmRleDogMTQsIHVzZVNob3J0Rm9ybTogdHJ1ZSwgdHlwZTogYWRkaXRpb25hbFR5cGVzLmdldCgnYW55X2FycmF5JykgfSxcclxuICAgIGJ5dGVzOiB7IGluZGV4OiAxNSwgdXNlU2hvcnRGb3JtOiBmYWxzZSwgdHlwZTogYWRkaXRpb25hbFR5cGVzLmdldCgnYnl0ZXMnKSB9LFxyXG4gICAgc3ltYm9sOiB7IGluZGV4OiAxNiwgdXNlU2hvcnRGb3JtOiBmYWxzZSwgdHlwZTogYWRkaXRpb25hbFR5cGVzLmdldCgnc3ltYm9sJykgfSxcclxuICAgIHN5bWJvbF9jb2RlOiB7IGluZGV4OiAxNywgdXNlU2hvcnRGb3JtOiBmYWxzZSwgdHlwZTogYWRkaXRpb25hbFR5cGVzLmdldCgnc3ltYm9sX2NvZGUnKSB9LFxyXG4gICAgYXNzZXQ6IHsgaW5kZXg6IDE4LCB1c2VTaG9ydEZvcm06IGZhbHNlLCB0eXBlOiBhZGRpdGlvbmFsVHlwZXMuZ2V0KCdhc3NldCcpIH0sXHJcbn07XHJcbnZhciBhbnl2YXJEZWZzQnlJbmRleCA9IFtcclxuICAgIGFueXZhckRlZnMubnVsbF90LFxyXG4gICAgYW55dmFyRGVmcy5pbnQ2NCxcclxuICAgIGFueXZhckRlZnMudWludDY0LFxyXG4gICAgYW55dmFyRGVmcy5pbnQzMixcclxuICAgIGFueXZhckRlZnMudWludDMyLFxyXG4gICAgYW55dmFyRGVmcy5pbnQxNixcclxuICAgIGFueXZhckRlZnMudWludDE2LFxyXG4gICAgYW55dmFyRGVmcy5pbnQ4LFxyXG4gICAgYW55dmFyRGVmcy51aW50OCxcclxuICAgIGFueXZhckRlZnMudGltZV9wb2ludCxcclxuICAgIGFueXZhckRlZnMuY2hlY2tzdW0yNTYsXHJcbiAgICBhbnl2YXJEZWZzLmZsb2F0NjQsXHJcbiAgICBhbnl2YXJEZWZzLnN0cmluZyxcclxuICAgIGFueXZhckRlZnMuYW55X29iamVjdCxcclxuICAgIGFueXZhckRlZnMuYW55X2FycmF5LFxyXG4gICAgYW55dmFyRGVmcy5ieXRlcyxcclxuICAgIGFueXZhckRlZnMuc3ltYm9sLFxyXG4gICAgYW55dmFyRGVmcy5zeW1ib2xfY29kZSxcclxuICAgIGFueXZhckRlZnMuYXNzZXQsXHJcbl07XHJcbnZhciBzZXJpYWxpemVRdWVyeSA9IGZ1bmN0aW9uIChidWZmZXIsIHF1ZXJ5KSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYywgZV8xMywgX2Q7XHJcbiAgICB2YXIgbWV0aG9kO1xyXG4gICAgdmFyIGFyZztcclxuICAgIHZhciBmaWx0ZXI7XHJcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIG1ldGhvZCA9IHF1ZXJ5O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeSkgJiYgcXVlcnkubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgX2EgPSBfX3JlYWQocXVlcnksIDIpLCBtZXRob2QgPSBfYVswXSwgZmlsdGVyID0gX2FbMV07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5KSAmJiBxdWVyeS5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICBfYiA9IF9fcmVhZChxdWVyeSwgMyksIG1ldGhvZCA9IF9iWzBdLCBhcmcgPSBfYlsxXSwgZmlsdGVyID0gX2JbMl07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBfYyA9IF9fcmVhZChbcXVlcnkubWV0aG9kLCBxdWVyeS5hcmcsIHF1ZXJ5LmZpbHRlcl0sIDMpLCBtZXRob2QgPSBfY1swXSwgYXJnID0gX2NbMV0sIGZpbHRlciA9IF9jWzJdO1xyXG4gICAgfVxyXG4gICAgYnVmZmVyLnB1c2hTdHJpbmcobWV0aG9kKTtcclxuICAgIGlmIChhcmcgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGJ1ZmZlci5wdXNoKDApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYnVmZmVyLnB1c2goMSk7XHJcbiAgICAgICAgZXhwb3J0cy5zZXJpYWxpemVBbnl2YXIoYnVmZmVyLCBhcmcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYnVmZmVyLnB1c2goMCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBidWZmZXIucHVzaFZhcnVpbnQzMihmaWx0ZXIubGVuZ3RoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBmaWx0ZXJfMSA9IF9fdmFsdWVzKGZpbHRlciksIGZpbHRlcl8xXzEgPSBmaWx0ZXJfMS5uZXh0KCk7ICFmaWx0ZXJfMV8xLmRvbmU7IGZpbHRlcl8xXzEgPSBmaWx0ZXJfMS5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBxID0gZmlsdGVyXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGV4cG9ydHMuc2VyaWFsaXplUXVlcnkoYnVmZmVyLCBxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8xM18xKSB7IGVfMTMgPSB7IGVycm9yOiBlXzEzXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlcl8xXzEgJiYgIWZpbHRlcl8xXzEuZG9uZSAmJiAoX2QgPSBmaWx0ZXJfMS5yZXR1cm4pKSBfZC5jYWxsKGZpbHRlcl8xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMTMpIHRocm93IGVfMTMuZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuc2VyaWFsaXplUXVlcnkgPSBzZXJpYWxpemVRdWVyeTtcclxuIiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS93bHpsYTAwMC9iYWM4M2RmNmQzYzUxOTE2YzRkZDBiYzk0N2U0Njk0Ny9yYXcvN2VlMzQ2MmIwOTVhYjIyNTgwZGRhZjE5MWY0NGE1OTBkYTZmZTMzYi9SSVBFTUQtMTYwLmpzXHJcblxyXG4vKlxyXG5cdFJJUEVNRC0xNjAuanNcclxuXHJcblx0XHRkZXZlbG9wZWRcclxuXHRcdFx0YnkgSy4gKGh0dHBzOi8vZ2l0aHViLmNvbS93bHpsYTAwMClcclxuXHRcdFx0b24gRGVjZW1iZXIgMjctMjksIDIwMTcsXHJcblxyXG5cdFx0bGljZW5zZWQgdW5kZXJcclxuXHJcblxyXG5cdFx0dGhlIE1JVCBsaWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChjKSAyMDE3IEsuXHJcblxyXG5cdFx0IFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXHJcblx0XHRvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxyXG5cdFx0ZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XHJcblx0XHRyZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcclxuXHRcdGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG5cdFx0c2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcclxuXHRcdFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXHJcblx0XHRjb25kaXRpb25zOlxyXG5cclxuXHRcdCBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxyXG5cdFx0aW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0IFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXHJcblx0XHRFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcclxuXHRcdE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXHJcblx0XHROT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxyXG5cdFx0SE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXHJcblx0XHRXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuXHRcdEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcclxuXHRcdE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFJJUEVNRDE2MFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly93ZWJjYWNoZS5nb29nbGV1c2VyY29udGVudC5jb20vc2VhcmNoP3E9Y2FjaGU6Q25MT2dvbFRIWUVKOmh0dHBzOi8vd3d3LmNvc2ljLmVzYXQua3VsZXV2ZW4uYmUvcHVibGljYXRpb25zL2FydGljbGUtMzE3LnBkZlxyXG4gICAgICAgIC8vIGh0dHA6Ly9zaG9kaGdhbmdhLmluZmxpYm5ldC5hYy5pbi9iaXRzdHJlYW0vMTA2MDMvMjI5NzgvMTMvMTNfYXBwZW5kaXgucGRmXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldF9uX3BhZF9ieXRlcyhtZXNzYWdlX3NpemUgLyogaW4gYnl0ZXMsIDEgYnl0ZSBpcyA4IGJpdHMuICovKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBPYnRhaW4gdGhlIG51bWJlciBvZiBieXRlcyBuZWVkZWQgdG8gcGFkIHRoZSBtZXNzYWdlLlxyXG4gICAgICAgIC8vIEl0IGRvZXMgbm90IGNvbnRhaW4gdGhlIHNpemUgb2YgdGhlIG1lc3NhZ2Ugc2l6ZSBpbmZvcm1hdGlvbi5cclxuICAgICAgICAvKlxyXG5cdFx0XHRodHRwczovL3dlYmNhY2hlLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zZWFyY2g/cT1jYWNoZTpDbkxPZ29sVEhZRUo6aHR0cHM6Ly93d3cuY29zaWMuZXNhdC5rdWxldXZlbi5iZS9wdWJsaWNhdGlvbnMvYXJ0aWNsZS0zMTcucGRmXHJcblxyXG5cdFx0XHRUaGUgQ3J5cHRvZ3JhcGhpYyBIYXNoIEZ1bmN0aW9uIFJJUEVNRC0xNjBcclxuXHJcblx0XHRcdHdyaXR0ZW4gYnlcclxuXHRcdFx0XHRCYXJ0IFByZW5lZWwsXHJcblx0XHRcdFx0SGFucyBEb2JiZXJ0aW4sXHJcblx0XHRcdFx0QW50b29uIEJvc3NlbGFlcnNcclxuXHRcdFx0aW5cclxuXHRcdFx0XHQxOTk3LlxyXG5cclxuXHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdMKnNSAgICAgRGVzY3JpcHRpb24gb2YgUklQRU1ELTE2MFxyXG5cclxuXHRcdFx0Li4uLi4uXHJcblxyXG5cdFx0XHQgSW4gb3JkZXIgdG8gZ3VhcmFudGVlIHRoYXQgdGhlIHRvdGFsIGlucHV0IHNpemUgaXMgYVxyXG5cdFx0XHRtdWx0aXBsZSBvZiA1MTIgYml0cywgdGhlIGlucHV0IGlzIHBhZGRlZCBpbiB0aGUgc2FtZVxyXG5cdFx0XHR3YXkgYXMgZm9yIGFsbCB0aGUgbWVtYmVycyBvZiB0aGUgTUQ0LWZhbWlseTogb25lXHJcblx0XHRcdGFwcGVuZHMgYSBzaW5nbGUgMSBmb2xsb3dlZCBieSBhIHN0cmluZyBvZiAwcyAodGhlXHJcblx0XHRcdG51bWJlciBvZiAwcyBsaWVzIGJldHdlZW4gMCBhbmQgNTExKTsgdGhlIGxhc3QgNjQgYml0c1xyXG5cdFx0XHRvZiB0aGUgZXh0ZW5kZWQgaW5wdXQgY29udGFpbiB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uXHJcblx0XHRcdG9mIHRoZSBpbnB1dCBzaXplIGluIGJpdHMsIGxlYXN0IHNpZ25pZmljYW50IGJ5dGUgZmlyc3QuXHJcblx0XHQqL1xyXG4gICAgICAgIC8qXHJcblx0XHRcdGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvcmZjL3JmYzExODYudHh0XHJcblxyXG5cdFx0XHRSRkMgMTE4NjogTUQ0IE1lc3NhZ2UgRGlnZXN0IEFsZ29yaXRobS5cclxuXHJcblx0XHRcdHdyaXR0ZW4gYnlcclxuXHRcdFx0XHRSb25hbGQgTGlubiBSaXZlc3RcclxuXHRcdFx0aW5cclxuXHRcdFx0XHRPY3RvYmVyIDE5OTAuXHJcblxyXG5cdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdFx0wqczICAgICBNRDQgQWxnb3JpdGhtIERlc2NyaXB0aW9uXHJcblxyXG5cdFx0XHQuLi4uLi5cclxuXHJcblx0XHRcdFN0ZXAgMS4gQXBwZW5kIHBhZGRpbmcgYml0c1xyXG5cclxuXHRcdFx0IFRoZSBtZXNzYWdlIGlzIFwicGFkZGVkXCIgKGV4dGVuZGVkKSBzbyB0aGF0IGl0cyBsZW5ndGhcclxuXHRcdFx0KGluIGJpdHMpIGlzIGNvbmdydWVudCB0byA0NDgsIG1vZHVsbyA1MTIuIFRoYXQgaXMsIHRoZVxyXG5cdFx0XHRtZXNzYWdlIGlzIGV4dGVuZGVkIHNvIHRoYXQgaXQgaXMganVzdCA2NCBiaXRzIHNoeSBvZlxyXG5cdFx0XHRiZWluZyBhIG11bHRpcGxlIG9mIDUxMiBiaXRzIGxvbmcuIFBhZGRpbmcgaXMgYWx3YXlzXHJcblx0XHRcdHBlcmZvcm1lZCwgZXZlbiBpZiB0aGUgbGVuZ3RoIG9mIHRoZSBtZXNzYWdlIGlzIGFscmVhZHlcclxuXHRcdFx0Y29uZ3J1ZW50IHRvIDQ0OCwgbW9kdWxvIDUxMiAoaW4gd2hpY2ggY2FzZSA1MTIgYml0cyBvZlxyXG5cdFx0XHRwYWRkaW5nIGFyZSBhZGRlZCkuXHJcblxyXG5cdFx0XHQgUGFkZGluZyBpcyBwZXJmb3JtZWQgYXMgZm9sbG93czogYSBzaW5nbGUgXCIxXCIgYml0IGlzXHJcblx0XHRcdGFwcGVuZGVkIHRvIHRoZSBtZXNzYWdlLCBhbmQgdGhlbiBlbm91Z2ggemVybyBiaXRzIGFyZVxyXG5cdFx0XHRhcHBlbmRlZCBzbyB0aGF0IHRoZSBsZW5ndGggaW4gYml0cyBvZiB0aGUgcGFkZGVkXHJcblx0XHRcdG1lc3NhZ2UgYmVjb21lcyBjb25ncnVlbnQgdG8gNDQ4LCBtb2R1bG8gNTEyLlxyXG5cclxuXHRcdFx0U3RlcCAyLiBBcHBlbmQgbGVuZ3RoXHJcblxyXG5cdFx0XHQgQSA2NC1iaXQgcmVwcmVzZW50YXRpb24gb2YgYiAodGhlIGxlbmd0aCBvZiB0aGUgbWVzc2FnZVxyXG5cdFx0XHRiZWZvcmUgdGhlIHBhZGRpbmcgYml0cyB3ZXJlIGFkZGVkKSBpcyBhcHBlbmRlZCB0byB0aGVcclxuXHRcdFx0cmVzdWx0IG9mIHRoZSBwcmV2aW91cyBzdGVwLiBJbiB0aGUgdW5saWtlbHkgZXZlbnQgdGhhdFxyXG5cdFx0XHRiIGlzIGdyZWF0ZXIgdGhhbiAyXjY0LCB0aGVuIG9ubHkgdGhlIGxvdy1vcmRlciA2NCBiaXRzXHJcblx0XHRcdG9mIGIgYXJlIHVzZWQuIChUaGVzZSBiaXRzIGFyZSBhcHBlbmRlZCBhcyB0d28gMzItYml0XHJcblx0XHRcdHdvcmRzIGFuZCBhcHBlbmRlZCBsb3ctb3JkZXIgd29yZCBmaXJzdCBpbiBhY2NvcmRhbmNlXHJcblx0XHRcdHdpdGggdGhlIHByZXZpb3VzIGNvbnZlbnRpb25zLilcclxuXHJcblx0XHRcdCBBdCB0aGlzIHBvaW50IHRoZSByZXN1bHRpbmcgbWVzc2FnZSAoYWZ0ZXIgcGFkZGluZyB3aXRoXHJcblx0XHRcdGJpdHMgYW5kIHdpdGggYikgaGFzIGEgbGVuZ3RoIHRoYXQgaXMgYW4gZXhhY3QgbXVsdGlwbGVcclxuXHRcdFx0b2YgNTEyIGJpdHMuIEVxdWl2YWxlbnRseSwgdGhpcyBtZXNzYWdlIGhhcyBhIGxlbmd0aFxyXG5cdFx0XHR0aGF0IGlzIGFuIGV4YWN0IG11bHRpcGxlIG9mIDE2ICgzMi1iaXQpIHdvcmRzLiBMZXRcclxuXHRcdFx0TVswIC4uLiBOLTFdIGRlbm90ZSB0aGUgd29yZHMgb2YgdGhlIHJlc3VsdGluZyBtZXNzYWdlLFxyXG5cdFx0XHR3aGVyZSBOIGlzIGEgbXVsdGlwbGUgb2YgMTYuXHJcblx0XHQqL1xyXG4gICAgICAgIC8vIGh0dHBzOi8vY3J5cHRvLnN0YWNrZXhjaGFuZ2UuY29tL2EvMzI0MDcvNTQ1NjhcclxuICAgICAgICAvKlxyXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgMVxyXG5cdFx0XHRcdFswIGJpdDogbWVzc2FnZS5dXHJcblx0XHRcdFx0WzEgYml0OiAxLl1cclxuXHRcdFx0XHRbNDQ3IGJpdHM6IDAuXVxyXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxyXG5cclxuXHRcdFx0RXhhbXBsZSBjYXNlICAjIDJcclxuXHRcdFx0XHRbNTEyLWJpdHM6IG1lc3NhZ2VdXHJcblx0XHRcdFx0WzEgYml0OiAxLl1cclxuXHRcdFx0XHRbNDQ3IGJpdHM6IDAuXVxyXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxyXG5cclxuXHRcdFx0RXhhbXBsZSBjYXNlICAjIDNcclxuXHRcdFx0XHRbKDUxMiAtIDY0ID0gNDQ4KSBiaXRzOiBtZXNzYWdlLl1cclxuXHRcdFx0XHRbMSBiaXQ6IDEuXVxyXG5cdFx0XHRcdFs1MTEgYml0czogMC5dXHJcblx0XHRcdFx0WzY0IGJpdHM6IG1lc3NhZ2Ugc2l6ZSBpbmZvcm1hdGlvbi5dXHJcblxyXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgNFxyXG5cdFx0XHRcdFsoNTEyIC0gNjUgPSA0NDcpIGJpdHM6IG1lc3NhZ2UuXVxyXG5cdFx0XHRcdFsxIGJpdDogMS5dXHJcblx0XHRcdFx0WzAgYml0OiAwLl1cclxuXHRcdFx0XHRbNjQgYml0czogbWVzc2FnZSBzaXplIGluZm9ybWF0aW9uLl1cclxuXHRcdCovXHJcbiAgICAgICAgLy8gVGhlIG51bWJlciBvZiBwYWRkaW5nIHplcm8gYml0czpcclxuICAgICAgICAvLyAgICAgIDUxMSAtIFt7KG1lc3NhZ2Ugc2l6ZSBpbiBiaXRzKSArIDY0fSAobW9kIDUxMildXHJcbiAgICAgICAgcmV0dXJuIDY0IC0gKChtZXNzYWdlX3NpemUgKyA4KSAmIDBiMDAxMTExMTEgLyogNjMgKi8pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHBhZChtZXNzYWdlIC8qIEFuIEFycmF5QnVmZmVyLiAqLylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlX3NpemUgPSBtZXNzYWdlLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgY29uc3Qgbl9wYWQgPSBSSVBFTUQxNjAuZ2V0X25fcGFkX2J5dGVzKG1lc3NhZ2Vfc2l6ZSk7XHJcblxyXG4gICAgICAgIC8vICBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgIGlzICgoMiAqKiA1MykgLSAxKSBhbmRcclxuICAgICAgICAvLyBiaXR3aXNlIG9wZXJhdGlvbiBpbiBKYXZhc2NyaXB0IGlzIGRvbmUgb24gMzItYml0cyBvcGVyYW5kcy5cclxuICAgICAgICBjb25zdCBkaXZtb2QgPSAoZGl2aWRlbmQsIGRpdmlzb3IpID0+IFtcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihkaXZpZGVuZCAvIGRpdmlzb3IpLFxyXG4gICAgICAgICAgICBkaXZpZGVuZCAlIGRpdmlzb3JcclxuICAgICAgICBdO1xyXG4gICAgICAgIC8qXHJcblRvIHNoaWZ0XHJcblxyXG4gICAwMDAwMDAwMCAwMDA/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCBvXHJcbiAgIDAwMDAwMDAwID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/MDAwXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuTWV0aG9kICMxXHJcblxyXG4gICAgMDAwMDAwMDAgMDAwPz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/XHJcbiAgIFswMDAwMDAwMCAwMDBBQUFBQSBBQUFBQUFBQSBBQUFBQUFBQV0gKDxBPiBjYXB0dXJlZClcclxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBMDAwXSAoPEE+IHNoaWZ0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoPEI+IGNhcHR1cmVkKSBbQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkJdXHJcbiAgICAgICAgICAgICAgICAgICAgICg8Qj4gc2hpZnRlZCkgW0JCQl1bQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkIwMDBdXHJcbiAgIFswMDAwMDAwMCBBQUFBQUFBQSBBQUFBQUFBQSBBQUFBQUJCQl0gKDxBPiAmIDxCXzI+IG1lcmdlZClcclxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBQkJCXVtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cclxuICAgIDAwMDAwMDAwID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ICA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/PzAwMFxyXG5cclxuXHRcdGNvbnN0IHVpbnQzMl9tYXhfcGx1c18xID0gMHgxMDAwMDAwMDA7IC8vICgyICoqIDMyKVxyXG5cdFx0Y29uc3QgW1xyXG5cdFx0XHRtc2dfYnl0ZV9zaXplX21vc3QsIC8vIFZhbHVlIHJhbmdlIFswLCAoMiAqKiAyMSkgLSAxXS5cclxuXHRcdFx0bXNnX2J5dGVfc2l6ZV9sZWFzdCAvLyBWYWx1ZSByYW5nZSBbMCwgKDIgKiogMzIpIC0gMV0uXHJcblx0XHRdID0gZGl2bW9kKG1lc3NhZ2Vfc2l6ZSwgdWludDMyX21heF9wbHVzXzEpO1xyXG5cdFx0Y29uc3QgW1xyXG5cdFx0XHRjYXJyeSwgLy8gVmFsdWUgcmFuZ2UgWzAsIDddLlxyXG5cdFx0XHRtc2dfYml0X3NpemVfbGVhc3QgLy8gVmFsdWUgcmFuZ2UgWzAsICgyICoqIDMyKSAtIDhdLlxyXG5cdFx0XSA9IGRpdm1vZChtZXNzYWdlX2J5dGVfc2l6ZV9sZWFzdCAqIDgsIHVpbnQzMl9tYXhfcGx1c18xKTtcclxuXHRcdGNvbnN0IG1lc3NhZ2VfYml0X3NpemVfbW9zdCA9IG1lc3NhZ2VfYnl0ZV9zaXplX21vc3QgKiA4XHJcblx0XHRcdCsgY2Fycnk7IC8vIFZhbHVlIHJhbmdlIFswLCAoMiAqKiAyNCkgLSAxXS5cclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5NZXRob2QgIzJcclxuICAgIDAwMDAwMDAwIDAwMD8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ICA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/P1xyXG4gICAgICBbMDAwMDAgMDAwQUFBQUEgQUFBQUFBQUEgQUFBQUFBQUEgIEFBQV0gKDxBPiBjYXB0dXJlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICg8Qj4gY2FwdHVyZWQpIFswMDBCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoPEI+IHNoaWZ0ZWQpIFtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cclxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBQUFBXVtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cclxuICAgIDAwMDAwMDAwID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ICA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/PzAwMFxyXG5cclxuXHRcdCovXHJcbiAgICAgICAgY29uc3QgW1xyXG4gICAgICAgICAgICBtc2dfYml0X3NpemVfbW9zdCxcclxuICAgICAgICAgICAgbXNnX2JpdF9zaXplX2xlYXN0XHJcbiAgICAgICAgXSA9IGRpdm1vZChtZXNzYWdlX3NpemUsIDUzNjg3MDkxMiAvKiAoMiAqKiAyOSkgKi8pXHJcbiAgICAgICAgICAgIC5tYXAoKHgsIGluZGV4KSA9PiAoaW5kZXggPyAoeCAqIDgpIDogeCkpO1xyXG5cclxuICAgICAgICAvLyBgQXJyYXlCdWZmZXIudHJhbnNmZXIoKWAgaXMgbm90IHN1cHBvcnRlZC5cclxuICAgICAgICBjb25zdCBwYWRkZWQgPSBuZXcgVWludDhBcnJheShtZXNzYWdlX3NpemUgKyBuX3BhZCArIDgpO1xyXG4gICAgICAgIHBhZGRlZC5zZXQobmV3IFVpbnQ4QXJyYXkobWVzc2FnZSksIDApO1xyXG4gICAgICAgIGNvbnN0IGRhdGFfdmlldyA9IG5ldyBEYXRhVmlldyhwYWRkZWQuYnVmZmVyKTtcclxuICAgICAgICBkYXRhX3ZpZXcuc2V0VWludDgobWVzc2FnZV9zaXplLCAwYjEwMDAwMDAwKTtcclxuICAgICAgICBkYXRhX3ZpZXcuc2V0VWludDMyKFxyXG4gICAgICAgICAgICBtZXNzYWdlX3NpemUgKyBuX3BhZCxcclxuICAgICAgICAgICAgbXNnX2JpdF9zaXplX2xlYXN0LFxyXG4gICAgICAgICAgICB0cnVlIC8vIExpdHRsZS1lbmRpYW5cclxuICAgICAgICApO1xyXG4gICAgICAgIGRhdGFfdmlldy5zZXRVaW50MzIoXHJcbiAgICAgICAgICAgIG1lc3NhZ2Vfc2l6ZSArIG5fcGFkICsgNCxcclxuICAgICAgICAgICAgbXNnX2JpdF9zaXplX21vc3QsXHJcbiAgICAgICAgICAgIHRydWUgLy8gTGl0dGxlLWVuZGlhblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYWRkZWQuYnVmZmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmKGosIHgsIHksIHopXHJcbiAgICB7XHJcbiAgICAgICAgaWYoMCA8PSBqICYmIGogPD0gMTUpXHJcbiAgICAgICAgeyAvLyBFeGNsdXNpdmUtT1JcclxuICAgICAgICAgICAgcmV0dXJuIHggXiB5IF4gejtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoMTYgPD0gaiAmJiBqIDw9IDMxKVxyXG4gICAgICAgIHsgLy8gTXVsdGlwbGV4aW5nIChtdXhpbmcpXHJcbiAgICAgICAgICAgIHJldHVybiAoeCAmIHkpIHwgKH54ICYgeik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKDMyIDw9IGogJiYgaiA8PSA0NylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoeCB8IH55KSBeIHo7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKDQ4IDw9IGogJiYgaiA8PSA2MylcclxuICAgICAgICB7IC8vIE11bHRpcGxleGluZyAobXV4aW5nKVxyXG4gICAgICAgICAgICByZXR1cm4gKHggJiB6KSB8ICh5ICYgfnopO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZig2NCA8PSBqICYmIGogPD0gNzkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4geCBeICh5IHwgfnopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBLKGopXHJcbiAgICB7XHJcbiAgICAgICAgaWYoMCA8PSBqICYmIGogPD0gMTUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gMHgwMDAwMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoMTYgPD0gaiAmJiBqIDw9IDMxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLlNRUlQyKVxyXG4gICAgICAgICAgICByZXR1cm4gMHg1QTgyNzk5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoMzIgPD0gaiAmJiBqIDw9IDQ3KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLnNxcnQoMykpXHJcbiAgICAgICAgICAgIHJldHVybiAweDZFRDlFQkExO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZig0OCA8PSBqICYmIGogPD0gNjMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguc3FydCg1KSlcclxuICAgICAgICAgICAgcmV0dXJuIDB4OEYxQkJDREM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKDY0IDw9IGogJiYgaiA8PSA3OSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5zcXJ0KDcpKVxyXG4gICAgICAgICAgICByZXR1cm4gMHhBOTUzRkQ0RTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgS1AoaikgLy8gSydcclxuICAgIHtcclxuICAgICAgICBpZigwIDw9IGogJiYgaiA8PSAxNSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5jYnJ0KDIpKVxyXG4gICAgICAgICAgICByZXR1cm4gMHg1MEEyOEJFNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoMTYgPD0gaiAmJiBqIDw9IDMxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLmNicnQoMykpXHJcbiAgICAgICAgICAgIHJldHVybiAweDVDNEREMTI0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigzMiA8PSBqICYmIGogPD0gNDcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguY2JydCg1KSlcclxuICAgICAgICAgICAgcmV0dXJuIDB4NkQ3MDNFRjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKDQ4IDw9IGogJiYgaiA8PSA2MylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5jYnJ0KDcpKVxyXG4gICAgICAgICAgICByZXR1cm4gMHg3QTZENzZFOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoNjQgPD0gaiAmJiBqIDw9IDc5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDB4MDAwMDAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGFkZF9tb2R1bG8zMigvKiAuLi4uLi4gKi8pXHJcbiAgICB7XHJcbiAgICAgICAgLy8gMS4gIE1vZHVsbyBhZGRpdGlvbiAoYWRkaXRpb24gbW9kdWxvKSBpcyBhc3NvY2lhdGl2ZS5cclxuICAgICAgICAvLyAgICBodHRwczovL3Byb29md2lraS5vcmcvd2lraS9Nb2R1bG9fQWRkaXRpb25faXNfQXNzb2NpYXRpdmVcclxuIFx0XHQvLyAyLiAgQml0d2lzZSBvcGVyYXRpb24gaW4gSmF2YXNjcmlwdFxyXG4gICAgICAgIC8vICAgIGlzIGRvbmUgb24gMzItYml0cyBvcGVyYW5kc1xyXG4gICAgICAgIC8vICAgIGFuZCByZXN1bHRzIGluIGEgMzItYml0cyB2YWx1ZS5cclxuICAgICAgICByZXR1cm4gQXJyYXlcclxuICAgICAgICAgICAgLmZyb20oYXJndW1lbnRzKVxyXG4gICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiAoYSArIGIpLCAwKSB8IDA7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcm9sMzIodmFsdWUsIGNvdW50KVxyXG4gICAgeyAvLyBDeWNsaWMgbGVmdCBzaGlmdCAocm90YXRlKSBvbiAzMi1iaXRzIHZhbHVlLlxyXG4gICAgICAgIHJldHVybiAodmFsdWUgPDwgY291bnQpIHwgKHZhbHVlID4+PiAoMzIgLSBjb3VudCkpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGhhc2gobWVzc2FnZSAvKiBBbiBBcnJheUJ1ZmZlci4gKi8pXHJcbiAgICB7XHJcbiAgICAgICAgLy8gLy8vLy8vLy8gICAgICAgUGFkZGluZyAgICAgICAvLy8vLy8vLy8vXHJcblxyXG4gICAgICAgIC8vIFRoZSBwYWRkZWQgbWVzc2FnZS5cclxuICAgICAgICBjb25zdCBwYWRkZWQgPSBSSVBFTUQxNjAucGFkKG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAvLyAvLy8vLy8vLyAgICAgQ29tcHJlc3Npb24gICAgIC8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgLy8gTWVzc2FnZSB3b3JkIHNlbGVjdG9ycy5cclxuICAgICAgICBjb25zdCByID0gW1xyXG4gICAgICAgICAgICAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LFxyXG4gICAgICAgICAgICA3LCA0LCAxMywgMSwgMTAsIDYsIDE1LCAzLCAxMiwgMCwgOSwgNSwgMiwgMTQsIDExLCA4LFxyXG4gICAgICAgICAgICAzLCAxMCwgMTQsIDQsIDksIDE1LCA4LCAxLCAyLCA3LCAwLCA2LCAxMywgMTEsIDUsIDEyLFxyXG4gICAgICAgICAgICAxLCA5LCAxMSwgMTAsIDAsIDgsIDEyLCA0LCAxMywgMywgNywgMTUsIDE0LCA1LCA2LCAyLFxyXG4gICAgICAgICAgICA0LCAwLCA1LCA5LCA3LCAxMiwgMiwgMTAsIDE0LCAxLCAzLCA4LCAxMSwgNiwgMTUsIDEzXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCByUCA9IFsgLy8gcidcclxuICAgICAgICAgICAgNSwgMTQsIDcsIDAsIDksIDIsIDExLCA0LCAxMywgNiwgMTUsIDgsIDEsIDEwLCAzLCAxMixcclxuICAgICAgICAgICAgNiwgMTEsIDMsIDcsIDAsIDEzLCA1LCAxMCwgMTQsIDE1LCA4LCAxMiwgNCwgOSwgMSwgMixcclxuICAgICAgICAgICAgMTUsIDUsIDEsIDMsIDcsIDE0LCA2LCA5LCAxMSwgOCwgMTIsIDIsIDEwLCAwLCA0LCAxMyxcclxuICAgICAgICAgICAgOCwgNiwgNCwgMSwgMywgMTEsIDE1LCAwLCA1LCAxMiwgMiwgMTMsIDksIDcsIDEwLCAxNCxcclxuICAgICAgICAgICAgMTIsIDE1LCAxMCwgNCwgMSwgNSwgOCwgNywgNiwgMiwgMTMsIDE0LCAwLCAzLCA5LCAxMVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIEFtb3VudHMgZm9yICdyb3RhdGUgbGVmdCcgb3BlcmF0aW9uLlxyXG4gICAgICAgIGNvbnN0IHMgPSBbXHJcbiAgICAgICAgICAgIDExLCAxNCwgMTUsIDEyLCA1LCA4LCA3LCA5LCAxMSwgMTMsIDE0LCAxNSwgNiwgNywgOSwgOCxcclxuICAgICAgICAgICAgNywgNiwgOCwgMTMsIDExLCA5LCA3LCAxNSwgNywgMTIsIDE1LCA5LCAxMSwgNywgMTMsIDEyLFxyXG4gICAgICAgICAgICAxMSwgMTMsIDYsIDcsIDE0LCA5LCAxMywgMTUsIDE0LCA4LCAxMywgNiwgNSwgMTIsIDcsIDUsXHJcbiAgICAgICAgICAgIDExLCAxMiwgMTQsIDE1LCAxNCwgMTUsIDksIDgsIDksIDE0LCA1LCA2LCA4LCA2LCA1LCAxMixcclxuICAgICAgICAgICAgOSwgMTUsIDUsIDExLCA2LCA4LCAxMywgMTIsIDUsIDEyLCAxMywgMTQsIDExLCA4LCA1LCA2XHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBzUCA9IFsgLy8gcydcclxuICAgICAgICAgICAgOCwgOSwgOSwgMTEsIDEzLCAxNSwgMTUsIDUsIDcsIDcsIDgsIDExLCAxNCwgMTQsIDEyLCA2LFxyXG4gICAgICAgICAgICA5LCAxMywgMTUsIDcsIDEyLCA4LCA5LCAxMSwgNywgNywgMTIsIDcsIDYsIDE1LCAxMywgMTEsXHJcbiAgICAgICAgICAgIDksIDcsIDE1LCAxMSwgOCwgNiwgNiwgMTQsIDEyLCAxMywgNSwgMTQsIDEzLCAxMywgNywgNSxcclxuICAgICAgICAgICAgMTUsIDUsIDgsIDExLCAxNCwgMTQsIDYsIDE0LCA2LCA5LCAxMiwgOSwgMTIsIDUsIDE1LCA4LFxyXG4gICAgICAgICAgICA4LCA1LCAxMiwgOSwgMTIsIDUsIDE0LCA2LCA4LCAxMywgNiwgNSwgMTUsIDEzLCAxMSwgMTFcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvLyBUaGUgc2l6ZSwgaW4gYnl0ZXMsIG9mIGEgd29yZC5cclxuICAgICAgICBjb25zdCB3b3JkX3NpemUgPSA0O1xyXG5cclxuICAgICAgICAvLyBUaGUgc2l6ZSwgaW4gYnl0ZXMsIG9mIGEgMTYtd29yZHMgYmxvY2suXHJcbiAgICAgICAgY29uc3QgYmxvY2tfc2l6ZSA9IDY0O1xyXG5cclxuICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIHRoZSAxNi13b3JkcyBibG9ja3MuXHJcbiAgICAgICAgY29uc3QgdCA9IHBhZGRlZC5ieXRlTGVuZ3RoIC8gYmxvY2tfc2l6ZTtcclxuXHJcbiAgICAgICAgLy8gIFRoZSBtZXNzYWdlIGFmdGVyIHBhZGRpbmcgY29uc2lzdHMgb2YgdCAxNi13b3JkIGJsb2NrcyB0aGF0XHJcbiAgICAgICAgLy8gYXJlIGRlbm90ZWQgd2l0aCBYX2lbal0sIHdpdGggMOKJpGniiaQodCDiiJIgMSkgYW5kIDDiiaRq4omkMTUuXHJcbiAgICAgICAgY29uc3QgWCA9IChuZXcgQXJyYXkodCkpXHJcbiAgICAgICAgICAgIC5maWxsKHVuZGVmaW5lZClcclxuICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gaiA9PiAoXHJcbiAgICAgICAgICAgICAgICBuZXcgRGF0YVZpZXcoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGVkLCBpICogYmxvY2tfc2l6ZSwgYmxvY2tfc2l6ZVxyXG4gICAgICAgICAgICAgICAgKS5nZXRVaW50MzIoXHJcbiAgICAgICAgICAgICAgICAgICAgaiAqIHdvcmRfc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB0cnVlIC8vIExpdHRsZS1lbmRpYW5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIC8vICBUaGUgcmVzdWx0IG9mIFJJUEVNRC0xNjAgaXMgY29udGFpbmVkIGluIGZpdmUgMzItYml0IHdvcmRzLFxyXG4gICAgICAgIC8vIHdoaWNoIGZvcm0gdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBhbGdvcml0aG0uIFRoZSBmaW5hbFxyXG4gICAgICAgIC8vIGNvbnRlbnQgb2YgdGhlc2UgZml2ZSAzMi1iaXQgd29yZHMgaXMgY29udmVydGVkIHRvIGEgMTYwLWJpdFxyXG4gICAgICAgIC8vIHN0cmluZywgYWdhaW4gdXNpbmcgdGhlIGxpdHRsZS1lbmRpYW4gY29udmVudGlvbi5cclxuICAgICAgICBjb25zdCBoID0gW1xyXG4gICAgICAgICAgICAweDY3NDUyMzAxLCAvLyBoXzBcclxuICAgICAgICAgICAgMHhFRkNEQUI4OSwgLy8gaF8xXHJcbiAgICAgICAgICAgIDB4OThCQURDRkUsIC8vIGhfMlxyXG4gICAgICAgICAgICAweDEwMzI1NDc2LCAvLyBoXzNcclxuICAgICAgICAgICAgMHhDM0QyRTFGMCAgLy8gaF80XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQ7ICsraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBBID0gaFswXTsgbGV0IEIgPSBoWzFdOyBsZXQgQyA9IGhbMl07IGxldCBEID0gaFszXTsgbGV0IEUgPSBoWzRdO1xyXG4gICAgICAgICAgICBsZXQgQVAgPSBBOyBsZXQgQlAgPSBCOyBsZXQgQ1AgPSBDOyBsZXQgRFAgPSBEOyBsZXQgRVAgPSBFO1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgODA7ICsrailcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gTGVmdCByb3VuZHNcclxuICAgICAgICAgICAgICAgIGxldCBUID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMiggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zaGFkb3dcclxuICAgICAgICAgICAgICAgICAgICBSSVBFTUQxNjAucm9sMzIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUklQRU1EMTYwLmYoaiwgQiwgQywgRCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBYW2ldKHJbal0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUklQRU1EMTYwLksoailcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc1tqXVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgRVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIEEgPSBFO1xyXG4gICAgICAgICAgICAgICAgRSA9IEQ7XHJcbiAgICAgICAgICAgICAgICBEID0gUklQRU1EMTYwLnJvbDMyKEMsIDEwKTtcclxuICAgICAgICAgICAgICAgIEMgPSBCO1xyXG4gICAgICAgICAgICAgICAgQiA9IFQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgcm91bmRzXHJcbiAgICAgICAgICAgICAgICBUID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihcclxuICAgICAgICAgICAgICAgICAgICBSSVBFTUQxNjAucm9sMzIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBUCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJJUEVNRDE2MC5mKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDc5IC0gaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCUCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhbaV0oclBbal0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUklQRU1EMTYwLktQKGopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNQW2pdXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBFUFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIEFQID0gRVA7XHJcbiAgICAgICAgICAgICAgICBFUCA9IERQO1xyXG4gICAgICAgICAgICAgICAgRFAgPSBSSVBFTUQxNjAucm9sMzIoQ1AsIDEwKTtcclxuICAgICAgICAgICAgICAgIENQID0gQlA7XHJcbiAgICAgICAgICAgICAgICBCUCA9IFQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgVCA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFsxXSwgQywgRFApO1xyXG4gICAgICAgICAgICBoWzFdID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzJdLCBELCBFUCk7XHJcbiAgICAgICAgICAgIGhbMl0gPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKGhbM10sIEUsIEFQKTtcclxuICAgICAgICAgICAgaFszXSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFs0XSwgQSwgQlApO1xyXG4gICAgICAgICAgICBoWzRdID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzBdLCBCLCBDUCk7XHJcbiAgICAgICAgICAgIGhbMF0gPSBUO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIFRoZSBmaW5hbCBvdXRwdXQgc3RyaW5nIHRoZW4gY29uc2lzdHMgb2YgdGhlIGNvbmNhdGVuYXRhdGlvblxyXG4gICAgICAgIC8vIG9mIGhfMCwgaF8xLCBoXzIsIGhfMywgYW5kIGhfNCBhZnRlciBjb252ZXJ0aW5nIGVhY2ggaF9pIHRvIGFcclxuICAgICAgICAvLyA0LWJ5dGUgc3RyaW5nIHVzaW5nIHRoZSBsaXR0bGUtZW5kaWFuIGNvbnZlbnRpb24uXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5QnVmZmVyKDIwKTtcclxuICAgICAgICBjb25zdCBkYXRhX3ZpZXcgPSBuZXcgRGF0YVZpZXcocmVzdWx0KTtcclxuICAgICAgICBoLmZvckVhY2goKGhfaSwgaSkgPT4gZGF0YV92aWV3LnNldFVpbnQzMihpICogNCwgaF9pLCB0cnVlKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBSSVBFTUQxNjBcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHJlc3VsdCA9IGZuKCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiZW9zanNfYXBpXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rX25hbWVfXCJdID0gc2VsZltcIndlYnBhY2tDaHVua19uYW1lX1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZXh0ZXJuYWxzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Vvc2pzLWFwaS50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==