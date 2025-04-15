import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { FC, JSX } from 'react';

import { burgerStyle } from '~/components/buttons/Burger/style.tsx';

const BurgerButton: FC = (): JSX.Element => (
    <IconButton size='lg' icon={<HamburgerIcon />} sx={burgerStyle} aria-label='Open menu' />
);

export default BurgerButton;
