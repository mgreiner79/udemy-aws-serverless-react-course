"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// services/node-lambda/hello.ts
var hello_exports = {};
__export(hello_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(hello_exports);
var import_aws_sdk = require("aws-sdk");
var s3Client = new import_aws_sdk.S3();
async function handler(event, context) {
  const buckets = await s3Client.listBuckets().promise();
  console.log("Event data:");
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify(event)
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
