import { ProductType } from "../types/product.type";

export const fetchCategory = async (
  category: string,
  categories: string[],
  limit: number
): Promise<ProductType[]> => {
  let categoryList: string[];

  if (typeof category === "string") {
    categoryList = [category];
  } else {
    categoryList = categories;
  }

  const requests = categoryList.map(async (cat) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${cat}${
        limit ? `?limit=${limit}` : ""
      }`
    );
    if (!response.ok) {
      throw new Error(`카테고리 ${cat}의 데이터를 가져오는데 실패했습니다.`);
    }
    return response.json();
  });

  const responses = await Promise.all(requests);
  const data = responses.flatMap((products) => products);
  return data;
};
