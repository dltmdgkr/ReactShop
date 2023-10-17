import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";

interface ThemeContextProps {
  children: ReactNode;
  darkMode?: boolean;
  toggleTheme?: () => void;
}

interface ThemeState {
  darkMode: boolean;
  toggleTheme: () => void;
}
const initialDarkMode = localStorage.getItem("theme") || "dark";
// eslint-disable-next-line react-refresh/only-export-components
export const initialTheme = {
  darkMode: initialDarkMode === "dark",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeState>(initialTheme);

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [darkMode, setDarkMode] = useState(initialTheme.darkMode);

  const toggleTheme = () => {
    const handleDarkMode = !darkMode;
    localStorage.setItem("theme", handleDarkMode ? "dark" : "light");
    setDarkMode(handleDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log("savedTheme", savedTheme);
    if (savedTheme === "dark" || savedTheme === "light") {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

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
