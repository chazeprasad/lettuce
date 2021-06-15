"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consumer = exports.Injectable = exports.Inject = void 0;
require("reflect-metadata");
const InjectUtil_1 = require("./InjectUtil");
function Inject(props) {
    return function (target, name) {
        const tokens = Reflect.getMetadata('design:type', target, name) || [];
        target[`${InjectUtil_1.INJECT_PREFIX}${name}`] = { source: tokens };
    };
}
exports.Inject = Inject;
const Injectable = () => {
    return target => {
        target.prototype.injectable = true;
    };
};
exports.Injectable = Injectable;
const Consumer = (args) => {
    return target => {
        InjectUtil_1.InjectUtil.configureInject(target);
    };
};
exports.Consumer = Consumer;
