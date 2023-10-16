import { ProductType } from "../types/product.type";

const key = "shoppingBasket";

// 장바구니에 낱개의 프로덕트 저장하기
export const setProductToShoppingBasket = (product: ProductType) => {
  const shoppingBasket = localStorage.getItem(key);

  let parsedShoppingBasket: ProductType[] = [];
  if (shoppingBasket !== null) {
    parsedShoppingBasket = JSON.parse(shoppingBasket);
  }

  parsedShoppingBasket.push(product);
  localStorage.setItem(key, JSON.stringify(parsedShoppingBasket));
};

export const addProductToShoppingBasket = ({
  id,
  count,
  image,
  title,
  price,
}: ProductType) => {
  const shoppingBasket = localStorage.getItem(key);

  let parsedShoppingBasket: {
    id: number;
    count: number;
    image: string;
    title: string;
    price: number;
  }[] = [];
  if (shoppingBasket !== null) {
    parsedShoppingBasket = JSON.parse(shoppingBasket);
  }

  const existingItemIndex = parsedShoppingBasket.findIndex(
    (item) => item.id === id
  );

  count = 1;
  if (existingItemIndex !== -1) {
    parsedShoppingBasket[existingItemIndex].count += 1;
  } else {
    parsedShoppingBasket.push({
      id,
      count,
      image,
      title,
      price,
    });
  }

  localStorage.setItem(key, JSON.stringify(parsedShoppingBasket));
};

export const substractProductFromShoppingBasket = ({
  id,
  count,
}: ProductType) => {
  const shoppingBasket = localStorage.getItem(key);

  let parsedShoppingBasket: { id: number; count: number }[] = [];
  if (shoppingBasket !== null) {
    parsedShoppingBasket = JSON.parse(shoppingBasket);
  }

  const existingItemIndex = parsedShoppingBasket.findIndex(
    (item) => item.id === id
  );

  count = 1;
  if (existingItemIndex !== -1) {
    parsedShoppingBasket[existingItemIndex].count -= 1;
  } else {
    parsedShoppingBasket.push({ id, count });
  }

  localStorage.setItem(key, JSON.stringify(parsedShoppingBasket));
};

// 장바구니에 저장된 프로덕트들 불러오기
export const getProductsFromShoppingBasket = () => {
  const shoppingBasket = localStorage.getItem(key);
  if (shoppingBasket === null) return null;

  const parsedShoppingBasket: ProductType[] = JSON.parse(shoppingBasket);

  return parsedShoppingBasket;
};

export const removeProductFromShoppingBasket = (productId: number) => {
  const shoppingBasket = localStorage.getItem(key);
  if (shoppingBasket === null) return;

  let parsedShoppingBasket = JSON.parse(shoppingBasket);

  // 선택한 productId에 해당하는 제품을 필터링하여 삭제
  parsedShoppingBasket = parsedShoppingBasket.filter(
    (product: { id: number }) => product.id !== productId
  );

  // 업데이트된 장바구니 데이터를 다시 로컬 스토리지에 저장
  localStorage.setItem(key, JSON.stringify(parsedShoppingBasket));
};
