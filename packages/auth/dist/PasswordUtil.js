"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordUtil = void 0;
const bcrypt = require("bcrypt");
class PasswordUtil {
    static compare(plain, encrypted) {
        if (plain !== null && encrypted !== null) {
            console.log('compare');
            console.log(plain);
            console.log(encrypted);
            const match = bcrypt.compareSync(plain, encrypted);
            console.log(match);
            return match;
        }
        else {
            throw new Error('Invalid params..!!');
        }
    }
    static hash(password) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    }
}
exports.PasswordUtil = PasswordUtil;
