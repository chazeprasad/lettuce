"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionDecoratorUtil = void 0;
class ActionDecoratorUtil {
    static DestructRouteDecorator(args) {
        if (args.length === 0) {
            throw new Error('Missing Route path');
        }
        if (typeof args !== 'string' && typeof args[0] !== 'string') {
            throw new Error('Route path must be string');
        }
        const list = args.length > 1 ? args[1] : [];
        const path = typeof args !== 'string' ? args[0] : args;
        return { path, middlewareList: list };
    }
    static DestructApiDecorator(args) {
        if (args.length === 0) {
            throw new Error('Missing Route path');
        }
        if (typeof args !== 'string' && typeof args[0] !== 'string') {
            throw new Error('Route path must be string');
        }
        const path = typeof args !== 'string' ? args[0] : args;
        return { path };
    }
}
exports.ActionDecoratorUtil = ActionDecoratorUtil;
ActionDecoratorUtil.ROUTE_PREFIX = '$$route_';
ActionDecoratorUtil.GetClassName = (target) => target.constructor.name;
