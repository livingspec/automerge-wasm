var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "automerge", "automerge"], factory);
    }
})(function (require, exports) {
    "use strict";
    var __syncRequire = typeof module === "object" && typeof module.exports === "object";
    Object.defineProperty(exports, "__esModule", { value: true });
    // @ts-ignore
    const automerge_1 = require("automerge");
    const inAWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
    if (inAWorker) {
        // TODO
        // import("automerge-backend-wasm").then(setDefaultBackend);
    }
    else {
        (__syncRequire ? Promise.resolve().then(() => require("automerge-backend-wasm")) : new Promise((resolve_1, reject_1) => { require(["automerge-backend-wasm"], resolve_1, reject_1); })).then(automerge_1.setDefaultBackend);
    }
    __exportStar(require("automerge"), exports);
});
