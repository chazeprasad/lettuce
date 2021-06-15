"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = exports.Del = exports.Delete = exports.Patch = exports.Put = exports.Post = exports.Get = exports.Options = exports.Head = exports.Route = void 0;
const ActionDecoratorUtil_1 = require("./ActionDecoratorUtil");
const inject_1 = require("@lettuce/inject");
const { ROUTE_PREFIX } = ActionDecoratorUtil_1.ActionDecoratorUtil;
const Route = (args) => {
    const ctrlPath = ActionDecoratorUtil_1.ActionDecoratorUtil.DestructApiDecorator(args).path;
    return target => {
        const proto = target.prototype;
        let routes = Object.getOwnPropertyNames(proto).filter(prop => prop.indexOf(ROUTE_PREFIX) === 0);
        routes = routes.map(prop => {
            const { method, path, middlewareList } = proto[prop];
            // const url = `${ctrlPath}${path}`;
            const url = `${path}`;
            const actionName = prop.substring(ROUTE_PREFIX.length);
            const routeProps = {
                method: method === 'del' ? 'delete' : method,
                url,
                middlewareList,
                actionName,
            };
            return routeProps;
        });
        target.prototype.path =
            target.prototype.path && target.prototype.path !== '/' ? target.prototype.path + ctrlPath : ctrlPath;
        target.prototype.routes = routes;
        inject_1.InjectUtil.configureInject(target);
    };
};
exports.Route = Route;
function route(method, ...args) {
    if (typeof method !== 'string') {
        throw new Error('The first argument must be an HTTP method');
    }
    const { path, middlewareList } = ActionDecoratorUtil_1.ActionDecoratorUtil.DestructRouteDecorator(args);
    return function (target, name, descriptor) {
        target[`${ROUTE_PREFIX}${name}`] = {
            method,
            path,
            middlewareList,
        };
    };
}
const Head = route.bind(null, 'head');
exports.Head = Head;
const Options = route.bind(null, 'options');
exports.Options = Options;
const Get = route.bind(null, 'get');
exports.Get = Get;
const Post = route.bind(null, 'post');
exports.Post = Post;
const Put = route.bind(null, 'put');
exports.Put = Put;
const Patch = route.bind(null, 'patch');
exports.Patch = Patch;
const Delete = route.bind(null, 'delete');
exports.Delete = Delete;
const Del = route.bind(null, 'del');
exports.Del = Del;
const All = route.bind(null, 'all');
exports.All = All;
