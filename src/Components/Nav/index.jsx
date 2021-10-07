import { Link } from "react-router-dom";
import { ContainerNav } from "./style.js";
function Nav() {
  return (
    <ContainerNav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Casamento">Casamento</Link>
      </li>
      <li>
        <Link to="/Confraternizacao">Confraternização</Link>
      </li>
      <li>
        <Link to="/Formatura">Formatura</Link>
      </li>
    </ContainerNav>
  );
}
export default Nav;
