var eosjs_jsonrpc;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/eosjs-jsonrpc.ts":
/*!******************************!*\
  !*** ./src/eosjs-jsonrpc.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @module JSON-RPC
 */
// copyright defined in eosjs/LICENSE.txt
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
exports.JsonRpc = void 0;
var eosjs_numeric_1 = __webpack_require__(/*! ./eosjs-numeric */ "./src/eosjs-numeric.ts");
var eosjs_rpcerror_1 = __webpack_require__(/*! ./eosjs-rpcerror */ "./src/eosjs-rpcerror.ts");
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
    return result;
};
/** Make RPC calls */
var JsonRpc = /** @class */ (function () {
    /**
     * @param args
     * `fetch`:
     * browsers: leave `null` or `undefined`
     * node: provide an implementation
     */
    function JsonRpc(endpoint, args) {
        if (args === void 0) { args = {}; }
        this.endpoint = endpoint.replace(/\/$/, '');
        if (args.fetch) {
            this.fetchBuiltin = args.fetch;
        }
        else {
            this.fetchBuiltin = __webpack_require__.g.fetch;
        }
    }
    /** Post `body` to `endpoint + path`. Throws detailed error information in `RpcError` when available. */
    JsonRpc.prototype.fetch = function (path, body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, f, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        f = this.fetchBuiltin;
                        return [4 /*yield*/, f(this.endpoint + path, {
                                body: JSON.stringify(body),
                                method: 'POST',
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (json.processed && json.processed.except) {
                            throw new eosjs_rpcerror_1.RpcError(json);
                        }
                        else if (json.result && json.result.except) {
                            throw new eosjs_rpcerror_1.RpcError(json);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        e_2.isFetchError = true;
                        throw e_2;
                    case 4:
                        if (!response.ok) {
                            throw new eosjs_rpcerror_1.RpcError(json);
                        }
                        return [2 /*return*/, json];
                }
            });
        });
    };
    JsonRpc.prototype.abi_bin_to_json = function (code, action, binargs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/abi_bin_to_json', { code: code, action: action, binargs: binargs })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    JsonRpc.prototype.abi_json_to_bin = function (code, action, args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/abi_json_to_bin', { code: code, action: action, args: args })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_abi` */
    JsonRpc.prototype.get_abi = function (accountName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_abi', { account_name: accountName })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_account` */
    JsonRpc.prototype.get_account = function (accountName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_account', { account_name: accountName })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_accounts_by_authorizers` */
    JsonRpc.prototype.get_accounts_by_authorizers = function (accounts, keys) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_accounts_by_authorizers', { accounts: accounts, keys: keys })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `get_activated_protocol_features` */
    JsonRpc.prototype.get_activated_protocol_features = function (_a) {
        var _b = _a.limit, limit = _b === void 0 ? 10 : _b, _c = _a.search_by_block_num, search_by_block_num = _c === void 0 ? false : _c, _d = _a.reverse, reverse = _d === void 0 ? false : _d, _e = _a.lower_bound, lower_bound = _e === void 0 ? null : _e, _f = _a.upper_bound, upper_bound = _f === void 0 ? null : _f;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_activated_protocol_features', { lower_bound: lower_bound, upper_bound: upper_bound, limit: limit, search_by_block_num: search_by_block_num, reverse: reverse })];
                    case 1: return [2 /*return*/, _g.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_block_header_state` */
    JsonRpc.prototype.get_block_header_state = function (blockNumOrId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_block_header_state', { block_num_or_id: blockNumOrId })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_block_info` */
    JsonRpc.prototype.get_block_info = function (blockNum) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_block_info', { block_num: blockNum })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_block` */
    JsonRpc.prototype.get_block = function (blockNumOrId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_block', { block_num_or_id: blockNumOrId })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_code` */
    JsonRpc.prototype.get_code = function (accountName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_code', {
                            account_name: accountName,
                            code_as_wasm: true
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_code_hash` */
    JsonRpc.prototype.get_code_hash = function (accountName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_code_hash', { account_name: accountName })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_currency_balance` */
    JsonRpc.prototype.get_currency_balance = function (code, account, symbol) {
        if (symbol === void 0) { symbol = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_currency_balance', { code: code, account: account, symbol: symbol })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_currency_stats` */
    JsonRpc.prototype.get_currency_stats = function (code, symbol) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_currency_stats', { code: code, symbol: symbol })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_info` */
    JsonRpc.prototype.get_info = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_info', {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_producer_schedule` */
    JsonRpc.prototype.get_producer_schedule = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_producer_schedule', {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_producers` */
    JsonRpc.prototype.get_producers = function (json, lowerBound, limit) {
        if (json === void 0) { json = true; }
        if (lowerBound === void 0) { lowerBound = ''; }
        if (limit === void 0) { limit = 50; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_producers', { json: json, lower_bound: lowerBound, limit: limit })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_raw_code_and_abi` */
    JsonRpc.prototype.get_raw_code_and_abi = function (accountName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_raw_code_and_abi', { account_name: accountName })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** calls `/v1/chain/get_raw_code_and_abi` and pulls out unneeded raw wasm code */
    JsonRpc.prototype.getRawAbi = function (accountName) {
        return __awaiter(this, void 0, void 0, function () {
            var rawAbi, abi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get_raw_abi(accountName)];
                    case 1:
                        rawAbi = _a.sent();
                        abi = eosjs_numeric_1.base64ToBinary(rawAbi.abi);
                        return [2 /*return*/, { accountName: rawAbi.account_name, abi: abi }];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_raw_abi` */
    JsonRpc.prototype.get_raw_abi = function (accountName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_raw_abi', { account_name: accountName })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_scheduled_transactions` */
    JsonRpc.prototype.get_scheduled_transactions = function (json, lowerBound, limit) {
        if (json === void 0) { json = true; }
        if (lowerBound === void 0) { lowerBound = ''; }
        if (limit === void 0) { limit = 50; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_scheduled_transactions', { json: json, lower_bound: lowerBound, limit: limit })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_table_rows` */
    JsonRpc.prototype.get_table_rows = function (_a) {
        var _b = _a.json, json = _b === void 0 ? true : _b, code = _a.code, scope = _a.scope, table = _a.table, _c = _a.lower_bound, lower_bound = _c === void 0 ? '' : _c, _d = _a.upper_bound, upper_bound = _d === void 0 ? '' : _d, _e = _a.index_position, index_position = _e === void 0 ? 1 : _e, _f = _a.key_type, key_type = _f === void 0 ? '' : _f, _g = _a.limit, limit = _g === void 0 ? 10 : _g, _h = _a.reverse, reverse = _h === void 0 ? false : _h, _j = _a.show_payer, show_payer = _j === void 0 ? false : _j;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_table_rows', {
                            json: json,
                            code: code,
                            scope: scope,
                            table: table,
                            lower_bound: lower_bound,
                            upper_bound: upper_bound,
                            index_position: index_position,
                            key_type: key_type,
                            limit: limit,
                            reverse: reverse,
                            show_payer: show_payer,
                        })];
                    case 1: return [2 /*return*/, _k.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_kv_table_rows` */
    JsonRpc.prototype.get_kv_table_rows = function (_a) {
        var _b = _a.json, json = _b === void 0 ? true : _b, code = _a.code, table = _a.table, index_name = _a.index_name, _c = _a.encode_type, encode_type = _c === void 0 ? 'bytes' : _c, index_value = _a.index_value, lower_bound = _a.lower_bound, upper_bound = _a.upper_bound, _d = _a.limit, limit = _d === void 0 ? 10 : _d, _e = _a.reverse, reverse = _e === void 0 ? false : _e, _f = _a.show_payer, show_payer = _f === void 0 ? false : _f;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_kv_table_rows', {
                            json: json,
                            code: code,
                            table: table,
                            index_name: index_name,
                            encode_type: encode_type,
                            index_value: index_value,
                            lower_bound: lower_bound,
                            upper_bound: upper_bound,
                            limit: limit,
                            reverse: reverse,
                            show_payer: show_payer,
                        })];
                    case 1: return [2 /*return*/, _g.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_table_by_scope` */
    JsonRpc.prototype.get_table_by_scope = function (_a) {
        var code = _a.code, table = _a.table, _b = _a.lower_bound, lower_bound = _b === void 0 ? '' : _b, _c = _a.upper_bound, upper_bound = _c === void 0 ? '' : _c, _d = _a.limit, limit = _d === void 0 ? 10 : _d;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/get_table_by_scope', {
                            code: code,
                            table: table,
                            lower_bound: lower_bound,
                            upper_bound: upper_bound,
                            limit: limit,
                        })];
                    case 1: return [2 /*return*/, _e.sent()];
                }
            });
        });
    };
    /** Get subset of `availableKeys` needed to meet authorities in `transaction`. Implements `AuthorityProvider` */
    JsonRpc.prototype.getRequiredKeys = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = eosjs_numeric_1.convertLegacyPublicKeys;
                        return [4 /*yield*/, this.fetch('/v1/chain/get_required_keys', {
                                transaction: args.transaction,
                                available_keys: args.availableKeys,
                            })];
                    case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).required_keys])];
                }
            });
        });
    };
    /** Push a serialized transaction (replaced by send_transaction, but returned format has changed) */
    JsonRpc.prototype.push_transaction = function (_a) {
        var signatures = _a.signatures, _b = _a.compression, compression = _b === void 0 ? 0 : _b, serializedTransaction = _a.serializedTransaction, serializedContextFreeData = _a.serializedContextFreeData;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/push_transaction', {
                            signatures: signatures,
                            compression: compression,
                            packed_context_free_data: arrayToHex(serializedContextFreeData || new Uint8Array(0)),
                            packed_trx: arrayToHex(serializedTransaction),
                        })];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/push_ro_transaction */
    JsonRpc.prototype.push_ro_transaction = function (_a, returnFailureTraces) {
        var signatures = _a.signatures, _b = _a.compression, compression = _b === void 0 ? 0 : _b, serializedTransaction = _a.serializedTransaction;
        if (returnFailureTraces === void 0) { returnFailureTraces = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/push_ro_transaction', {
                            transaction: {
                                signatures: signatures,
                                compression: compression,
                                packed_context_free_data: arrayToHex(new Uint8Array(0)),
                                packed_trx: arrayToHex(serializedTransaction),
                            },
                            return_failure_traces: returnFailureTraces,
                        })];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    JsonRpc.prototype.push_transactions = function (transactions) {
        return __awaiter(this, void 0, void 0, function () {
            var packedTrxs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        packedTrxs = transactions.map(function (_a) {
                            var signatures = _a.signatures, _b = _a.compression, compression = _b === void 0 ? 0 : _b, serializedTransaction = _a.serializedTransaction, serializedContextFreeData = _a.serializedContextFreeData;
                            return {
                                signatures: signatures,
                                compression: compression,
                                packed_context_free_data: arrayToHex(serializedContextFreeData || new Uint8Array(0)),
                                packed_trx: arrayToHex(serializedTransaction),
                            };
                        });
                        return [4 /*yield*/, this.fetch('/v1/chain/push_transactions', packedTrxs)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Send a serialized transaction */
    JsonRpc.prototype.send_transaction = function (_a) {
        var signatures = _a.signatures, _b = _a.compression, compression = _b === void 0 ? 0 : _b, serializedTransaction = _a.serializedTransaction, serializedContextFreeData = _a.serializedContextFreeData;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/chain/send_transaction', {
                            signatures: signatures,
                            compression: compression,
                            packed_context_free_data: arrayToHex(serializedContextFreeData || new Uint8Array(0)),
                            packed_trx: arrayToHex(serializedTransaction),
                        })];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/db_size/get` */
    JsonRpc.prototype.db_size_get = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.fetch('/v1/db_size/get', {})];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); });
    };
    /** Raw call to `/v1/trace_api/get_block` */
    JsonRpc.prototype.trace_get_block = function (block_num) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/trace_api/get_block', { block_num: block_num })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/history/get_actions` */
    JsonRpc.prototype.history_get_actions = function (accountName, pos, offset) {
        if (pos === void 0) { pos = null; }
        if (offset === void 0) { offset = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/history/get_actions', { account_name: accountName, pos: pos, offset: offset })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/history/get_transaction` */
    JsonRpc.prototype.history_get_transaction = function (id, blockNumHint) {
        if (blockNumHint === void 0) { blockNumHint = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/history/get_transaction', { id: id, block_num_hint: blockNumHint })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/history/get_key_accounts` */
    JsonRpc.prototype.history_get_key_accounts = function (publicKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/history/get_key_accounts', { public_key: publicKey })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/history/get_controlled_accounts` */
    JsonRpc.prototype.history_get_controlled_accounts = function (controllingAccount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch('/v1/history/get_controlled_accounts', { controlling_account: controllingAccount })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return JsonRpc;
}()); // JsonRpc
exports.JsonRpc = JsonRpc;


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

/***/ "./src/eosjs-rpcerror.ts":
/*!*******************************!*\
  !*** ./src/eosjs-rpcerror.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * @module RPC-Error
 */
// copyright defined in eosjs/LICENSE.txt
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RpcError = void 0;
/** Holds detailed error information */
var RpcError = /** @class */ (function (_super) {
    __extends(RpcError, _super);
    function RpcError(json) {
        var _this = this;
        if (json.error && json.error.details && json.error.details.length && json.error.details[0].message) {
            _this = _super.call(this, json.error.details[0].message) || this;
            _this.details = json.error.details;
        }
        else if (json.processed && json.processed.except && json.processed.except.message) {
            _this = _super.call(this, json.processed.except.message) || this;
            _this.details = json.processed.except;
        }
        else if (json.result && json.result.except && json.result.except.message) {
            _this = _super.call(this, json.result.except.message) || this;
            _this.details = json.result.except;
        }
        else {
            _this = _super.call(this, json.message) || this;
        }
        Object.setPrototypeOf(_this, RpcError.prototype);
        _this.json = json;
        return _this;
    }
    return RpcError;
}(Error));
exports.RpcError = RpcError;


/***/ }),

/***/ "./src/rpc-web.ts":
/*!************************!*\
  !*** ./src/rpc-web.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RpcError = exports.JsonRpc = void 0;
var eosjs_jsonrpc_1 = __webpack_require__(/*! ./eosjs-jsonrpc */ "./src/eosjs-jsonrpc.ts");
Object.defineProperty(exports, "JsonRpc", ({ enumerable: true, get: function () { return eosjs_jsonrpc_1.JsonRpc; } }));
var eosjs_rpcerror_1 = __webpack_require__(/*! ./eosjs-rpcerror */ "./src/eosjs-rpcerror.ts");
Object.defineProperty(exports, "RpcError", ({ enumerable: true, get: function () { return eosjs_rpcerror_1.RpcError; } }));


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			"eosjs_jsonrpc": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["externals"], () => (__webpack_require__("./src/rpc-web.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	eosjs_jsonrpc = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZW9zanMtanNvbnJwYy50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZW9zanMtbnVtZXJpYy50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZW9zanMtcnBjZXJyb3IudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3JwYy13ZWIudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3JpcGVtZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxlQUFlO0FBQ2Ysc0JBQXNCLG1CQUFPLENBQUMsK0NBQWlCO0FBQy9DLHVCQUF1QixtQkFBTyxDQUFDLGlEQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxnQkFBZ0I7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUSxnQkFBZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixXQUFXO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQU07QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRiwrQ0FBK0M7QUFDekk7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRix5Q0FBeUM7QUFDbkk7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLDRCQUE0QjtBQUM5RztBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsNEJBQTRCO0FBQ2xIO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNHQUFzRyxpQ0FBaUM7QUFDdkk7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwR0FBMEcsK0hBQStIO0FBQ3pPO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlHQUFpRyxnQ0FBZ0M7QUFDakk7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLHNCQUFzQjtBQUMvRztBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsZ0NBQWdDO0FBQ3BIO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0YsNEJBQTRCO0FBQ3BIO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLCtGQUErRiwrQ0FBK0M7QUFDOUk7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGLDZCQUE2QjtBQUMxSDtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUdBQWlHO0FBQ2pHO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixhQUFhO0FBQzNDLG9DQUFvQyxpQkFBaUI7QUFDckQsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGLG9EQUFvRDtBQUM1STtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRkFBK0YsNEJBQTRCO0FBQzNIO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsNkNBQTZDO0FBQzVGO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsNEJBQTRCO0FBQ2xIO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixhQUFhO0FBQzNDLG9DQUFvQyxpQkFBaUI7QUFDckQsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0EscUdBQXFHLG9EQUFvRDtBQUN6SjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDZCQUE2QjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0EsU0FBUyxFQUFFLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0YsdUJBQXVCO0FBQy9HO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixZQUFZO0FBQ3pDLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RixzREFBc0Q7QUFDOUk7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHFCQUFxQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsdUNBQXVDO0FBQ25JO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGQUE2Rix3QkFBd0I7QUFDckg7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HLDBDQUEwQztBQUM5STtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQyxJQUFJO0FBQ0wsZUFBZTs7Ozs7Ozs7Ozs7QUMva0JGO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSxnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFFBQVE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELHlCQUF5QixHQUFHLHlCQUF5QixHQUFHLDBCQUEwQixHQUFHLGdDQUFnQyxHQUFHLDBCQUEwQixHQUFHLCtCQUErQixHQUFHLDhCQUE4QixHQUFHLHlCQUF5QixHQUFHLCtCQUErQixHQUFHLHlCQUF5QixHQUFHLHlCQUF5QixHQUFHLDBCQUEwQixHQUFHLHlCQUF5QixHQUFHLGVBQWUsR0FBRyxzQkFBc0IsR0FBRyxzQkFBc0IsR0FBRyxzQkFBc0IsR0FBRyw2QkFBNkIsR0FBRyx1QkFBdUIsR0FBRyw2QkFBNkIsR0FBRyx1QkFBdUIsR0FBRyxjQUFjLEdBQUcsa0JBQWtCO0FBQzNuQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxtREFBUztBQUNqQztBQUNBLGdCQUFnQixxRUFBa0M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUM7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQztBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsYUFBYTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUSxnQkFBZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0EsMkVBQTJFLGtCQUFrQjtBQUM3RjtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBLDJFQUEyRSxrQkFBa0I7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVEsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0MsZUFBZSxLQUFLO0FBQ3JEO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsdUJBQXVCLCtCQUErQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsMkJBQTJCLEVBQUU7QUFDdkU7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7Ozs7Ozs7Ozs7O0FDemhCWjtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qiw4RUFBOEU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZ0JBQWdCOzs7Ozs7Ozs7OztBQ2hESDtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxnQkFBZ0IsR0FBRyxlQUFlO0FBQ2xDLHNCQUFzQixtQkFBTyxDQUFDLCtDQUFpQjtBQUMvQywyQ0FBMEMsQ0FBQyxxQ0FBcUMsZ0NBQWdDLEVBQUUsRUFBRSxFQUFDO0FBQ3JILHVCQUF1QixtQkFBTyxDQUFDLGlEQUFrQjtBQUNqRCw0Q0FBMkMsQ0FBQyxxQ0FBcUMsa0NBQWtDLEVBQUUsRUFBRSxFQUFDOzs7Ozs7Ozs7OztBQ054SDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0EseUJBQXlCLGNBQWMsY0FBYyxjQUFjO0FBQ25FLHVCQUF1QixZQUFZLFlBQVksWUFBWTtBQUMzRCwwQkFBMEIsUUFBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O1VDdmRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDhCQUE4Qix3Q0FBd0M7V0FDdEU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQkFBZ0IscUJBQXFCO1dBQ3JDO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQzFCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUM5Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJlb3Nqcy1qc29ucnBjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG4gKiBAbW9kdWxlIEpTT04tUlBDXHJcbiAqL1xyXG4vLyBjb3B5cmlnaHQgZGVmaW5lZCBpbiBlb3Nqcy9MSUNFTlNFLnR4dFxyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Kc29uUnBjID0gdm9pZCAwO1xyXG52YXIgZW9zanNfbnVtZXJpY18xID0gcmVxdWlyZShcIi4vZW9zanMtbnVtZXJpY1wiKTtcclxudmFyIGVvc2pzX3JwY2Vycm9yXzEgPSByZXF1aXJlKFwiLi9lb3Nqcy1ycGNlcnJvclwiKTtcclxudmFyIGFycmF5VG9IZXggPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgdmFyIGVfMSwgX2E7XHJcbiAgICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIGRhdGFfMSA9IF9fdmFsdWVzKGRhdGEpLCBkYXRhXzFfMSA9IGRhdGFfMS5uZXh0KCk7ICFkYXRhXzFfMS5kb25lOyBkYXRhXzFfMSA9IGRhdGFfMS5uZXh0KCkpIHtcclxuICAgICAgICAgICAgdmFyIHggPSBkYXRhXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgcmVzdWx0ICs9ICgnMDAnICsgeC50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGRhdGFfMV8xICYmICFkYXRhXzFfMS5kb25lICYmIChfYSA9IGRhdGFfMS5yZXR1cm4pKSBfYS5jYWxsKGRhdGFfMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbi8qKiBNYWtlIFJQQyBjYWxscyAqL1xyXG52YXIgSnNvblJwYyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGFyZ3NcclxuICAgICAqIGBmZXRjaGA6XHJcbiAgICAgKiBicm93c2VyczogbGVhdmUgYG51bGxgIG9yIGB1bmRlZmluZWRgXHJcbiAgICAgKiBub2RlOiBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIEpzb25ScGMoZW5kcG9pbnQsIGFyZ3MpIHtcclxuICAgICAgICBpZiAoYXJncyA9PT0gdm9pZCAwKSB7IGFyZ3MgPSB7fTsgfVxyXG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSBlbmRwb2ludC5yZXBsYWNlKC9cXC8kLywgJycpO1xyXG4gICAgICAgIGlmIChhcmdzLmZldGNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hCdWlsdGluID0gYXJncy5mZXRjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hCdWlsdGluID0gZ2xvYmFsLmZldGNoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBQb3N0IGBib2R5YCB0byBgZW5kcG9pbnQgKyBwYXRoYC4gVGhyb3dzIGRldGFpbGVkIGVycm9yIGluZm9ybWF0aW9uIGluIGBScGNFcnJvcmAgd2hlbiBhdmFpbGFibGUuICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChwYXRoLCBib2R5KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGpzb24sIGYsIGVfMjtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IHRoaXMuZmV0Y2hCdWlsdGluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmKHRoaXMuZW5kcG9pbnQgKyBwYXRoLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb24gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqc29uLnByb2Nlc3NlZCAmJiBqc29uLnByb2Nlc3NlZC5leGNlcHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBlb3Nqc19ycGNlcnJvcl8xLlJwY0Vycm9yKGpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGpzb24ucmVzdWx0ICYmIGpzb24ucmVzdWx0LmV4Y2VwdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGVvc2pzX3JwY2Vycm9yXzEuUnBjRXJyb3IoanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMi5pc0ZldGNoRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZW9zanNfcnBjZXJyb3JfMS5ScGNFcnJvcihqc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywganNvbl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEpzb25ScGMucHJvdG90eXBlLmFiaV9iaW5fdG9fanNvbiA9IGZ1bmN0aW9uIChjb2RlLCBhY3Rpb24sIGJpbmFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goJy92MS9jaGFpbi9hYmlfYmluX3RvX2pzb24nLCB7IGNvZGU6IGNvZGUsIGFjdGlvbjogYWN0aW9uLCBiaW5hcmdzOiBiaW5hcmdzIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5hYmlfanNvbl90b19iaW4gPSBmdW5jdGlvbiAoY29kZSwgYWN0aW9uLCBhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKCcvdjEvY2hhaW4vYWJpX2pzb25fdG9fYmluJywgeyBjb2RlOiBjb2RlLCBhY3Rpb246IGFjdGlvbiwgYXJnczogYXJncyB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2FiaWAgKi9cclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldF9hYmkgPSBmdW5jdGlvbiAoYWNjb3VudE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goJy92MS9jaGFpbi9nZXRfYWJpJywgeyBhY2NvdW50X25hbWU6IGFjY291bnROYW1lIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfYWNjb3VudGAgKi9cclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldF9hY2NvdW50ID0gZnVuY3Rpb24gKGFjY291bnROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKCcvdjEvY2hhaW4vZ2V0X2FjY291bnQnLCB7IGFjY291bnRfbmFtZTogYWNjb3VudE5hbWUgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9hY2NvdW50c19ieV9hdXRob3JpemVyc2AgKi9cclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldF9hY2NvdW50c19ieV9hdXRob3JpemVycyA9IGZ1bmN0aW9uIChhY2NvdW50cywga2V5cykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaCgnL3YxL2NoYWluL2dldF9hY2NvdW50c19ieV9hdXRob3JpemVycycsIHsgYWNjb3VudHM6IGFjY291bnRzLCBrZXlzOiBrZXlzIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYGdldF9hY3RpdmF0ZWRfcHJvdG9jb2xfZmVhdHVyZXNgICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5nZXRfYWN0aXZhdGVkX3Byb3RvY29sX2ZlYXR1cmVzID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EubGltaXQsIGxpbWl0ID0gX2IgPT09IHZvaWQgMCA/IDEwIDogX2IsIF9jID0gX2Euc2VhcmNoX2J5X2Jsb2NrX251bSwgc2VhcmNoX2J5X2Jsb2NrX251bSA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLCBfZCA9IF9hLnJldmVyc2UsIHJldmVyc2UgPSBfZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZCwgX2UgPSBfYS5sb3dlcl9ib3VuZCwgbG93ZXJfYm91bmQgPSBfZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9lLCBfZiA9IF9hLnVwcGVyX2JvdW5kLCB1cHBlcl9ib3VuZCA9IF9mID09PSB2b2lkIDAgPyBudWxsIDogX2Y7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9nKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9nLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKCcvdjEvY2hhaW4vZ2V0X2FjdGl2YXRlZF9wcm90b2NvbF9mZWF0dXJlcycsIHsgbG93ZXJfYm91bmQ6IGxvd2VyX2JvdW5kLCB1cHBlcl9ib3VuZDogdXBwZXJfYm91bmQsIGxpbWl0OiBsaW1pdCwgc2VhcmNoX2J5X2Jsb2NrX251bTogc2VhcmNoX2J5X2Jsb2NrX251bSwgcmV2ZXJzZTogcmV2ZXJzZSB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2cuc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2Jsb2NrX2hlYWRlcl9zdGF0ZWAgKi9cclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldF9ibG9ja19oZWFkZXJfc3RhdGUgPSBmdW5jdGlvbiAoYmxvY2tOdW1PcklkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKCcvdjEvY2hhaW4vZ2V0X2Jsb2NrX2hlYWRlcl9zdGF0ZScsIHsgYmxvY2tfbnVtX29yX2lkOiBibG9ja051bU9ySWQgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9ibG9ja19pbmZvYCAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuZ2V0X2Jsb2NrX2luZm8gPSBmdW5jdGlvbiAoYmxvY2tOdW0pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goJy92MS9jaGFpbi9nZXRfYmxvY2tfaW5mbycsIHsgYmxvY2tfbnVtOiBibG9ja051bSB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2Jsb2NrYCAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuZ2V0X2Jsb2NrID0gZnVuY3Rpb24gKGJsb2NrTnVtT3JJZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaCgnL3YxL2NoYWluL2dldF9ibG9jaycsIHsgYmxvY2tfbnVtX29yX2lkOiBibG9ja051bU9ySWQgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9jb2RlYCAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuZ2V0X2NvZGUgPSBmdW5jdGlvbiAoYWNjb3VudE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goJy92MS9jaGFpbi9nZXRfY29kZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZTogYWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlX2FzX3dhc206IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9jb2RlX2hhc2hgICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5nZXRfY29kZV9oYXNoID0gZnVuY3Rpb24gKGFjY291bnROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKCcvdjEvY2hhaW4vZ2V0X2NvZGVfaGFzaCcsIHsgYWNjb3VudF9uYW1lOiBhY2NvdW50TmFtZSB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2N1cnJlbmN5X2JhbGFuY2VgICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5nZXRfY3VycmVuY3lfYmFsYW5jZSA9IGZ1bmN0aW9uIChjb2RlLCBhY2NvdW50LCBzeW1ib2wpIHtcclxuICAgICAgICBpZiAoc3ltYm9sID09PSB2b2lkIDApIHsgc3ltYm9sID0gbnVsbDsgfVxyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaCgnL3YxL2NoYWluL2dldF9jdXJyZW5jeV9iYWxhbmNlJywgeyBjb2RlOiBjb2RlLCBhY2NvdW50OiBhY2NvdW50LCBzeW1ib2w6IHN5bWJvbCB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2N1cnJlbmN5X3N0YXRzYCAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuZ2V0X2N1cnJlbmN5X3N0YXRzID0gZnVuY3Rpb24gKGNvZGUsIHN5bWJvbCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaCgnL3YxL2NoYWluL2dldF9jdXJyZW5jeV9zdGF0cycsIHsgY29kZTogY29kZSwgc3ltYm9sOiBzeW1ib2wgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9pbmZvYCAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuZ2V0X2luZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKCcvdjEvY2hhaW4vZ2V0X2luZm8nLCB7fSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9wcm9kdWNlcl9zY2hlZHVsZWAgKi9cclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldF9wcm9kdWNlcl9zY2hlZHVsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goJy92MS9jaGFpbi9nZXRfcHJvZHVjZXJfc2NoZWR1bGUnLCB7fSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9wcm9kdWNlcnNgICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5nZXRfcHJvZHVjZXJzID0gZnVuY3Rpb24gKGpzb24sIGxvd2VyQm91bmQsIGxpbWl0KSB7XHJcbiAgICAgICAgaWYgKGpzb24gPT09IHZvaWQgMCkgeyBqc29uID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3dlckJvdW5kID09PSB2b2lkIDApIHsgbG93ZXJCb3VuZCA9ICcnOyB9XHJcbiAgICAgICAgaWYgKGxpbWl0ID09PSB2b2lkIDApIHsgbGltaXQgPSA1MDsgfVxyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaCgnL3YxL2NoYWluL2dldF9wcm9kdWNlcnMnLCB7IGpzb246IGpzb24sIGxvd2VyX2JvdW5kOiBsb3dlckJvdW5kLCBsaW1pdDogbGltaXQgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9yYXdfY29kZV9hbmRfYWJpYCAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuZ2V0X3Jhd19jb2RlX2FuZF9hYmkgPSBmdW5jdGlvbiAoYWNjb3VudE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goJy92MS9jaGFpbi9nZXRfcmF3X2NvZGVfYW5kX2FiaScsIHsgYWNjb3VudF9uYW1lOiBhY2NvdW50TmFtZSB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIGNhbGxzIGAvdjEvY2hhaW4vZ2V0X3Jhd19jb2RlX2FuZF9hYmlgIGFuZCBwdWxscyBvdXQgdW5uZWVkZWQgcmF3IHdhc20gY29kZSAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuZ2V0UmF3QWJpID0gZnVuY3Rpb24gKGFjY291bnROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmF3QWJpLCBhYmk7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0X3Jhd19hYmkoYWNjb3VudE5hbWUpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd0FiaSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWJpID0gZW9zanNfbnVtZXJpY18xLmJhc2U2NFRvQmluYXJ5KHJhd0FiaS5hYmkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgeyBhY2NvdW50TmFtZTogcmF3QWJpLmFjY291bnRfbmFtZSwgYWJpOiBhYmkgfV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9yYXdfYWJpYCAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuZ2V0X3Jhd19hYmkgPSBmdW5jdGlvbiAoYWNjb3VudE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goJy92MS9jaGFpbi9nZXRfcmF3X2FiaScsIHsgYWNjb3VudF9uYW1lOiBhY2NvdW50TmFtZSB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X3NjaGVkdWxlZF90cmFuc2FjdGlvbnNgICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5nZXRfc2NoZWR1bGVkX3RyYW5zYWN0aW9ucyA9IGZ1bmN0aW9uIChqc29uLCBsb3dlckJvdW5kLCBsaW1pdCkge1xyXG4gICAgICAgIGlmIChqc29uID09PSB2b2lkIDApIHsganNvbiA9IHRydWU7IH1cclxuICAgICAgICBpZiAobG93ZXJCb3VuZCA9PT0gdm9pZCAwKSB7IGxvd2VyQm91bmQgPSAnJzsgfVxyXG4gICAgICAgIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7IGxpbWl0ID0gNTA7IH1cclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goJy92MS9jaGFpbi9nZXRfc2NoZWR1bGVkX3RyYW5zYWN0aW9ucycsIHsganNvbjoganNvbiwgbG93ZXJfYm91bmQ6IGxvd2VyQm91bmQsIGxpbWl0OiBsaW1pdCB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X3RhYmxlX3Jvd3NgICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5nZXRfdGFibGVfcm93cyA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBfYiA9IF9hLmpzb24sIGpzb24gPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBjb2RlID0gX2EuY29kZSwgc2NvcGUgPSBfYS5zY29wZSwgdGFibGUgPSBfYS50YWJsZSwgX2MgPSBfYS5sb3dlcl9ib3VuZCwgbG93ZXJfYm91bmQgPSBfYyA9PT0gdm9pZCAwID8gJycgOiBfYywgX2QgPSBfYS51cHBlcl9ib3VuZCwgdXBwZXJfYm91bmQgPSBfZCA9PT0gdm9pZCAwID8gJycgOiBfZCwgX2UgPSBfYS5pbmRleF9wb3NpdGlvbiwgaW5kZXhfcG9zaXRpb24gPSBfZSA9PT0gdm9pZCAwID8gMSA6IF9lLCBfZiA9IF9hLmtleV90eXBlLCBrZXlfdHlwZSA9IF9mID09PSB2b2lkIDAgPyAnJyA6IF9mLCBfZyA9IF9hLmxpbWl0LCBsaW1pdCA9IF9nID09PSB2b2lkIDAgPyAxMCA6IF9nLCBfaCA9IF9hLnJldmVyc2UsIHJldmVyc2UgPSBfaCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfaCwgX2ogPSBfYS5zaG93X3BheWVyLCBzaG93X3BheWVyID0gX2ogPT09IHZvaWQgMCA/IGZhbHNlIDogX2o7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9rKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9rLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKCcvdjEvY2hhaW4vZ2V0X3RhYmxlX3Jvd3MnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uOiBqc29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlOiB0YWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VyX2JvdW5kOiBsb3dlcl9ib3VuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyX2JvdW5kOiB1cHBlcl9ib3VuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4X3Bvc2l0aW9uOiBpbmRleF9wb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleV90eXBlOiBrZXlfdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBsaW1pdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2U6IHJldmVyc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93X3BheWVyOiBzaG93X3BheWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2suc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2t2X3RhYmxlX3Jvd3NgICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5nZXRfa3ZfdGFibGVfcm93cyA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBfYiA9IF9hLmpzb24sIGpzb24gPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBjb2RlID0gX2EuY29kZSwgdGFibGUgPSBfYS50YWJsZSwgaW5kZXhfbmFtZSA9IF9hLmluZGV4X25hbWUsIF9jID0gX2EuZW5jb2RlX3R5cGUsIGVuY29kZV90eXBlID0gX2MgPT09IHZvaWQgMCA/ICdieXRlcycgOiBfYywgaW5kZXhfdmFsdWUgPSBfYS5pbmRleF92YWx1ZSwgbG93ZXJfYm91bmQgPSBfYS5sb3dlcl9ib3VuZCwgdXBwZXJfYm91bmQgPSBfYS51cHBlcl9ib3VuZCwgX2QgPSBfYS5saW1pdCwgbGltaXQgPSBfZCA9PT0gdm9pZCAwID8gMTAgOiBfZCwgX2UgPSBfYS5yZXZlcnNlLCByZXZlcnNlID0gX2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX2UsIF9mID0gX2Euc2hvd19wYXllciwgc2hvd19wYXllciA9IF9mID09PSB2b2lkIDAgPyBmYWxzZSA6IF9mO1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaCgnL3YxL2NoYWluL2dldF9rdl90YWJsZV9yb3dzJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbjoganNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTogdGFibGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleF9uYW1lOiBpbmRleF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlX3R5cGU6IGVuY29kZV90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfdmFsdWU6IGluZGV4X3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXJfYm91bmQ6IGxvd2VyX2JvdW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXJfYm91bmQ6IHVwcGVyX2JvdW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGxpbWl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZTogcmV2ZXJzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfcGF5ZXI6IHNob3dfcGF5ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfZy5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfdGFibGVfYnlfc2NvcGVgICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5nZXRfdGFibGVfYnlfc2NvcGUgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgY29kZSA9IF9hLmNvZGUsIHRhYmxlID0gX2EudGFibGUsIF9iID0gX2EubG93ZXJfYm91bmQsIGxvd2VyX2JvdW5kID0gX2IgPT09IHZvaWQgMCA/ICcnIDogX2IsIF9jID0gX2EudXBwZXJfYm91bmQsIHVwcGVyX2JvdW5kID0gX2MgPT09IHZvaWQgMCA/ICcnIDogX2MsIF9kID0gX2EubGltaXQsIGxpbWl0ID0gX2QgPT09IHZvaWQgMCA/IDEwIDogX2Q7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9lKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9lLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKCcvdjEvY2hhaW4vZ2V0X3RhYmxlX2J5X3Njb3BlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlOiB0YWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VyX2JvdW5kOiBsb3dlcl9ib3VuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyX2JvdW5kOiB1cHBlcl9ib3VuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBsaW1pdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9lLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBHZXQgc3Vic2V0IG9mIGBhdmFpbGFibGVLZXlzYCBuZWVkZWQgdG8gbWVldCBhdXRob3JpdGllcyBpbiBgdHJhbnNhY3Rpb25gLiBJbXBsZW1lbnRzIGBBdXRob3JpdHlQcm92aWRlcmAgKi9cclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldFJlcXVpcmVkS2V5cyA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZW9zanNfbnVtZXJpY18xLmNvbnZlcnRMZWdhY3lQdWJsaWNLZXlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKCcvdjEvY2hhaW4vZ2V0X3JlcXVpcmVkX2tleXMnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb246IGFyZ3MudHJhbnNhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlX2tleXM6IGFyZ3MuYXZhaWxhYmxlS2V5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5hcHBseSh2b2lkIDAsIFsoX2Iuc2VudCgpKS5yZXF1aXJlZF9rZXlzXSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUHVzaCBhIHNlcmlhbGl6ZWQgdHJhbnNhY3Rpb24gKHJlcGxhY2VkIGJ5IHNlbmRfdHJhbnNhY3Rpb24sIGJ1dCByZXR1cm5lZCBmb3JtYXQgaGFzIGNoYW5nZWQpICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5wdXNoX3RyYW5zYWN0aW9uID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIHNpZ25hdHVyZXMgPSBfYS5zaWduYXR1cmVzLCBfYiA9IF9hLmNvbXByZXNzaW9uLCBjb21wcmVzc2lvbiA9IF9iID09PSB2b2lkIDAgPyAwIDogX2IsIHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiA9IF9hLnNlcmlhbGl6ZWRUcmFuc2FjdGlvbiwgc2VyaWFsaXplZENvbnRleHRGcmVlRGF0YSA9IF9hLnNlcmlhbGl6ZWRDb250ZXh0RnJlZURhdGE7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKCcvdjEvY2hhaW4vcHVzaF90cmFuc2FjdGlvbicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZXM6IHNpZ25hdHVyZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcmVzc2lvbjogY29tcHJlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWNrZWRfY29udGV4dF9mcmVlX2RhdGE6IGFycmF5VG9IZXgoc2VyaWFsaXplZENvbnRleHRGcmVlRGF0YSB8fCBuZXcgVWludDhBcnJheSgwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWNrZWRfdHJ4OiBhcnJheVRvSGV4KHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYy5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9wdXNoX3JvX3RyYW5zYWN0aW9uICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5wdXNoX3JvX3RyYW5zYWN0aW9uID0gZnVuY3Rpb24gKF9hLCByZXR1cm5GYWlsdXJlVHJhY2VzKSB7XHJcbiAgICAgICAgdmFyIHNpZ25hdHVyZXMgPSBfYS5zaWduYXR1cmVzLCBfYiA9IF9hLmNvbXByZXNzaW9uLCBjb21wcmVzc2lvbiA9IF9iID09PSB2b2lkIDAgPyAwIDogX2IsIHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiA9IF9hLnNlcmlhbGl6ZWRUcmFuc2FjdGlvbjtcclxuICAgICAgICBpZiAocmV0dXJuRmFpbHVyZVRyYWNlcyA9PT0gdm9pZCAwKSB7IHJldHVybkZhaWx1cmVUcmFjZXMgPSBmYWxzZTsgfVxyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaCgnL3YxL2NoYWluL3B1c2hfcm9fdHJhbnNhY3Rpb24nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZXM6IHNpZ25hdHVyZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJlc3Npb246IGNvbXByZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhY2tlZF9jb250ZXh0X2ZyZWVfZGF0YTogYXJyYXlUb0hleChuZXcgVWludDhBcnJheSgwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFja2VkX3RyeDogYXJyYXlUb0hleChzZXJpYWxpemVkVHJhbnNhY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybl9mYWlsdXJlX3RyYWNlczogcmV0dXJuRmFpbHVyZVRyYWNlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9jLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEpzb25ScGMucHJvdG90eXBlLnB1c2hfdHJhbnNhY3Rpb25zID0gZnVuY3Rpb24gKHRyYW5zYWN0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBhY2tlZFRyeHM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhY2tlZFRyeHMgPSB0cmFuc2FjdGlvbnMubWFwKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNpZ25hdHVyZXMgPSBfYS5zaWduYXR1cmVzLCBfYiA9IF9hLmNvbXByZXNzaW9uLCBjb21wcmVzc2lvbiA9IF9iID09PSB2b2lkIDAgPyAwIDogX2IsIHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiA9IF9hLnNlcmlhbGl6ZWRUcmFuc2FjdGlvbiwgc2VyaWFsaXplZENvbnRleHRGcmVlRGF0YSA9IF9hLnNlcmlhbGl6ZWRDb250ZXh0RnJlZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZXM6IHNpZ25hdHVyZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJlc3Npb246IGNvbXByZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhY2tlZF9jb250ZXh0X2ZyZWVfZGF0YTogYXJyYXlUb0hleChzZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhIHx8IG5ldyBVaW50OEFycmF5KDApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWNrZWRfdHJ4OiBhcnJheVRvSGV4KHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaCgnL3YxL2NoYWluL3B1c2hfdHJhbnNhY3Rpb25zJywgcGFja2VkVHJ4cyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBTZW5kIGEgc2VyaWFsaXplZCB0cmFuc2FjdGlvbiAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuc2VuZF90cmFuc2FjdGlvbiA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBzaWduYXR1cmVzID0gX2Euc2lnbmF0dXJlcywgX2IgPSBfYS5jb21wcmVzc2lvbiwgY29tcHJlc3Npb24gPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLCBzZXJpYWxpemVkVHJhbnNhY3Rpb24gPSBfYS5zZXJpYWxpemVkVHJhbnNhY3Rpb24sIHNlcmlhbGl6ZWRDb250ZXh0RnJlZURhdGEgPSBfYS5zZXJpYWxpemVkQ29udGV4dEZyZWVEYXRhO1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaCgnL3YxL2NoYWluL3NlbmRfdHJhbnNhY3Rpb24nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmVzOiBzaWduYXR1cmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJlc3Npb246IGNvbXByZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFja2VkX2NvbnRleHRfZnJlZV9kYXRhOiBhcnJheVRvSGV4KHNlcmlhbGl6ZWRDb250ZXh0RnJlZURhdGEgfHwgbmV3IFVpbnQ4QXJyYXkoMCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFja2VkX3RyeDogYXJyYXlUb0hleChzZXJpYWxpemVkVHJhbnNhY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Muc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvZGJfc2l6ZS9nZXRgICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5kYl9zaXplX2dldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKCcvdjEvZGJfc2l6ZS9nZXQnLCB7fSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS90cmFjZV9hcGkvZ2V0X2Jsb2NrYCAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUudHJhY2VfZ2V0X2Jsb2NrID0gZnVuY3Rpb24gKGJsb2NrX251bSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaCgnL3YxL3RyYWNlX2FwaS9nZXRfYmxvY2snLCB7IGJsb2NrX251bTogYmxvY2tfbnVtIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9oaXN0b3J5L2dldF9hY3Rpb25zYCAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuaGlzdG9yeV9nZXRfYWN0aW9ucyA9IGZ1bmN0aW9uIChhY2NvdW50TmFtZSwgcG9zLCBvZmZzZXQpIHtcclxuICAgICAgICBpZiAocG9zID09PSB2b2lkIDApIHsgcG9zID0gbnVsbDsgfVxyXG4gICAgICAgIGlmIChvZmZzZXQgPT09IHZvaWQgMCkgeyBvZmZzZXQgPSBudWxsOyB9XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKCcvdjEvaGlzdG9yeS9nZXRfYWN0aW9ucycsIHsgYWNjb3VudF9uYW1lOiBhY2NvdW50TmFtZSwgcG9zOiBwb3MsIG9mZnNldDogb2Zmc2V0IH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9oaXN0b3J5L2dldF90cmFuc2FjdGlvbmAgKi9cclxuICAgIEpzb25ScGMucHJvdG90eXBlLmhpc3RvcnlfZ2V0X3RyYW5zYWN0aW9uID0gZnVuY3Rpb24gKGlkLCBibG9ja051bUhpbnQpIHtcclxuICAgICAgICBpZiAoYmxvY2tOdW1IaW50ID09PSB2b2lkIDApIHsgYmxvY2tOdW1IaW50ID0gbnVsbDsgfVxyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaCgnL3YxL2hpc3RvcnkvZ2V0X3RyYW5zYWN0aW9uJywgeyBpZDogaWQsIGJsb2NrX251bV9oaW50OiBibG9ja051bUhpbnQgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2hpc3RvcnkvZ2V0X2tleV9hY2NvdW50c2AgKi9cclxuICAgIEpzb25ScGMucHJvdG90eXBlLmhpc3RvcnlfZ2V0X2tleV9hY2NvdW50cyA9IGZ1bmN0aW9uIChwdWJsaWNLZXkpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goJy92MS9oaXN0b3J5L2dldF9rZXlfYWNjb3VudHMnLCB7IHB1YmxpY19rZXk6IHB1YmxpY0tleSB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvaGlzdG9yeS9nZXRfY29udHJvbGxlZF9hY2NvdW50c2AgKi9cclxuICAgIEpzb25ScGMucHJvdG90eXBlLmhpc3RvcnlfZ2V0X2NvbnRyb2xsZWRfYWNjb3VudHMgPSBmdW5jdGlvbiAoY29udHJvbGxpbmdBY2NvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKCcvdjEvaGlzdG9yeS9nZXRfY29udHJvbGxlZF9hY2NvdW50cycsIHsgY29udHJvbGxpbmdfYWNjb3VudDogY29udHJvbGxpbmdBY2NvdW50IH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSnNvblJwYztcclxufSgpKTsgLy8gSnNvblJwY1xyXG5leHBvcnRzLkpzb25ScGMgPSBKc29uUnBjO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn07XHJcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2lnbmF0dXJlVG9TdHJpbmcgPSBleHBvcnRzLnN0cmluZ1RvU2lnbmF0dXJlID0gZXhwb3J0cy5wcml2YXRlS2V5VG9TdHJpbmcgPSBleHBvcnRzLnByaXZhdGVLZXlUb0xlZ2FjeVN0cmluZyA9IGV4cG9ydHMuc3RyaW5nVG9Qcml2YXRlS2V5ID0gZXhwb3J0cy5jb252ZXJ0TGVnYWN5UHVibGljS2V5cyA9IGV4cG9ydHMuY29udmVydExlZ2FjeVB1YmxpY0tleSA9IGV4cG9ydHMucHVibGljS2V5VG9TdHJpbmcgPSBleHBvcnRzLnB1YmxpY0tleVRvTGVnYWN5U3RyaW5nID0gZXhwb3J0cy5zdHJpbmdUb1B1YmxpY0tleSA9IGV4cG9ydHMuc2lnbmF0dXJlRGF0YVNpemUgPSBleHBvcnRzLnByaXZhdGVLZXlEYXRhU2l6ZSA9IGV4cG9ydHMucHVibGljS2V5RGF0YVNpemUgPSBleHBvcnRzLktleVR5cGUgPSBleHBvcnRzLmJhc2U2NFRvQmluYXJ5ID0gZXhwb3J0cy5iaW5hcnlUb0Jhc2U1OCA9IGV4cG9ydHMuYmFzZTU4VG9CaW5hcnkgPSBleHBvcnRzLnNpZ25lZEJpbmFyeVRvRGVjaW1hbCA9IGV4cG9ydHMuYmluYXJ5VG9EZWNpbWFsID0gZXhwb3J0cy5zaWduZWREZWNpbWFsVG9CaW5hcnkgPSBleHBvcnRzLmRlY2ltYWxUb0JpbmFyeSA9IGV4cG9ydHMubmVnYXRlID0gZXhwb3J0cy5pc05lZ2F0aXZlID0gdm9pZCAwO1xyXG4vKipcclxuICogQG1vZHVsZSBOdW1lcmljXHJcbiAqL1xyXG52YXIgaGFzaF9qc18xID0gcmVxdWlyZShcImhhc2guanNcIik7XHJcbi8vIGNvcHlyaWdodCBkZWZpbmVkIGluIGVvc2pzL0xJQ0VOU0UudHh0XHJcbnZhciByaXBlbWQxNjAgPSByZXF1aXJlKCcuL3JpcGVtZCcpLlJJUEVNRDE2MC5oYXNoO1xyXG52YXIgYmFzZTU4Q2hhcnMgPSAnMTIzNDU2Nzg5QUJDREVGR0hKS0xNTlBRUlNUVVZXWFlaYWJjZGVmZ2hpamttbm9wcXJzdHV2d3h5eic7XHJcbnZhciBiYXNlNjRDaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcclxudmFyIGNyZWF0ZV9iYXNlNThfbWFwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGJhc2U1OE0gPSBBcnJheSgyNTYpLmZpbGwoLTEpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiYXNlNThDaGFycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGJhc2U1OE1bYmFzZTU4Q2hhcnMuY2hhckNvZGVBdChpKV0gPSBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJhc2U1OE07XHJcbn07XHJcbnZhciBiYXNlNThNYXAgPSBjcmVhdGVfYmFzZTU4X21hcCgpO1xyXG52YXIgY3JlYXRlX2Jhc2U2NF9tYXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYmFzZTY0TSA9IEFycmF5KDI1NikuZmlsbCgtMSk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhc2U2NENoYXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgYmFzZTY0TVtiYXNlNjRDaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7XHJcbiAgICB9XHJcbiAgICBiYXNlNjRNWyc9Jy5jaGFyQ29kZUF0KDApXSA9IDA7XHJcbiAgICByZXR1cm4gYmFzZTY0TTtcclxufTtcclxudmFyIGJhc2U2NE1hcCA9IGNyZWF0ZV9iYXNlNjRfbWFwKCk7XHJcbi8qKiBJcyBgYmlnbnVtYCBhIG5lZ2F0aXZlIG51bWJlcj8gKi9cclxudmFyIGlzTmVnYXRpdmUgPSBmdW5jdGlvbiAoYmlnbnVtKSB7XHJcbiAgICByZXR1cm4gKGJpZ251bVtiaWdudW0ubGVuZ3RoIC0gMV0gJiAweDgwKSAhPT0gMDtcclxufTtcclxuZXhwb3J0cy5pc05lZ2F0aXZlID0gaXNOZWdhdGl2ZTtcclxuLyoqIE5lZ2F0ZSBgYmlnbnVtYCAqL1xyXG52YXIgbmVnYXRlID0gZnVuY3Rpb24gKGJpZ251bSkge1xyXG4gICAgdmFyIGNhcnJ5ID0gMTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmlnbnVtLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgdmFyIHggPSAofmJpZ251bVtpXSAmIDB4ZmYpICsgY2Fycnk7XHJcbiAgICAgICAgYmlnbnVtW2ldID0geDtcclxuICAgICAgICBjYXJyeSA9IHggPj4gODtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5uZWdhdGUgPSBuZWdhdGU7XHJcbi8qKlxyXG4gKiBDb252ZXJ0IGFuIHVuc2lnbmVkIGRlY2ltYWwgbnVtYmVyIGluIGBzYCB0byBhIGJpZ251bVxyXG4gKlxyXG4gKiBAcGFyYW0gc2l6ZSBiaWdudW0gc2l6ZSAoYnl0ZXMpXHJcbiAqL1xyXG52YXIgZGVjaW1hbFRvQmluYXJ5ID0gZnVuY3Rpb24gKHNpemUsIHMpIHtcclxuICAgIHZhciByZXN1bHQgPSBuZXcgVWludDhBcnJheShzaXplKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHZhciBzcmNEaWdpdCA9IHMuY2hhckNvZGVBdChpKTtcclxuICAgICAgICBpZiAoc3JjRGlnaXQgPCAnMCcuY2hhckNvZGVBdCgwKSB8fCBzcmNEaWdpdCA+ICc5Jy5jaGFyQ29kZUF0KDApKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBudW1iZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNhcnJ5ID0gc3JjRGlnaXQgLSAnMCcuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7ICsraikge1xyXG4gICAgICAgICAgICB2YXIgeCA9IHJlc3VsdFtqXSAqIDEwICsgY2Fycnk7XHJcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IHg7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0geCA+PiA4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FycnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdudW1iZXIgaXMgb3V0IG9mIHJhbmdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuZXhwb3J0cy5kZWNpbWFsVG9CaW5hcnkgPSBkZWNpbWFsVG9CaW5hcnk7XHJcbi8qKlxyXG4gKiBDb252ZXJ0IGEgc2lnbmVkIGRlY2ltYWwgbnVtYmVyIGluIGBzYCB0byBhIGJpZ251bVxyXG4gKlxyXG4gKiBAcGFyYW0gc2l6ZSBiaWdudW0gc2l6ZSAoYnl0ZXMpXHJcbiAqL1xyXG52YXIgc2lnbmVkRGVjaW1hbFRvQmluYXJ5ID0gZnVuY3Rpb24gKHNpemUsIHMpIHtcclxuICAgIHZhciBuZWdhdGl2ZSA9IHNbMF0gPT09ICctJztcclxuICAgIGlmIChuZWdhdGl2ZSkge1xyXG4gICAgICAgIHMgPSBzLnN1YnN0cigxKTtcclxuICAgIH1cclxuICAgIHZhciByZXN1bHQgPSBleHBvcnRzLmRlY2ltYWxUb0JpbmFyeShzaXplLCBzKTtcclxuICAgIGlmIChuZWdhdGl2ZSkge1xyXG4gICAgICAgIGV4cG9ydHMubmVnYXRlKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKCFleHBvcnRzLmlzTmVnYXRpdmUocmVzdWx0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ251bWJlciBpcyBvdXQgb2YgcmFuZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChleHBvcnRzLmlzTmVnYXRpdmUocmVzdWx0KSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbnVtYmVyIGlzIG91dCBvZiByYW5nZScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuZXhwb3J0cy5zaWduZWREZWNpbWFsVG9CaW5hcnkgPSBzaWduZWREZWNpbWFsVG9CaW5hcnk7XHJcbi8qKlxyXG4gKiBDb252ZXJ0IGBiaWdudW1gIHRvIGFuIHVuc2lnbmVkIGRlY2ltYWwgbnVtYmVyXHJcbiAqXHJcbiAqIEBwYXJhbSBtaW5EaWdpdHMgMC1wYWQgcmVzdWx0IHRvIHRoaXMgbWFueSBkaWdpdHNcclxuICovXHJcbnZhciBiaW5hcnlUb0RlY2ltYWwgPSBmdW5jdGlvbiAoYmlnbnVtLCBtaW5EaWdpdHMpIHtcclxuICAgIGlmIChtaW5EaWdpdHMgPT09IHZvaWQgMCkgeyBtaW5EaWdpdHMgPSAxOyB9XHJcbiAgICB2YXIgcmVzdWx0ID0gQXJyYXkobWluRGlnaXRzKS5maWxsKCcwJy5jaGFyQ29kZUF0KDApKTtcclxuICAgIGZvciAodmFyIGkgPSBiaWdudW0ubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgY2FycnkgPSBiaWdudW1baV07XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZXN1bHQubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgdmFyIHggPSAoKHJlc3VsdFtqXSAtICcwJy5jaGFyQ29kZUF0KDApKSA8PCA4KSArIGNhcnJ5O1xyXG4gICAgICAgICAgICByZXN1bHRbal0gPSAnMCcuY2hhckNvZGVBdCgwKSArIHggJSAxMDtcclxuICAgICAgICAgICAgY2FycnkgPSAoeCAvIDEwKSB8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChjYXJyeSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCgnMCcuY2hhckNvZGVBdCgwKSArIGNhcnJ5ICUgMTApO1xyXG4gICAgICAgICAgICBjYXJyeSA9IChjYXJyeSAvIDEwKSB8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0LnJldmVyc2UoKTtcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgX19zcHJlYWRBcnJheShbXSwgX19yZWFkKHJlc3VsdCkpKTtcclxufTtcclxuZXhwb3J0cy5iaW5hcnlUb0RlY2ltYWwgPSBiaW5hcnlUb0RlY2ltYWw7XHJcbi8qKlxyXG4gKiBDb252ZXJ0IGBiaWdudW1gIHRvIGEgc2lnbmVkIGRlY2ltYWwgbnVtYmVyXHJcbiAqXHJcbiAqIEBwYXJhbSBtaW5EaWdpdHMgMC1wYWQgcmVzdWx0IHRvIHRoaXMgbWFueSBkaWdpdHNcclxuICovXHJcbnZhciBzaWduZWRCaW5hcnlUb0RlY2ltYWwgPSBmdW5jdGlvbiAoYmlnbnVtLCBtaW5EaWdpdHMpIHtcclxuICAgIGlmIChtaW5EaWdpdHMgPT09IHZvaWQgMCkgeyBtaW5EaWdpdHMgPSAxOyB9XHJcbiAgICBpZiAoZXhwb3J0cy5pc05lZ2F0aXZlKGJpZ251bSkpIHtcclxuICAgICAgICB2YXIgeCA9IGJpZ251bS5zbGljZSgpO1xyXG4gICAgICAgIGV4cG9ydHMubmVnYXRlKHgpO1xyXG4gICAgICAgIHJldHVybiAnLScgKyBleHBvcnRzLmJpbmFyeVRvRGVjaW1hbCh4LCBtaW5EaWdpdHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4cG9ydHMuYmluYXJ5VG9EZWNpbWFsKGJpZ251bSwgbWluRGlnaXRzKTtcclxufTtcclxuZXhwb3J0cy5zaWduZWRCaW5hcnlUb0RlY2ltYWwgPSBzaWduZWRCaW5hcnlUb0RlY2ltYWw7XHJcbnZhciBiYXNlNThUb0JpbmFyeVZhclNpemUgPSBmdW5jdGlvbiAocykge1xyXG4gICAgdmFyIGVfMSwgX2E7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICB2YXIgY2FycnkgPSBiYXNlNThNYXBbcy5jaGFyQ29kZUF0KGkpXTtcclxuICAgICAgICBpZiAoY2FycnkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBiYXNlLTU4IHZhbHVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVzdWx0Lmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gcmVzdWx0W2pdICogNTggKyBjYXJyeTtcclxuICAgICAgICAgICAgcmVzdWx0W2pdID0geCAmIDB4ZmY7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0geCA+PiA4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FycnkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY2FycnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yICh2YXIgc18xID0gX192YWx1ZXMocyksIHNfMV8xID0gc18xLm5leHQoKTsgIXNfMV8xLmRvbmU7IHNfMV8xID0gc18xLm5leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSBzXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKGNoID09PSAnMScpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHNfMV8xICYmICFzXzFfMS5kb25lICYmIChfYSA9IHNfMS5yZXR1cm4pKSBfYS5jYWxsKHNfMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJlc3VsdC5yZXZlcnNlKCk7XHJcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkocmVzdWx0KTtcclxufTtcclxuLyoqXHJcbiAqIENvbnZlcnQgYW4gdW5zaWduZWQgYmFzZS01OCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtXHJcbiAqXHJcbiAqIEBwYXJhbSBzaXplIGJpZ251bSBzaXplIChieXRlcylcclxuICovXHJcbnZhciBiYXNlNThUb0JpbmFyeSA9IGZ1bmN0aW9uIChzaXplLCBzKSB7XHJcbiAgICBpZiAoIXNpemUpIHtcclxuICAgICAgICByZXR1cm4gYmFzZTU4VG9CaW5hcnlWYXJTaXplKHMpO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgdmFyIGNhcnJ5ID0gYmFzZTU4TWFwW3MuY2hhckNvZGVBdChpKV07XHJcbiAgICAgICAgaWYgKGNhcnJ5IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYmFzZS01OCB2YWx1ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7ICsraikge1xyXG4gICAgICAgICAgICB2YXIgeCA9IHJlc3VsdFtqXSAqIDU4ICsgY2Fycnk7XHJcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IHg7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0geCA+PiA4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FycnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdiYXNlLTU4IHZhbHVlIGlzIG91dCBvZiByYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc3VsdC5yZXZlcnNlKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5leHBvcnRzLmJhc2U1OFRvQmluYXJ5ID0gYmFzZTU4VG9CaW5hcnk7XHJcbi8qKlxyXG4gKiBDb252ZXJ0IGBiaWdudW1gIHRvIGEgYmFzZS01OCBudW1iZXJcclxuICpcclxuICogQHBhcmFtIG1pbkRpZ2l0cyAwLXBhZCByZXN1bHQgdG8gdGhpcyBtYW55IGRpZ2l0c1xyXG4gKi9cclxudmFyIGJpbmFyeVRvQmFzZTU4ID0gZnVuY3Rpb24gKGJpZ251bSwgbWluRGlnaXRzKSB7XHJcbiAgICB2YXIgZV8yLCBfYSwgZV8zLCBfYjtcclxuICAgIGlmIChtaW5EaWdpdHMgPT09IHZvaWQgMCkgeyBtaW5EaWdpdHMgPSAxOyB9XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIGJpZ251bV8xID0gX192YWx1ZXMoYmlnbnVtKSwgYmlnbnVtXzFfMSA9IGJpZ251bV8xLm5leHQoKTsgIWJpZ251bV8xXzEuZG9uZTsgYmlnbnVtXzFfMSA9IGJpZ251bV8xLm5leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIgYnl0ZSA9IGJpZ251bV8xXzEudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBjYXJyeSA9IGJ5dGU7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVzdWx0Lmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IChiYXNlNThNYXBbcmVzdWx0W2pdXSA8PCA4KSArIGNhcnJ5O1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2pdID0gYmFzZTU4Q2hhcnMuY2hhckNvZGVBdCh4ICUgNTgpO1xyXG4gICAgICAgICAgICAgICAgY2FycnkgPSAoeCAvIDU4KSB8IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2hpbGUgKGNhcnJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChiYXNlNThDaGFycy5jaGFyQ29kZUF0KGNhcnJ5ICUgNTgpKTtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gNTgpIHwgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoYmlnbnVtXzFfMSAmJiAhYmlnbnVtXzFfMS5kb25lICYmIChfYSA9IGJpZ251bV8xLnJldHVybikpIF9hLmNhbGwoYmlnbnVtXzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIGJpZ251bV8yID0gX192YWx1ZXMoYmlnbnVtKSwgYmlnbnVtXzJfMSA9IGJpZ251bV8yLm5leHQoKTsgIWJpZ251bV8yXzEuZG9uZTsgYmlnbnVtXzJfMSA9IGJpZ251bV8yLm5leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIgYnl0ZSA9IGJpZ251bV8yXzEudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChieXRlKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKCcxJy5jaGFyQ29kZUF0KDApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlXzNfMSkgeyBlXzMgPSB7IGVycm9yOiBlXzNfMSB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoYmlnbnVtXzJfMSAmJiAhYmlnbnVtXzJfMS5kb25lICYmIChfYiA9IGJpZ251bV8yLnJldHVybikpIF9iLmNhbGwoYmlnbnVtXzIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXN1bHQucmV2ZXJzZSgpO1xyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQocmVzdWx0KSkpO1xyXG59O1xyXG5leHBvcnRzLmJpbmFyeVRvQmFzZTU4ID0gYmluYXJ5VG9CYXNlNTg7XHJcbi8qKiBDb252ZXJ0IGFuIHVuc2lnbmVkIGJhc2UtNjQgbnVtYmVyIGluIGBzYCB0byBhIGJpZ251bSAqL1xyXG52YXIgYmFzZTY0VG9CaW5hcnkgPSBmdW5jdGlvbiAocykge1xyXG4gICAgdmFyIGxlbiA9IHMubGVuZ3RoO1xyXG4gICAgaWYgKChsZW4gJiAzKSA9PT0gMSAmJiBzW2xlbiAtIDFdID09PSAnPScpIHtcclxuICAgICAgICBsZW4gLT0gMTtcclxuICAgIH0gLy8gZmMgYXBwZW5kcyBhbiBleHRyYSAnPSdcclxuICAgIGlmICgobGVuICYgMykgIT09IDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Jhc2UtNjQgdmFsdWUgaXMgbm90IHBhZGRlZCBjb3JyZWN0bHknKTtcclxuICAgIH1cclxuICAgIHZhciBncm91cHMgPSBsZW4gPj4gMjtcclxuICAgIHZhciBieXRlcyA9IGdyb3VwcyAqIDM7XHJcbiAgICBpZiAobGVuID4gMCAmJiBzW2xlbiAtIDFdID09PSAnPScpIHtcclxuICAgICAgICBpZiAoc1tsZW4gLSAyXSA9PT0gJz0nKSB7XHJcbiAgICAgICAgICAgIGJ5dGVzIC09IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBieXRlcyAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciByZXN1bHQgPSBuZXcgVWludDhBcnJheShieXRlcyk7XHJcbiAgICBmb3IgKHZhciBncm91cCA9IDA7IGdyb3VwIDwgZ3JvdXBzOyArK2dyb3VwKSB7XHJcbiAgICAgICAgdmFyIGRpZ2l0MCA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMCldO1xyXG4gICAgICAgIHZhciBkaWdpdDEgPSBiYXNlNjRNYXBbcy5jaGFyQ29kZUF0KGdyb3VwICogNCArIDEpXTtcclxuICAgICAgICB2YXIgZGlnaXQyID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAyKV07XHJcbiAgICAgICAgdmFyIGRpZ2l0MyA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMyldO1xyXG4gICAgICAgIHJlc3VsdFtncm91cCAqIDMgKyAwXSA9IChkaWdpdDAgPDwgMikgfCAoZGlnaXQxID4+IDQpO1xyXG4gICAgICAgIGlmIChncm91cCAqIDMgKyAxIDwgYnl0ZXMpIHtcclxuICAgICAgICAgICAgcmVzdWx0W2dyb3VwICogMyArIDFdID0gKChkaWdpdDEgJiAxNSkgPDwgNCkgfCAoZGlnaXQyID4+IDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JvdXAgKiAzICsgMiA8IGJ5dGVzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtncm91cCAqIDMgKyAyXSA9ICgoZGlnaXQyICYgMykgPDwgNikgfCBkaWdpdDM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuZXhwb3J0cy5iYXNlNjRUb0JpbmFyeSA9IGJhc2U2NFRvQmluYXJ5O1xyXG4vKiogS2V5IHR5cGVzIHRoaXMgbGlicmFyeSBzdXBwb3J0cyAqL1xyXG52YXIgS2V5VHlwZTtcclxuKGZ1bmN0aW9uIChLZXlUeXBlKSB7XHJcbiAgICBLZXlUeXBlW0tleVR5cGVbXCJrMVwiXSA9IDBdID0gXCJrMVwiO1xyXG4gICAgS2V5VHlwZVtLZXlUeXBlW1wicjFcIl0gPSAxXSA9IFwicjFcIjtcclxuICAgIEtleVR5cGVbS2V5VHlwZVtcIndhXCJdID0gMl0gPSBcIndhXCI7XHJcbn0pKEtleVR5cGUgPSBleHBvcnRzLktleVR5cGUgfHwgKGV4cG9ydHMuS2V5VHlwZSA9IHt9KSk7XHJcbi8qKiBQdWJsaWMga2V5IGRhdGEgc2l6ZSwgZXhjbHVkaW5nIHR5cGUgZmllbGQgKi9cclxuZXhwb3J0cy5wdWJsaWNLZXlEYXRhU2l6ZSA9IDMzO1xyXG4vKiogUHJpdmF0ZSBrZXkgZGF0YSBzaXplLCBleGNsdWRpbmcgdHlwZSBmaWVsZCAqL1xyXG5leHBvcnRzLnByaXZhdGVLZXlEYXRhU2l6ZSA9IDMyO1xyXG4vKiogU2lnbmF0dXJlIGRhdGEgc2l6ZSwgZXhjbHVkaW5nIHR5cGUgZmllbGQgKi9cclxuZXhwb3J0cy5zaWduYXR1cmVEYXRhU2l6ZSA9IDY1O1xyXG52YXIgZGlnZXN0U3VmZml4UmlwZW1kMTYwID0gZnVuY3Rpb24gKGRhdGEsIHN1ZmZpeCkge1xyXG4gICAgdmFyIGQgPSBuZXcgVWludDhBcnJheShkYXRhLmxlbmd0aCArIHN1ZmZpeC5sZW5ndGgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgZFtpXSA9IGRhdGFbaV07XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1ZmZpeC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGRbZGF0YS5sZW5ndGggKyBpXSA9IHN1ZmZpeC5jaGFyQ29kZUF0KGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJpcGVtZDE2MChkKTtcclxufTtcclxudmFyIHN0cmluZ1RvS2V5ID0gZnVuY3Rpb24gKHMsIHR5cGUsIHNpemUsIHN1ZmZpeCkge1xyXG4gICAgdmFyIHdob2xlID0gZXhwb3J0cy5iYXNlNThUb0JpbmFyeShzaXplID8gc2l6ZSArIDQgOiAwLCBzKTtcclxuICAgIHZhciByZXN1bHQgPSB7IHR5cGU6IHR5cGUsIGRhdGE6IG5ldyBVaW50OEFycmF5KHdob2xlLmJ1ZmZlciwgMCwgd2hvbGUubGVuZ3RoIC0gNCkgfTtcclxuICAgIHZhciBkaWdlc3QgPSBuZXcgVWludDhBcnJheShkaWdlc3RTdWZmaXhSaXBlbWQxNjAocmVzdWx0LmRhdGEsIHN1ZmZpeCkpO1xyXG4gICAgaWYgKGRpZ2VzdFswXSAhPT0gd2hvbGVbd2hvbGUubGVuZ3RoIC0gNF0gfHwgZGlnZXN0WzFdICE9PSB3aG9sZVt3aG9sZS5sZW5ndGggLSAzXVxyXG4gICAgICAgIHx8IGRpZ2VzdFsyXSAhPT0gd2hvbGVbd2hvbGUubGVuZ3RoIC0gMl0gfHwgZGlnZXN0WzNdICE9PSB3aG9sZVt3aG9sZS5sZW5ndGggLSAxXSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2hlY2tzdW0gZG9lc25cXCd0IG1hdGNoJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIga2V5VG9TdHJpbmcgPSBmdW5jdGlvbiAoa2V5LCBzdWZmaXgsIHByZWZpeCkge1xyXG4gICAgdmFyIGRpZ2VzdCA9IG5ldyBVaW50OEFycmF5KGRpZ2VzdFN1ZmZpeFJpcGVtZDE2MChrZXkuZGF0YSwgc3VmZml4KSk7XHJcbiAgICB2YXIgd2hvbGUgPSBuZXcgVWludDhBcnJheShrZXkuZGF0YS5sZW5ndGggKyA0KTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5LmRhdGEubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICB3aG9sZVtpXSA9IGtleS5kYXRhW2ldO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuICAgICAgICB3aG9sZVtpICsga2V5LmRhdGEubGVuZ3RoXSA9IGRpZ2VzdFtpXTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcmVmaXggKyBleHBvcnRzLmJpbmFyeVRvQmFzZTU4KHdob2xlKTtcclxufTtcclxuLyoqIENvbnZlcnQga2V5IGluIGBzYCB0byBiaW5hcnkgZm9ybSAqL1xyXG52YXIgc3RyaW5nVG9QdWJsaWNLZXkgPSBmdW5jdGlvbiAocykge1xyXG4gICAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgcHVibGljIGtleScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHMuc3Vic3RyKDAsIDMpID09PSAnRU9TJykge1xyXG4gICAgICAgIHZhciB3aG9sZSA9IGV4cG9ydHMuYmFzZTU4VG9CaW5hcnkoZXhwb3J0cy5wdWJsaWNLZXlEYXRhU2l6ZSArIDQsIHMuc3Vic3RyKDMpKTtcclxuICAgICAgICB2YXIga2V5ID0geyB0eXBlOiBLZXlUeXBlLmsxLCBkYXRhOiBuZXcgVWludDhBcnJheShleHBvcnRzLnB1YmxpY0tleURhdGFTaXplKSB9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwb3J0cy5wdWJsaWNLZXlEYXRhU2l6ZTsgKytpKSB7XHJcbiAgICAgICAgICAgIGtleS5kYXRhW2ldID0gd2hvbGVbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkaWdlc3QgPSBuZXcgVWludDhBcnJheShyaXBlbWQxNjAoa2V5LmRhdGEpKTtcclxuICAgICAgICBpZiAoZGlnZXN0WzBdICE9PSB3aG9sZVtleHBvcnRzLnB1YmxpY0tleURhdGFTaXplXSB8fCBkaWdlc3RbMV0gIT09IHdob2xlWzM0XVxyXG4gICAgICAgICAgICB8fCBkaWdlc3RbMl0gIT09IHdob2xlWzM1XSB8fCBkaWdlc3RbM10gIT09IHdob2xlWzM2XSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NoZWNrc3VtIGRvZXNuXFwndCBtYXRjaCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocy5zdWJzdHIoMCwgNykgPT09ICdQVUJfSzFfJykge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS5rMSwgZXhwb3J0cy5wdWJsaWNLZXlEYXRhU2l6ZSwgJ0sxJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gJ1BVQl9SMV8nKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCBLZXlUeXBlLnIxLCBleHBvcnRzLnB1YmxpY0tleURhdGFTaXplLCAnUjEnKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSAnUFVCX1dBXycpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUud2EsIDAsICdXQScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnJlY29nbml6ZWQgcHVibGljIGtleSBmb3JtYXQnKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5zdHJpbmdUb1B1YmxpY0tleSA9IHN0cmluZ1RvUHVibGljS2V5O1xyXG4vKiogQ29udmVydCBwdWJsaWMgYGtleWAgdG8gbGVnYWN5IHN0cmluZyAoYmFzZS01OCkgZm9ybSAqL1xyXG52YXIgcHVibGljS2V5VG9MZWdhY3lTdHJpbmcgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICBpZiAoa2V5LnR5cGUgPT09IEtleVR5cGUuazEgJiYga2V5LmRhdGEubGVuZ3RoID09PSBleHBvcnRzLnB1YmxpY0tleURhdGFTaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKGtleSwgJycsICdFT1MnKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGtleS50eXBlID09PSBLZXlUeXBlLnIxIHx8IGtleS50eXBlID09PSBLZXlUeXBlLndhKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdLZXkgZm9ybWF0IG5vdCBzdXBwb3J0ZWQgaW4gbGVnYWN5IGNvbnZlcnNpb24nKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5yZWNvZ25pemVkIHB1YmxpYyBrZXkgZm9ybWF0Jyk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMucHVibGljS2V5VG9MZWdhY3lTdHJpbmcgPSBwdWJsaWNLZXlUb0xlZ2FjeVN0cmluZztcclxuLyoqIENvbnZlcnQgYGtleWAgdG8gc3RyaW5nIChiYXNlLTU4KSBmb3JtICovXHJcbnZhciBwdWJsaWNLZXlUb1N0cmluZyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgIGlmIChrZXkudHlwZSA9PT0gS2V5VHlwZS5rMSAmJiBrZXkuZGF0YS5sZW5ndGggPT09IGV4cG9ydHMucHVibGljS2V5RGF0YVNpemUpIHtcclxuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCAnSzEnLCAnUFVCX0sxXycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoa2V5LnR5cGUgPT09IEtleVR5cGUucjEgJiYga2V5LmRhdGEubGVuZ3RoID09PSBleHBvcnRzLnB1YmxpY0tleURhdGFTaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKGtleSwgJ1IxJywgJ1BVQl9SMV8nKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGtleS50eXBlID09PSBLZXlUeXBlLndhKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKGtleSwgJ1dBJywgJ1BVQl9XQV8nKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5yZWNvZ25pemVkIHB1YmxpYyBrZXkgZm9ybWF0Jyk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMucHVibGljS2V5VG9TdHJpbmcgPSBwdWJsaWNLZXlUb1N0cmluZztcclxuLyoqIElmIGEga2V5IGlzIGluIHRoZSBsZWdhY3kgZm9ybWF0IChgRU9TYCBwcmVmaXgpLCB0aGVuIGNvbnZlcnQgaXQgdG8gdGhlIG5ldyBmb3JtYXQgKGBQVUJfSzFfYCkuXHJcbiAqIExlYXZlcyBvdGhlciBmb3JtYXRzIHVudG91Y2hlZFxyXG4gKi9cclxudmFyIGNvbnZlcnRMZWdhY3lQdWJsaWNLZXkgPSBmdW5jdGlvbiAocykge1xyXG4gICAgaWYgKHMuc3Vic3RyKDAsIDMpID09PSAnRU9TJykge1xyXG4gICAgICAgIHJldHVybiBleHBvcnRzLnB1YmxpY0tleVRvU3RyaW5nKGV4cG9ydHMuc3RyaW5nVG9QdWJsaWNLZXkocykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHM7XHJcbn07XHJcbmV4cG9ydHMuY29udmVydExlZ2FjeVB1YmxpY0tleSA9IGNvbnZlcnRMZWdhY3lQdWJsaWNLZXk7XHJcbi8qKiBJZiBhIGtleSBpcyBpbiB0aGUgbGVnYWN5IGZvcm1hdCAoYEVPU2AgcHJlZml4KSwgdGhlbiBjb252ZXJ0IGl0IHRvIHRoZSBuZXcgZm9ybWF0IChgUFVCX0sxX2ApLlxyXG4gKiBMZWF2ZXMgb3RoZXIgZm9ybWF0cyB1bnRvdWNoZWRcclxuICovXHJcbnZhciBjb252ZXJ0TGVnYWN5UHVibGljS2V5cyA9IGZ1bmN0aW9uIChrZXlzKSB7XHJcbiAgICByZXR1cm4ga2V5cy5tYXAoZXhwb3J0cy5jb252ZXJ0TGVnYWN5UHVibGljS2V5KTtcclxufTtcclxuZXhwb3J0cy5jb252ZXJ0TGVnYWN5UHVibGljS2V5cyA9IGNvbnZlcnRMZWdhY3lQdWJsaWNLZXlzO1xyXG4vKiogQ29udmVydCBrZXkgaW4gYHNgIHRvIGJpbmFyeSBmb3JtICovXHJcbnZhciBzdHJpbmdUb1ByaXZhdGVLZXkgPSBmdW5jdGlvbiAocykge1xyXG4gICAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgcHJpdmF0ZSBrZXknKTtcclxuICAgIH1cclxuICAgIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gJ1BWVF9SMV8nKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCBLZXlUeXBlLnIxLCBleHBvcnRzLnByaXZhdGVLZXlEYXRhU2l6ZSwgJ1IxJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gJ1BWVF9LMV8nKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCBLZXlUeXBlLmsxLCBleHBvcnRzLnByaXZhdGVLZXlEYXRhU2l6ZSwgJ0sxJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyB0b2RvOiBWZXJpZnkgY2hlY2tzdW06IHNoYTI1NihzaGEyNTYoa2V5LmRhdGEpKS5cclxuICAgICAgICAvLyAgICAgICBOb3QgY3JpdGljYWwgc2luY2UgYSBiYWQga2V5IHdpbGwgZmFpbCB0byBwcm9kdWNlIGFcclxuICAgICAgICAvLyAgICAgICB2YWxpZCBzaWduYXR1cmUgYW55d2F5LlxyXG4gICAgICAgIHZhciB3aG9sZSA9IGV4cG9ydHMuYmFzZTU4VG9CaW5hcnkoZXhwb3J0cy5wcml2YXRlS2V5RGF0YVNpemUgKyA1LCBzKTtcclxuICAgICAgICB2YXIga2V5ID0geyB0eXBlOiBLZXlUeXBlLmsxLCBkYXRhOiBuZXcgVWludDhBcnJheShleHBvcnRzLnByaXZhdGVLZXlEYXRhU2l6ZSkgfTtcclxuICAgICAgICBpZiAod2hvbGVbMF0gIT09IDB4ODApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnJlY29nbml6ZWQgcHJpdmF0ZSBrZXkgdHlwZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cG9ydHMucHJpdmF0ZUtleURhdGFTaXplOyArK2kpIHtcclxuICAgICAgICAgICAga2V5LmRhdGFbaV0gPSB3aG9sZVtpICsgMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuc3RyaW5nVG9Qcml2YXRlS2V5ID0gc3RyaW5nVG9Qcml2YXRlS2V5O1xyXG4vKiogQ29udmVydCBwcml2YXRlIGBrZXlgIHRvIGxlZ2FjeSBzdHJpbmcgKGJhc2UtNTgpIGZvcm0gKi9cclxudmFyIHByaXZhdGVLZXlUb0xlZ2FjeVN0cmluZyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgIGlmIChrZXkudHlwZSA9PT0gS2V5VHlwZS5rMSAmJiBrZXkuZGF0YS5sZW5ndGggPT09IGV4cG9ydHMucHJpdmF0ZUtleURhdGFTaXplKSB7XHJcbiAgICAgICAgdmFyIHdob2xlXzEgPSBbXTtcclxuICAgICAgICB3aG9sZV8xLnB1c2goMTI4KTtcclxuICAgICAgICBrZXkuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChieXRlKSB7IHJldHVybiB3aG9sZV8xLnB1c2goYnl0ZSk7IH0pO1xyXG4gICAgICAgIHZhciBkaWdlc3QgPSBuZXcgVWludDhBcnJheShoYXNoX2pzXzEuc2hhMjU2KCkudXBkYXRlKGhhc2hfanNfMS5zaGEyNTYoKS51cGRhdGUod2hvbGVfMSkuZGlnZXN0KCkpLmRpZ2VzdCgpKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoZXhwb3J0cy5wcml2YXRlS2V5RGF0YVNpemUgKyA1KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdob2xlXzEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0W2ldID0gd2hvbGVfMVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0W2kgKyB3aG9sZV8xLmxlbmd0aF0gPSBkaWdlc3RbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHBvcnRzLmJpbmFyeVRvQmFzZTU4KHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChrZXkudHlwZSA9PT0gS2V5VHlwZS5yMSB8fCBrZXkudHlwZSA9PT0gS2V5VHlwZS53YSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignS2V5IGZvcm1hdCBub3Qgc3VwcG9ydGVkIGluIGxlZ2FjeSBjb252ZXJzaW9uJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VucmVjb2duaXplZCBwdWJsaWMga2V5IGZvcm1hdCcpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLnByaXZhdGVLZXlUb0xlZ2FjeVN0cmluZyA9IHByaXZhdGVLZXlUb0xlZ2FjeVN0cmluZztcclxuLyoqIENvbnZlcnQgYGtleWAgdG8gc3RyaW5nIChiYXNlLTU4KSBmb3JtICovXHJcbnZhciBwcml2YXRlS2V5VG9TdHJpbmcgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICBpZiAoa2V5LnR5cGUgPT09IEtleVR5cGUucjEpIHtcclxuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCAnUjEnLCAnUFZUX1IxXycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoa2V5LnR5cGUgPT09IEtleVR5cGUuazEpIHtcclxuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCAnSzEnLCAnUFZUX0sxXycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnJlY29nbml6ZWQgcHJpdmF0ZSBrZXkgZm9ybWF0Jyk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMucHJpdmF0ZUtleVRvU3RyaW5nID0gcHJpdmF0ZUtleVRvU3RyaW5nO1xyXG4vKiogQ29udmVydCBrZXkgaW4gYHNgIHRvIGJpbmFyeSBmb3JtICovXHJcbnZhciBzdHJpbmdUb1NpZ25hdHVyZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBzaWduYXR1cmUnKTtcclxuICAgIH1cclxuICAgIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gJ1NJR19LMV8nKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCBLZXlUeXBlLmsxLCBleHBvcnRzLnNpZ25hdHVyZURhdGFTaXplLCAnSzEnKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSAnU0lHX1IxXycpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUucjEsIGV4cG9ydHMuc2lnbmF0dXJlRGF0YVNpemUsICdSMScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocy5zdWJzdHIoMCwgNykgPT09ICdTSUdfV0FfJykge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS53YSwgMCwgJ1dBJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VucmVjb2duaXplZCBzaWduYXR1cmUgZm9ybWF0Jyk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuc3RyaW5nVG9TaWduYXR1cmUgPSBzdHJpbmdUb1NpZ25hdHVyZTtcclxuLyoqIENvbnZlcnQgYHNpZ25hdHVyZWAgdG8gc3RyaW5nIChiYXNlLTU4KSBmb3JtICovXHJcbnZhciBzaWduYXR1cmVUb1N0cmluZyA9IGZ1bmN0aW9uIChzaWduYXR1cmUpIHtcclxuICAgIGlmIChzaWduYXR1cmUudHlwZSA9PT0gS2V5VHlwZS5rMSkge1xyXG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhzaWduYXR1cmUsICdLMScsICdTSUdfSzFfJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzaWduYXR1cmUudHlwZSA9PT0gS2V5VHlwZS5yMSkge1xyXG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhzaWduYXR1cmUsICdSMScsICdTSUdfUjFfJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzaWduYXR1cmUudHlwZSA9PT0gS2V5VHlwZS53YSkge1xyXG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhzaWduYXR1cmUsICdXQScsICdTSUdfV0FfJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VucmVjb2duaXplZCBzaWduYXR1cmUgZm9ybWF0Jyk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuc2lnbmF0dXJlVG9TdHJpbmcgPSBzaWduYXR1cmVUb1N0cmluZztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG4gKiBAbW9kdWxlIFJQQy1FcnJvclxyXG4gKi9cclxuLy8gY29weXJpZ2h0IGRlZmluZWQgaW4gZW9zanMvTElDRU5TRS50eHRcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5ScGNFcnJvciA9IHZvaWQgMDtcclxuLyoqIEhvbGRzIGRldGFpbGVkIGVycm9yIGluZm9ybWF0aW9uICovXHJcbnZhciBScGNFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhScGNFcnJvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFJwY0Vycm9yKGpzb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChqc29uLmVycm9yICYmIGpzb24uZXJyb3IuZGV0YWlscyAmJiBqc29uLmVycm9yLmRldGFpbHMubGVuZ3RoICYmIGpzb24uZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywganNvbi5lcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIF90aGlzLmRldGFpbHMgPSBqc29uLmVycm9yLmRldGFpbHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGpzb24ucHJvY2Vzc2VkICYmIGpzb24ucHJvY2Vzc2VkLmV4Y2VwdCAmJiBqc29uLnByb2Nlc3NlZC5leGNlcHQubWVzc2FnZSkge1xyXG4gICAgICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGpzb24ucHJvY2Vzc2VkLmV4Y2VwdC5tZXNzYWdlKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICBfdGhpcy5kZXRhaWxzID0ganNvbi5wcm9jZXNzZWQuZXhjZXB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChqc29uLnJlc3VsdCAmJiBqc29uLnJlc3VsdC5leGNlcHQgJiYganNvbi5yZXN1bHQuZXhjZXB0Lm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBqc29uLnJlc3VsdC5leGNlcHQubWVzc2FnZSkgfHwgdGhpcztcclxuICAgICAgICAgICAgX3RoaXMuZGV0YWlscyA9IGpzb24ucmVzdWx0LmV4Y2VwdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywganNvbi5tZXNzYWdlKSB8fCB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIFJwY0Vycm9yLnByb3RvdHlwZSk7XHJcbiAgICAgICAgX3RoaXMuanNvbiA9IGpzb247XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJwY0Vycm9yO1xyXG59KEVycm9yKSk7XHJcbmV4cG9ydHMuUnBjRXJyb3IgPSBScGNFcnJvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5ScGNFcnJvciA9IGV4cG9ydHMuSnNvblJwYyA9IHZvaWQgMDtcclxudmFyIGVvc2pzX2pzb25ycGNfMSA9IHJlcXVpcmUoXCIuL2Vvc2pzLWpzb25ycGNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkpzb25ScGNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVvc2pzX2pzb25ycGNfMS5Kc29uUnBjOyB9IH0pO1xyXG52YXIgZW9zanNfcnBjZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vvc2pzLXJwY2Vycm9yXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJScGNFcnJvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW9zanNfcnBjZXJyb3JfMS5ScGNFcnJvcjsgfSB9KTtcclxuIiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS93bHpsYTAwMC9iYWM4M2RmNmQzYzUxOTE2YzRkZDBiYzk0N2U0Njk0Ny9yYXcvN2VlMzQ2MmIwOTVhYjIyNTgwZGRhZjE5MWY0NGE1OTBkYTZmZTMzYi9SSVBFTUQtMTYwLmpzXHJcblxyXG4vKlxyXG5cdFJJUEVNRC0xNjAuanNcclxuXHJcblx0XHRkZXZlbG9wZWRcclxuXHRcdFx0YnkgSy4gKGh0dHBzOi8vZ2l0aHViLmNvbS93bHpsYTAwMClcclxuXHRcdFx0b24gRGVjZW1iZXIgMjctMjksIDIwMTcsXHJcblxyXG5cdFx0bGljZW5zZWQgdW5kZXJcclxuXHJcblxyXG5cdFx0dGhlIE1JVCBsaWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChjKSAyMDE3IEsuXHJcblxyXG5cdFx0IFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXHJcblx0XHRvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxyXG5cdFx0ZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XHJcblx0XHRyZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcclxuXHRcdGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG5cdFx0c2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcclxuXHRcdFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXHJcblx0XHRjb25kaXRpb25zOlxyXG5cclxuXHRcdCBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxyXG5cdFx0aW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0IFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXHJcblx0XHRFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcclxuXHRcdE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXHJcblx0XHROT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxyXG5cdFx0SE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXHJcblx0XHRXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuXHRcdEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcclxuXHRcdE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFJJUEVNRDE2MFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly93ZWJjYWNoZS5nb29nbGV1c2VyY29udGVudC5jb20vc2VhcmNoP3E9Y2FjaGU6Q25MT2dvbFRIWUVKOmh0dHBzOi8vd3d3LmNvc2ljLmVzYXQua3VsZXV2ZW4uYmUvcHVibGljYXRpb25zL2FydGljbGUtMzE3LnBkZlxyXG4gICAgICAgIC8vIGh0dHA6Ly9zaG9kaGdhbmdhLmluZmxpYm5ldC5hYy5pbi9iaXRzdHJlYW0vMTA2MDMvMjI5NzgvMTMvMTNfYXBwZW5kaXgucGRmXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldF9uX3BhZF9ieXRlcyhtZXNzYWdlX3NpemUgLyogaW4gYnl0ZXMsIDEgYnl0ZSBpcyA4IGJpdHMuICovKVxyXG4gICAge1xyXG4gICAgICAgIC8vICBPYnRhaW4gdGhlIG51bWJlciBvZiBieXRlcyBuZWVkZWQgdG8gcGFkIHRoZSBtZXNzYWdlLlxyXG4gICAgICAgIC8vIEl0IGRvZXMgbm90IGNvbnRhaW4gdGhlIHNpemUgb2YgdGhlIG1lc3NhZ2Ugc2l6ZSBpbmZvcm1hdGlvbi5cclxuICAgICAgICAvKlxyXG5cdFx0XHRodHRwczovL3dlYmNhY2hlLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zZWFyY2g/cT1jYWNoZTpDbkxPZ29sVEhZRUo6aHR0cHM6Ly93d3cuY29zaWMuZXNhdC5rdWxldXZlbi5iZS9wdWJsaWNhdGlvbnMvYXJ0aWNsZS0zMTcucGRmXHJcblxyXG5cdFx0XHRUaGUgQ3J5cHRvZ3JhcGhpYyBIYXNoIEZ1bmN0aW9uIFJJUEVNRC0xNjBcclxuXHJcblx0XHRcdHdyaXR0ZW4gYnlcclxuXHRcdFx0XHRCYXJ0IFByZW5lZWwsXHJcblx0XHRcdFx0SGFucyBEb2JiZXJ0aW4sXHJcblx0XHRcdFx0QW50b29uIEJvc3NlbGFlcnNcclxuXHRcdFx0aW5cclxuXHRcdFx0XHQxOTk3LlxyXG5cclxuXHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdMKnNSAgICAgRGVzY3JpcHRpb24gb2YgUklQRU1ELTE2MFxyXG5cclxuXHRcdFx0Li4uLi4uXHJcblxyXG5cdFx0XHQgSW4gb3JkZXIgdG8gZ3VhcmFudGVlIHRoYXQgdGhlIHRvdGFsIGlucHV0IHNpemUgaXMgYVxyXG5cdFx0XHRtdWx0aXBsZSBvZiA1MTIgYml0cywgdGhlIGlucHV0IGlzIHBhZGRlZCBpbiB0aGUgc2FtZVxyXG5cdFx0XHR3YXkgYXMgZm9yIGFsbCB0aGUgbWVtYmVycyBvZiB0aGUgTUQ0LWZhbWlseTogb25lXHJcblx0XHRcdGFwcGVuZHMgYSBzaW5nbGUgMSBmb2xsb3dlZCBieSBhIHN0cmluZyBvZiAwcyAodGhlXHJcblx0XHRcdG51bWJlciBvZiAwcyBsaWVzIGJldHdlZW4gMCBhbmQgNTExKTsgdGhlIGxhc3QgNjQgYml0c1xyXG5cdFx0XHRvZiB0aGUgZXh0ZW5kZWQgaW5wdXQgY29udGFpbiB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uXHJcblx0XHRcdG9mIHRoZSBpbnB1dCBzaXplIGluIGJpdHMsIGxlYXN0IHNpZ25pZmljYW50IGJ5dGUgZmlyc3QuXHJcblx0XHQqL1xyXG4gICAgICAgIC8qXHJcblx0XHRcdGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvcmZjL3JmYzExODYudHh0XHJcblxyXG5cdFx0XHRSRkMgMTE4NjogTUQ0IE1lc3NhZ2UgRGlnZXN0IEFsZ29yaXRobS5cclxuXHJcblx0XHRcdHdyaXR0ZW4gYnlcclxuXHRcdFx0XHRSb25hbGQgTGlubiBSaXZlc3RcclxuXHRcdFx0aW5cclxuXHRcdFx0XHRPY3RvYmVyIDE5OTAuXHJcblxyXG5cdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdFx0wqczICAgICBNRDQgQWxnb3JpdGhtIERlc2NyaXB0aW9uXHJcblxyXG5cdFx0XHQuLi4uLi5cclxuXHJcblx0XHRcdFN0ZXAgMS4gQXBwZW5kIHBhZGRpbmcgYml0c1xyXG5cclxuXHRcdFx0IFRoZSBtZXNzYWdlIGlzIFwicGFkZGVkXCIgKGV4dGVuZGVkKSBzbyB0aGF0IGl0cyBsZW5ndGhcclxuXHRcdFx0KGluIGJpdHMpIGlzIGNvbmdydWVudCB0byA0NDgsIG1vZHVsbyA1MTIuIFRoYXQgaXMsIHRoZVxyXG5cdFx0XHRtZXNzYWdlIGlzIGV4dGVuZGVkIHNvIHRoYXQgaXQgaXMganVzdCA2NCBiaXRzIHNoeSBvZlxyXG5cdFx0XHRiZWluZyBhIG11bHRpcGxlIG9mIDUxMiBiaXRzIGxvbmcuIFBhZGRpbmcgaXMgYWx3YXlzXHJcblx0XHRcdHBlcmZvcm1lZCwgZXZlbiBpZiB0aGUgbGVuZ3RoIG9mIHRoZSBtZXNzYWdlIGlzIGFscmVhZHlcclxuXHRcdFx0Y29uZ3J1ZW50IHRvIDQ0OCwgbW9kdWxvIDUxMiAoaW4gd2hpY2ggY2FzZSA1MTIgYml0cyBvZlxyXG5cdFx0XHRwYWRkaW5nIGFyZSBhZGRlZCkuXHJcblxyXG5cdFx0XHQgUGFkZGluZyBpcyBwZXJmb3JtZWQgYXMgZm9sbG93czogYSBzaW5nbGUgXCIxXCIgYml0IGlzXHJcblx0XHRcdGFwcGVuZGVkIHRvIHRoZSBtZXNzYWdlLCBhbmQgdGhlbiBlbm91Z2ggemVybyBiaXRzIGFyZVxyXG5cdFx0XHRhcHBlbmRlZCBzbyB0aGF0IHRoZSBsZW5ndGggaW4gYml0cyBvZiB0aGUgcGFkZGVkXHJcblx0XHRcdG1lc3NhZ2UgYmVjb21lcyBjb25ncnVlbnQgdG8gNDQ4LCBtb2R1bG8gNTEyLlxyXG5cclxuXHRcdFx0U3RlcCAyLiBBcHBlbmQgbGVuZ3RoXHJcblxyXG5cdFx0XHQgQSA2NC1iaXQgcmVwcmVzZW50YXRpb24gb2YgYiAodGhlIGxlbmd0aCBvZiB0aGUgbWVzc2FnZVxyXG5cdFx0XHRiZWZvcmUgdGhlIHBhZGRpbmcgYml0cyB3ZXJlIGFkZGVkKSBpcyBhcHBlbmRlZCB0byB0aGVcclxuXHRcdFx0cmVzdWx0IG9mIHRoZSBwcmV2aW91cyBzdGVwLiBJbiB0aGUgdW5saWtlbHkgZXZlbnQgdGhhdFxyXG5cdFx0XHRiIGlzIGdyZWF0ZXIgdGhhbiAyXjY0LCB0aGVuIG9ubHkgdGhlIGxvdy1vcmRlciA2NCBiaXRzXHJcblx0XHRcdG9mIGIgYXJlIHVzZWQuIChUaGVzZSBiaXRzIGFyZSBhcHBlbmRlZCBhcyB0d28gMzItYml0XHJcblx0XHRcdHdvcmRzIGFuZCBhcHBlbmRlZCBsb3ctb3JkZXIgd29yZCBmaXJzdCBpbiBhY2NvcmRhbmNlXHJcblx0XHRcdHdpdGggdGhlIHByZXZpb3VzIGNvbnZlbnRpb25zLilcclxuXHJcblx0XHRcdCBBdCB0aGlzIHBvaW50IHRoZSByZXN1bHRpbmcgbWVzc2FnZSAoYWZ0ZXIgcGFkZGluZyB3aXRoXHJcblx0XHRcdGJpdHMgYW5kIHdpdGggYikgaGFzIGEgbGVuZ3RoIHRoYXQgaXMgYW4gZXhhY3QgbXVsdGlwbGVcclxuXHRcdFx0b2YgNTEyIGJpdHMuIEVxdWl2YWxlbnRseSwgdGhpcyBtZXNzYWdlIGhhcyBhIGxlbmd0aFxyXG5cdFx0XHR0aGF0IGlzIGFuIGV4YWN0IG11bHRpcGxlIG9mIDE2ICgzMi1iaXQpIHdvcmRzLiBMZXRcclxuXHRcdFx0TVswIC4uLiBOLTFdIGRlbm90ZSB0aGUgd29yZHMgb2YgdGhlIHJlc3VsdGluZyBtZXNzYWdlLFxyXG5cdFx0XHR3aGVyZSBOIGlzIGEgbXVsdGlwbGUgb2YgMTYuXHJcblx0XHQqL1xyXG4gICAgICAgIC8vIGh0dHBzOi8vY3J5cHRvLnN0YWNrZXhjaGFuZ2UuY29tL2EvMzI0MDcvNTQ1NjhcclxuICAgICAgICAvKlxyXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgMVxyXG5cdFx0XHRcdFswIGJpdDogbWVzc2FnZS5dXHJcblx0XHRcdFx0WzEgYml0OiAxLl1cclxuXHRcdFx0XHRbNDQ3IGJpdHM6IDAuXVxyXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxyXG5cclxuXHRcdFx0RXhhbXBsZSBjYXNlICAjIDJcclxuXHRcdFx0XHRbNTEyLWJpdHM6IG1lc3NhZ2VdXHJcblx0XHRcdFx0WzEgYml0OiAxLl1cclxuXHRcdFx0XHRbNDQ3IGJpdHM6IDAuXVxyXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxyXG5cclxuXHRcdFx0RXhhbXBsZSBjYXNlICAjIDNcclxuXHRcdFx0XHRbKDUxMiAtIDY0ID0gNDQ4KSBiaXRzOiBtZXNzYWdlLl1cclxuXHRcdFx0XHRbMSBiaXQ6IDEuXVxyXG5cdFx0XHRcdFs1MTEgYml0czogMC5dXHJcblx0XHRcdFx0WzY0IGJpdHM6IG1lc3NhZ2Ugc2l6ZSBpbmZvcm1hdGlvbi5dXHJcblxyXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgNFxyXG5cdFx0XHRcdFsoNTEyIC0gNjUgPSA0NDcpIGJpdHM6IG1lc3NhZ2UuXVxyXG5cdFx0XHRcdFsxIGJpdDogMS5dXHJcblx0XHRcdFx0WzAgYml0OiAwLl1cclxuXHRcdFx0XHRbNjQgYml0czogbWVzc2FnZSBzaXplIGluZm9ybWF0aW9uLl1cclxuXHRcdCovXHJcbiAgICAgICAgLy8gVGhlIG51bWJlciBvZiBwYWRkaW5nIHplcm8gYml0czpcclxuICAgICAgICAvLyAgICAgIDUxMSAtIFt7KG1lc3NhZ2Ugc2l6ZSBpbiBiaXRzKSArIDY0fSAobW9kIDUxMildXHJcbiAgICAgICAgcmV0dXJuIDY0IC0gKChtZXNzYWdlX3NpemUgKyA4KSAmIDBiMDAxMTExMTEgLyogNjMgKi8pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHBhZChtZXNzYWdlIC8qIEFuIEFycmF5QnVmZmVyLiAqLylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlX3NpemUgPSBtZXNzYWdlLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgY29uc3Qgbl9wYWQgPSBSSVBFTUQxNjAuZ2V0X25fcGFkX2J5dGVzKG1lc3NhZ2Vfc2l6ZSk7XHJcblxyXG4gICAgICAgIC8vICBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgIGlzICgoMiAqKiA1MykgLSAxKSBhbmRcclxuICAgICAgICAvLyBiaXR3aXNlIG9wZXJhdGlvbiBpbiBKYXZhc2NyaXB0IGlzIGRvbmUgb24gMzItYml0cyBvcGVyYW5kcy5cclxuICAgICAgICBjb25zdCBkaXZtb2QgPSAoZGl2aWRlbmQsIGRpdmlzb3IpID0+IFtcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihkaXZpZGVuZCAvIGRpdmlzb3IpLFxyXG4gICAgICAgICAgICBkaXZpZGVuZCAlIGRpdmlzb3JcclxuICAgICAgICBdO1xyXG4gICAgICAgIC8qXHJcblRvIHNoaWZ0XHJcblxyXG4gICAwMDAwMDAwMCAwMDA/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCBvXHJcbiAgIDAwMDAwMDAwID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/MDAwXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuTWV0aG9kICMxXHJcblxyXG4gICAgMDAwMDAwMDAgMDAwPz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/XHJcbiAgIFswMDAwMDAwMCAwMDBBQUFBQSBBQUFBQUFBQSBBQUFBQUFBQV0gKDxBPiBjYXB0dXJlZClcclxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBMDAwXSAoPEE+IHNoaWZ0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoPEI+IGNhcHR1cmVkKSBbQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkJdXHJcbiAgICAgICAgICAgICAgICAgICAgICg8Qj4gc2hpZnRlZCkgW0JCQl1bQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkIwMDBdXHJcbiAgIFswMDAwMDAwMCBBQUFBQUFBQSBBQUFBQUFBQSBBQUFBQUJCQl0gKDxBPiAmIDxCXzI+IG1lcmdlZClcclxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBQkJCXVtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cclxuICAgIDAwMDAwMDAwID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ICA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/PzAwMFxyXG5cclxuXHRcdGNvbnN0IHVpbnQzMl9tYXhfcGx1c18xID0gMHgxMDAwMDAwMDA7IC8vICgyICoqIDMyKVxyXG5cdFx0Y29uc3QgW1xyXG5cdFx0XHRtc2dfYnl0ZV9zaXplX21vc3QsIC8vIFZhbHVlIHJhbmdlIFswLCAoMiAqKiAyMSkgLSAxXS5cclxuXHRcdFx0bXNnX2J5dGVfc2l6ZV9sZWFzdCAvLyBWYWx1ZSByYW5nZSBbMCwgKDIgKiogMzIpIC0gMV0uXHJcblx0XHRdID0gZGl2bW9kKG1lc3NhZ2Vfc2l6ZSwgdWludDMyX21heF9wbHVzXzEpO1xyXG5cdFx0Y29uc3QgW1xyXG5cdFx0XHRjYXJyeSwgLy8gVmFsdWUgcmFuZ2UgWzAsIDddLlxyXG5cdFx0XHRtc2dfYml0X3NpemVfbGVhc3QgLy8gVmFsdWUgcmFuZ2UgWzAsICgyICoqIDMyKSAtIDhdLlxyXG5cdFx0XSA9IGRpdm1vZChtZXNzYWdlX2J5dGVfc2l6ZV9sZWFzdCAqIDgsIHVpbnQzMl9tYXhfcGx1c18xKTtcclxuXHRcdGNvbnN0IG1lc3NhZ2VfYml0X3NpemVfbW9zdCA9IG1lc3NhZ2VfYnl0ZV9zaXplX21vc3QgKiA4XHJcblx0XHRcdCsgY2Fycnk7IC8vIFZhbHVlIHJhbmdlIFswLCAoMiAqKiAyNCkgLSAxXS5cclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5NZXRob2QgIzJcclxuICAgIDAwMDAwMDAwIDAwMD8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ICA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/P1xyXG4gICAgICBbMDAwMDAgMDAwQUFBQUEgQUFBQUFBQUEgQUFBQUFBQUEgIEFBQV0gKDxBPiBjYXB0dXJlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICg8Qj4gY2FwdHVyZWQpIFswMDBCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoPEI+IHNoaWZ0ZWQpIFtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cclxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBQUFBXVtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cclxuICAgIDAwMDAwMDAwID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ICA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/PzAwMFxyXG5cclxuXHRcdCovXHJcbiAgICAgICAgY29uc3QgW1xyXG4gICAgICAgICAgICBtc2dfYml0X3NpemVfbW9zdCxcclxuICAgICAgICAgICAgbXNnX2JpdF9zaXplX2xlYXN0XHJcbiAgICAgICAgXSA9IGRpdm1vZChtZXNzYWdlX3NpemUsIDUzNjg3MDkxMiAvKiAoMiAqKiAyOSkgKi8pXHJcbiAgICAgICAgICAgIC5tYXAoKHgsIGluZGV4KSA9PiAoaW5kZXggPyAoeCAqIDgpIDogeCkpO1xyXG5cclxuICAgICAgICAvLyBgQXJyYXlCdWZmZXIudHJhbnNmZXIoKWAgaXMgbm90IHN1cHBvcnRlZC5cclxuICAgICAgICBjb25zdCBwYWRkZWQgPSBuZXcgVWludDhBcnJheShtZXNzYWdlX3NpemUgKyBuX3BhZCArIDgpO1xyXG4gICAgICAgIHBhZGRlZC5zZXQobmV3IFVpbnQ4QXJyYXkobWVzc2FnZSksIDApO1xyXG4gICAgICAgIGNvbnN0IGRhdGFfdmlldyA9IG5ldyBEYXRhVmlldyhwYWRkZWQuYnVmZmVyKTtcclxuICAgICAgICBkYXRhX3ZpZXcuc2V0VWludDgobWVzc2FnZV9zaXplLCAwYjEwMDAwMDAwKTtcclxuICAgICAgICBkYXRhX3ZpZXcuc2V0VWludDMyKFxyXG4gICAgICAgICAgICBtZXNzYWdlX3NpemUgKyBuX3BhZCxcclxuICAgICAgICAgICAgbXNnX2JpdF9zaXplX2xlYXN0LFxyXG4gICAgICAgICAgICB0cnVlIC8vIExpdHRsZS1lbmRpYW5cclxuICAgICAgICApO1xyXG4gICAgICAgIGRhdGFfdmlldy5zZXRVaW50MzIoXHJcbiAgICAgICAgICAgIG1lc3NhZ2Vfc2l6ZSArIG5fcGFkICsgNCxcclxuICAgICAgICAgICAgbXNnX2JpdF9zaXplX21vc3QsXHJcbiAgICAgICAgICAgIHRydWUgLy8gTGl0dGxlLWVuZGlhblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYWRkZWQuYnVmZmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmKGosIHgsIHksIHopXHJcbiAgICB7XHJcbiAgICAgICAgaWYoMCA8PSBqICYmIGogPD0gMTUpXHJcbiAgICAgICAgeyAvLyBFeGNsdXNpdmUtT1JcclxuICAgICAgICAgICAgcmV0dXJuIHggXiB5IF4gejtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoMTYgPD0gaiAmJiBqIDw9IDMxKVxyXG4gICAgICAgIHsgLy8gTXVsdGlwbGV4aW5nIChtdXhpbmcpXHJcbiAgICAgICAgICAgIHJldHVybiAoeCAmIHkpIHwgKH54ICYgeik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKDMyIDw9IGogJiYgaiA8PSA0NylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoeCB8IH55KSBeIHo7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKDQ4IDw9IGogJiYgaiA8PSA2MylcclxuICAgICAgICB7IC8vIE11bHRpcGxleGluZyAobXV4aW5nKVxyXG4gICAgICAgICAgICByZXR1cm4gKHggJiB6KSB8ICh5ICYgfnopO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZig2NCA8PSBqICYmIGogPD0gNzkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4geCBeICh5IHwgfnopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBLKGopXHJcbiAgICB7XHJcbiAgICAgICAgaWYoMCA8PSBqICYmIGogPD0gMTUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gMHgwMDAwMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoMTYgPD0gaiAmJiBqIDw9IDMxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLlNRUlQyKVxyXG4gICAgICAgICAgICByZXR1cm4gMHg1QTgyNzk5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoMzIgPD0gaiAmJiBqIDw9IDQ3KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLnNxcnQoMykpXHJcbiAgICAgICAgICAgIHJldHVybiAweDZFRDlFQkExO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZig0OCA8PSBqICYmIGogPD0gNjMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguc3FydCg1KSlcclxuICAgICAgICAgICAgcmV0dXJuIDB4OEYxQkJDREM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKDY0IDw9IGogJiYgaiA8PSA3OSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5zcXJ0KDcpKVxyXG4gICAgICAgICAgICByZXR1cm4gMHhBOTUzRkQ0RTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgS1AoaikgLy8gSydcclxuICAgIHtcclxuICAgICAgICBpZigwIDw9IGogJiYgaiA8PSAxNSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5jYnJ0KDIpKVxyXG4gICAgICAgICAgICByZXR1cm4gMHg1MEEyOEJFNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoMTYgPD0gaiAmJiBqIDw9IDMxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLmNicnQoMykpXHJcbiAgICAgICAgICAgIHJldHVybiAweDVDNEREMTI0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigzMiA8PSBqICYmIGogPD0gNDcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguY2JydCg1KSlcclxuICAgICAgICAgICAgcmV0dXJuIDB4NkQ3MDNFRjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKDQ4IDw9IGogJiYgaiA8PSA2MylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5jYnJ0KDcpKVxyXG4gICAgICAgICAgICByZXR1cm4gMHg3QTZENzZFOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoNjQgPD0gaiAmJiBqIDw9IDc5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDB4MDAwMDAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGFkZF9tb2R1bG8zMigvKiAuLi4uLi4gKi8pXHJcbiAgICB7XHJcbiAgICAgICAgLy8gMS4gIE1vZHVsbyBhZGRpdGlvbiAoYWRkaXRpb24gbW9kdWxvKSBpcyBhc3NvY2lhdGl2ZS5cclxuICAgICAgICAvLyAgICBodHRwczovL3Byb29md2lraS5vcmcvd2lraS9Nb2R1bG9fQWRkaXRpb25faXNfQXNzb2NpYXRpdmVcclxuIFx0XHQvLyAyLiAgQml0d2lzZSBvcGVyYXRpb24gaW4gSmF2YXNjcmlwdFxyXG4gICAgICAgIC8vICAgIGlzIGRvbmUgb24gMzItYml0cyBvcGVyYW5kc1xyXG4gICAgICAgIC8vICAgIGFuZCByZXN1bHRzIGluIGEgMzItYml0cyB2YWx1ZS5cclxuICAgICAgICByZXR1cm4gQXJyYXlcclxuICAgICAgICAgICAgLmZyb20oYXJndW1lbnRzKVxyXG4gICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiAoYSArIGIpLCAwKSB8IDA7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcm9sMzIodmFsdWUsIGNvdW50KVxyXG4gICAgeyAvLyBDeWNsaWMgbGVmdCBzaGlmdCAocm90YXRlKSBvbiAzMi1iaXRzIHZhbHVlLlxyXG4gICAgICAgIHJldHVybiAodmFsdWUgPDwgY291bnQpIHwgKHZhbHVlID4+PiAoMzIgLSBjb3VudCkpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGhhc2gobWVzc2FnZSAvKiBBbiBBcnJheUJ1ZmZlci4gKi8pXHJcbiAgICB7XHJcbiAgICAgICAgLy8gLy8vLy8vLy8gICAgICAgUGFkZGluZyAgICAgICAvLy8vLy8vLy8vXHJcblxyXG4gICAgICAgIC8vIFRoZSBwYWRkZWQgbWVzc2FnZS5cclxuICAgICAgICBjb25zdCBwYWRkZWQgPSBSSVBFTUQxNjAucGFkKG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAvLyAvLy8vLy8vLyAgICAgQ29tcHJlc3Npb24gICAgIC8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgLy8gTWVzc2FnZSB3b3JkIHNlbGVjdG9ycy5cclxuICAgICAgICBjb25zdCByID0gW1xyXG4gICAgICAgICAgICAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LFxyXG4gICAgICAgICAgICA3LCA0LCAxMywgMSwgMTAsIDYsIDE1LCAzLCAxMiwgMCwgOSwgNSwgMiwgMTQsIDExLCA4LFxyXG4gICAgICAgICAgICAzLCAxMCwgMTQsIDQsIDksIDE1LCA4LCAxLCAyLCA3LCAwLCA2LCAxMywgMTEsIDUsIDEyLFxyXG4gICAgICAgICAgICAxLCA5LCAxMSwgMTAsIDAsIDgsIDEyLCA0LCAxMywgMywgNywgMTUsIDE0LCA1LCA2LCAyLFxyXG4gICAgICAgICAgICA0LCAwLCA1LCA5LCA3LCAxMiwgMiwgMTAsIDE0LCAxLCAzLCA4LCAxMSwgNiwgMTUsIDEzXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCByUCA9IFsgLy8gcidcclxuICAgICAgICAgICAgNSwgMTQsIDcsIDAsIDksIDIsIDExLCA0LCAxMywgNiwgMTUsIDgsIDEsIDEwLCAzLCAxMixcclxuICAgICAgICAgICAgNiwgMTEsIDMsIDcsIDAsIDEzLCA1LCAxMCwgMTQsIDE1LCA4LCAxMiwgNCwgOSwgMSwgMixcclxuICAgICAgICAgICAgMTUsIDUsIDEsIDMsIDcsIDE0LCA2LCA5LCAxMSwgOCwgMTIsIDIsIDEwLCAwLCA0LCAxMyxcclxuICAgICAgICAgICAgOCwgNiwgNCwgMSwgMywgMTEsIDE1LCAwLCA1LCAxMiwgMiwgMTMsIDksIDcsIDEwLCAxNCxcclxuICAgICAgICAgICAgMTIsIDE1LCAxMCwgNCwgMSwgNSwgOCwgNywgNiwgMiwgMTMsIDE0LCAwLCAzLCA5LCAxMVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIEFtb3VudHMgZm9yICdyb3RhdGUgbGVmdCcgb3BlcmF0aW9uLlxyXG4gICAgICAgIGNvbnN0IHMgPSBbXHJcbiAgICAgICAgICAgIDExLCAxNCwgMTUsIDEyLCA1LCA4LCA3LCA5LCAxMSwgMTMsIDE0LCAxNSwgNiwgNywgOSwgOCxcclxuICAgICAgICAgICAgNywgNiwgOCwgMTMsIDExLCA5LCA3LCAxNSwgNywgMTIsIDE1LCA5LCAxMSwgNywgMTMsIDEyLFxyXG4gICAgICAgICAgICAxMSwgMTMsIDYsIDcsIDE0LCA5LCAxMywgMTUsIDE0LCA4LCAxMywgNiwgNSwgMTIsIDcsIDUsXHJcbiAgICAgICAgICAgIDExLCAxMiwgMTQsIDE1LCAxNCwgMTUsIDksIDgsIDksIDE0LCA1LCA2LCA4LCA2LCA1LCAxMixcclxuICAgICAgICAgICAgOSwgMTUsIDUsIDExLCA2LCA4LCAxMywgMTIsIDUsIDEyLCAxMywgMTQsIDExLCA4LCA1LCA2XHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBzUCA9IFsgLy8gcydcclxuICAgICAgICAgICAgOCwgOSwgOSwgMTEsIDEzLCAxNSwgMTUsIDUsIDcsIDcsIDgsIDExLCAxNCwgMTQsIDEyLCA2LFxyXG4gICAgICAgICAgICA5LCAxMywgMTUsIDcsIDEyLCA4LCA5LCAxMSwgNywgNywgMTIsIDcsIDYsIDE1LCAxMywgMTEsXHJcbiAgICAgICAgICAgIDksIDcsIDE1LCAxMSwgOCwgNiwgNiwgMTQsIDEyLCAxMywgNSwgMTQsIDEzLCAxMywgNywgNSxcclxuICAgICAgICAgICAgMTUsIDUsIDgsIDExLCAxNCwgMTQsIDYsIDE0LCA2LCA5LCAxMiwgOSwgMTIsIDUsIDE1LCA4LFxyXG4gICAgICAgICAgICA4LCA1LCAxMiwgOSwgMTIsIDUsIDE0LCA2LCA4LCAxMywgNiwgNSwgMTUsIDEzLCAxMSwgMTFcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvLyBUaGUgc2l6ZSwgaW4gYnl0ZXMsIG9mIGEgd29yZC5cclxuICAgICAgICBjb25zdCB3b3JkX3NpemUgPSA0O1xyXG5cclxuICAgICAgICAvLyBUaGUgc2l6ZSwgaW4gYnl0ZXMsIG9mIGEgMTYtd29yZHMgYmxvY2suXHJcbiAgICAgICAgY29uc3QgYmxvY2tfc2l6ZSA9IDY0O1xyXG5cclxuICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIHRoZSAxNi13b3JkcyBibG9ja3MuXHJcbiAgICAgICAgY29uc3QgdCA9IHBhZGRlZC5ieXRlTGVuZ3RoIC8gYmxvY2tfc2l6ZTtcclxuXHJcbiAgICAgICAgLy8gIFRoZSBtZXNzYWdlIGFmdGVyIHBhZGRpbmcgY29uc2lzdHMgb2YgdCAxNi13b3JkIGJsb2NrcyB0aGF0XHJcbiAgICAgICAgLy8gYXJlIGRlbm90ZWQgd2l0aCBYX2lbal0sIHdpdGggMOKJpGniiaQodCDiiJIgMSkgYW5kIDDiiaRq4omkMTUuXHJcbiAgICAgICAgY29uc3QgWCA9IChuZXcgQXJyYXkodCkpXHJcbiAgICAgICAgICAgIC5maWxsKHVuZGVmaW5lZClcclxuICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gaiA9PiAoXHJcbiAgICAgICAgICAgICAgICBuZXcgRGF0YVZpZXcoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGVkLCBpICogYmxvY2tfc2l6ZSwgYmxvY2tfc2l6ZVxyXG4gICAgICAgICAgICAgICAgKS5nZXRVaW50MzIoXHJcbiAgICAgICAgICAgICAgICAgICAgaiAqIHdvcmRfc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB0cnVlIC8vIExpdHRsZS1lbmRpYW5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIC8vICBUaGUgcmVzdWx0IG9mIFJJUEVNRC0xNjAgaXMgY29udGFpbmVkIGluIGZpdmUgMzItYml0IHdvcmRzLFxyXG4gICAgICAgIC8vIHdoaWNoIGZvcm0gdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBhbGdvcml0aG0uIFRoZSBmaW5hbFxyXG4gICAgICAgIC8vIGNvbnRlbnQgb2YgdGhlc2UgZml2ZSAzMi1iaXQgd29yZHMgaXMgY29udmVydGVkIHRvIGEgMTYwLWJpdFxyXG4gICAgICAgIC8vIHN0cmluZywgYWdhaW4gdXNpbmcgdGhlIGxpdHRsZS1lbmRpYW4gY29udmVudGlvbi5cclxuICAgICAgICBjb25zdCBoID0gW1xyXG4gICAgICAgICAgICAweDY3NDUyMzAxLCAvLyBoXzBcclxuICAgICAgICAgICAgMHhFRkNEQUI4OSwgLy8gaF8xXHJcbiAgICAgICAgICAgIDB4OThCQURDRkUsIC8vIGhfMlxyXG4gICAgICAgICAgICAweDEwMzI1NDc2LCAvLyBoXzNcclxuICAgICAgICAgICAgMHhDM0QyRTFGMCAgLy8gaF80XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQ7ICsraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBBID0gaFswXTsgbGV0IEIgPSBoWzFdOyBsZXQgQyA9IGhbMl07IGxldCBEID0gaFszXTsgbGV0IEUgPSBoWzRdO1xyXG4gICAgICAgICAgICBsZXQgQVAgPSBBOyBsZXQgQlAgPSBCOyBsZXQgQ1AgPSBDOyBsZXQgRFAgPSBEOyBsZXQgRVAgPSBFO1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgODA7ICsrailcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gTGVmdCByb3VuZHNcclxuICAgICAgICAgICAgICAgIGxldCBUID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMiggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zaGFkb3dcclxuICAgICAgICAgICAgICAgICAgICBSSVBFTUQxNjAucm9sMzIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUklQRU1EMTYwLmYoaiwgQiwgQywgRCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBYW2ldKHJbal0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUklQRU1EMTYwLksoailcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc1tqXVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgRVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIEEgPSBFO1xyXG4gICAgICAgICAgICAgICAgRSA9IEQ7XHJcbiAgICAgICAgICAgICAgICBEID0gUklQRU1EMTYwLnJvbDMyKEMsIDEwKTtcclxuICAgICAgICAgICAgICAgIEMgPSBCO1xyXG4gICAgICAgICAgICAgICAgQiA9IFQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgcm91bmRzXHJcbiAgICAgICAgICAgICAgICBUID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihcclxuICAgICAgICAgICAgICAgICAgICBSSVBFTUQxNjAucm9sMzIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBUCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJJUEVNRDE2MC5mKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDc5IC0gaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCUCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhbaV0oclBbal0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUklQRU1EMTYwLktQKGopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNQW2pdXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBFUFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIEFQID0gRVA7XHJcbiAgICAgICAgICAgICAgICBFUCA9IERQO1xyXG4gICAgICAgICAgICAgICAgRFAgPSBSSVBFTUQxNjAucm9sMzIoQ1AsIDEwKTtcclxuICAgICAgICAgICAgICAgIENQID0gQlA7XHJcbiAgICAgICAgICAgICAgICBCUCA9IFQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgVCA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFsxXSwgQywgRFApO1xyXG4gICAgICAgICAgICBoWzFdID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzJdLCBELCBFUCk7XHJcbiAgICAgICAgICAgIGhbMl0gPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKGhbM10sIEUsIEFQKTtcclxuICAgICAgICAgICAgaFszXSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFs0XSwgQSwgQlApO1xyXG4gICAgICAgICAgICBoWzRdID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzBdLCBCLCBDUCk7XHJcbiAgICAgICAgICAgIGhbMF0gPSBUO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIFRoZSBmaW5hbCBvdXRwdXQgc3RyaW5nIHRoZW4gY29uc2lzdHMgb2YgdGhlIGNvbmNhdGVuYXRhdGlvblxyXG4gICAgICAgIC8vIG9mIGhfMCwgaF8xLCBoXzIsIGhfMywgYW5kIGhfNCBhZnRlciBjb252ZXJ0aW5nIGVhY2ggaF9pIHRvIGFcclxuICAgICAgICAvLyA0LWJ5dGUgc3RyaW5nIHVzaW5nIHRoZSBsaXR0bGUtZW5kaWFuIGNvbnZlbnRpb24uXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5QnVmZmVyKDIwKTtcclxuICAgICAgICBjb25zdCBkYXRhX3ZpZXcgPSBuZXcgRGF0YVZpZXcocmVzdWx0KTtcclxuICAgICAgICBoLmZvckVhY2goKGhfaSwgaSkgPT4gZGF0YV92aWV3LnNldFVpbnQzMihpICogNCwgaF9pLCB0cnVlKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBSSVBFTUQxNjBcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHJlc3VsdCA9IGZuKCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJlb3Nqc19qc29ucnBjXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rX25hbWVfXCJdID0gc2VsZltcIndlYnBhY2tDaHVua19uYW1lX1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZXh0ZXJuYWxzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3JwYy13ZWIudHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=