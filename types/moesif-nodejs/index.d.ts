import {
    Middleware,
    Request,
    Response,
} from 'koa';

declare namespace moesifNodejs {
    type MoesifReqResFunction = (req: Request, res: Response) => string | undefined;

    export interface MoesifOptions {
        applicationId: string;
        logBody?: boolean;
        debug?: boolean;
        identifyUser?: MoesifReqResFunction;
        getSessionToken?: MoesifReqResFunction;
        identifyCompany?: MoesifReqResFunction;
        getApiVersion?: MoesifReqResFunction;
        getMetadata?: (req: Request, res: Response) => Object;
        skip?: (req: Request, res: Response) => boolean;
    }

    export interface MoesifNodejs {
        (options?: MoesifOptions): Middleware;
    }
}

declare const moesifNodejs: moesifNodejs.MoesifNodejs;
export = moesifNodejs;
