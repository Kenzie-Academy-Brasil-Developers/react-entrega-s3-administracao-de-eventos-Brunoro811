import { ContainerButton } from "./style.js";
function Button({ isSecundary = false, value = "vazio", callback, param }) {
  return (
    <ContainerButton onClick={() => callback(param)}>{value}</ContainerButton>
  );
}
export default Button;
