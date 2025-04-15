import { Flex, Text } from '@chakra-ui/react';
import { JSX } from 'react';

import { statisticStyle } from '~/widgets/header/statistic/style.tsx';

const StatisticComponent = ({ ...props }): JSX.Element => (
    <Flex sx={{ ...statisticStyle.wrapper, ...props.sx, ...props.sx.statistic }}>
        {props.config?.map(({ icon: Icon, value }, index) => (
            <Flex
                key={index}
                sx={{
                    ...statisticStyle.item,
                    ...props.sx?.item,
                    ...props.sx?.statistic?.item,
                }}
            >
                <Icon boxSize={{ base: '12px', md: '16px' }} />
                <Text sx={{ ...statisticStyle.item.text, ...props.sx?.text }}>{value}</Text>
            </Flex>
        ))}
    </Flex>
);

export default StatisticComponent;
