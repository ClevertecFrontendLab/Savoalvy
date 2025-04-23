import { HStack, Switch, Text } from '@chakra-ui/react';
import { FC, JSX } from 'react';

const Switcher: FC = (): JSX.Element => (
    <HStack gap='12px'>
        <Text fontWeight='500'>Исключить мои аллергены</Text>
        <Switch
            sx={{
                'span.chakra-switch__track[data-checked]': {
                    bg: 'lime.400',
                },
            }}
        />
    </HStack>
);

export default Switcher;
