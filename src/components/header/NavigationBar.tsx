import styles from "./NavigationBar.module.css";
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
            <svg
              className="swap-off fill-white w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          </button>
        ) : (
          <button onClick={() => toggleTheme()}>
            <svg
              className="swap-on fill-black w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </button>
        )}
        <SearchBar searchDataList={data} />
        <div className={styles["btn-cart"]}>
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-gray-100 dark:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
              {totalCount}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
