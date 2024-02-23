import { Card } from "../product/Card";
import { useTheme } from "../../context/ThemeContextProvider";
import styles from "./ProductListViewByCategory.module.css";
import { useQuery } from "react-query";
import { fetchCategory } from "../../api/api";
import { ProductType } from "../../types/product.type";

interface Props {
  title: string;
  category: string;
  categories: string[];
  limit: number;
}

export const ProductListViewByCategory = ({
  title,
  category,
  categories,
  limit,
}: Props) => {
  const { darkMode } = useTheme();
  const { isLoading, data } = useQuery<ProductType[]>(
    ["productViewByCategory", category],
    () => fetchCategory(category, categories, limit)
  );

  if (isLoading || !data) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/images/loading.gif" alt="loading" />
      </div>
    );
  }

  return (
    <div className={darkMode ? styles.darkMode : styles.lightMode}>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          {title}
        </h2>
        <div className={`${styles["scroll-x"]} ${styles.item_list}`}>
          {data?.map((product) => (
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
