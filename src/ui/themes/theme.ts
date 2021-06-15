import {createTheme} from '@material-ui/core';

const theme = createTheme({
    palette: {
      primary: {
        light: '#9661ff',
        main: '#6b2aee',
        dark: '#581ecd',
      },
      secondary: {
        light: '#2bfff2',
        main: '#02e7d9',
        dark: '#1dd6cb',
      },
      text: {
        primary: '#707070',
        secondary: '#9b9b9b',
      },
      error: {
        main: '#fc3c00',
      },
      warning: {
        main: '#fca600',
      },
      success: {
        main: '#00d34d',
      },
      grey: {
        50: '#fafafa',
        100: '#f0f0f0',
        200: '#d7d9dd',
        300: '#c4c4c4',
        400: '#9b9b9b',
      },
    },
    typography: {
      fontFamily: 'Poppins',
    },
    shape: {
      borderRadius: '3px',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
            variants: [
                {
                    props: { variant: 'contained', color: 'secondary' },
                    style: {
                        color: 'white',
                    },
                },
            ],
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 0px 39px rgba(0, 0, 0, 0.05)',
                },
            },
        },
    },
});

export default theme;