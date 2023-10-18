import styles from "./NavigationBar.module.css";
import { BsSun } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BiMoon } from "react-icons/bi";
import { useTheme } from "../../context/ThemeContextProvider";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import axios from "axios";
import { useState, useEffect } from "react";
import { ProductType } from "../../types/product.type";
import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/cartState";
import { totalCountState } from "../../atoms/totalCountState";

interface NavigationBarProps {
  showModal: () => void;
}

const NavigationBar = ({ showModal }: NavigationBarProps) => {
  const { darkMode, toggleTheme } = useTheme();
  const [data, setData] = useState<ProductType[]>([]);
  const [cartItemList] = useRecoilState(cartState);
  const [totalCount, setTotalCount] = useRecoilState(totalCountState);

  const getData = async (): Promise<ProductType[]> => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data.map((item: { id: number; title: string }) => ({
        id: item.id,
        title: item.title,
      }));
      return data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTotalCount(handleTotalCount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalCount]);

  const handleTotalCount = () => {
    let totalCount = 0;
    cartItemList.map((item) => (totalCount += item.count));
    return totalCount;
  };

  return (
    <div
      className={`fixed z-10 top-0 w-full navbar shadow-lg  text-neutral-content ${
        darkMode ? styles.darkMode : styles.lightMode
      }`}
    >
      <div className="flex w-full xl:container xl:m-auto">
        <div className={styles["flex-none"]} onClick={showModal}>
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
          <div className={styles.category}>
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
        <SearchBar searchDataList={data} />
        <div className={styles["btn-cart"]}>
          <Link to="/cart">
            <LiaShoppingBagSolid />
          </Link>
          <span className={styles.num}>{totalCount}</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
