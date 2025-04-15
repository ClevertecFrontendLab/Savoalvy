export const searchStyle = {
    display: 'flex',
    alignItems: 'center',
    h: { base: '32px', md: '48px' },

    input: {
        w: '100%',
        h: '100%',
        outline: 'none',
        border: '1px solid',
        borderColor: 'gray.150',
        borderRadius: '6px',
        p: { base: '0px 32px 0px 12px', md: '0px 40px 0px 16px' },
        fontSize: { base: '14px', md: '18px' },
        _placeholder: {
            color: 'lime.800',
        },
        boxShadow: 'none',
        _focus: {
            borderColor: 'gray.150',
            boxShadow: 'none',
        },
        _active: {
            borderColor: 'gray.150',
            boxShadow: 'none',
        },
        _hover: {
            borderColor: 'gray.150',
            boxShadow: 'none',
        },
    },

    inputIcon: {
        h: '100%',
        w: { base: '32px', md: '48px' },

        icon: {
            p: { base: '9px', md: '15px' },
            boxSize: { base: '32px', md: '48px' },
        },
    },
};
