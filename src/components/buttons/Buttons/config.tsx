import { ArrowForwardIcon } from '@chakra-ui/icons';
import { ButtonProps, Text } from '@chakra-ui/react';
import { JSX } from 'react';

import ChoiceIcon from '~/assets/icons/choice';
import { VariantType } from '~/components/buttons/Buttons/type.tsx';

export const buttonConfig: Record<
    VariantType,
    {
        children: JSX.Element;
        leftIcon?: JSX.Element;
        rightIcon?: JSX.Element;
        styleProps: ButtonProps;
    }
> = {
    default: {
        children: <Text>Вся подборка</Text>,
        rightIcon: <ArrowForwardIcon />,
        styleProps: {
            fontWeight: 600,
            lineHeight: '100%',
            bg: 'lime.400',
        },
    },
    save: {
        children: <Text display={{ base: 'none', md: 'inline' }}>Сохранить</Text>,
        leftIcon: <ChoiceIcon size={18} />,
        styleProps: {
            variant: 'outline',
            borderColor: 'gray.150',
            color: 'gray.15',
            size: { base: 'xs', bp3: 'sm' },
            lineHeight: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    cook: {
        children: <Text>Готовить</Text>,
        styleProps: {
            bg: 'black',
            color: 'white',
            _hover: { bg: 'gray.800' },
            size: { base: 'xs', bp3: 'sm' },
            lineHeight: '100%',
        },
    },
    authors: {
        children: <Text>Все авторы</Text>,
        rightIcon: <ArrowForwardIcon />,
        styleProps: {
            fontWeight: 600,
            lineHeight: '100%',
            bg: 'lime.400',
        },
    },
    other: {
        children: <Text fontSize={{ base: '12px', bp2: '14px' }}>Готовить</Text>,
        styleProps: {
            variant: 'outline',
            borderColor: 'lime.500',
            color: 'lime.500',
            _hover: { bg: 'gray.800' },
            size: { base: 'xs', bp3: 'sm' },
            lineHeight: '100%',
        },
    },
    loadAll: {
        children: <Text>Загрузить еще</Text>,
        styleProps: {
            fontWeight: 600,
            lineHeight: '100%',
            bg: 'lime.400',
            h: '40px',
            w: '152px',
            m: '0 auto',
        },
    },
};
