export declare class ActionDecoratorUtil {
    static ROUTE_PREFIX: string;
    static GetClassName: (target: any) => string;
    static DestructRouteDecorator(args: any): {
        path: any;
        middlewareList: any;
    };
    static DestructApiDecorator(args: any): {
        path: any;
    };
}
