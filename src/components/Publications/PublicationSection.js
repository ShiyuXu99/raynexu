import React from 'react';
import { Box } from '@mui/material';
import publicationsData from './publicationsData.js';
import PublicationComponent from './PublicationComponent';

function PublicationSection() {
    console.log(publicationsData)
    return (
        <Box>
            {publicationsData.map((publicationInfo) => {
                // Debug: Log to check if data is being passed
                console.log(publicationInfo);
                return (
                    <PublicationComponent
                        key={publicationInfo.id}
                        publicationInfo={publicationInfo}
                    />
                );
            })}
        </Box>
    );
}

export default PublicationSection;
