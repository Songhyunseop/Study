import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import BoardUI from "./BoardWrite.presenter";
import { useRef } from "react";
import { IBoardFnProps, MyVariables } from "./BoardWrite.types";

export default function BoardFn(props: IBoardFnProps) {
  const [Write, setWrite] = useState("");
  const [Pw, setPw] = useState("");
  const [Titlee, setTitlee] = useState("");
  const [Contents, setContents] = useState("");
  const [Youtube, setYoutube] = useState("");

  const [WriteError, setWriteError] = useState("");
  const [PwError, setPwError] = useState("");
  const [TitleError, setTitleError] = useState("");
  const [ContentsError, setContentsError] = useState("");
  const [isMail, setIsMail] = useState(false);

  const [isValid, setIsValid] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const router = useRouter();

  const [modalIsOpen, setIsOpen] = useState(false);

  const [addressIsOpen, setAddressIsOpen] = useState(false);

  const [error, setError] = useState("");

  const [fullAddress, setFullAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [Zipcode, setZipcode] = useState("");

  const [ImgUrl, setImgUrl] = useState(["", "", ""]);
  const [ImgIdx, setImgIdx] = useState(0);
  const [ImgChange, setImgChange] = useState("");

  const Fileref = useRef<HTMLInputElement>(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openBox() {
    setAddressIsOpen(true);
  }

  function closeBox() {
    setAddressIsOpen(false);
  }

  function ChangeWrite(event: ChangeEvent<HTMLInputElement>) {
    setWrite(event.target.value);

    if (event.target.value && Pw && Titlee && Contents) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function ChangePw(event: ChangeEvent<HTMLInputElement>) {
    setPw(event.target.value);

    if (event.target.value && Write && Titlee && Contents) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function ChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitlee(event.target.value);

    if (event.target.value && Pw && Write && Contents) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function ChangeContent(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);

    if (event.target.value && Pw && Titlee && Write) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  const ChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutube(event.target.value);

    console.log(event.target.value);
  };

  const ChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
    console.log(event.target.value);
  };

  // const [done,setDone] = useState(false)  // 문제점 : 초기값이 첫 실행에서는 재할당 안됨
  // 두 번째 실행부터 할당되기 시작 (왜?) => [async가 비동기처리 되서]

  const SignBtn = () => {
    if (!Write) {
      setWriteError("이름이 올바르지 않습니다");
    } else {
      setWriteError("");
    }

    if (!Pw) {
      setPwError("비밀번호가 올바르지 않습니다");
    } else {
      setPwError("");
    }

    if (!Titlee) {
      setTitleError("제목이 올바르지 않습니다");
    } else {
      setTitleError("");
    }

    if (!Contents) {
      setContentsError("내용을 입력해 주세요");
    } else {
      setContentsError("");
    }
  };

  const CreateBtn = async () => {
    setIsMail(!isMail);

    if (!Write || !Pw || !Titlee || !Contents) {
      setError("빈 칸을 모두 입력해 주세요");
      openModal();
    } else {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: Write,
              password: Pw,
              title: Titlee,
              contents: Contents,
              youtubeUrl: Youtube,
              images: ImgUrl,
              boardAddress: {
                zipcode: Zipcode,
                address: fullAddress,
                addressDetail: addressDetail,
              },
            },
          },
        });

        router.push(`/board-page1/${result.data.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
        openModal();
      }
    }
  };

  const EditBtn = async () => {
    const myVariables: MyVariables = {
      updateBoardInput: {
        images: [],
      },
    };

    myVariables.boardId =
      typeof router.query.number === "string" ? router.query.number : undefined;

    if (Zipcode || fullAddress || addressDetail) {
      myVariables.updateBoardInput.boardAddress = {};
    }

    if (Titlee) {
      myVariables.updateBoardInput.title = Titlee;
    }

    if (Pw) {
      myVariables.password = Pw;
    }

    if (Contents) {
      myVariables.updateBoardInput.contents = Contents;
    }

    ImgUrl.map((el) => {
      if (el !== "") myVariables.updateBoardInput.images.push(el);
    });

    props.data?.fetchBoard.images.map((el: string, idx: number) => {
      if (el !== "" && ImgUrl[idx] === "")
        myVariables.updateBoardInput.images.push(el);
    });

    if (Zipcode) {
      myVariables.updateBoardInput.boardAddress = {};
      myVariables.updateBoardInput.boardAddress.zipcode = Zipcode;
    }

    if (fullAddress) {
      myVariables.updateBoardInput.boardAddress = {};
      myVariables.updateBoardInput.boardAddress.address = fullAddress;
    }

    if (addressDetail) {
      myVariables.updateBoardInput.boardAddress = {};
      myVariables.updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      const result = await updateBoard({ variables: myVariables });

      console.log("hi");
      console.log(result);

      router.push(`/board-page1/${router.query.number}`);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      openModal();
    }
  };

  const handleComplete = (data3: any) => {
    setFullAddress(data3.address);
    setZipcode(data3.zonecode);
    let extraAddress = "";

    if (data3.addressType === "R") {
      if (data3.bname !== "") {
        extraAddress += data3.bname;
      }
      if (data3.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data3.buildingName}` : data3.buildingName;
      }
      // fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(data3.zonecode); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const IndexClick = (idx: number) => {
    setImgIdx(idx);
    // setImgChange(true);
  };

  const ChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    console.log(file);

    const result = await uploadFile({
      variables: {
        file: file,
      },
    });
    console.log(result);

    const newFileUrl = [...ImgUrl];
    newFileUrl[ImgIdx] = result.data?.uploadFile.url;
    setImgUrl(newFileUrl);
  };

  const ImgClick = () => {
    Fileref.current?.click();
  };

  console.log(123453232);
  console.log(props.data?.fetchBoard.images);
  console.log(123453232);

  return (
    <div>
      <BoardUI
        aaa={WriteError}
        bbb={PwError}
        ccc={TitleError}
        ddd={ContentsError}
        chgWrite={ChangeWrite}
        chgPw={ChangePw}
        chgTitle={ChangeTitle}
        chgContent={ChangeContent}
        btn={CreateBtn}
        sign={SignBtn}
        create={CreateBtn}
        isEdit={props.isEdit}
        EditBtn={EditBtn}
        data={props.data}
        isValid={isValid}
        ChangeYoutube={ChangeYoutube}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        openModal={openModal}
        error={error}
        handleComplete={handleComplete}
        openBox={openBox}
        closeBox={closeBox}
        addressIsOpen={addressIsOpen}
        fullAddress={fullAddress}
        ChangeAddress={ChangeAddress}
        Zipcode={Zipcode}
        addressDetail={addressDetail}
        Pw={Pw}
        Titlee={Titlee}
        Contents={Contents}
        ImgClick={ImgClick}
        Fileref={Fileref}
        ChangeFile={ChangeFile}
        IndexClick={IndexClick}
        ImgUrl={ImgUrl}
        ImgChange={ImgChange}
      />
    </div>
  );
}
