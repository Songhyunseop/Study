import {
  PlusOutlined,
  UnorderedListOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./emotion";

export default function SideBar(props) {
  const router = useRouter();

  const [IsList, setIsList] = useState(false);
  const [IsNew, setIsNew] = useState(false);

  const ClickList = () => {
    router.push(`/`);
    setIsList(true);
    setIsNew(false);
  };

  const ClickNew = () => {
    router.push(`/BoardWrite`);
    setIsNew(true);
    setIsList(false);
  };

  return (
    <>
      <S.Wrapper>
        <S.Sidebar>
          <S.Sidebar_Top>
            <WechatOutlined style={{ color: "#6400FF" }} />
            <span>TALKER</span>
          </S.Sidebar_Top>
          <S.Sidebar_Bottom>
            <S.AllList>
              <UnorderedListOutlined
                style={{ color: IsList ? "lightgray" : "#6400FF" }}
              />
              <span
                onClick={ClickList}
                style={{
                  marginLeft: "12.5px",
                  cursor: "pointer",
                  color: IsList ? "lightgray" : "#6400FF",
                }}
              >
                전체 글 보기
              </span>
            </S.AllList>
            <S.CreateNew>
              <PlusOutlined
                style={{ color: IsNew ? "lightgray" : "#6400FF" }}
              />
              <span
                onClick={ClickNew}
                style={{
                  marginLeft: "12.5px",
                  cursor: "pointer",
                  color: IsNew ? "lightgray" : "#6400FF",
                }}
              >
                새 글 작성
              </span>
            </S.CreateNew>
          </S.Sidebar_Bottom>
        </S.Sidebar>
        <div>{props.children}</div>
      </S.Wrapper>
    </>
  );
}
