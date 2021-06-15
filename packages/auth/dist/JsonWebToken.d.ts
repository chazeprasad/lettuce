export declare class JsonWebToken {
    static SECRET: string;
    static encode(payload: any): string;
    static decode(token: string): string | object;
}
