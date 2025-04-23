import { IconButton } from '@chakra-ui/react';
import { FC, JSX } from 'react';

import IngredientIcon from '~/assets/icons/ingredient';
import { ingredientButtonStyle } from '~/components/buttons/Ingredient/style.tsx';

const IngredientButton: FC = (): JSX.Element => (
    <IconButton sx={ingredientButtonStyle} aria-label='biFilter'>
        <IngredientIcon />
    </IconButton>
);

export default IngredientButton;
