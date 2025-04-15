import { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { JUICIEST_PAGE_CONFIG, menuConfig } from '~/components/menuList/menuConfig.tsx';

const useBreadcrumbData = () => {
    const { pathname } = useLocation();
    const params = useParams();
    const paths = pathname.split('/').filter(Boolean);

    return useMemo(() => {
        const allCategories = [...menuConfig, JUICIEST_PAGE_CONFIG];

        let category;
        let option;

        if (paths[0] === 'main' && paths[1] === 'juiciest') {
            category = { ...JUICIEST_PAGE_CONFIG, label: 'Самое сочное' };
        } else {
            category = allCategories.find(
                (c) => c.value === paths[0] || c.value === params.category,
            );

            if (category?.value === 'juiciest') {
                category.label = 'Самое сочное';
            }

            option = category?.options?.find(
                (o) => o.value === paths[1] || o.value === params.option,
            );
        }

        return { category, option };
    }, [pathname, params]);
};

export default useBreadcrumbData;
