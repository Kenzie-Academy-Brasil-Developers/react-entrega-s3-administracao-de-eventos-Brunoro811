import { useContext } from "react";
import CardCart from "../Components/CadCart/index.jsx";
import { ConfraternizacaoContext } from "../Providers/Confraternizacao";
import { Container } from "./pages.js";
function Confraternizacao() {
  const { cartConfraternizacao, removedCartToConfraternizacao } = useContext(
    ConfraternizacaoContext
  );
  return (
    <>
      <h2 className={"Title-First"}>Confraternização</h2>
      <Container>
        {cartConfraternizacao[0] &&
          cartConfraternizacao.map((element, indice) => (
            <CardCart
              callback={removedCartToConfraternizacao}
              key={indice}
              data={element}
            />
          ))}
        {!cartConfraternizacao[0] && <p>Sem produtos!</p>}
      </Container>
    </>
  );
}
export default Confraternizacao;
