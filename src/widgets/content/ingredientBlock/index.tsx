import { HStack, Text, VStack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import IngredientButton from '~/components/buttons/Ingredient';
import SearchField from '~/components/inputs/search';
import { JUICIEST_PAGE_CONFIG, menuConfig } from '~/components/menuList/menuConfig.tsx';
import MultiSelect from '~/components/select';
import Switcher from '~/components/switch';
import { ingredientStyle } from '~/widgets/content/ingredientBlock/style.tsx';

const IngredientBlock = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/').filter(Boolean);
    const allCategories = [...menuConfig, JUICIEST_PAGE_CONFIG];
    const currentCategory = allCategories.find(
        (item) => item.value === paths[0] || item.value === paths[1],
    );

    const labelText = currentCategory?.label || 'Приятного аппетита!';
    const descriptionText = currentCategory?.text || '';

    return (
        <VStack sx={ingredientStyle.wrapper}>
            <VStack sx={ingredientStyle.labelPageWrapper}>
                <Text sx={ingredientStyle.label}>{labelText}</Text>
                <Text sx={ingredientStyle.text}>{descriptionText}</Text>
            </VStack>
            <VStack sx={ingredientStyle.fieldsWrapper}>
                <HStack sx={ingredientStyle.findItem}>
                    <IngredientButton />
                    <SearchField />
                </HStack>
                <HStack sx={ingredientStyle.chooseItem}>
                    <Switcher />
                    <MultiSelect />
                </HStack>
            </VStack>
        </VStack>
    );
};

export default IngredientBlock;
