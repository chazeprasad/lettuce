"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipAfterAction = exports.AfterAction = exports.SkipBeforeAction = exports.BeforeAction = void 0;
const ProcessBeforeAction = (skip) => (param, actions) => {
    return function (target) {
        const proto = target.prototype;
        let hookList = skip
            ? target.prototype.beforeActionSkipList
            : target.prototype.beforeActionList;
        let list;
        let props;
        if (Array.isArray(param)) {
            list = param.map(x => {
                return x instanceof Function ? { hook: x } : x;
            });
            hookList = hookList ? hookList.concat(list) : list;
        }
        else if (param instanceof Function) {
            props = Object.assign(Object.assign({}, actions), { hook: param });
            hookList = hookList ? hookList.concat([props]) : [props];
        }
        else {
            throw new Error('Param must be Function or Array');
        }
        if (skip) {
            target.prototype.beforeActionSkipList = hookList;
        }
        else {
            target.prototype.beforeActionList = hookList;
        }
    };
};
const ProcessAfterAction = (skip) => (param, actions) => {
    return function (target) {
        const proto = target.prototype;
        let hookList = skip
            ? target.prototype.afterActionSkipList
            : target.prototype.afterActionList;
        let list;
        let props;
        if (Array.isArray(param)) {
            list = param.map(x => {
                return x instanceof Function ? { hook: x } : x;
            });
            hookList = hookList ? hookList.concat(list) : list;
        }
        else if (param instanceof Function) {
            props = Object.assign(Object.assign({}, actions), { hook: param });
            hookList = hookList ? hookList.concat([props]) : [props];
        }
        else {
            throw new Error('Param must be Function or Array');
        }
        if (skip) {
            target.prototype.afterActionSkipList = hookList;
        }
        else {
            target.prototype.afterActionList = hookList;
        }
    };
};
const BeforeAction = ProcessBeforeAction(false);
exports.BeforeAction = BeforeAction;
const SkipBeforeAction = ProcessBeforeAction(true);
exports.SkipBeforeAction = SkipBeforeAction;
const AfterAction = ProcessAfterAction(false);
exports.AfterAction = AfterAction;
const SkipAfterAction = ProcessAfterAction(true);
exports.SkipAfterAction = SkipAfterAction;
