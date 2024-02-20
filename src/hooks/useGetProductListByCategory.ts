import axios from "axios";
import { useEffect, useState } from "react";
import { ProductType } from "../types/product.type";

interface getProductListHookInputType {
  category: string;
  limit?: number;
}

export const useGetProductListByCategory = ({
  category,
  limit,
}: getProductListHookInputType) => {
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const getProductListByCategory = async () => {
    await axios
      .get(
        `https://fakestoreapi.com/products/category/${category}${
          limit ? `?limit=${limit}` : ""
        }`
      )
      .then((res) => {
        setProductList(res.data);
        setLoading(false);
        return res.data;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductListByCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return { productList, loading };
};
