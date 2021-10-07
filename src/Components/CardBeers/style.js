import styled from "styled-components";

export const Card = styled.ul`
  width: 90%;
  max-width: 200px;
  height: 250px;
  padding: 10px;
  box-shadow: 0px 0px 4px 0px #000000;
  display: inline-flex;
  flex-wrap: wrap;
  margin: 5px;
  align-items: flex-end;
  li {
    width: 90%;
    margin: 0 auto;
    /* padding: 2px; */
    img {
      width: 100%;
      max-width: 50px;
      height: 100%;
      max-height: 170px;
    }
  }
`;
