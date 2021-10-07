import styled from "styled-components";
export const Card = styled.div`
  width: 90%;
  max-width: 200px;
  height: 250px;
  padding: 10px;
  box-shadow: 0px 0px 4px 0px #000000;
  display: inline-flex;
  flex-wrap: wrap;
  margin: 5px;
  text-align: center;
  li:nth-child(1) {
    text-align: end;
  }
  li {
    width: 90%;
    margin: 0 auto;
    img {
      width: 100%;
      max-width: 50px;
      height: 100%;
      max-height: 170px;
    }
  }
`;
