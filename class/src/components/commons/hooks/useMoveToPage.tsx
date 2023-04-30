import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/stores";

interface IUseMoveToPageReturn {
  visitedPage: string;
  onClickMoveToPage: (Path: string) => () => void;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();

  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (Path: string) => () => {
    setVisitedPage(Path); // 로그인페이지일 때는 set 하지않도록 조건 추가
    void router.push(Path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
};
