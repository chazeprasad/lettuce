import * as express from 'express';
import * as http from 'http';
import { Base } from '@lettuce/common';
import { AppUtil } from './AppUtil';
import { ServerUtil } from './ServerUtil';
import { ControllerUtil } from '@lettuce/action';
import { ErrorUtil } from '@lettuce/error';

export interface AppConfig {
    appRoot: string | any;
    staticRoot?: string;
    cors?: any;
}

export class Lettuce extends Base {
    public appConfig: AppConfig;

    public app: express.Application;

    public server: http.Server;

    constructor(config: AppConfig) {
        super();
        this.appConfig = config;

        this.preInitialize();
    }

    preInitialize() {
        this.app = express();
        AppUtil.configureApp(this.app);
    }

    initialize() {
        ControllerUtil.configureController(this.appConfig.appRoot + '/controller', this.app);
        ErrorUtil.configureExceptionHandler(this.appConfig.appRoot + '/error', this.app);
    }

    setup() {
        this.server = http.createServer(this.app);
        ServerUtil.configureServer(this.server);
    }

    startup() {
        this.initialize();
        this.setup();
        ServerUtil.startServer(this.server);
    }
}
