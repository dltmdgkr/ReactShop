import styles from "./SearchBar.module.css";
import { useState, useEffect } from "react";
import { ProductType } from "../../types/product.type";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContextProvider";

interface SearchBarProps {
  searchDataList: ProductType[];
}

export const SearchBar = ({ searchDataList }: SearchBarProps) => {
  const { darkMode } = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(searchDataList);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const toggleSearchBar = () => setIsSearchBarVisible(!isSearchBarVisible);

  useEffect(() => {
    setFilteredData(
      searchDataList.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchDataList, searchValue]);

  return (
    <>
      <div className={styles.dropdown}>
        <p onClick={toggleSearchBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 m-2 ${styles["search-ico"]} ${
              darkMode ? "stroke-white" : "stroke-black"
            }`}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </p>
        <input
          type="text"
          placeholder="검색"
          className={`input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-200 dark:bg-gray-600 !text-gray-800 dark:!text-white ${
            styles["search-bar"]
          } ${isSearchBarVisible ? styles["search-bar-visible"] : ""}`}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <ul className={searchValue ? styles["search-list"] : ""}>
          {searchValue === "" ? (
            ""
          ) : filteredData.length === 0 ? (
            <li style={{ width: "100vw" }}>검색 결과가 없습니다.</li>
          ) : (
            filteredData.map((data) => (
              <li key={data.id}>
                <Link
                  to={`/product/${data.id}`}
                  onClick={() => {
                    setSearchValue("");
                    setIsSearchBarVisible(false);
                  }}
                >
                  {data.title}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};
