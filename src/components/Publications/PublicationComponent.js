import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LaunchIcon from '@mui/icons-material/Launch';
function PublicationComponent({publicationInfo}) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                // backgroundColor: '#f4f6f8', // Light gray background
                padding: '6px', // Adds padding around the layout
            }}
            mb={7}
        >
            {/* Left Section */}
            <Box
                sx={{
                    width: '200px', // Fixed width for the left section
                    backgroundColor: '#ffffff',
                    padding: '8px',
                }}
            >
                <img
                    src={publicationInfo?.image}
                    alt={publicationInfo?.imageAlt}
                    style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
                />
            </Box>

            {/* Right Section */}
            <Box
                sx={{
                    flex: 1, // Right section takes up remaining space
                    marginLeft: '8px', // Adds space between left and right sections
                    backgroundColor: '#ffffff',
                    padding: '8px',
                }}
            >
                <Typography variant="subtitle1" sx={{ marginBottom: '16px' }}>
                    {publicationInfo?.title}
                </Typography>
                <Typography variant="body1" marginBottom={'5px'}>
                    {publicationInfo?.authors}
                </Typography>
                <Typography variant="italic">
                    {publicationInfo?.journal}
                </Typography>

                {/* Additional Information */}
                <Typography variant="body1" mt={2} mb={3}>
                    {publicationInfo?.description}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        gap: '3px', // Space between icons
                    }}
                    mt={2}
                >
                <Button variant="text"
                        size={'medium'}
                        startIcon={<PictureAsPdfIcon sx={{ marginRight: '-3px' }}
                        />}>
                    PDF
                </Button>
                <Button variant="text"
                        size={'medium'}
                        startIcon={<LaunchIcon sx={{ marginRight: '-3px' }} />}
                        // onClick =
                >
                    Paper
                </Button>
                </Box>

            {/*    <Box*/}
            {/*        sx={{*/}
            {/*            display: 'flex',*/}
            {/*            justifyContent: 'start',*/}
            {/*            gap: '8px', // Space between icons*/}
            {/*        }}*/}
            {/*        mt={3}*/}
            {/*    >*/}
            {/*        <StyledLogoWithLink url="https://www.linkedin.com" icon={PictureAsPdfIcon} />*/}
            {/*        /!* LinkedIn Link *!/*/}
            {/*        <StyledLogoWithLink url="https://www.linkedin.com" icon={LinkedIn} />*/}
            {/*    </Box>*/}


            </Box>
        </Box>
    );
}

export default PublicationComponent;
