"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerUtil = void 0;
const path = require("path");
const fs = require("fs");
const express_1 = require("express");
class ControllerUtil {
    static getControllerName(filename) {
        const list = filename.split('-');
        let id = '';
        for (let i = 0; i < list.length; i++) {
            const part = list[i];
            id += part.charAt(0).toUpperCase() + part.slice(1);
        }
        return id;
    }
}
exports.ControllerUtil = ControllerUtil;
ControllerUtil.loadController = (root) => {
    const list = [];
    try {
        const dir = root;
        const files = fs.readdirSync(dir);
        for (let i = 0; i < files.length; i++) {
            const filename = path.basename(files[i]);
            const index = filename.indexOf('Controller.');
            if (index !== -1) {
                const identity = `${ControllerUtil.getControllerName(filename.substring(0, index))}Controller`;
                // var router = require(dir + '/' + filename).default;
                const ctrl = require(`${dir}/${filename}`);
                const c = new ctrl[identity]();
                const rtr = express_1.Router();
                if (c.routes && c.routes.length > 0) {
                    c.configureRouter(rtr);
                    list.push(c);
                }
            }
        }
    }
    catch (error) {
        console.log(error);
    }
    return list;
};
ControllerUtil.configureController = (root, app) => {
    const routes = ControllerUtil.loadController(root);
    routes.map(route => {
        app.use(route.path, route.router);
        // app.use('/', route.router);
    });
};
