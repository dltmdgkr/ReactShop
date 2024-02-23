import { FashionCategory } from "../components/category/FashionCategory";
import { JeweleryCategory } from "../components/category/JeweleryCategory";
import { ElectronicsCategory } from "../components/category/ElectronicsCategory";
import Slider from "../components/slider/Slider";
import styles from "./Main.module.css";
import { useTheme } from "../context/ThemeContextProvider";

export const Main = () => {
  const { darkMode } = useTheme();

  return (
    <main className={darkMode ? styles.darkMode : styles.lightMode}>
      <Slider />
      <FashionCategory category="men's clothing" limit={4} />
      <JeweleryCategory limit={4} />
      <ElectronicsCategory limit={4} />
    </main>
  );
};
