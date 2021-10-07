import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  min-height: 300px;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 0px #000000;
  border-radius: 5px;
  div {
    flex-basis: 100%;
    text-align: center;
  }
`;
export const CardItem = styled.div`
  width: 100%;
  max-width: 220px;
  height: 140px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  li {
    text-align: center;
  }
`;
