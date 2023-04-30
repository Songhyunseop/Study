import * as S from "./Createproduct.styles";
import { useForm } from "react-hook-form";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./Createproduct.queries";
import { KaKaoMarker } from "../../commons/hooks";
import { debounce } from "lodash";
import { LoginWithAuth } from "../../commons/hoc/withauth";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const Quillstyle = {
  width: "996px",
  height: "320px",
};
function CreateProductUI() {
  const { register, handleSubmit, setValue } = useForm();

  const fileRef = [useRef(null), useRef(null)];
  const [ImgFile, setImgFile] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isLoad, setIsLoad] = useState(false);

  const [uploadfile] = useMutation(UPLOAD_FILE);

  const ContentChange = (val) => {
    setValue("contents", val);
  };

  const ChangeInputData = (data) => {
    console.log(data);
  };

  const ChangeImgFile = async (e) => {
    const Idx = parseInt(e.target.id);
    const File = e.target.files?.[0];

    if (!File) return;

    const result = await uploadfile({
      variables: { file: File },
    });

    // const ImgFiles = [...ImgFile];
    // ImgFiles[Idx] = result.data?.uploadFile.url;
    const ImgFiles = [...ImgFile];
    ImgFiles[Idx] = result.data?.uploadFile.url;

    setImgFile(ImgFiles.filter((el) => el !== ""));
  };

  const ClickImg = (e) => {
    const num = parseInt(e.target.id);
    fileRef[num].current?.click();
    console.log(num);
  };
  //
  //
  //
  const debounceLat = debounce((e) => {
    setLatitude(e.target.value);
  }, 1000);

  const debounceLon = debounce((e) => {
    setLongitude(e.target.value);
  }, 1000);

  const ChangeLat = (e) => {
    debounceLat(e);
  };

  const ChangeLon = (e) => {
    debounceLon(e);
  };

  console.log(latitude, longitude);

  const FindLocate = () => {
    KaKaoMarker(latitude, longitude);
  };

  useEffect(() => {
    const script = document.createElement("script");
    // document.getElementById("map").style.display = "none";
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3c006ed499e1b2edae0e909f9c036f6f";
    document.head.appendChild(script);

    script.onload = () => {
      if (localStorage.getItem("accessToken") === null) return;
      KaKaoMarker();
    };
  }, []);

  return (
    <>
      <S.Wrapper>
        <form onSubmit={handleSubmit(ChangeInputData)}>
          <S.Top>
            <S.Title>상품 등록하기</S.Title>
          </S.Top>
          <S.Body>
            <S.InfoBox>
              <S.Input>
                <S.Word>상품명</S.Word>
                <S.ProductName type="text" {...register("name")} />
              </S.Input>
              <S.Input>
                <S.Word>한줄요약</S.Word>
                <S.ShortOne type="text" {...register("remarks")} />
              </S.Input>
              <S.Editor>
                <S.Word>상품설명</S.Word>
                <ReactQuill onChange={ContentChange} style={Quillstyle} />
              </S.Editor>
              <S.Input>
                <S.Word>판매가격</S.Word>
                <S.Price type="text" {...register("price")} />
              </S.Input>
              <S.Input>
                <S.Word>태그입력</S.Word>
                <S.Tag type="text" {...register("tags")} />
              </S.Input>
            </S.InfoBox>
            <S.Location>
              <S.Locate_Left>
                <S.Word>거래위치</S.Word>
                <img
                  id="cover"
                  style={{
                    width: "390px",
                    height: "350px",
                    position: "absolute",
                    top: "24px",
                    left: "0px",
                    zIndex: "2",
                    opacity: 1,
                    transition: "all 1s",
                  }}
                />
                <div id="map" style={{ width: "390px", height: "350px" }}></div>
              </S.Locate_Left>
              <S.Locate_Right>
                <S.Word>GPS</S.Word>
                <S.LatLng>
                  <S.Lat onChange={ChangeLat}></S.Lat>
                  <S.Lng onChange={ChangeLon}></S.Lng>
                  <button type="button" onClick={FindLocate}>
                    테스트용
                  </button>
                </S.LatLng>
                <S.Word>주소</S.Word>
                <S.Address {...register("address")} />
                <S.Address {...register("addressDetail")} />
              </S.Locate_Right>
            </S.Location>
            <S.PhotoBox>
              <S.Word>사진첨부</S.Word>
              <S.Upload>
                {new Array(2).fill(1).map((el, idx) => (
                  <S.Photo
                    onClick={ClickImg}
                    id={String(idx)}
                    key={idx}
                    src={
                      ImgFile[idx]
                        ? `https://storage.googleapis.com/${ImgFile[idx]}`
                        : "/BlankImage.png"
                    }
                  ></S.Photo>
                ))}
                {fileRef.map((_, idx) => (
                  <input
                    key={idx}
                    id={String(idx)}
                    type="file"
                    ref={fileRef[idx]}
                    onChange={ChangeImgFile}
                    style={{ display: "none" }}
                  />
                ))}
              </S.Upload>
              <S.SelectPhoto>
                <S.Word>메인 사진 설정</S.Word>
                <S.Selector>
                  <S.Radio>
                    <input type="radio" name="photo" />
                    <span>사진1</span>
                  </S.Radio>
                  <S.Radio>
                    <input type="radio" name="photo" />
                    <span>사진2</span>
                  </S.Radio>
                </S.Selector>
              </S.SelectPhoto>
            </S.PhotoBox>
          </S.Body>
          <S.Bottom>
            <S.Submit>등록하기</S.Submit>
          </S.Bottom>
        </form>
      </S.Wrapper>
    </>
  );
}

export default LoginWithAuth(CreateProductUI);
