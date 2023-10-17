import { useEffect } from "react";
import { cartState } from "../../atoms/cartState";
import { useRecoilState } from "recoil";
import { ProductType } from "../../types/product.type";
import { totalPriceState } from "../../atoms/totalPriceState";

interface TotalCartProps {
  showModal: () => void;
}

export const TotalCart = ({ showModal }: TotalCartProps) => {
  const [cartItemList] = useRecoilState<ProductType[]>(cartState);
  const [totalPrice, setTotalPrice] = useRecoilState(totalPriceState);
  const itemCount = cartItemList.map((item) => item.count)[0];

  useEffect(() => {
    let itemPrice = 0;
    cartItemList.forEach((item: { price: number; count: number }) => {
      itemPrice += item.price * item.count;
    });
    setTotalPrice(itemPrice);
  }, [cartItemList, setTotalPrice, itemCount]);

  return (
    <div className="self-start shrink-0 flex items-center mt-10 mb-20">
      <span className="text-xl md:text-2xl">총 : ${totalPrice}</span>
      <button onClick={showModal} className="modal-button btn btn-primary ml-5">
        구매하기
      </button>
    </div>
  );
};
