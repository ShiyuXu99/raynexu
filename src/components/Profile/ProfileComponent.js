import React from 'react';
import {Box, Typography, Link, styled} from "@mui/material";
import { profilePic } from '../../assets/images';
import { LinkedIn, School, Description, Google } from '@mui/icons-material';
import StyledLogoWithLink from "../StyledComponents/StyledLogoWithLink";

function ProfileComponent() {
    return (
        <Box
            sx={{
                flex: 1.1,
                backgroundColor: '#ffffff', // White background
                minWidth: '300px',
            }}
        >
            <Box
                sx={{
                    margin: '24px',
                }}
            >
                {/* Profile Picture */}
                <Box
                    sx={{
                        maxWidth: { sm: '400px' }, // Adjust for different screen sizes
                        width: '100%', // Ensure the image scales appropriately
                        margin: '0 auto', // Center the image
                    }}
                >
                    <img
                        src={profilePic}
                        alt="profile picture"
                        style={{
                            width: '100%',
                            marginBottom: '16px',
                        }}
                    />
                </Box>

                {/* Social Media Links */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '16px', // Space between icons
                    }}
                >
                    <StyledLogoWithLink url="https://www.linkedin.com" icon={School} />
                    {/* LinkedIn Link */}
                    <StyledLogoWithLink url="https://www.linkedin.com" icon={LinkedIn} />
                </Box>

                {/* Resume Part */}
                <Box>
                    <Typography variant="h2">Education</Typography>
                    <Typography variant="body1">
                        This is the left section, now properly sized.
                    </Typography>
                </Box>


            </Box>
        </Box>
    );
}

export default ProfileComponent;
