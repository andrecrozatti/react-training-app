// ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definindo os tipos do contexto
type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

// Criando o contexto com valores padrão
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Criando o provedor do tema
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Estado do tema

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para acessar o contexto
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
