export const accordionStyle = {
    w: '100%',
    h: '100%',
    overflowY: 'auto',

    item: {
        maxW: '230px',

        button: {
            display: 'flex',
            gap: '12px',
            p: '12px 8px',
            _hover: { bg: 'lime.100' },

            _expanded: {
                bg: 'lime.100',
                fontWeight: '700',
            },
        },

        panel: {
            p: 0,
            list: {
                listItem: {
                    _hover: { bg: 'lime.50' },
                    h: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '11px',
                    p: '6px 8px 6px 33px',
                    transition: '0.2s',

                    boxWrapper: {
                        w: '8px',
                        display: 'flex',

                        leftPart: {
                            w: '7px',
                            bg: 'lime.300',
                            transition: '0.3s',
                        },

                        rightPart: {
                            bg: 'lime.300',
                            h: '24px',
                            w: '1px',
                        },
                    },

                    routerLink: {
                        width: '100%',
                        height: '100%',
                    },
                },
            },
        },
    },
};
