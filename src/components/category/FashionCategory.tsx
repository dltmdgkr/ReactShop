import { ProductListViewByCategory } from "../productListViewByCategory/ProductListViewByCategory";

export const FashionCategory = ({ limit }: { limit: number }) => {
  return (
    <ProductListViewByCategory
      title="패션"
      category="men's clothing"
      limit={limit}
    />
  );
};
