import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { AppApiHandler, AppApiHandlerOptions } from "~/lib/server/app-api-handler.server";
import { sessionStorage } from "~/services/session.server";

// Methods !GET
export const action = async (args: ActionFunctionArgs) => {
    return await new Handler().runWithArgs(args);
};

// GET
export const loader = async (args: LoaderFunctionArgs) => {
    return await new Handler().runWithArgs(args, { sessionStore: sessionStorage });
};

class Handler extends AppApiHandler {

    async get( args: LoaderFunctionArgs, options: AppApiHandlerOptions ) {
        const { params } = args;
        const { noteID = null } = params || {};

        const sessionData = await this.getSessionData();
        const token = await this.getAccessTokenFromSession();

        return this.resultDataWithStatus( { value: noteID }, 400);
    }

    async put( args: LoaderFunctionArgs, options: AppApiHandlerOptions) {

    }

}