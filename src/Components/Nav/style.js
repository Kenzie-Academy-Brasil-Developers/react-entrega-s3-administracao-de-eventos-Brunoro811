import styled from "styled-components";

export const ContainerNav = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #0d4781;
  @media (min-width: 600px) {
    justify-content: flex-start;
  }
  li {
    padding: 10px 5px;
    background-color: #0d4781;
    color: #ffffff;
    margin: 0px 0px 0px 0px;
    border: 2px white;
  }
  li a {
    color: #ffffff;
  }
`;
