export const cardBaseStyle = {
    wrapper: {
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'gray.12',

        image: {
            w: '100%',
            h: 'auto',
        },
    },

    description: {
        infoBlock: {
            flexWrap: 'wrap',
            gap: '8px',
        },
    },

    category: {
        justifyContent: 'space-between',

        statistic: {
            gap: '8px',
            p: '0 4px',
            fontSize: '12px',
            h: '24px',

            item: {
                gap: '6px',
            },
        },
    },

    text: {},

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
            flexShrink: '0',
            w: { bp: '322px', md: '277px', base: '158px' },
            h: { bp: '414px', md: '402px', base: '220px' },

            image: {
                h: { md: '230px', base: '128px' },
            },
        },
        description: {
            p: { bp: '16px 24px 20px 24px', md: '12px', base: '8px 8px 4px 8px' },
            gap: { md: '24px', base: '8px' },
            flexDirection: 'column',
            label: {
                fontSize: { bp: '20px', md: '18px', base: '16px' },
                noOfLines: 2,
                fontWeight: 'bold',
            },
            text: {
                fontSize: '14px',
                display: { base: 'none', md: '-webkit-box' },
            },
        },

        category: {
            tab: {
                position: { base: 'absolute', bp3: 'static' },
                top: '8px',
                left: '8px',
                bg: 'lime.150',
            },
        },
    },
    cardItem: {
        wrapper: {
            display: 'flex',
            flexDirection: 'row',
            w: '100%',
            // h: '244px',

            image: {
                maxW: '346px',
                minW: '158px',
                w: '100%',
                h: '100%',
                objectFit: 'cover',
            },
        },
        description: {
            w: '100%',
            flexDirection: 'column',
            gap: { base: '12px', md: '16px', bp: '24px' },
            p: { base: '8px 8px 4px 8px', bp3: '20px 24px' },

            label: {
                fontSize: { bp: '20px', md: '18px', base: '16px' },
                noOfLines: 2,
                fontWeight: '500',
            },

            infoBlock: {
                order: 2,
                minH: '44px',
            },

            text: {
                display: { base: 'none', bp3: '-webkit-box' },
            },
        },
        category: {
            order: 1,

            tab: {
                position: { base: 'absolute', bp3: 'static' },
                top: '8px',
                left: '8px',
                bg: 'lime.50',
            },
        },
        buttons: {
            order: 3,
            gap: '8px',
            justifyContent: 'flex-end',
        },
        tab: {
            position: { base: 'absolute', bp3: 'static' },
            top: '8px',
            left: '8px',
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

            label: {
                // fontSize: { bp: '20px', md: '18px', base: '16px' },
                noOfLines: 1,
                fontWeight: '500',
            },

            text: {
                noOfLines: 3,
            },
        },
    },
};
