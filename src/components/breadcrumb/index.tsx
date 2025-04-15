import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react';
import { FC, JSX } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import useBreadcrumbData from '~/common/CustomHooks/useBreadcrumbData.tsx';
import { breadcrumbStyles } from '~/components/breadcrumb/style.tsx';

const BreadcrumbComponent: FC = (): JSX.Element => {
    const { category, option } = useBreadcrumbData();

    return (
        <Breadcrumb
            separator={<ChevronRightIcon color='gray.500' />}
            sx={breadcrumbStyles.container}
        >
            <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to='/main'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {category && (
                <BreadcrumbItem>
                    {option ? (
                        <BreadcrumbLink
                            as={RouterLink}
                            to={`/${category.value}`}
                            sx={breadcrumbStyles.link}
                        >
                            {category.label}
                        </BreadcrumbLink>
                    ) : (
                        <Text sx={breadcrumbStyles.inactiveItem}>{category.label}</Text>
                    )}
                </BreadcrumbItem>
            )}

            {option && (
                <BreadcrumbItem isCurrentPage>
                    <Text sx={breadcrumbStyles.currentItem}>{option.label}</Text>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};

export default BreadcrumbComponent;
