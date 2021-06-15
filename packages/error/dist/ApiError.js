"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidObjectIdError = exports.RecordNotFoundError = exports.MissingVersionError = exports.InvalidUsernameError = exports.InvalidTokenError = exports.MissingTokenError = exports.AuthenticationError = exports.ApiError = void 0;
class ApiError extends Error {
    constructor(message, status, isPublic) {
        super(message);
        this.message = message;
        this.status = status;
        this.isPublic = isPublic;
    }
}
exports.ApiError = ApiError;
class AuthenticationError extends ApiError {
}
exports.AuthenticationError = AuthenticationError;
class MissingTokenError extends ApiError {
}
exports.MissingTokenError = MissingTokenError;
class InvalidTokenError extends ApiError {
}
exports.InvalidTokenError = InvalidTokenError;
class InvalidUsernameError extends ApiError {
}
exports.InvalidUsernameError = InvalidUsernameError;
class MissingVersionError extends ApiError {
}
exports.MissingVersionError = MissingVersionError;
class RecordNotFoundError extends ApiError {
}
exports.RecordNotFoundError = RecordNotFoundError;
class InvalidObjectIdError extends ApiError {
}
exports.InvalidObjectIdError = InvalidObjectIdError;
