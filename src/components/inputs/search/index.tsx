import { SearchIcon } from '@chakra-ui/icons';
import { Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import { searchStyle } from '~/components/inputs/search/style.tsx';

const SearchField = () => (
    <InputGroup sx={searchStyle}>
        <Input sx={searchStyle.input} placeholder='Название или ингредиент...' />
        <InputRightElement sx={searchStyle.inputIcon}>
            <Icon sx={searchStyle.icon} as={SearchIcon} />
        </InputRightElement>
    </InputGroup>
);

export default SearchField;
