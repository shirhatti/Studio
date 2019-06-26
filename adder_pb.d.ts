// package: Add
// file: adder.proto

import * as jspb from "google-protobuf";

export class AddRequest extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRequest): AddRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRequest;
  static deserializeBinaryFromReader(message: AddRequest, reader: jspb.BinaryReader): AddRequest;
}

export namespace AddRequest {
  export type AsObject = {
    value: number,
  }
}

export class AddReply extends jspb.Message {
  getSum(): number;
  setSum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddReply.AsObject;
  static toObject(includeInstance: boolean, msg: AddReply): AddReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddReply;
  static deserializeBinaryFromReader(message: AddReply, reader: jspb.BinaryReader): AddReply;
}

export namespace AddReply {
  export type AsObject = {
    sum: number,
  }
}

