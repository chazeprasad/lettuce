"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonWebToken = void 0;
const JWT = require("jsonwebtoken");
const error_1 = require("@lettuce/error");
class JsonWebToken {
    static encode(payload) {
        const token = JWT.sign(payload, JsonWebToken.SECRET, { expiresIn: '300d' });
        return token;
    }
    static decode(token) {
        let body = '';
        try {
            body = JWT.verify(token, JsonWebToken.SECRET);
        }
        catch (error) {
            throw new error_1.InvalidTokenError(error.message);
        }
        return body;
    }
}
exports.JsonWebToken = JsonWebToken;
JsonWebToken.SECRET = process.env.JWT_SECRET || '1d62ada3461$a091c38c95c!0388c8a1a2';
