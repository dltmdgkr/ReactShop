import { ProductType } from "../types/product.type";
const key = "shoppingBasket";
// 장바구니에 낱개의 프로덕트 저장하기
export const saveProductToShoppingBasket = (product: ProductType) => {
  const shoppingBasket = localStorage.getItem(key);
  if (shoppingBasket === null) {
    console.log("input", product);
    localStorage.setItem(key, JSON.stringify(product));
    return;
  }

  const parsedShoppingBasket: ProductType[] = JSON.parse(shoppingBasket);
  parsedShoppingBasket.push(product);
  localStorage.setItem(key, JSON.stringify(parsedShoppingBasket));
};

// 장바구니에 저장된 프로덕트들 불러오기
export const getProductsFromShoppingBasket = () => {
  const shoppingBasket = localStorage.getItem(key);
  if (shoppingBasket === null) return null;

  const parsedShoppingBasket: ProductType[] = JSON.parse(shoppingBasket);

  return parsedShoppingBasket;
};

// const pageData = getProductsFromShoppingBasket();
