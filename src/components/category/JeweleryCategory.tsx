import { useGetProductListByCategory } from "../../hooks/useGetProductListByCategory";
import { ProductListViewByCategory } from "../ProductListViewByCategory/ProductListViewByCategory";

interface Props {
  limit?: number;
}

export const JeweleryCategory = ({ limit }: Props) => {
  const { productList } = useGetProductListByCategory({
    category: "jewelery",
    limit,
  });
  return (
    <ProductListViewByCategory title="액세서리" porductList={productList} />
  );
};
