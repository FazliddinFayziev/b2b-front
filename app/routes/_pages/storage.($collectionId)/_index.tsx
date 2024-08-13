import React from 'react';
import { Box } from '@mui/material';
import { useParams } from '@remix-run/react';
import { Collection, Collections } from '~/components';

const Storage: React.FC = () => {
  const { collectionId } = useParams();

  if (collectionId) {
    return <Collection collectionId={collectionId} />;
  }

  return (
    <Box>
      <Collections />
    </Box>
  );
};

export default Storage;
