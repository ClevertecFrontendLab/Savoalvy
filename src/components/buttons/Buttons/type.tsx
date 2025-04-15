import { ButtonProps } from '@chakra-ui/react';

export type VariantType = 'default' | 'save' | 'cook' | 'authors' | 'other' | 'loadAll';

export interface CustomButtonProps extends ButtonProps {
    variantType?: VariantType;
}
