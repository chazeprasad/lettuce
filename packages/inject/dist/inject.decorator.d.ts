import 'reflect-metadata';
export declare function Inject(props?: any): (target: any, name: string) => void;
export declare const Injectable: () => (target: any) => void;
export declare const Consumer: (args?: string) => (target: any) => void;
