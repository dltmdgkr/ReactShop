import { Card } from "../card/Card";
import { ProductType } from "../../types/product.type";
import { useTheme } from "../../context/ThemeContextProvider";
import styles from "./ProductListViewByCategory.module.css";

interface Props {
  title: string;
  porductList: ProductType[];
}

export const ProductListViewByCategory = ({ title, porductList }: Props) => {
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? styles.darkMode : styles.lightMode}>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          {title}
        </h2>
        <div className={`${styles["scroll-x"]} ${styles.item_list}`}>
          {porductList.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
              count={product.count}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
