import { GridItem } from '@chakra-ui/react';

import ChoiceIcon from '~/assets/icons/choice';
import SmileIcon from '~/assets/icons/smile';
import UsersIcon from '~/assets/icons/users';
import BreadcrumbComponent from '~/components/breadcrumb';
import BurgerButton from '~/components/buttons/Burger';
import Logo from '~/widgets/header/Logo';
import StatisticComponent from '~/widgets/header/statistic';
import { headerStyle } from '~/widgets/header/style.tsx';
import User from '~/widgets/header/user';

const STATISTIC_CONFIG = [
    {
        icon: ChoiceIcon,
        value: 185,
    },
    {
        icon: UsersIcon,
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
        <StatisticComponent sx={headerStyle.statistic} config={STATISTIC_CONFIG} />
        <BurgerButton />
    </GridItem>
);

export default Header;
