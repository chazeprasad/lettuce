"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseExceptionHandler = void 0;
const common_1 = require("@lettuce/common");
class BaseExceptionHandler extends common_1.Base {
    constructor() {
        super(...arguments);
        this.list = [];
    }
    static handle(error, list) {
        for (let i = 0; i < list.length; i++) {
            const prop = list[i];
            if (error instanceof prop.rescueFrom) {
                return prop.with.apply(null, [error]);
            }
        }
        return {
            message: 'Unknown Error',
            status: 500,
        };
    }
}
exports.BaseExceptionHandler = BaseExceptionHandler;
