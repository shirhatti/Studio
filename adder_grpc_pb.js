// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var adder_pb = require('./adder_pb.js');

function serialize_Add_AddReply(arg) {
  if (!(arg instanceof adder_pb.AddReply)) {
    throw new Error('Expected argument of type Add.AddReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Add_AddReply(buffer_arg) {
  return adder_pb.AddReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Add_AddRequest(arg) {
  if (!(arg instanceof adder_pb.AddRequest)) {
    throw new Error('Expected argument of type Add.AddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Add_AddRequest(buffer_arg) {
  return adder_pb.AddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AdderService = exports.AdderService = {
  add: {
    path: '/Add.Adder/Add',
    requestStream: true,
    responseStream: false,
    requestType: adder_pb.AddRequest,
    responseType: adder_pb.AddReply,
    requestSerialize: serialize_Add_AddRequest,
    requestDeserialize: deserialize_Add_AddRequest,
    responseSerialize: serialize_Add_AddReply,
    responseDeserialize: deserialize_Add_AddReply,
  },
};

exports.AdderClient = grpc.makeGenericClientConstructor(AdderService);
