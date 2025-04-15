export const breadcrumbStyles = {
    container: {
        fontSize: 'sm',
        m: '0 auto 0 0',
        display: { base: 'none', md: 'flex' },
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
