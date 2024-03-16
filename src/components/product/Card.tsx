import { ProductType } from "../../types/product.type";
import styles from "./Card.module.css";
import { useTheme } from "../../context/ThemeContextProvider";
import { Link } from "react-router-dom";

interface CardProps extends Omit<ProductType, "description"> {}

export const Card = ({ id, title, price, image }: CardProps) => {
  const { darkMode } = useTheme();

  return (
    <Link
      to={`/product/${id}`}
      className={`w-full max-w-full card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal flex-shrink-0 ${
        darkMode ? styles.darkMode : styles.lightMode
      }`}
      style={{ maxWidth: "400px" }}
      id={id.toString()}
    >
      <figure className="flex h-80 bg-white overflow-hidden">
        <img
          src={image}
          alt={title}
          className="transition-transform duration-300"
          style={{ width: "150px", height: "150px" }}
        />
      </figure>
      <div
        className={`card-body ${darkMode ? styles.darkMode : styles.lightMode}`}
      >
        <h2 style={{ whiteSpace: "normal" }}>{title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">${Math.floor(price)}</button>
        </div>
      </div>
    </Link>
  );
};
