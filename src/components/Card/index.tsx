import { useNavigate } from "react-router-dom";
import { ProductType } from "../../types/product.type";

interface CardProps extends Omit<ProductType, "description"> {}

export const Card = ({ id, title, price, image }: CardProps) => {
  const navigate = useNavigate();

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
        />
      </figure>
      <div className="card-body bg-gray-100 dark:bg-gray-700">
        <h2 className="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops">
          {title}
        </h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{price}</button>
        </div>
      </div>
    </div>
  );
};
