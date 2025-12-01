/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from 'react';
import { useTheme } from './ThemeContext'; 

export default function ThemeToggler() {

    const { theme, toggleTheme } = useTheme();

    return (
        <button 
            onClick={toggleTheme}
        >
            {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
        </button>
    );
}