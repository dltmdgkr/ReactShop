// import { useEffect, useState } from "react";
// import { getData } from "../api/productApi";
// import { Card } from "../components/Card";
import { FashionCategory } from "../components/category/FashionCategory";
import { JeweleryCategory } from "../components/category/JeweleryCategory";
import { ElectronicsCategory } from "../components/category/ElectronicsCategory";
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
      <FashionCategory />
      <JeweleryCategory />
      <ElectronicsCategory />
      {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div> */}
    </>
  );
};
