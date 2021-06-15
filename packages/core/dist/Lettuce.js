"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lettuce = void 0;
const express = require("express");
const http = require("http");
const common_1 = require("@lettuce/common");
const AppUtil_1 = require("./AppUtil");
const ServerUtil_1 = require("./ServerUtil");
const action_1 = require("@lettuce/action");
const error_1 = require("@lettuce/error");
class Lettuce extends common_1.Base {
    constructor(config) {
        super();
        this.appConfig = config;
        this.preInitialize();
    }
    preInitialize() {
        this.app = express();
        AppUtil_1.AppUtil.configureApp(this.app);
    }
    initialize() {
        action_1.ControllerUtil.configureController(this.appConfig.appRoot + '/controller', this.app);
        error_1.ErrorUtil.configureExceptionHandler(this.appConfig.appRoot + '/error', this.app);
    }
    setup() {
        this.server = http.createServer(this.app);
        ServerUtil_1.ServerUtil.configureServer(this.server);
    }
    startup() {
        this.initialize();
        this.setup();
        ServerUtil_1.ServerUtil.startServer(this.server);
    }
}
exports.Lettuce = Lettuce;
