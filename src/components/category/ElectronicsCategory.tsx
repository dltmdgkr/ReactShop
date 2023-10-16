import { useGetProductListByCategory } from "../../hooks/useGetProductListByCategory";
import { ProductListViewByCategory } from "../ProductListViewByCategory/ProductListViewByCategory";

interface Props {
  limit?: number;
}

export const ElectronicsCategory = ({ limit }: Props) => {
  const { productList } = useGetProductListByCategory({
    category: "electronics",
    limit,
  });
  return <ProductListViewByCategory title="디지털" porductList={productList} />;
};
