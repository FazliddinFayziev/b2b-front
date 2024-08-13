import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { AppApiHandler } from "~/lib/server/app-api-handler.server";
import { sessionStorage } from "~/services/session.server";

interface File {
    id: number;
    name: string;
    time: string;
}

interface Collection {
    id: number;
    name: string;
    files: File[];
}

const collections: Collection[] = [
    {
        id: 1,
        name: "Collection1",
        files: [
            { id: 1, name: "FileA.jpg", time: "1 day ago" },
            { id: 2, name: "FileB.docx", time: "2 days ago" },
        ],
    },
    {
        id: 2,
        name: "Collection2",
        files: [
            { id: 1, name: "FileC.png", time: "3 days ago" },
            { id: 2, name: "FileD.pdf", time: "4 days ago" },
        ],
    },
];

// Methods !GET
export const action = async (args: ActionFunctionArgs) => {
    return await new CollectionsHandler().runWithArgs(args, { sessionStore: sessionStorage });
};

// GET
export const loader = async (args: LoaderFunctionArgs) => {
    return await new CollectionsHandler().runWithArgs(args, { sessionStore: sessionStorage });
};

class CollectionsHandler extends AppApiHandler {

    // ====================================================================>
    // ============= GET COLLECTIONS AND GET SINGLE COLLECTION ============>
    // ====================================================================>

    async get(args: LoaderFunctionArgs) {
        const { params } = args;
        const { id = null } = params || {};

        const sessionData = await this.getSessionData();
        const token = await this.getAccessTokenFromSession();

        if (id) {
            const collection = collections.find((collection) => collection.id === parseInt(id, 10));
            if (collection) return this.resultDataWithStatus({ collection }, 200);
            return this.resultDataWithStatus({ error: "Collection not found" }, 404);
        } else {
            return this.resultDataWithStatus({ collections }, 200);
        }
    }

    // ====================================================================>
    // ======================= CREATE COLLECTION ==========================>
    // ====================================================================>

    async post(args: ActionFunctionArgs) {
        const { request } = args;
        const body = await request.json();
        if (!body || !body.name) return this.resultDataWithStatus({ error: 'Invalid request payload' }, 400);
        const id = collections.length > 0 ? collections[collections.length - 1].id + 1 : 1
        const newCollection = { id, name: body.name, files: [] };
        collections.push(newCollection);
        return this.resultDataWithStatus({ collection: newCollection }, 201);
    }

    // ====================================================================>
    // ======================= DELETE COLLECTION ==========================>
    // ====================================================================>

    async delete(args: ActionFunctionArgs) {
        const { params } = args;
        const { id = null } = params || {};

        if (!id) return this.resultDataWithStatus({ error: 'Collection ID is required' }, 400);
        const collectionIndex = collections.findIndex((collection) => collection.id === Number(id));
        if (collectionIndex === -1) return this.resultDataWithStatus({ error: 'Collection not found' }, 404);

        const deletedCollection = collections.splice(collectionIndex, 1)[0];
    
        return this.resultDataWithStatus({ deletedCollection }, 200);
    }

    // ====================================================================>
    // ========================= EDIT COLLECTION ==========================>
    // ====================================================================>

    async patch(args: ActionFunctionArgs) {
        const { params, request } = args;
        const { id = null } = params || {};
        const body = await request.json();

        if (!body || !body.name || !id) return this.resultDataWithStatus({ error: 'Invalid request' }, 400);

        const collectionIndex = collections.findIndex((collection) => collection.id === Number(id));
        if (collectionIndex === -1) return this.resultDataWithStatus({ error: 'Collection not found' }, 404);

        collections[collectionIndex].name = body.name
        const collection = collections[collectionIndex]
    
        return this.resultDataWithStatus({ collection }, 200);
    }
 
}
