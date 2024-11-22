import React, { useEffect } from 'react';
import {useTheme } from '../../../context/ThemeContext';
import './styles/style.css';

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Atualizando o tema no <body> para aplicar o tema claro ou escuro
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div style={{display: "flex", justifyContent:"space-between"}}>
      <p>O tema atual é: {theme}</p>

      <button className='toggleThemeButton' onClick={toggleTheme}>
         {theme === 'light' ? '🌑' : '🌞'}
      </button>
    </div>
  );
};


export default ThemeToggler;