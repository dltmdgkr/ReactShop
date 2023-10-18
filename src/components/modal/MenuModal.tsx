import { Link } from "react-router-dom";
import styles from "./MenuModal.module.css";
import { useTheme } from "../../context/ThemeContextProvider";

interface MenuModalProps {
  closeModal: () => void;
}

export const MenuModal = ({ closeModal }: MenuModalProps) => {
  const { darkMode } = useTheme();
  return (
    <div
      className={darkMode ? styles.darkMode : styles.lightMode}
      onClick={closeModal}
    >
      <ul
        className={
          darkMode ? styles["dark-menu-list"] : styles["light-menu-list"]
        }
      >
        <li>
          <Link to={"/fashion"}>패션</Link>
        </li>
        <li>
          <Link to={"/accessory"}>액세서리</Link>
        </li>
        <li>
          <Link to={"/digital"}>디지털</Link>
        </li>
      </ul>
    </div>
  );
};
