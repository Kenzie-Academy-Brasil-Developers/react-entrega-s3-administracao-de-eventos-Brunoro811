import { useContext } from "react";
import CardCart from "../Components/CadCart/index.jsx";
import { CasamentoContext } from "../Providers/Casamento/index.js";
import { Container } from "./pages.js";
function Casamento() {
  const { cartCasamento, removedCartToCasamento } =
    useContext(CasamentoContext);
  return (
    <>
      <h2 className={"Title-First"}>Casamento</h2>

      <Container>
        {cartCasamento[0] &&
          cartCasamento.map((element, indice) => (
            <CardCart
              callback={removedCartToCasamento}
              key={indice}
              data={element}
            />
          ))}
        {!cartCasamento[0] && <p>Sem produtos!</p>}
      </Container>
    </>
  );
}
export default Casamento;
