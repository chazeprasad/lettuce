"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerUtil = void 0;
const logger_1 = require("@lettuce/logger");
const DefaultPort = 5555;
let PORT = process.env.PORT || DefaultPort;
function onError(error) {
    PORT = process.env.PORT || DefaultPort;
    if (error.syscall !== 'listen')
        throw error;
    const bind = typeof PORT === 'string' ? `Pipe ${PORT}` : `Port ${PORT}`;
    switch (error.code) {
        case 'EACCES':
            logger_1.Logger.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger_1.Logger.error(`${bind} is already in use`);
            process.exit(1);
            break;
        case 'SIGTERM':
            logger_1.Logger.error(error.stack ? error.stack : error.toString());
            process.exit(1);
            break;
        case 'SIGINT':
            logger_1.Logger.error(error.stack ? error.stack : error.toString());
            process.exit(1);
            break;
        default:
            logger_1.Logger.log(error.stack ? error.stack : error.toString());
            throw error;
    }
}
function onListening() {
    PORT = process.env.PORT || DefaultPort;
    logger_1.Logger.info(`server started on http://127.0.0.1:${PORT}; press Ctrl-C to terminate.`);
}
class ServerUtil {
}
exports.ServerUtil = ServerUtil;
ServerUtil.configureServer = (server) => {
    PORT = process.env.PORT || DefaultPort;
    server.on('error', onError);
    server.on('listening', onListening);
    return server;
};
ServerUtil.startServer = (server) => {
    PORT = process.env.PORT || DefaultPort;
    server.listen(PORT);
};
