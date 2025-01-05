import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const buttonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: theme === 'light' ? '#ffce00' : '#4a4a4a',
        color: theme === 'light' ? '#000' : '#fff',
        border: 'none',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };

    return <button style={buttonStyle} onClick={toggleTheme}>☀️</button>;
};

export default ThemeToggler;
