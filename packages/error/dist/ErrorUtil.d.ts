import 'reflect-metadata';
import { IRescueProp } from './IRescueProp';
export declare const INJECT_PREFIX = "$$inject_";
export declare class ErrorUtil {
    static loadExceptionHandler: (root: string) => IRescueProp[];
    static configureExceptionHandler: (root: string, app?: any) => void;
}
