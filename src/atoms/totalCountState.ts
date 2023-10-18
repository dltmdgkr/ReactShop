import { RecoilState, atom } from "recoil";

export const totalCountState: RecoilState<number> = atom({
  key: "totalCountState",
  default: 0,
});
