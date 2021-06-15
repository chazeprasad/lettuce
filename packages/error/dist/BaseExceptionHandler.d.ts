import { Base } from '@lettuce/common';
import { ApiError } from './ApiError';
import { IRescueProp } from './IRescueProp';
import { IRescueResultProp } from './IRescueResultProp';
export declare class BaseExceptionHandler extends Base {
    list: IRescueProp[];
    static handle(error: ApiError, list: IRescueProp[]): IRescueResultProp;
}
