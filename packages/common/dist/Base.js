"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const logger_1 = require("@lettuce/logger");
const inject_1 = require("@lettuce/inject");
class Base {
    constructor() {
        this.name = this.constructor.name;
        this.log = msg => logger_1.Logger.print(msg, undefined, `${this.name}`);
        this.injects = this.injects || [];
        console.log(this.name);
        console.log(this.injects);
        this.injects.map(x => {
            this[x.injectName] = inject_1.Injector.resolve(x.source.name);
        });
        this.injectable && inject_1.Injector.add(this, this.name);
    }
}
exports.Base = Base;
