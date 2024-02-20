import styles from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import { ProductType } from "../../types/product.type";
import { Link } from "react-router-dom";

interface SearchBarProps {
  searchDataList: ProductType[];
}

export const SearchBar = ({ searchDataList }: SearchBarProps) => {
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
          <AiOutlineSearch className={styles["search-ico"]} />
        </p>
        <div
          className={`${styles["search-bar"]} ${
            isSearchBarVisible ? styles["search-bar-visible"] : ""
          }`}
        >
          <input
            type="text"
            placeholder="검색"
            className={
              "opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
            }
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <ul className={searchValue ? styles["search-list"] : ""}>
          {searchValue === ""
            ? ""
            : filteredData.map((data) => (
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
              ))}
        </ul>
      </div>
    </>
  );
};
