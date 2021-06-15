export interface IRouteProps {
    method: string;
    url: string;
    middlewareList: [];
    actionName: string;
}
export declare const Route: (args: string) => (target: any) => void;
declare const Head: (...args: any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => void;
declare const Options: (...args: any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => void;
declare const Get: (...args: any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => void;
declare const Post: (...args: any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => void;
declare const Put: (...args: any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => void;
declare const Patch: (...args: any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => void;
declare const Delete: (...args: any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => void;
declare const Del: (...args: any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => void;
declare const All: (...args: any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => void;
export { Head, Options, Get, Post, Put, Patch, Delete, Del, All };
