import { Card, Flex, Text } from '@chakra-ui/react';
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
    variant,
    sx = {},
    ...rest
}): JSX.Element => {
    const variantStyles = variant ? (cardVariants[variant] ?? {}) : {};

    const mergedWrapper = {
        ...cardBaseStyle.wrapper,
        ...variantStyles.wrapper,
        ...sx,
    };

    const mergedDescription = {
        ...variantStyles.description,
    };

    const mergedCategory = {
        ...cardBaseStyle.category,
        ...variantStyles.category,
    };

    const mergedButtons = {
        ...variantStyles.buttons,
    };

    return (
        <Card
            sx={{
                ...mergedWrapper,
                _hover: {
                    boxShadow:
                        '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                },
            }}
            {...rest}
        >
            {variant === 'cardItem' && recommended && (
                <UserRecommendedComponent sx={cardBaseStyle.recommended} />
            )}
            {image && (
                <Flex
                    sx={{ ...cardBaseStyle.wrapper.image, ...mergedWrapper.image }}
                    backgroundImage={`url(${image})`}
                    backgroundSize='cover'
                    backgroundPosition='center'
                />
            )}

            <Flex sx={mergedDescription}>
                {(label || description) && (
                    <Flex
                        sx={{
                            ...cardBaseStyle.description.infoBlock,
                            ...mergedDescription.infoBlock,
                        }}
                    >
                        {label && (
                            <Text sx={{ ...cardBaseStyle.text, ...mergedDescription.label }}>
                                {label}
                            </Text>
                        )}
                        {description && (
                            <Text
                                noOfLines={3}
                                sx={{ ...cardBaseStyle.text, ...mergedDescription.text }}
                            >
                                {description}
                            </Text>
                        )}
                    </Flex>
                )}

                {(category || statistics.length > 0) && (
                    <Flex sx={{ ...mergedCategory }}>
                        {category?.label && (
                            <CategoryComponent
                                sx={{
                                    ...(variantStyles?.category?.tab ?? {}),
                                }}
                                icon={category.icon}
                                description={category.label}
                            />
                        )}
                        {statistics.length > 0 && (
                            <StatisticComponent sx={cardBaseStyle.category} config={statistics} />
                        )}
                    </Flex>
                )}
                {variant === 'cardItem' && (
                    <Flex sx={mergedButtons}>
                        <ButtonComponent variantType='save' />
                        <ButtonComponent variantType='cook' />
                    </Flex>
                )}
            </Flex>
        </Card>
    );
};

export default CardComponent;
