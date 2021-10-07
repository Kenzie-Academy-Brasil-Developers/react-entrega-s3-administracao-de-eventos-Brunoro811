import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 90%;
  max-width: 150px;
  border: none;
  padding: 10px;
  background-color: #0d4781;
  color: #ffffff;
  font-weight: 500;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  span {
    margin-left: auto;
    background-color: #ffffff;
    color: #0d4781;
    font-weight: bold;
    width: 15px;
    height: 15px;
    border-radius: 30px;
  }
`;
