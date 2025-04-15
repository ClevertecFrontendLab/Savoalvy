import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Icon,
    List,
    ListItem,
    Text,
} from '@chakra-ui/react';
import { FC, JSX, useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

import { accordionStyle } from '~/components/accordion/style.tsx';
import { menuConfig } from '~/components/menuList/menuConfig.tsx';

const AccordionComponent: FC = (): JSX.Element => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activePath, setActivePath] = useState(location.pathname);

    const handleItemClick = (path: string) => {
        setActivePath(path);
    };
    const handleVeganClick = () => {
        navigate('/vegan_dishes');
    };
    // Убрать костыль с аккордеона для веганской кухни и переделать под тест
    return (
        <Accordion allowToggle sx={accordionStyle}>
            {menuConfig.map((category) => (
                <AccordionItem sx={accordionStyle.item} key={category.value} border='none'>
                    <AccordionButton
                        data-test-id={
                            category.value === 'vegan_dishes' ? 'vegan-cuisine' : undefined
                        }
                        sx={accordionStyle.item.button}
                        p={3}
                        onClick={() => {
                            if (category.value === 'vegan_dishes') {
                                handleVeganClick();
                            } else {
                                handleItemClick(`/${category.value}`);
                            }
                        }}
                    >
                        <Icon as={category.icon} />
                        <Box flex='1' textAlign='left'>
                            <Text>{category.label}</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel sx={accordionStyle.item.panel}>
                        <List sx={accordionStyle.item.panel.list}>
                            {category.options.map((option) => {
                                const path = `/${category.value}/${option.value}`;
                                const isActive = activePath === path;

                                return (
                                    <ListItem
                                        sx={{
                                            ...accordionStyle.item.panel.list.listItem,
                                            fontWeight: isActive && '700',
                                        }}
                                        key={option.value}
                                        onClick={() => handleItemClick(path)}
                                    >
                                        <Box
                                            sx={accordionStyle.item.panel.list.listItem.boxWrapper}
                                        >
                                            <Box
                                                sx={{
                                                    ...accordionStyle.item.panel.list.listItem
                                                        .boxWrapper.leftPart,
                                                    opacity: isActive ? 1 : 0,
                                                }}
                                            >
                                                {'\u00A0'}
                                            </Box>
                                            <Box
                                                sx={
                                                    accordionStyle.item.panel.list.listItem
                                                        .boxWrapper.rightPart
                                                }
                                            >
                                                {'\u00A0'}
                                            </Box>
                                        </Box>
                                        <RouterLink
                                            sx={accordionStyle.item.panel.list.listItem.routerLink}
                                            to={path}
                                        >
                                            {option.label}
                                        </RouterLink>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordionComponent;
