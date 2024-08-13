import {
    type LoaderFunctionArgs,
    type ActionFunctionArgs,
    json,
    SessionStorage,
} from "@remix-run/node";

import type {
    ActionFunction as RRActionFunction,
    // ActionFunctionArgs as RRActionFunctionArgs,
    LoaderFunction as RRLoaderFunction,
    // LoaderFunctionArgs as RRLoaderFunctionArgs,
} from "@remix-run/router";

export const VERSION = '0.0.1' as const;

export type LoaderFunctionResult = ReturnType<RRLoaderFunction>;
export type AsyncActionFunctionResult<T = ReturnType<RRActionFunction>> = Promise<T> | T;

export type AsyncLoaderFunction<T = LoaderFunctionResult> = (args: LoaderFunctionArgs) => Promise<T> | T;
export type AsyncActionFunction<T = ReturnType<RRActionFunction>> = (args: ActionFunctionArgs) => Promise<T> | T;


export interface AppApiHandlerOptions {
    sessionStore?: SessionStorage,
    sessionKey?: string,
    resource?: string,
    ctx?: any,
    [key: string]: any
}

export interface AppApiInternalHandlers {
    GET: AsyncLoaderFunction,
    POST: AsyncActionFunction,
    PUT: AsyncActionFunction,
    PATCH: AsyncActionFunction,
    HEAD: AsyncActionFunction,
    DELETE: AsyncActionFunction,
    OPTIONS: AsyncActionFunction,
    CONNECT: AsyncActionFunction,
    TRACE: AsyncActionFunction,
}

export class AppApiHandler {

    public static readonly VERSION = VERSION;

    public handlerArgs: LoaderFunctionArgs | ActionFunctionArgs | undefined;
    public handlerOptions: AppApiHandlerOptions | undefined;
    public method: string | undefined;
    public handlers: any;
    public sessionStore: SessionStorage | undefined = undefined;
    public sessionKey: string = 'user';

    constructor() { }

    public runWithArgs(
        args: LoaderFunctionArgs | ActionFunctionArgs,
        options: AppApiHandlerOptions = {}
    ) {
        const { request, params = {} } = args;
        const { sessionStore, sessionKey = 'user' } = options;

        this.handlerArgs = args;
        this.handlerOptions = options;
        this.method = request?.method?.toUpperCase();

        this.sessionStore = sessionStore;
        this.sessionKey = sessionKey;

        return this.run();
    }

    public async getSession() {
        if (!this.handlerArgs || !this.sessionStore) {
            return undefined;
        }

        const { request } = this.handlerArgs;

        const cookie = request.headers.get("Cookie");
        let session: any = undefined;

        try {
            session = await this.sessionStore.getSession(cookie);
        } catch (e: any) {
            console.log(e.message);
        }

        return session;
    }

    public async getSessionData() {

        if (!this.sessionKey) {
            return undefined;
        }

        const session = await this.getSession();

        if (typeof session === 'undefined' || session === null) {
            return undefined;
        }

        const data = session?.get(this.sessionKey) || null;

        return data;
    }

    public async getAccessTokenFromSession() {

        const data = await this.getSessionData();

        if (!data) {
            return undefined;
        }

        const token = data.accessToken;
        const tokenExpiration = data.accessTokenExpiration;

        if (!token || !tokenExpiration) {
            return undefined;
        }

        return { token, tokenExpiration };
    }


    public get(args: LoaderFunctionArgs, options: AppApiHandlerOptions): LoaderFunctionResult {
        this.respondWithBadRequest();

        return this.resultDataWithStatus({}, 400);
    }

    public async post(args: ActionFunctionArgs, options: AppApiHandlerOptions): Promise<any> {
        this.respondWithBadRequest();
    }

    public async put(args: ActionFunctionArgs, options: AppApiHandlerOptions): Promise<any> {
        this.respondWithBadRequest();
    }

    public async patch(args: ActionFunctionArgs, options: AppApiHandlerOptions): Promise<any> {
        this.respondWithBadRequest();
    }

    public async head(args: ActionFunctionArgs, options: AppApiHandlerOptions) {
        this.respondWithBadRequest();
    }

    public async delete(args: ActionFunctionArgs, options: AppApiHandlerOptions): Promise<any> {
        this.respondWithBadRequest();
    }

    public async options(args: ActionFunctionArgs, options: AppApiHandlerOptions) {
        this.respondWithBadRequest();
    }

    public async connect(args: ActionFunctionArgs, options: AppApiHandlerOptions) {
        this.respondWithBadRequest();
    }

    public async trace(args: ActionFunctionArgs, options: AppApiHandlerOptions) {
        this.respondWithBadRequest();
    }

    async run() {

        if (!this.handlers) {
            this.handlers = {
                GET: this.get.bind(this),
                POST: this.post.bind(this),
                PUT: this.put.bind(this),
                PATCH: this.patch.bind(this),
                HEAD: this.head.bind(this),
                DELETE: this.delete.bind(this),
                OPTIONS: this.options.bind(this),
                CONNECT: this.connect.bind(this),
                TRACE: this.trace.bind(this)
            };
        }

        const handler = this.method && this.handlers[this.method];

        if (!handler) {
            this.respondWithBadRequest();
        }

        const loaderArgs = this.handlerArgs as LoaderFunctionArgs;
        const actionArgs = this.handlerArgs as ActionFunctionArgs;

        const isGet = this.method === 'GET';

        return await handler(isGet ? loaderArgs : actionArgs, this.handlerOptions);
    }

    respondWithBadRequest() {
        throw new Response('Bad Request', { status: 400 });
    }

    resultDataWithStatus(data: any, status: number, headers: Headers = new Headers()) {
        return json(
            data || {},
            {
                status,
                headers
            }
        );
    }
}
