// @ts-ignore
import { setDefaultBackend } from "automerge";
const inAWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (inAWorker) {
    // TODO
    // import("automerge-backend-wasm").then(setDefaultBackend);
}
else {
    import("automerge-backend-wasm").then(setDefaultBackend);
}
export * from "automerge";
