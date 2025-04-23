export const breadcrumbStyles = {
    container: {
        display: { base: 'none', md: 'flex' },
        m: '0 auto 0 0',
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: 1.5,
        whiteSpace: 'nowrap',
    },
    link: {
        _hover: { textDecoration: 'underline', color: 'blue.500' },
    },
    inactiveItem: {
        color: 'gray.600',
    },
    currentItem: {
        color: 'gray.600',
        ariaCurrent: 'page',
    },
};
