import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IBestListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  ClickNumber: (event: MouseEvent<HTMLSpanElement>) => void;
  clickNext: (event: MouseEvent<HTMLDivElement>) => void;
  GoCreate: () => void;
  MoveNext: () => void;
  MovePrev: () => void;
  Next: number;
  targetNum: string;
  MoveFirst: () => void;
  MoveEnd: () => void;
  BoardsCount?: Pick<IQuery, "fetchBoardsCount">;
  ChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
}
