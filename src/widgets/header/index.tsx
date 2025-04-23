import { GridItem } from '@chakra-ui/react';
import { BsBookmarkHeart, BsFillPeopleFill } from 'react-icons/bs';

import SmileIcon from '~/assets/icons/smile';
import BreadcrumbComponent from '~/components/breadcrumb';
import BurgerButton from '~/components/buttons/Burger';
import Logo from '~/widgets/header/Logo';
import StatisticComponent from '~/widgets/header/statistic';
import { headerStyle } from '~/widgets/header/style.tsx';
import User from '~/widgets/header/user';

const STATISTIC_CONFIG = [
    {
        icon: BsBookmarkHeart,
        value: 185,
    },
    {
        icon: BsFillPeopleFill,
        value: 589,
    },
    {
        icon: SmileIcon,
        value: 587,
    },
];
const Header = () => (
    <GridItem data-test-id='header' sx={headerStyle}>
        <Logo />
        <BreadcrumbComponent />
        <User />
        <StatisticComponent variant='header' config={STATISTIC_CONFIG} />
        <BurgerButton />
    </GridItem>
);

export default Header;
