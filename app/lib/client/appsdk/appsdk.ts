import { BaseSDK, generateSDK, UA, UAConfigOptions } from "@dpcomp/io-base-sdk";

const APP_API_BASEURL = `http://localhost:3000/api`;

export interface AppSDK extends BaseSDK {
    getManyCollections: () => Promise<any>;
    getSingleCollection: (id:number) => Promise<any>;
    createCollection: (name:string) => Promise<any>;
    deleteCollection: (id: number) => Promise<any>;
    patchCollection: (id: number, name:string) => Promise<any>;
}

export function appSDK(options: UAConfigOptions = {}): AppSDK | undefined {
    return generateSDK<AppSDK>(
        {
            baseURL: APP_API_BASEURL,
            ...options
        },
        (ua: UA) => {
            const api: AppSDK = {
                version: '0.0.1',
                setAuthData: ua.setAuthData,
                ping: () => ua.get(`/api/ping`),

                // =========================================================>
                // ================ GET MANY COLLECTIONS ===================>
                // =========================================================>

                getManyCollections: async () => {
                    return await ua.get(`/collections`).toPromise();
                },

                // =========================================================>
                // ================ GET SINGLE COLLECTION ==================>
                // =========================================================>

                getSingleCollection: async (id:number) => {
                    return await ua.get(`/collections/${id}`).toPromise();
                },

                // =========================================================>
                // ================ CREATE SINGLE COLLECTION ===============>
                // =========================================================>

                createCollection: async (name: string) => {
                    return await ua.post(`/collections`, {}, { name }).toPromise();
                },

                // =========================================================>
                // ================ DELETE SINGLE COLLECTION ===============>
                // =========================================================>

                deleteCollection: async (id: number) => {
                    return await ua.delete(`/collections/${id}`).toPromise();
                },
                
                // =========================================================>
                // ================= PATCH SINGLE COLLECTION ===============>
                // =========================================================>

                patchCollection: async(id: number, name: string) => {
                    return await ua.patch(`/collections/${id}`, {}, {name}).toPromise();
                }
                
            };

            return api;
        }
    );
}

