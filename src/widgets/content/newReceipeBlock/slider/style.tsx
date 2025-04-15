import { css } from '@chakra-ui/react';

export const sliderStyle = {
    container: {
        position: 'relative',
        w: '100%',
        h: '100%',
        overflow: 'hidden',
    },
    sliderWrapper: {
        w: 'inherit',
        h: 'inherit',
        overflowX: 'auto' as const,
        gap: { bp: '24px', base: '12px' },
        scrollbar: css({
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
        }),
    },
    navigationButton: {
        position: 'absolute' as const,
        top: '50%',
        transform: 'translateY(-50%)',
        variant: 'ghost' as const,
        borderRadius: 'full',
    },
};
