import { Card, Flex, Image, Text } from '@chakra-ui/react';
import { JSX } from 'react';

import ButtonComponent from '~/components/buttons/Buttons';
import CategoryComponent from '~/widgets/content/newReceipeBlock/slider/card/categoryTab';
import {
    cardBaseStyle,
    cardVariants,
} from '~/widgets/content/newReceipeBlock/slider/card/style.tsx';
import UserRecommendedComponent from '~/widgets/content/userRecomendation';
import StatisticComponent from '~/widgets/header/statistic';

const CardComponent = ({
    image,
    label,
    description,
    category,
    statistics = [],
    recommended,
    variant = 'slider',
    sx = {},
    ...rest
}): JSX.Element => {
    const base = cardBaseStyle;
    const variantStyle = variant !== 'base' ? (cardVariants[variant] ?? {}) : {};

    const combinedStyles = {
        wrapper: { ...base.wrapper, ...variantStyle.wrapper, ...sx },
        image: { ...base.image, ...variantStyle.image },
        description: { ...variantStyle.description },
        label: { ...base.textLabel, ...variantStyle.label },
        text: { ...base.textDescription, ...variantStyle.text },
        infoBlock: { ...base.description, ...variantStyle.infoBlock },
        category: { ...base.category, ...variantStyle.category },
        categoryTab: variantStyle.categoryTab ?? {},
        buttons: variantStyle.buttons ?? {},
        recommended: base.recommended,
    };

    return (
        <Card sx={combinedStyles.wrapper} {...rest}>
            {variant === 'cardItem' && recommended && (
                <UserRecommendedComponent sx={combinedStyles.recommended} />
            )}

            {image && (
                <Flex sx={combinedStyles.image}>
                    <Image
                        src={image}
                        alt='Описание изображения'
                        objectFit='cover'
                        objectPosition='center'
                        width='100%'
                        height='100%'
                        transition='all 0.3s ease'
                    />
                </Flex>
            )}

            <Flex sx={combinedStyles.description}>
                {(label || description) && (
                    <Flex sx={combinedStyles.infoBlock}>
                        {label && <Text sx={combinedStyles.label}>{label}</Text>}
                        {description && (
                            <Text noOfLines={3} sx={combinedStyles.text}>
                                {description}
                            </Text>
                        )}
                    </Flex>
                )}

                {(category || statistics.length > 0) && (
                    <Flex sx={combinedStyles.category}>
                        {category?.label && (
                            <CategoryComponent
                                sx={combinedStyles.categoryTab}
                                icon={category.icon}
                                description={category.label}
                            />
                        )}
                        {statistics.length > 0 && (
                            <StatisticComponent variant='card' config={statistics} />
                        )}
                    </Flex>
                )}

                {variant === 'cardItem' && (
                    <Flex sx={combinedStyles.buttons}>
                        <ButtonComponent variantType='save' />
                        <ButtonComponent variantType='cook' />
                    </Flex>
                )}
            </Flex>
        </Card>
    );
};

export default CardComponent;
