export const cardBaseStyle = {
    wrapper: {
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'gray.12',
        boxShadow: 'none',
        _hover: {
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            transition: 'all 0.3s ease-in-out',
        },
    },
    image: {
        w: '100%',
        h: 'auto',
    },
    description: {
        flexWrap: 'wrap',
        gap: '8px',
    },
    textLabel: {},
    textDescription: {},
    category: {
        justifyContent: 'space-between',
    },
    recommended: {
        position: 'absolute',
        bottom: '20px',
        left: '24px',
        display: { base: 'none', md: 'flex' },
    },
};

export const cardVariants = {
    slider: {
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            w: { bp2: '322px', md: '277px', base: '158px' },
            h: { bp2: '414px', md: '402px', base: '220px' },
        },
        image: {
            h: { md: '230px', base: '128px' },
        },
        description: {
            p: { bp: '16px 24px 20px 24px', md: '12px', base: '8px 8px 4px 8px' },
            gap: { md: '24px', base: '8px' },
            flexDirection: 'column',
        },
        label: {
            fontSize: { bp: '20px', md: '18px', base: '16px' },
            noOfLines: 2,
            fontWeight: '500',
        },
        text: {
            fontSize: '14px',
            display: { base: 'none', md: '-webkit-box' },
        },
        categoryTab: {
            position: { base: 'absolute', bp3: 'static' },
            top: '8px',
            left: '8px',
            bg: 'lime.150',
        },
    },

    cardItem: {
        wrapper: {
            display: 'flex',
            flexDirection: 'row',
            w: '100%',
        },
        image: {
            maxW: '346px',
            minW: '158px',
            w: '100%',
            h: '100%',
            objectFit: 'cover',
        },
        description: {
            w: '100%',
            flexDirection: 'column',
            gap: { base: '12px', md: '16px', bp: '24px' },
            p: { base: '8px 8px 4px 8px', bp3: '20px 24px' },
        },
        label: {
            fontSize: { bp: '20px', md: '18px', base: '16px' },
            noOfLines: 2,
            fontWeight: '500',
        },
        text: {
            display: { base: 'none', bp3: '-webkit-box' },
        },
        infoBlock: {
            order: 2,
            minH: '44px',
        },
        category: {
            order: 1,
        },
        categoryTab: {
            position: { base: 'absolute', bp3: 'static' },
            top: '8px',
            left: '8px',
            bg: 'lime.50',
        },
        buttons: {
            order: 3,
            gap: '8px',
            justifyContent: 'flex-end',
        },
    },

    otherCard: {
        wrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: { base: '12px', bp: '16px', bp2: '24px 24px 20px 24px' },
        },
        description: {
            flexDirection: 'column',
            gap: '24px',
        },
        label: {
            noOfLines: 1,
            fontWeight: '500',
        },
        text: {
            noOfLines: 3,
        },
    },
};
