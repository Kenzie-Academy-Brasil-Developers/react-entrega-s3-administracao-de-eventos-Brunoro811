import { useContext } from "react";
import CardCart from "../Components/CadCart/index.jsx";
import { FormaturaContext } from "../Providers/Formatura";
import { Container } from "./pages.js";
function Formatura() {
  const { cartFormatura, removedCartToFormatura } =
    useContext(FormaturaContext);
  return (
    <>
      <h2 className={"Title-First"}>Formatura</h2>
      <Container>
        {cartFormatura[0] &&
          cartFormatura.map((element, indice) => (
            <CardCart
              callback={removedCartToFormatura}
              key={indice}
              data={element}
            />
          ))}
        {!cartFormatura[0] && <p>Sem produtos!</p>}
      </Container>
    </>
  );
}
export default Formatura;
