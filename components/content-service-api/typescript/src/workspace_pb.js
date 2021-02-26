/**
 * Copyright (c) 2021 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License-AGPL.txt in the project root for license information.
 */

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.contentservice.DeleteWorkspaceRequest', null, global);
goog.exportSymbol('proto.contentservice.DeleteWorkspaceResponse', null, global);
goog.exportSymbol('proto.contentservice.DownloadUrlWorkspaceRequest', null, global);
goog.exportSymbol('proto.contentservice.DownloadUrlWorkspaceResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.contentservice.DownloadUrlWorkspaceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.contentservice.DownloadUrlWorkspaceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.contentservice.DownloadUrlWorkspaceRequest.displayName = 'proto.contentservice.DownloadUrlWorkspaceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.contentservice.DownloadUrlWorkspaceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.contentservice.DownloadUrlWorkspaceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.contentservice.DownloadUrlWorkspaceResponse.displayName = 'proto.contentservice.DownloadUrlWorkspaceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.contentservice.DeleteWorkspaceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.contentservice.DeleteWorkspaceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.contentservice.DeleteWorkspaceRequest.displayName = 'proto.contentservice.DeleteWorkspaceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.contentservice.DeleteWorkspaceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.contentservice.DeleteWorkspaceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.contentservice.DeleteWorkspaceResponse.displayName = 'proto.contentservice.DeleteWorkspaceResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.contentservice.DownloadUrlWorkspaceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.contentservice.DownloadUrlWorkspaceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.contentservice.DownloadUrlWorkspaceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contentservice.DownloadUrlWorkspaceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workspaceId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.contentservice.DownloadUrlWorkspaceRequest}
 */
proto.contentservice.DownloadUrlWorkspaceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.contentservice.DownloadUrlWorkspaceRequest;
  return proto.contentservice.DownloadUrlWorkspaceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.contentservice.DownloadUrlWorkspaceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.contentservice.DownloadUrlWorkspaceRequest}
 */
proto.contentservice.DownloadUrlWorkspaceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkspaceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.contentservice.DownloadUrlWorkspaceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.contentservice.DownloadUrlWorkspaceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.contentservice.DownloadUrlWorkspaceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contentservice.DownloadUrlWorkspaceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkspaceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string owner_id = 1;
 * @return {string}
 */
proto.contentservice.DownloadUrlWorkspaceRequest.prototype.getOwnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.contentservice.DownloadUrlWorkspaceRequest.prototype.setOwnerId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workspace_id = 2;
 * @return {string}
 */
proto.contentservice.DownloadUrlWorkspaceRequest.prototype.getWorkspaceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.contentservice.DownloadUrlWorkspaceRequest.prototype.setWorkspaceId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.contentservice.DownloadUrlWorkspaceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.contentservice.DownloadUrlWorkspaceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.contentservice.DownloadUrlWorkspaceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contentservice.DownloadUrlWorkspaceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.contentservice.DownloadUrlWorkspaceResponse}
 */
proto.contentservice.DownloadUrlWorkspaceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.contentservice.DownloadUrlWorkspaceResponse;
  return proto.contentservice.DownloadUrlWorkspaceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.contentservice.DownloadUrlWorkspaceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.contentservice.DownloadUrlWorkspaceResponse}
 */
proto.contentservice.DownloadUrlWorkspaceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.contentservice.DownloadUrlWorkspaceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.contentservice.DownloadUrlWorkspaceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.contentservice.DownloadUrlWorkspaceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contentservice.DownloadUrlWorkspaceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.contentservice.DownloadUrlWorkspaceResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.contentservice.DownloadUrlWorkspaceResponse.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.contentservice.DeleteWorkspaceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.contentservice.DeleteWorkspaceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.contentservice.DeleteWorkspaceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contentservice.DeleteWorkspaceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workspaceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    includeSnapshots: jspb.Message.getFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.contentservice.DeleteWorkspaceRequest}
 */
proto.contentservice.DeleteWorkspaceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.contentservice.DeleteWorkspaceRequest;
  return proto.contentservice.DeleteWorkspaceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.contentservice.DeleteWorkspaceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.contentservice.DeleteWorkspaceRequest}
 */
proto.contentservice.DeleteWorkspaceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkspaceId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeSnapshots(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.contentservice.DeleteWorkspaceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.contentservice.DeleteWorkspaceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.contentservice.DeleteWorkspaceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contentservice.DeleteWorkspaceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkspaceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIncludeSnapshots();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string owner_id = 1;
 * @return {string}
 */
proto.contentservice.DeleteWorkspaceRequest.prototype.getOwnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.contentservice.DeleteWorkspaceRequest.prototype.setOwnerId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workspace_id = 2;
 * @return {string}
 */
proto.contentservice.DeleteWorkspaceRequest.prototype.getWorkspaceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.contentservice.DeleteWorkspaceRequest.prototype.setWorkspaceId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool include_snapshots = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.contentservice.DeleteWorkspaceRequest.prototype.getIncludeSnapshots = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.contentservice.DeleteWorkspaceRequest.prototype.setIncludeSnapshots = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.contentservice.DeleteWorkspaceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.contentservice.DeleteWorkspaceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.contentservice.DeleteWorkspaceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contentservice.DeleteWorkspaceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.contentservice.DeleteWorkspaceResponse}
 */
proto.contentservice.DeleteWorkspaceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.contentservice.DeleteWorkspaceResponse;
  return proto.contentservice.DeleteWorkspaceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.contentservice.DeleteWorkspaceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.contentservice.DeleteWorkspaceResponse}
 */
proto.contentservice.DeleteWorkspaceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.contentservice.DeleteWorkspaceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.contentservice.DeleteWorkspaceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.contentservice.DeleteWorkspaceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contentservice.DeleteWorkspaceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.contentservice);
