/// <reference types="node" />
import * as express from 'express';
import * as http from 'http';
import { Base } from '@lettuce/common';
export interface AppConfig {
    appRoot: string | any;
    staticRoot?: string;
    cors?: any;
}
export declare class Lettuce extends Base {
    appConfig: AppConfig;
    app: express.Application;
    server: http.Server;
    constructor(config: AppConfig);
    preInitialize(): void;
    initialize(): void;
    setup(): void;
    startup(): void;
}
