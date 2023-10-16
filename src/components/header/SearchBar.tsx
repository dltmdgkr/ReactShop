import styles from "./SearchBar.module.css";
import { useState, useEffect } from "react";
import { ProductType } from "../../types/product.type";
import { Link } from "react-router-dom";

interface SearchBarProps {
  searchDataList: ProductType[];
}

export const SearchBar = ({ searchDataList }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(searchDataList);

  useEffect(() => {
    setFilteredData(
      searchDataList.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchDataList, searchValue]);

  return (
    <>
      <div className="dropdown">
        <input
          type="text"
          placeholder="검색"
          className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <ul className={styles.searchList}>
          {searchValue === ""
            ? ""
            : filteredData.map((data) => (
                <li key={data.id}>
                  <Link
                    to={`/product/${data.id}`}
                    onClick={() => {
                      setSearchValue("");
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
