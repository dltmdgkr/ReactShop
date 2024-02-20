import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/cartState";
import {
  addProductToShoppingBasket,
  removeProductFromShoppingBasket,
  substractProductFromShoppingBasket,
} from "../../utils/shoppingBasket";
import { useEffect, useState } from "react";
import { ProductType } from "../../types/product.type";
import { useGetProductDetail } from "../../hooks/useGetProductDetail";
import { Link } from "react-router-dom";
import { totalCountState } from "../../atoms/totalCountState";

interface CartListProps {
  id: number;
  image: string;
  title: string;
  totalPrice: number;
  price: number;
  setTotalPrice: (price: number) => void;
}

export const CartList = ({
  id,
  image,
  title,
  price,
  totalPrice,
  setTotalPrice,
}: CartListProps) => {
  const [cartItemList, setCartItemList] =
    useRecoilState<ProductType[]>(cartState);
  const { product }: { product: ProductType | null } = useGetProductDetail({
    id: Number(id),
  });

  const local = localStorage.getItem("shoppingBasket");
  const parsed = JSON.parse(local || "[]");

  let initialCount = 0;

  const findCount = parsed.find((item: { id: number }) => item.id === id);

  if (findCount) {
    initialCount = findCount.count;
  }

  const [count, setCount] = useState(initialCount);
  const [itemPrice, setItemPrice] = useState(price * count);
  const [totalCount, setTotalCount] = useRecoilState(totalCountState);

  useEffect(() => {
    setItemPrice(price * count);
  }, [count, price]);

  if (!product) return;

  const handlePlusCount = () => {
    setCount(count + 1);
    setTotalPrice(totalPrice + price);
    setTotalCount(totalCount + count);
    addProductToShoppingBasket(product);
  };

  const handleMinusCount = () => {
    if (count <= 1) {
      handleRemove(id);
      removeProductFromShoppingBasket(id);
      setTotalCount(totalCount + count);
    } else {
      setCount(count - 1);
      setTotalPrice(totalPrice + price);
      setTotalCount(totalCount + count);
      substractProductFromShoppingBasket(product);
    }
  };

  const handleRemove = (id: number) => {
    setCartItemList(cartItemList.filter((el) => el.id !== id));
  };

  return (
    <div>
      <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
        <Link to={`/product/${id}`}>
          <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
            <img src={image} alt="상품이미지" />
          </figure>
        </Link>
        <div className="card-body px-1 lg:px-12">
          <Link to={`/product/${id}`}>
            <h2>{title}</h2>
          </Link>
          <p>${Math.floor(itemPrice)}</p>
          <div className="card-actions">
            <div className="btn-group">
              <button
                className="btn btn-primary"
                onClick={() => handleMinusCount()}
              >
                -
              </button>
              <button className="btn btn-ghost no-animation">{count}</button>
              <button
                className="btn btn-primary"
                onClick={() => handlePlusCount()}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
