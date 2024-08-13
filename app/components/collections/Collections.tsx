import React from 'react';
import Top from './Top';
import Modal from './Modal';
import { File } from './types';
import { Link } from '@remix-run/react';
import Loading from '../loading/Loading';
import { appSDK } from '~/lib/client/appsdk';
import { collectionContainer, folder } from './Style';
import { Delete, Edit, Folder } from '@mui/icons-material';
import CreateOrEditCollection from './CreateOrEditCollection';
import { Box, Container, IconButton, List, ListItem, ListItemIcon, 
ListItemSecondaryAction, ListItemText } from '@mui/material';

interface Collection {
    id: number;
    name: string;
    files: File[];
}

const Collections: React.FC = () => {

    // Modal States

    const [isCreate, setIsCreate] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState<boolean>(false);
    const [isDelete, setIsDelete] = React.useState<boolean>(false);

    // Stores

    const [collections, setCollections] = React.useState<Collection[]>([]);
    const [collectionName, setCollectionName] = React.useState<string>('');
    const [currentCollectionId, setCurrentCollectionId] = React.useState<number|null>(null);

    // ===================================================================>
    // ======================= GET ALL COLLECTIONS =======================>
    // ===================================================================>

    React.useEffect(() => {
        const fetchCollections = async () => {
            const sdk = appSDK();
            if(!sdk) throw new Error('Something went wrong!');
            const response = await sdk.getManyCollections();
            setCollections(response.data.collections);
        };

        fetchCollections();
    }, []);

    // ===================================================================>
    // ======================== CREATE COLLECTIONS =======================>
    // ===================================================================>

    const addCollection = () => setIsCreate(true);
    const createCollection = async (name:string) => {
        const sdk = appSDK();
        if(!sdk) throw new Error('Something went wrong!');
        const response = await sdk.createCollection(name);
        setCollections([...collections, response.data.collection])
        handleClose();
    }

    // ===================================================================>
    // ======================== DELETE COLLECTION ========================>
    // ===================================================================>

    const openDeleteModal = () => setIsDelete(true)
    const deleteCollection = async () => {
        const sdk = appSDK();
        if (!sdk) throw new Error('Something went wrong!');
        const response = await sdk.deleteCollection(Number(currentCollectionId));
        const collectionId = response.data.deletedCollection.id
        const newCollection = collections.filter((collection) => {
            return collection.id !== collectionId;
        });
        setCollections(newCollection); setIsDelete(false);
    }
    
    // ===================================================================>
    // ========================== EDIT COLLECTION ========================>
    // ===================================================================>

    const openEditCollection = (id:number) => {
        setIsEdit(true)
        const collection = collections.find(collection => collection.id === Number(id));
        setCollectionName(collection?.name ?? '');
    };

    const editCollection = async (name: string) => {
        const sdk = appSDK();
        if (!sdk) throw new Error('Something went wrong!');
        
        const response = await sdk.patchCollection(Number(currentCollectionId), name);
        const updatedCollection = response.data.collection;

        setCollections((prevCollections) =>
            prevCollections.map((collection) =>
                collection.id === updatedCollection.id ? updatedCollection : collection
            )
        );
        
        setCollectionName('');
        setIsEdit(false);
    };
    
    // ===================================================================>
    // ========================= END OF SDK SECTION ======================>
    // ===================================================================>

    const closeModal = () => {
        setCurrentCollectionId(null);
        setIsDelete(false);
        setIsEdit(false);
    }
    
    const handleClose = () => {
        setIsEdit(false);
        setIsCreate(false);
        setCollectionName('');
        setCurrentCollectionId(null);
    };

    if (!collections) {
        return <Loading />;
    }

    return (
        <Container sx={collectionContainer}>
            <Top action={addCollection} name='Storage' uploadText='New collection' />
            <List>
                {collections.map((collection) => (
                    <ListItem key={collection.id}>
                        <Link style={{ textDecoration: 'none', display: 'flex' }} to={`${collection.id}`}>
                            <ListItemIcon><Folder /></ListItemIcon>
                            <ListItemText primary={<Box sx={folder}>{collection.name}</Box>} />
                        </Link>
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => {setCurrentCollectionId(collection.id); openEditCollection(collection.id)}} color='primary'><Edit /></IconButton>
                            <IconButton onClick={() => {setCurrentCollectionId(collection.id); openDeleteModal()}} color='error'><Delete /></IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <Modal open={isDelete} title="Delete Collection" action={deleteCollection} close={closeModal} text='Are you sure you want to delete this collection?' />

            {/* Collection */}
            <CreateOrEditCollection 
                isEdit={isEdit}
                isCreate={isCreate}
                close={handleClose} 
                name={collectionName}
                setName={setCollectionName}
                createCollection={createCollection}
                editCollection={editCollection}
            />
            
        </Container>
    );
};

export default Collections;
