import React from 'react';
import './ThemeButton.css';

const ThemeButton = ({ toggleTheme, isDarkTheme }) => {
  return (
    <button type="button" visual="button" onClick={toggleTheme}>
      {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </button>
  );
};

export default ThemeButton;
