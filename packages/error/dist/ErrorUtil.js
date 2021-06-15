"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorUtil = exports.INJECT_PREFIX = void 0;
require("reflect-metadata");
const status_1 = require("@lettuce/status");
const BaseExceptionHandler_1 = require("./BaseExceptionHandler");
const ApiError_1 = require("./ApiError");
exports.INJECT_PREFIX = '$$inject_';
class ErrorUtil {
}
exports.ErrorUtil = ErrorUtil;
ErrorUtil.loadExceptionHandler = (root) => {
    const dir = root;
    let list = [];
    try {
        const Handler = require(`${dir}/api.exception`);
        list = Handler.include;
    }
    catch (error) {
        console.log(error);
    }
    return list;
};
ErrorUtil.configureExceptionHandler = (root, app) => {
    const handler = ErrorUtil.loadExceptionHandler(root);
    app.all('*', (req, res, next) => {
        res.status(404).json({
            status: 'error',
            message: `Can't find ${req.originalUrl} on this server!`,
        });
    });
    app.use((err, req, res, next) => {
        let result = {
            message: 'Unknown Error',
            status: status_1.HttpStatus.INTERNAL_SERVER_ERROR,
        };
        if (err instanceof ApiError_1.ApiError) {
            if (handler) {
                result = BaseExceptionHandler_1.BaseExceptionHandler.handle(err, handler);
            }
            else {
                result = {
                    message: 'Unknown Error',
                    status: status_1.HttpStatus.INTERNAL_SERVER_ERROR,
                };
            }
        }
        else {
            result = {
                message: err.message,
                status: status_1.HttpStatus.INTERNAL_SERVER_ERROR,
            };
        }
        res.status(result.status).json({
            status: 'error',
            message: result.message,
            stack: process.env.NODE_ENV === 'production' ? {} : err.stack,
        });
    });
};
