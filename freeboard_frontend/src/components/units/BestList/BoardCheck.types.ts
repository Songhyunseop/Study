import { MouseEvent } from "react";

export interface IBestListUIProps {
  data?: any;
  clickNext: (event: MouseEvent<HTMLDivElement>) => void;
  GoCreate: () => void;
}
