import styles from "./NavigationBar.module.css";
import { BsSun } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BiMoon } from "react-icons/bi";
import { useTheme } from "../../ThemeContextProvider";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const { darkMode, toggleTheme } = useTheme() as {
    darkMode: boolean;
    toggleTheme: () => void;
  };

  // const contextValue = useContext(ThemeContext);
  // const { darkMode, toggleTheme } = contextValue ?? { darkMode: false, toggleTheme: () => {} };

  return (
    <div
      className={`fixed z-10 top-0 w-full navbar shadow-lg  text-neutral-content ${
        darkMode ? styles.darkMode : styles.lightMode
      }`}
    >
      {/* <div className={darkMode ? styles.darkMode : styles.lightMode}> */}
      <div className={`flex w-full xl:container xl:m-auto `}>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <Link to="/" className={styles.nav}>
            React Shop
          </Link>
          <Link to="/fashion" className={styles.nav}>
            패션
          </Link>
          <Link to="/accessory" className={styles.nav}>
            액세서리
          </Link>
          <Link to="/digital" className={styles.nav}>
            디지털
          </Link>
        </div>
        {darkMode ? (
          <button onClick={() => toggleTheme()}>
            <BsSun />
          </button>
        ) : (
          <button onClick={() => toggleTheme()}>
            <BiMoon />
          </button>
        )}
        <button>
          <LiaShoppingBagSolid />
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
