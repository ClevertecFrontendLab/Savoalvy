import { Grid } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Footer from '~/widgets/footer';
import Header from '~/widgets/header';
import SideBarLeft from '~/widgets/sideBarLeft';
import SideBarRight from '~/widgets/sideBarRight';

import { layoutStyle } from './style.tsx';

const MainLayout = () => (
    <Grid sx={layoutStyle}>
        <Header />
        <SideBarLeft />
        <Outlet />
        <SideBarRight />
        <Footer />
    </Grid>
);
export default MainLayout;
