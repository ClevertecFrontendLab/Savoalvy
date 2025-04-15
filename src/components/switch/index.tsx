import { HStack, Switch, Text } from '@chakra-ui/react';
import { FC, JSX } from 'react';

const Switcher: FC = (): JSX.Element => (
    <HStack pl='8px' gap='12px'>
        <Text fontWeight='500'>Исключить мои аллергены</Text>
        <Switch />
    </HStack>
);

export default Switcher;
