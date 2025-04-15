import { Flex, Icon, Text } from '@chakra-ui/react';
import { JSX } from 'react';

import { categoryStyle } from '~/widgets/content/newReceipeBlock/slider/card/categoryTab/style.tsx';

const CategoryComponent = ({ icon, description, sx, ...rest }): JSX.Element => (
    <Flex sx={{ ...categoryStyle, ...sx }} {...rest}>
        <Icon as={icon} />
        <Text noOfLines={1} fontSize='14px'>
            {description}
        </Text>
    </Flex>
);

export default CategoryComponent;
