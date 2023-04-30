// global State 지정 하는 곳
import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const countState = atom({
  key: "count", // key값은 정해져있지 않으며, 임의로 지정가능!
  default: 0,
});

export const accessTokenState = atom({
  key: "accessToken",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});

// 함수 전역 설정
export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
