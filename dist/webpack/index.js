// @ts-ignore
import { setDefaultBackend } from "automerge";
// @ts-ignore
import * as wasmBackend from "@livingspec/automerge-backend-wasm";
setDefaultBackend(wasmBackend);
export * from "automerge";
