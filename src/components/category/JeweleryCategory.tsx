import { ProductListViewByCategory } from "../productListViewByCategory/ProductListViewByCategory";

export const JeweleryCategory = ({ limit }: { limit: number }) => {
  return (
    <ProductListViewByCategory
      title="액세서리"
      category="jewelery"
      limit={limit}
    />
  );
};
