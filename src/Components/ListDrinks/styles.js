import styled, { keyframes } from "styled-components";
const Fade = keyframes`

from{
  transform: translateX(-300px)
}
to{
  transform: translateX(0px)
}

`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 5px 0px #000000;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 3px;
`;
export const ModalContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const Modal = styled.div`
  width: 100%;
  max-width: 160px;
  height: 100%;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 0px #000000;
  display: flex;
  flex-direction: column;
  gap: 5px;
  animation: ${Fade} linear 0.5s;
  div {
    text-align: end;
  }
`;
export const Close = styled.button`
  width: 40px;
  height: 40px;
  font-weight: bold;
  border: none;
  background: transparent;
  color: dimgray;
  margin-left: auto;
`;
