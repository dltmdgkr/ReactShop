import { selector } from "recoil";

export const productsList = selector({
  key: "productsList",
  get: async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      return (await response.json()) || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
      return [];
    }
  },
});
