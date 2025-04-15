import { Flex, Grid, Text } from '@chakra-ui/react';
import { JSX } from 'react';
import { useLocation } from 'react-router-dom';

import CARD_CONFIG from '~/common/configs/CardConfig.tsx';
import ButtonComponent from '~/components/buttons/Buttons';
import { JUICIEST_PAGE_CONFIG } from '~/components/menuList/menuConfig.tsx';
import { juiciestStyle } from '~/widgets/content/juiciestBlock/style.tsx';
import CardComponent from '~/widgets/content/newReceipeBlock/slider/card';

const JuiciestBlock = ({ count = 4, tabLabel = 'Самое сочное' }): JSX.Element => {
    const { pathname } = useLocation();
    const isMainPage = pathname === '/main';

    return (
        <Flex sx={juiciestStyle.wrapper}>
            {isMainPage && (
                <Flex sx={juiciestStyle.wrapper.label}>
                    <Text sx={juiciestStyle.text}>{tabLabel}</Text>
                    <Flex display={{ base: 'none', md: 'flex' }}>
                        <ButtonComponent
                            data-test-id='juiciest-link'
                            navigateTo={JUICIEST_PAGE_CONFIG.value}
                        />
                    </Flex>
                </Flex>
            )}

            <Grid sx={juiciestStyle.wrapper.cards}>
                {CARD_CONFIG.slice(0, count).map((item, index) => (
                    <CardComponent
                        variant='cardItem'
                        key={index}
                        image={item.cardImage}
                        label={item.label}
                        description={item.description}
                        category={{
                            icon: item.tabIcon,
                            label: item.tabLabel,
                        }}
                        statistics={item.statistic.map((statItem) => ({
                            icon: statItem.statisticIcon,
                            value: statItem.statisticValue,
                        }))}
                        recommended={item?.recommended}
                    />
                ))}
            </Grid>
            {isMainPage && (
                <Flex sx={juiciestStyle.wrapper.footer}>
                    <ButtonComponent
                        data-test-id='juiciest-link-mobile'
                        navigateTo={JUICIEST_PAGE_CONFIG.value}
                    />
                </Flex>
            )}

            {!isMainPage && <ButtonComponent variantType='loadAll' />}
        </Flex>
    );
};

export default JuiciestBlock;
