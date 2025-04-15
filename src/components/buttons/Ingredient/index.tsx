import { IconButton } from '@chakra-ui/react';
import { FC, JSX } from 'react';

import IngredientIcon from '~/assets/icons/ingredient';
import { ingredientButtonStyle } from '~/components/buttons/Ingredient/style.tsx';

const IngredientButton: FC = (): JSX.Element => (
    <IconButton icon={<IngredientIcon />} sx={ingredientButtonStyle} aria-label='filter' />
);

export default IngredientButton;
