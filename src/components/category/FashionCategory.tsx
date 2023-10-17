import { useGetProductListByCategory } from "../../hooks/useGetProductListByCategory";
import { ProductListViewByCategory } from "../ProductListViewByCategory/ProductListViewByCategory";

interface Props {
  limit?: number;
}

export const FashionCategory = ({ limit }: Props) => {
  const { productList } = useGetProductListByCategory({
    category: "men's clothing",
    limit,
  });

  return <ProductListViewByCategory title="패션" porductList={productList} />;
};
