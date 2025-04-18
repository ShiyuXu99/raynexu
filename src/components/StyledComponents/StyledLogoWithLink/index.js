import { Link, styled } from "@mui/material";
import React from 'react';

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    '&:hover': {
        color: theme.palette.primary.dark,
    },
}));

const StyledLogoWithLink = ({ url, icon: Icon, iconSize = 'medium' }) => {
    return (
        <StyledLink href={url} target="_blank">
            <Icon fontSize={iconSize} />
        </StyledLink>
    );
};

export default StyledLogoWithLink;
