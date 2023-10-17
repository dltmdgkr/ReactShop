import { useTheme } from "../../context/ThemeContextProvider";
import styles from "./Footer.module.css";

export const Footer = () => {
  const { darkMode } = useTheme();
  return (
    <footer
      // className="p-10 footer bg-base-200 text-base-content footer-center"
      className={darkMode ? styles.darkMode : styles.lightMode}
    >
      <div style={{ marginTop: "30px" }}>제로베이스</div>
      <div style={{ marginTop: "250px" }}>
        <p>Copyright © 2022 Zero Base</p>
      </div>
    </footer>
  );
};
