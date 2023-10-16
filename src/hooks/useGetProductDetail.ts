import axios from "axios";
import { useEffect, useState } from "react";
import { ProductType } from "../types/product.type";

interface getProductDetailType {
  id: number;
}

export const useGetProductDetail = ({ id }: getProductDetailType) => {
  const [product, setProduct] = useState<ProductType | null>(null);

  const getProductDetail = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { product };
};
