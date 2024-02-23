import { ProductListViewByCategory } from "../productListViewByCategory/ProductListViewByCategory";

export const ElectronicsCategory = ({ limit }: { limit: number }) => {
  return (
    <ProductListViewByCategory
      title="디지털"
      category="electronics"
      limit={limit}
    />
  );
};
