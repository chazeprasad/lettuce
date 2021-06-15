"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injector = void 0;
class Injector {
    static add(target, key) {
        Injector._Map[key] = target;
    }
    static resolve(key) {
        return Injector._Map[key];
    }
    static map() {
        return Injector._Map;
    }
}
exports.Injector = Injector;
Injector._Map = {};
