import { createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#7591C7', // Blue
            dark: '#4E6B96', // Darker blue
            light: '#4791db', // Lighter blue
        },
        secondary: {
            main: '#dc004e', // Pink
            dark: '#9a0036', // Darker pink
            light: '#e33371', // Lighter pink
        },
        background: {
            default: '#f4f6f8', // Light gray
            paper: '#ffffff',   // White
        },
        text: {
            primary: '#4B5056', // Dark gray
            secondary: '#dce0e5', // Light gray
        },
    },
    typography: {
        fontFamily: [
            // "Inter",
            '-apple-system',
            'BlinkMacSystemFont',
            '"Inter"',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontFamily: '"EB Garamond", "Merriweather", Georgia, serif',
            fontSize: '2rem',
            lineHeight: 1.2,
            fontWeight: 300,
            color: '#42474D',
            margin: '24px 0',
        },
        h2: {
            fontFamily: '"EB Garamond", "Merriweather", Georgia, serif',
            fontSize: '1.5rem',
            lineHeight: 1.2,
            fontWeight: 500,
            color: '#42474D',
            margin: '16px 0',
        },
        subtitle1: {
            // fontFamily: '"Inter", "-apple-system", "Segoe UI", Roboto, sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            color: '#42474D',
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '1rem',
            color: '#42474D',
            lineHeight: 1.7,
        },
        italic: {
            color: '#42474D',
            fontStyle: 'italic',
        },
        button: {
            textTransform: 'none', // Disable uppercase in buttons
        },
    },
    spacing: 8, // Default spacing unit (8px)
});

export default theme;