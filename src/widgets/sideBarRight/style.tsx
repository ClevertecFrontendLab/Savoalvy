export const sideBarRightStyle = {
    gridArea: 'sideBarRight',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    display: { base: 'none', ml: 'flex' },

    statistic: {
        w: '208px',
        h: '200px',
        flexDirection: 'column',
        gap: '24px',

        item: {
            w: '85px',
            h: '40px',
            gap: '8px',
        },
    },
};
