import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
    colors: {
        lime: {
            600: '#7CBF00',
            50: '#ffffd3',
            100: '#eaffc7',
            300: '#c4ff61',
            400: '#b1ff2e',
            800: '#134b00',
            150: '#d7ff94',
            500: '#2db100',
        },
        gray: {
            50: 'rgba(0, 0, 0, 0.24)',
            100: 'rgba(0, 0, 0, 0.64)',
            150: 'rgba(0, 0, 0, 0.48)',
            10: 'rgba(0, 0, 0, 0.06)',
            15: 'rgba(0, 0, 0, 0.8)',
            12: 'rgba(0, 0, 0, 0.08)',
        },
    },
    breakpoints: {
        ml: '1375px',
        sm: '427px',
        mh: '895px',
        md: '785px',
        bp: '1440px',
        bp1: '768px',
        bp2: '1920px',
        bp3: '920px',
        bp4: '827px',
        bp5: '1024px',
    },
    styles: {
        global: {
            '*': {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
            },
            '::-webkit-scrollbar': {
                width: '8px',
            },
            '::-webkit-scrollbar-track': {
                bg: 'rgba(0, 0, 0, 0.04)',
                borderRadius: '8px',
            },
            '::-webkit-scrollbar-thumb': {
                bg: 'rgba(0, 0, 0, 0.16)',
                borderRadius: '8px',
            },
            '::-webkit-scrollbar-button': {
                display: 'none',
            },
            '::-webkit-scrollbar-corner': {
                background: 'transparent',
            },
            body: {
                width: '100vw',
                minHeight: '100vh',
                fontFamily: '"Inter", sans-serif',
            },
            'ul, ol': {
                listStyle: 'none',
            },
            a: {
                textDecoration: 'none',
                color: 'inherit',
                maxWidth: '100%',
                height: 'auto',
            },
            p: {
                textDecoration: 'none',
            },
            button: {
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                font: 'inherit',
            },
            'input, textarea': {
                border: 'none',
                outline: 'none',
                font: 'inherit',
            },
            img: {
                userSelect: 'none',
                display: 'block',
                maxWidth: '100%',
                height: 'auto',
            },
            input: {
                w: '100%',
                h: '100%',
            },
        },
    },
});

export default customTheme;
