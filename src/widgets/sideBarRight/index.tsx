import { GridItem } from '@chakra-ui/react';

import ChoiceIcon from '~/assets/icons/choice';
import SmileIcon from '~/assets/icons/smile';
import UsersIcon from '~/assets/icons/users';
import RecipeButton from '~/components/buttons/Recipe';
import StatisticComponent from '~/widgets/header/statistic';
import { sideBarRightStyle } from '~/widgets/sideBarRight/style.tsx';

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
const SideBarLeft = () => (
    <GridItem sx={sideBarRightStyle}>
        <StatisticComponent sx={sideBarRightStyle.statistic} config={STATISTIC_CONFIG} />
        <RecipeButton />
    </GridItem>
);

export default SideBarLeft;
