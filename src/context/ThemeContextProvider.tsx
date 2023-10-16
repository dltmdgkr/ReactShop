import { createContext, ReactNode, useState, useContext } from "react";

interface ThemeContextProps {
  children: ReactNode;
  darkMode?: boolean;
  toggleTheme?: () => void;
}

interface ThemeState {
  darkMode: boolean;
  toggleTheme: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const initialTheme = {
  darkMode: false,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeState>(initialTheme);

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((curr) => !curr);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
};
