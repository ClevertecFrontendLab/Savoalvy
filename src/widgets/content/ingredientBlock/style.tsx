export const ingredientStyle = {
    wrapper: {
        maxW: '914px',
        w: '100%',
        p: { bp: '32px 16px', base: '16px 16px 0px 16px' },
        flexDirection: 'column',
        gap: { base: '16px', md: '32px' },
    },

    labelPageWrapper: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    label: {
        fontWeight: '700',
        fontSize: { base: '24px', md: '48px' },
    },

    text: {
        fontWeight: '500',
        color: 'gray.150',
        fontSize: { bp: '16px', base: '14px' },
    },

    fieldsWrapper: {
        flexDirection: 'column',
        gap: '12px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    findItem: {
        gap: '12px',
        maxH: '48px',

        maxW: '518px',
        w: '100%',
    },

    chooseItem: {
        display: { base: 'none', md: 'flex' },
        gap: '16px',
        justifyContent: 'center',
        alignItems: 'center',
    },
};
