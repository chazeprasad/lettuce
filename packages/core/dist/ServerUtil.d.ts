/// <reference types="node" />
import * as http from 'http';
export declare class ServerUtil {
    static configureServer: (server: http.Server) => http.Server;
    static startServer: (server: http.Server) => void;
}
