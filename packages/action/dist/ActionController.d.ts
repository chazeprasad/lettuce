import { Base } from '@lettuce/common';
export declare type Middleware = (req?: any, res?: any, next?: any) => any;
declare class ActionController extends Base {
    router: any;
    routes: any;
    beforeActionList: any;
    beforeActionSkipList: any;
    afterActionList: any;
    afterActionSkipList: any;
    constructor();
    configureRouter(router: any): void;
    getFinalHooks(srcList: any, rmList: any): any[];
    getHooksByName(name: string, actionList: any): any[];
}
export { ActionController };
