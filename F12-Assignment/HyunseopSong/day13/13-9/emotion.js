import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const TextColor = styled.div`
  color: red;
  font-size: 13px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.visible ? "green" : "")};
`;

const move = keyframes`
  0% {
    left: 0;
    top: 0;
    opacity: 0;
  }
  100% {
    left: 50%;
    top: 50%;
    opacity: 1;
  }
`;

export const Box = styled.div`
  border: 2px solid black;
  height: 1000px;
  animation: ${(props) => props.isMoved && fade} 0.1s ease;
`;

export const ModalBtn = styled.button``;

export const Modal = styled.div`
  position: relative;
  animation: ${(props) => props.isMoved && move} 0.1s ease;
  animation-fill-mode: forwards;
  background-color: white;
  box-shadow: 1px 1px gray;
  border-radius: 10px;
  border: 1px solid black;
  width: 400px;
  height: 180px;
  opacity: 0;
`;

export const Content = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
