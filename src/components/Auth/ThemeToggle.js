import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const handleToggle = () => {
        toggleColorMode();
    };

    return (
        <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={handleToggle}
        />
    );
};

export default ThemeToggle;
