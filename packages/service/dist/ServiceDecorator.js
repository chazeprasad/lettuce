"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const ServiceDecoratorUtil_1 = require("./ServiceDecoratorUtil");
const Service = () => {
    return target => {
        target.prototype.injectable = true;
        ServiceDecoratorUtil_1.ServiceDecoratorUtil.configureInject(target);
    };
};
exports.Service = Service;
