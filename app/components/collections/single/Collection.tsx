import Top from '../Top';
import React from 'react';
import Files from './Files';
import { File } from '../types';
import { Stack } from '@mui/material';
import { appSDK } from '~/lib/client/appsdk';
import Loading from '~/components/loading/Loading';

interface Collection {
    id: number; 
    name: string;
    files: File[];
}

interface CollectionProp {
    collectionId: any;
}

const Collection: React.FC<CollectionProp> = ({ collectionId }) => {
    const [collection, setCollection] = React.useState<Collection | null>(null);

    // ===================================================================>
    // ======================= GET SINGLE COLLECTION =====================>
    // ===================================================================>

    React.useEffect(() => {
        const fetchCollection = async () => {
            const sdk = appSDK();
            if (!sdk) throw new Error('Something went wrong!');
            const response = await sdk.getSingleCollection(collectionId);
            setCollection(response.data.collection);
        };

        fetchCollection();
    }, [collectionId]);

    if (!collection) {
        return <Loading />;
    }

    return (
        <Stack sx={{ mx: 4 }}>
            <Top name={collection.name} back={true} upload={true} uploadText='New file' />
            <Files files={collection.files} />
        </Stack>
    );
};

export default Collection;
