"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const debug_1 = require("debug");
const BASE = 'App';
// const COLOUR = {
//     LOG: '#1abc9c',
//     TRACE: '#6ab04c',
//     INFO: '#0abde3',
//     WARN: '#f39c12',
//     ERROR: '#eb3b5a',
// };
const enabled = true; // process.env.NODE_ENV === AppEnv.PRODUCTION
const GenerateMessage = (context, level, message, source) => {
    const namespace = `${context}:${level}`;
    const log = debug_1.default(namespace);
    // log.color = COLOUR[level]
    log.enabled = enabled;
    debug_1.default.enable(namespace);
    if (source) {
        log(source, message);
    }
    else {
        log(message);
    }
};
class Logger {
    static trace(message, source, context = BASE) {
        return GenerateMessage(context, 'TRACE', message, source);
    }
    static log(message, source, context = BASE) {
        return GenerateMessage(context, 'LOG', message, source);
    }
    static info(message, source, context = BASE) {
        return GenerateMessage(context, 'INFO', message, source);
    }
    static warn(message, source, context = BASE) {
        return GenerateMessage(context, 'WARN', message, source);
    }
    static error(message, source, context = BASE) {
        return GenerateMessage(context, 'ERROR', message, source);
    }
    static print(message, source, context = BASE) {
        return GenerateMessage(context, 'INFO', message, source);
    }
}
exports.Logger = Logger;
