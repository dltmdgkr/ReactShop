import { RecoilState, atom } from "recoil";

export const totalPriceState: RecoilState<number> = atom({
  key: "totalPriceState",
  default: 0,
});
