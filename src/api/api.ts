import { ProductType } from "../types/product.type";

export const fetchCategory = async (
  category: string,
  limit: number
): Promise<ProductType[]> => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}${
      limit ? `?limit=${limit}` : ""
    }`
  );

  if (!response.ok) {
    throw new Error(`카테고리 ${category}의 데이터를 가져오는데 실패했습니다.`);
  }

  return response.json();
};
