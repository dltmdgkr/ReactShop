import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContextProvider";

export const GroceryCategory = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className="main pt-16"
      style={{
        background: darkMode ? "#2a303c" : "#fff",
        color: darkMode ? "#9badbb" : "#000",
      }}
    >
      <h1 className="mt-20 sm:mt-28 text-center text-4xl sm:text-9xl font-bold">
        404
      </h1>
      <p className="mt-4 mb-5 sm:mb-10 text-center text-lg sm:text-3xl">
        페이지를 찾을 수 없습니다.
      </p>
      <Link to={"/"}>
        <div className="text-center">
          <button className="btn btn-md sm:btn-lg btn-primary sm:w-40">
            메인으로
          </button>
        </div>
      </Link>
    </div>
  );
};
