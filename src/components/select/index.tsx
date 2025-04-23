import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Checkbox,
    CheckboxGroup,
    HStack,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Text,
    VStack,
} from '@chakra-ui/react';
import { FC, JSX, useState } from 'react';

import { selectorStyle } from '~/components/select/style.tsx';
import TagComponent from '~/components/tag';

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

    const handleChange = (values: string[]) => setSelected(values);

    return (
        <Popover placement='bottom-start' gutter={0}>
            {({ isOpen }) => (
                <>
                    <PopoverTrigger>
                        <HStack
                            sx={{
                                ...selectorStyle.boxWrapper,
                                borderColor: selected.length ? 'lime.300' : 'gray.300',
                            }}
                        >
                            <HStack sx={selectorStyle.tagWrapper}>
                                {selected.length === 0 ? (
                                    <Text sx={selectorStyle.text}>Выберите из списка...</Text>
                                ) : (
                                    selected.map((val) => {
                                        const label = OPTIONS.find(
                                            (opt) => opt.value === val,
                                        )?.label;
                                        return <TagComponent val={val} label={label} />;
                                    })
                                )}
                            </HStack>
                            <ChevronDownIcon
                                sx={{
                                    ...selectorStyle.chevronIcon,
                                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                            />
                        </HStack>
                    </PopoverTrigger>
                    <PopoverContent sx={selectorStyle.popoverContent}>
                        <PopoverBody py={1} px={0}>
                            <CheckboxGroup value={selected} onChange={handleChange}>
                                <VStack align='start' spacing={0} p={0}>
                                    {OPTIONS.map((opt, index) => (
                                        <Checkbox
                                            key={opt.value}
                                            value={opt.value}
                                            iconColor='black'
                                            w='100%'
                                            h={8}
                                            pl={4}
                                            size='sm'
                                            borderColor='lime.150'
                                            sx={{
                                                bg: index % 2 === 0 ? 'gray.10' : 'transparent',
                                                '& .chakra-checkbox__control': {
                                                    borderColor: 'lime.150',
                                                    _checked: {
                                                        bg: 'lime.400',
                                                        borderColor: 'lime.400',
                                                    },
                                                },
                                            }}
                                        >
                                            {opt.label}
                                        </Checkbox>
                                    ))}
                                </VStack>
                            </CheckboxGroup>
                        </PopoverBody>
                    </PopoverContent>
                </>
            )}
        </Popover>
    );
};

export default MultiSelect;
