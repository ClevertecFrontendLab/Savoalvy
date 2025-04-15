import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { JSX, MouseEvent, TouchEvent, useRef, useState } from 'react';

import CARD_CONFIG from '~/common/configs/CardConfig.tsx';
import CardComponent from '~/widgets/content/newReceipeBlock/slider/card';
import { sliderStyle } from '~/widgets/content/newReceipeBlock/slider/style.tsx';

const SliderComponent = (): JSX.Element => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, scroll: 0 });
    const isMobile = useBreakpointValue({ base: true, sm: false });

    const handleScroll = (direction: 'left' | 'right') => {
        const container = containerRef.current;
        if (!container) return;

        container.scrollBy({
            left: direction === 'right' ? 300 : -300,
            behavior: 'smooth',
        });
    };

    const startDrag = (e: MouseEvent | TouchEvent) => {
        const container = containerRef.current;
        if (!container) return;

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;

        setIsDragging(true);
        setDragStart({
            x: clientX,
            scroll: container.scrollLeft,
        });
    };

    const onDrag = (e: MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const delta = dragStart.x - clientX;
        containerRef.current.scrollLeft = dragStart.scroll + delta;
    };

    return (
        <Box sx={sliderStyle.container}>
            <Flex
                ref={containerRef}
                sx={sliderStyle.sliderWrapper}
                css={sliderStyle.sliderWrapper.scrollbar}
                onMouseDown={(e: MouseEvent) => startDrag(e)}
                onTouchStart={(e: TouchEvent) => startDrag(e)}
                onMouseUp={() => setIsDragging(false)}
                onTouchEnd={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={(e: MouseEvent) => onDrag(e)}
                onTouchMove={(e: TouchEvent) => onDrag(e)}
                cursor={isDragging ? 'grabbing' : 'grab'}
                userSelect='none'
            >
                {CARD_CONFIG.map((item, index) => (
                    <CardComponent
                        variant='slider'
                        key={index}
                        image={item.cardImage}
                        label={item.label}
                        description={item.description}
                        category={{
                            icon: item.tabIcon,
                            label: item.tabLabel,
                        }}
                        statistics={item.statistic.map((statItem) => ({
                            icon: statItem.statisticIcon,
                            value: statItem.statisticValue,
                        }))}
                    />
                ))}
            </Flex>

            {!isMobile && (
                <>
                    <IconButton
                        aria-label='Previous'
                        icon={<ChevronLeftIcon boxSize={6} />}
                        left='-16px'
                        sx={sliderStyle.navigationButton}
                        onClick={() => handleScroll('left')}
                    />
                    <IconButton
                        aria-label='Next'
                        icon={<ChevronRightIcon boxSize={6} />}
                        right='-16px'
                        sx={sliderStyle.navigationButton}
                        onClick={() => handleScroll('right')}
                    />
                </>
            )}
        </Box>
    );
};

export default SliderComponent;
