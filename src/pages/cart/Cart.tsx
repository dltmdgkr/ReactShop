import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/cartState";
import { CartList } from "./CartList";
import { TotalCart } from "./TotalCart";
import { useEffect, useState } from "react";
import { getProductsFromShoppingBasket } from "../../utils/shoppingBasket";
import { Link } from "react-router-dom";
import { Modal } from "../../components/modal/Modal";

export const Cart = () => {
  const [cartItemList, setCartItemList] = useRecoilState(cartState);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const cartData = getProductsFromShoppingBasket();
    setCartItemList(cartData || []);
  }, [setCartItemList]);

  const handleTotalPrice = () => {
    let itemPrice = 0;
    cartItemList.forEach((item: { price: number; count: number }) => {
      itemPrice += item.price * item.count;
    });
    return itemPrice;
  };

  const showModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const clearLocalStorage = () => {
    setOpenModal(false);
    localStorage.removeItem("shoppingBasket");
    location.reload();
  };

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        <div className="lg:flex justify-between mb-20">
          <div>
            {cartItemList === null || cartItemList.length === 0 ? (
              <div style={{ width: "500px", height: "300px" }}>
                <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
                <Link to={"/"}>
                  <button className="btn btn-primary mt-10">담으러 가기</button>
                </Link>
              </div>
            ) : (
              cartItemList.map((p) => (
                <CartList
                  key={`key-${p.id}`}
                  id={p.id}
                  price={p.price}
                  title={p.title}
                  image={p.image}
                />
              ))
            )}
          </div>
          <TotalCart
            handleTotalPrice={handleTotalPrice}
            showModal={showModal}
          />
        </div>
      </div>
      {openModal && (
        <Modal closeModal={closeModal} clearLocalStorage={clearLocalStorage} />
      )}
    </section>
  );
};
