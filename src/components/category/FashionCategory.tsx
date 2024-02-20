import { useGetProductListByCategory } from "../../hooks/useGetProductListByCategory";
import { ProductListViewByCategory } from "../ProductListViewByCategory/ProductListViewByCategory";

interface Props {
  limit?: number;
}

export const FashionCategory = ({ limit }: Props) => {
  const { productList, loading } = useGetProductListByCategory({
    category: "men's clothing",
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

  return <ProductListViewByCategory title="패션" productList={productList} />;
};
