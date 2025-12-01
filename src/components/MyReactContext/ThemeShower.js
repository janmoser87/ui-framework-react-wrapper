/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from 'react';
import { useTheme } from './ThemeContext'; 

export default function ThemeShower() {

    const { theme } = useTheme();

    return (
        <div 
            className={`p-2 rounded font-bold transition-colors duration-300 ${
                theme === 'dark' 
                ? 'bg-gray-800 text-white' 
                : 'bg-yellow-400 text-gray-900'
            }`}
        >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </div>
    );
}