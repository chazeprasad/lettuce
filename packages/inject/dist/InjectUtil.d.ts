import 'reflect-metadata';
export declare const INJECT_PREFIX = "$$inject_";
export declare class InjectUtil {
    static getResourceName(filename: any): string;
    static loadResource(root: string): any[];
    static configureInject(target: any): any[];
    static configureResource(root: string, app?: any): void;
}
