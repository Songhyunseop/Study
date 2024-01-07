import styled from "@emotion/styled";
import ReactQuill from "react-quill";

export const Wrapper = styled.div`
  width: 1200px;
  height: 2009px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

export const Top = styled.div`
  height: 250px;
  border: 2px solid red;
  font-weight: 700;
  font-size: 36px;
  padding-top: 80px;
  text-align: center;
`;

export const Title = styled.div``;

export const Body = styled.div``;

export const InfoBox = styled.div`
  border: 2px solid blue;
  height: 848px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.div`
  height: 84px;
  display: flex;
  flex-direction: column;
`;

export const Word = styled.span`
  font-size: 16px;
  line-height: 24px;
`;

export const ProductName = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const ShortOne = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const Editor = styled.div`
  height: 370px;
  display: flex;
  flex-direction: column;
`;

export const Price = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const Tag = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const Location = styled.div`
  height: 400px;
  border: 2px solid green;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 102px;
`;

export const Locate_Left = styled.div`
  width: 384px;
  height: 292px;
  position: relative;
`;

export const Locate_Right = styled.div`
  width: 588px;
  height: 292px;
`;

export const LatLng = styled.div``;

export const Lat = styled.input`
  width: 108px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const Lng = styled.input`
  width: 108px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const Address = styled.input`
  width: 588px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const PhotoBox = styled.div`
  width: 384px;
  height: 220px;
  display: flex;
  flex-direction: column;
  margin-left: 102px;
`;

export const Upload = styled.div`
  width: 384px;
  height: 180px;
  display: flex;
  justify-content: space-between;
`;

export const Photo = styled.img`
  width: 180px;
  height: 180px;
`;

export const SelectPhoto = styled.div`
  margin-top: 40px;
`;

export const Selector = styled.div`
  margin-top: 16px;
  width: 160px;
  display: flex;
  justify-content: space-between;
  border: 2px solid blue;
`;

export const Radio = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
`;

export const Bottom = styled.div`
  height: 210px;
  margin: 0px 102px;
  border: 2px solid violet;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const Submit = styled.button`
  width: 179px;
  height: 52px;
`;
