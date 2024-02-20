import { useGetProductListByCategory } from "../../hooks/useGetProductListByCategory";
import { ProductListViewByCategory } from "../productListViewByCategory/ProductListViewByCategory";

interface Props {
  limit?: number;
}

export const JeweleryCategory = ({ limit }: Props) => {
  const { productList, loading } = useGetProductListByCategory({
    category: "jewelery",
    limit,
  });

  if (loading) {
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
    <ProductListViewByCategory title="액세서리" productList={productList} />
  );
};
