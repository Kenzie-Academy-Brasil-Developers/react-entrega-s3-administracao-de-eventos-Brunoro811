import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  max-width: 150px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  background-color: ${(props) => (props.isSecundary ? "#810d17" : "#0d4781")};
  color: #ffffff;
  cursor: pointer;
`;
export const ContainerClose = styled.button`
  width: 40px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background: transparent;
  color: dimgray;
  margin-left: auto;
`;
