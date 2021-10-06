import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  max-width: 100px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  background-color: ${(props) => (props.isSecundary ? "#810d17" : "#0d3681")};
  color: #ffffff;
`;
