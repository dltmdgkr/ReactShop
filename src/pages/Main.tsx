// import { useEffect, useState } from "react";
// import { getData } from "../api/productApi";
import { FashionCategory } from "../components/category/FashionCategory";
import { JeweleryCategory } from "../components/category/JeweleryCategory";
import { ElectronicsCategory } from "../components/category/ElectronicsCategory";
import Slider from "../components/slider/Slider";
// import { ProductType } from "../types/product.type";
// import { saveProductToShoppingBasket } from "../utils/shoppingBasket";

export const Main = () => {
  // const [products, setProducts] = useState<ProductType[]>([]);

  // useEffect(() => {
  //   (async function getProducts() {
  //     const data = await getData();
  //     setProducts(data);
  //   })();

  //   // if (products.length > 0) {
  //   //   saveProductToShoppingBasket(products[0]);
  //   // }

  //   //eslint-disable-next-line
  // }, [products.length]);

  return (
    <>
      <Slider />
      <FashionCategory limit={4} />
      <JeweleryCategory limit={4} />
      <ElectronicsCategory limit={4} />
    </>
  );
};
