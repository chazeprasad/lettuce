"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
}
exports.Message = Message;
Message.RECORD_NOT_FOUND = 'Sorry, record not found.';
Message.INVALID_OBJECT_ID = 'Invalid Object ID.';
Message.INVALID_CREDENTIALS = 'Invalid credentials';
Message.INVALID_TOKEN = 'Invalid token';
Message.MISSING_TOKEN = 'Missing token';
Message.MISSING_VERSION = 'Missing version number. Specify an API version in the Accept header. Accept: application/vnd.alertizen+json; version=2;';
Message.INVALID_USERNAME = 'Invalid username. Enter a valid Email or Phone Number';
Message.UNAUTHORIZED = 'Unauthorized request';
Message.ACCOUNT_CREATED = 'Account created successfully';
Message.ACCOUNT_NOT_CREATED = 'Account could not be created';
Message.EXPIRED_TOKEN = 'Sorry, your token has expired. Please login to continue.';
