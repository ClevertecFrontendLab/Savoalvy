export const selectorStyle = {
    boxWrapper: {
        userSelect: 'none',
        border: '1px solid',
        borderColor: 'gray.300',
        borderRadius: 'md',
        w: '234px',
        minH: '40px',
        cursor: 'pointer',
    },

    innerWrapper: {
        alignItems: 'center',
        justifyContent: 'space-between',
        w: 'full',
        gap: '8px',
        px: '8px',
        py: '6px',
    },

    tagWrapper: {
        flexWrap: 'wrap',
        gap: '8px',
        alignItems: 'center',
        flex: 1,
    },

    text: {
        color: 'gray.100',
        fontSize: 'sm',
    },

    tag: {
        border: '1px solid',
        borderColor: 'lime.400',
        backgroundColor: 'transparent',
        borderRadius: '6px',
        padding: '0px 8px',
        height: '20px',
        color: 'lime.600',
        fontWeight: '500',
        fontSize: '12px',
    },

    clearIcon: {
        variant: 'ghost',
        size: 'sm',
        _hover: { bg: 'transparent' },
        _focus: { boxShadow: 'none' },
        minW: '24px',
        h: '24px',
    },

    chevronIcon: {
        boxSize: '20px',
        transition: 'transform 0.3s ease',
        ml: 'auto',
    },

    popoverContent: {
        width: '234px',
        border: 'none',
        mt: 0,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },
};
