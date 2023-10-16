import { useNavigate } from "react-router-dom";
import { ProductType } from "../../types/product.type";
import styles from "./Card.module.css";
import { useTheme } from "../../context/ThemeContextProvider";

interface CardProps extends Omit<ProductType, "description"> {}

export const Card = ({ id, title, price, image }: CardProps) => {
  const navigate = useNavigate();

  const { darkMode } = useTheme();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
      id={id.toString()}
    >
      <figure className="flex h-80 bg-white overflow-hidden">
        <img
          src={image}
          alt="Shoes"
          className="transition-transform duration-300"
          style={{ width: "150px", height: "150px" }}
        />
      </figure>
      <div
        className={`card-body ${darkMode ? styles.darkMode : styles.lightMode}`}
      >
        <h2 className="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops">
          {title}
        </h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">${price}</button>
        </div>
      </div>
    </div>
  );
};
