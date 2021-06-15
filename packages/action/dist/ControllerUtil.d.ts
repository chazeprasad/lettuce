export declare class ControllerUtil {
    static getControllerName(filename: any): string;
    static loadController: (root: string) => any[];
    static configureController: (root: string, app: any) => void;
}
