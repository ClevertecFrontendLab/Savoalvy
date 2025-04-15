import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { JSX } from 'react';

import { menuConfig } from '~/components/menuList/menuConfig.tsx';
import { tabStyle } from '~/components/tab/style.tsx';

const TabComponent = ({ category }): JSX.Element => {
    const categoryData = menuConfig.find((c) => c.value === category);
    const options = categoryData?.options || [];

    return (
        <Tabs sx={{ ...tabStyle, maxWidth: '100%' }}>
            <TabList
                sx={{
                    ...tabStyle.list,
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    flexWrap: 'nowrap',
                    whiteSpace: 'nowrap',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    borderBottom: '0',
                }}
            >
                {options.map((option) => (
                    <Tab
                        key={option.value}
                        color='lime.800'
                        _selected={{ color: 'lime.500', borderColor: 'lime.500' }}
                        fontWeight='medium'
                        _focus={{ boxShadow: 'none' }}
                        _hover={{ bg: 'transparent' }}
                        _active={{ bg: 'transparent' }}
                        flexShrink={0}
                    >
                        {option.label}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    );
};

export default TabComponent;
