"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUtil = void 0;
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compress = require("compression");
const methodOverride = require("method-override");
const expressWinston = require("express-winston");
global.Promise = require('q').Promise;
class AppUtil {
}
exports.AppUtil = AppUtil;
AppUtil.configureApp = (app) => {
    if (process.env.NODE_ENV === 'development') {
        app.use(logger('dev'));
    }
    // secure apps by setting various HTTP headers
    app.use(helmet());
    // enable CORS - Cross Origin Resource Sharing
    const corsOptions = {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 200,
    };
    // app.options('*', cors(corsOptions))
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(cookieParser());
    app.use(compress());
    app.use(methodOverride());
    // enable detailed API logging in dev env
    if (process.env.NODE_ENV === 'development') {
        expressWinston.requestWhitelist.push('body');
        expressWinston.responseWhitelist.push('body');
    }
    return app;
};
