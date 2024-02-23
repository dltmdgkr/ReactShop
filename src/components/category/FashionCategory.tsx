import { ProductListViewByCategory } from "../productListViewByCategory/ProductListViewByCategory";

export const FashionCategory = ({
  limit,
  category,
}: {
  limit: number;
  category: string;
}) => {
  return (
    <ProductListViewByCategory
      title="패션"
      category={category}
      categories={["men's clothing", "women's clothing"]}
      limit={limit}
    />
  );
};
