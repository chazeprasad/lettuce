export declare class ApiError extends Error {
    message: string;
    status?: string;
    isPublic?: boolean;
    constructor(message: any, status?: any, isPublic?: boolean);
}
export declare class AuthenticationError extends ApiError {
}
export declare class MissingTokenError extends ApiError {
}
export declare class InvalidTokenError extends ApiError {
}
export declare class InvalidUsernameError extends ApiError {
}
export declare class MissingVersionError extends ApiError {
}
export declare class RecordNotFoundError extends ApiError {
}
export declare class InvalidObjectIdError extends ApiError {
}
