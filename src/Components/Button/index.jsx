import { ContainerButton, ContainerClose } from "./style.js";
export const Button = ({
  isSecundary = false,
  value = "vazio",
  callback,
  param,
}) => {
  return (
    <ContainerButton onClick={() => callback(param)}>{value}</ContainerButton>
  );
};
export const Close = ({ callback, param }) => {
  return <ContainerClose onClick={() => callback(param)}>X</ContainerClose>;
};
