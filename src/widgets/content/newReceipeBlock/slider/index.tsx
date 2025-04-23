import 'swiper/swiper-bundle.css';

import { Box, IconButton } from '@chakra-ui/react';
import { JSX } from 'react';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CARD_CONFIG from '~/common/configs/CardConfig.tsx';
import CardComponent from '~/widgets/content/newReceipeBlock/slider/card';
import { sliderStyle } from '~/widgets/content/newReceipeBlock/slider/style.tsx';

const SliderComponent = (): JSX.Element => (
    <Box
        sx={{
            ...sliderStyle.container,
            '.swiper-button-prev::after, .swiper-button-next::after': {
                display: 'none',
            },
        }}
    >
        <Swiper
            style={{ height: 'auto' }}
            spaceBetween={24}
            modules={[Navigation]}
            slidesPerView='auto'
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            }}
            breakpoints={{
                320: {
                    spaceBetween: 12,
                },
                1920: {
                    spaceBetween: 24,
                },
            }}
            loop
        >
            {CARD_CONFIG.map((item, index) => (
                <SwiperSlide style={{ width: 'auto', height: 'auto' }} key={index}>
                    <CardComponent
                        variant='slider'
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
                </SwiperSlide>
            ))}
        </Swiper>
        <IconButton
            aria-label='Previous'
            icon={<HiArrowLongLeft />}
            className='swiper-button-prev'
            sx={{
                ...sliderStyle.arrowButton,
                ...sliderStyle.arrowButtonLeft,
            }}
        />
        <IconButton
            aria-label='Next'
            icon={<HiArrowLongRight />}
            className='swiper-button-next'
            sx={{
                ...sliderStyle.arrowButton,
                ...sliderStyle.arrowButtonRight,
            }}
        />
    </Box>
);

export default SliderComponent;
