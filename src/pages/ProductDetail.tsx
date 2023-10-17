import { Link, useParams } from "react-router-dom";
import { useGetProductDetail } from "../hooks/useGetProductDetail";
import { ProductType } from "../types/product.type";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
import { addProductToShoppingBasket } from "../utils/shoppingBasket";
import { useTheme } from "../context/ThemeContextProvider";
import productStyles from "./ProductDetail.module.css";
import btnStyles from "./ProductDetailBtn.module.css";

export const ProductDetail = () => {
  const { darkMode } = useTheme();
  const { id } = useParams();
  const [cartItemList, setCartItemList] = useRecoilState(cartState);
  const { product }: { product: ProductType | null } = useGetProductDetail({
    id: Number(id),
  });

  if (!product) return null;

  const addToCart = () => {
    if (cartItemList.findIndex((pro) => pro.id === product.id) === -1) {
      setCartItemList((prevState) => [...prevState, product]);
    }
    addProductToShoppingBasket(product);
  };

  return (
    <section
      className={`main pt-16 ${
        darkMode ? productStyles.darkMode : productStyles.lightMode
      }`}
    >
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <div>
          <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
            <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
              <img
                src={product.image}
                style={{ width: "288px", height: "288px", padding: "16px" }}
                alt="Product Image"
              />
            </figure>
            <div className="card-body px-1 lg:px-12">
              <h1 className="card-title">{product.title}</h1>
              <p>{product.description}</p>
              <div className="flex items-center mt-3"></div>
              <p className="mt-2 mb-4 text-3xl">${product.price}</p>
              <div className="card-actions">
                <button className="btn btn-primary" onClick={() => addToCart()}>
                  장바구니에 담기
                </button>
                <Link
                  to="/cart"
                  className={`btn ${
                    darkMode
                      ? btnStyles["darkMode-btn"]
                      : btnStyles["lightMode-btn"]
                  }`}
                >
                  장바구니로 이동
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
