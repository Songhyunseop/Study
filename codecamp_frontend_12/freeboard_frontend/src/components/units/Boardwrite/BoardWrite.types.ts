import { ChangeEvent, RefObject } from "react";

export interface IBoardFnProps {
  isEdit: boolean;
  data?: any;
}

export interface MyVariables {
  updateBoardInput: {
    images: string[];
    boardAddress?: {
      zipcode?: string;
      address?: string;
      addressDetail?: string;
    };
    title?: string;
    contents?: string;
  };
  boardId?: string;
  password?: string;
}

export interface IBoardUI {
  aaa: string;
  bbb: string;
  ccc: string;
  ddd: string;
  chgWrite: (event: ChangeEvent<HTMLInputElement>) => void;
  chgPw: (event: ChangeEvent<HTMLInputElement>) => void;
  chgTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  chgContent: (event: ChangeEvent<HTMLInputElement>) => void;
  btn: () => void;
  sign: () => void;
  create: () => void;
  isEdit: boolean;
  EditBtn: () => void;
  data: any;
  isValid: boolean;
  ChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  modalIsOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  error: string;
  handleComplete: (data3: any) => void;
  openBox: () => void;
  closeBox: () => void;
  addressIsOpen: boolean;
  fullAddress: string;
  ChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  Zipcode: string;
  addressDetail: string;
  Pw: string;
  Titlee: string;
  Contents: string;
  ImgClick: () => void;
  Fileref: RefObject<HTMLInputElement>;
  ChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  IndexClick: (idx: number) => void;
  ImgUrl: string[];
  ImgChange: string;
}

export interface SignUpBtnProps {
  isValid: boolean;
}
