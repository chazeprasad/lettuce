import { IBeforeActionProps } from './IBeforeActionProps';
import { IAfterActionProps } from './IAfterActionProps';
declare const BeforeAction: (param: Function | (IBeforeActionProps | Function)[], actions?: Pick<IBeforeActionProps, 'except' | 'only'>) => (target: any) => void;
declare const SkipBeforeAction: (param: Function | (IBeforeActionProps | Function)[], actions?: Pick<IBeforeActionProps, 'except' | 'only'>) => (target: any) => void;
declare const AfterAction: (param: Function | (IAfterActionProps | Function)[], actions?: Pick<IAfterActionProps, 'except' | 'only'>) => (target: any) => void;
declare const SkipAfterAction: (param: Function | (IAfterActionProps | Function)[], actions?: Pick<IAfterActionProps, 'except' | 'only'>) => (target: any) => void;
export { BeforeAction, SkipBeforeAction, AfterAction, SkipAfterAction };
