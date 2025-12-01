/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React, { useState } from 'react';

import { ThemeProvider } from './ThemeContext'
import ThemeToggler from './ThemeToggler';
import ThemeShower from './ThemeShower';

export default function MyReactContext() {

    return (
        <div>
            <ThemeProvider>
                <ThemeToggler />
                <ThemeShower />
            </ThemeProvider>
        </div>
    );

}