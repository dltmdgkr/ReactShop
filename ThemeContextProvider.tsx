import { createContext, ReactNode, useState, useContext } from "react";

interface ThemeContextProps {
  children: ReactNode;
  darkMode?: boolean;
  toggleTheme?: () => void;
}

// export const ThemeContext = createContext();
export const ThemeContext = createContext<
  { darkMode: boolean; toggleTheme: () => void } | undefined
>(undefined);

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

//eslint-disable-next-line
export const useTheme = () => {
  return useContext(ThemeContext);
};
