import { useTheme } from "../../context/ThemeContextProvider";
import styles from "./Footer.module.css";

export const Footer = () => {
  const { darkMode } = useTheme();
  return (
    <footer className={darkMode ? styles.darkMode : styles.lightMode}>
      <div style={{ marginTop: "30px" }}>제로베이스</div>
      <div style={{ marginTop: "50px" }}>
        <p>Copyright © 2022 Zero Base</p>
      </div>
    </footer>
  );
};
