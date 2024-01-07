import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  transform: translateY(12%);
`;

export const Sidebar = styled.div`
  width: 200px;
  height: 708px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background: #ffffff;
  padding: 0px 20px;
`;

export const Sidebar_Top = styled.div`
  height: 84px;
  padding: 33px 0px 0px 0px;
  border-bottom: 1px solid #e5e5e5;
  background: white;
`;

export const Sidebar_Bottom = styled.div`
  font-weight: 700;
  font-size: 14px;
  height: 60px;
  background: white;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AllList = styled.div`
  background: white;
`;

export const CreateNew = styled.div`
  background: white;
`;
