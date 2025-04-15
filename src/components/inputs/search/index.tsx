import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FC, JSX } from 'react';

import { searchStyle } from '~/components/inputs/search/style.tsx';

const SearchField: FC = (): JSX.Element => (
    <InputGroup sx={searchStyle}>
        <Input sx={searchStyle.input} placeholder='Название или ингредиент...' />
        <InputRightElement sx={searchStyle.inputIcon}>
            <SearchIcon sx={searchStyle.inputIcon.icon} />
        </InputRightElement>
    </InputGroup>
);

export default SearchField;
