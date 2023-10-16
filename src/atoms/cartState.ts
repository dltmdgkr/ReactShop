import { RecoilState, atom } from "recoil";
import { ProductType } from "../types/product.type";

export const cartState: RecoilState<ProductType[]> = atom<ProductType[]>({
  key: "cartState",
  default: [],
});
