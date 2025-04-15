import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';
import {
    Checkbox,
    CheckboxGroup,
    Flex,
    IconButton,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Tag,
    TagCloseButton,
    TagLabel,
    Text,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
import { FC, JSX, useState } from 'react';

import { selectorStyle } from '~/components/select/style.tsx';

const OPTIONS = [
    { label: 'Молочные продукты', value: 'milk' },
    { label: 'Яйцо', value: 'egg' },
    { label: 'Рыба', value: 'fish' },
    { label: 'Моллюски', value: 'mollusks' },
    { label: 'Орехи', value: 'nuts' },
    { label: 'Томат (помидор)', value: 'tomato' },
    { label: 'Цитрусовые', value: 'citrus' },
    { label: 'Клубника (ягоды)', value: 'strawberry' },
    { label: 'Шоколад', value: 'chocolate' },
];

const MultiSelect: FC = (): JSX.Element => {
    const [selected, setSelected] = useState<string[]>([]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleChange = (values: string[]) => setSelected(values);
    const removeItem = (val: string) => setSelected((prev) => prev.filter((item) => item !== val));
    const clearAll = () => setSelected([]);

    return (
        <Popover
            placement='bottom-start'
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            gutter={0}
        >
            <PopoverTrigger>
                <Flex sx={selectorStyle.boxWrapper} onClick={() => (isOpen ? onClose() : onOpen())}>
                    <Flex sx={selectorStyle.innerWrapper}>
                        <Flex sx={selectorStyle.tagWrapper}>
                            {selected.length === 0 ? (
                                <Text sx={selectorStyle.text}>Выберите из списка...</Text>
                            ) : (
                                selected.map((val) => {
                                    const label = OPTIONS.find((opt) => opt.value === val)?.label;
                                    return (
                                        <Tag sx={selectorStyle.tag} key={val}>
                                            <TagLabel>{label}</TagLabel>
                                            <TagCloseButton
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    removeItem(val);
                                                }}
                                            />
                                        </Tag>
                                    );
                                })
                            )}
                        </Flex>

                        {selected.length !== 0 ? (
                            <IconButton
                                aria-label='clear'
                                icon={<CloseIcon />}
                                variant='ghost'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    clearAll();
                                }}
                                sx={selectorStyle.clearIcon}
                            />
                        ) : (
                            <ChevronDownIcon
                                sx={{
                                    ...selectorStyle.chevronIcon,
                                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                            />
                        )}
                    </Flex>
                </Flex>
            </PopoverTrigger>

            <PopoverContent sx={selectorStyle.popoverContent}>
                <PopoverBody py={1} px={0}>
                    <CheckboxGroup value={selected} onChange={handleChange}>
                        <VStack align='start' spacing={0} p={0}>
                            {OPTIONS.map((opt, index) => (
                                <Checkbox
                                    key={opt.value}
                                    value={opt.value}
                                    colorScheme='green'
                                    w='100%'
                                    h='32px'
                                    pl={4}
                                    size='sm'
                                    borderColor='lime.150'
                                    sx={{
                                        bg: index % 2 === 0 ? 'gray.10' : 'transparent',
                                    }}
                                >
                                    {opt.label}
                                </Checkbox>
                            ))}
                        </VStack>
                    </CheckboxGroup>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default MultiSelect;
