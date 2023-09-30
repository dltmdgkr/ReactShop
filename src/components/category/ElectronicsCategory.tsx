import { Card } from "../Card";
import { ProductType } from "../../types/product.type";
import { useEffect, useState } from "react";
import { getData } from "../../api/productApi";

export const ElectronicsCategory = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    (async function getProducts() {
      const data = await getData();
      const datas = data.filter((product: { category: string }) => {
        return product.category === "electronics";
      });
      setProducts(datas);
    })();

    //eslint-disable-next-line
  }, [products.length]);

  return (
    <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        디지털
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
};
