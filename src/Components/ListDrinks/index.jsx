import { useEffect, useState, useContext } from "react";
import api from "../../Services/Api";
import { Close, Container, Modal, ModalContainer } from "./styles";
import CardBeers from "../CardBeers";
import EventButton from "../EventButton";
import { CasamentoContext } from "../../Providers/Casamento";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";
import { FormaturaContext } from "../../Providers/Formatura";
function ListDrinks() {
  const [selectItem, setSelectItem] = useState({});
  const [isSelectEvent, setIsSelectEvent] = useState(false);
  const handleCloseModal = () => {
    setIsSelectEvent(!isSelectEvent);
  };
  const handleSelectItem = (item) => {
    setSelectItem(item);
    handleCloseModal();
  };

  const [beers, setBeers] = useState([]);
  useEffect(() => {
    api
      .get("/beers")
      .then((response) => setBeers(response.data))
      .catch((error) => console.log(error));
  }, []);
  // providers
  const { counterCartCasamento, addCartToCasamento } =
    useContext(CasamentoContext);
  const { counterCartConfraternizacao, addCartToConfraternizacao } = useContext(
    ConfraternizacaoContext
  );
  const { counterCartFormatura, addCartToFormatura } =
    useContext(FormaturaContext);
  return (
    <>
      <Container>
        {beers[0] &&
          beers.map((item, index) => (
            <CardBeers callback={handleSelectItem} key={index} data={item} />
          ))}
      </Container>
      {isSelectEvent && (
        <ModalContainer>
          <Modal isSelectEvent={isSelectEvent}>
            <div>
              <Close onClick={handleCloseModal}>X</Close>
            </div>

            <h4>Eventos : </h4>
            <EventButton
              callback={addCartToCasamento}
              param={selectItem}
              counter={counterCartCasamento}
              event={"Casamento"}
            />
            <EventButton
              callback={addCartToConfraternizacao}
              counter={counterCartConfraternizacao}
              param={selectItem}
              event={"Confraternização"}
            />
            <EventButton
              callback={addCartToFormatura}
              counter={counterCartFormatura}
              param={selectItem}
              event={"Formatura"}
            />
          </Modal>
        </ModalContainer>
      )}
    </>
  );
}
export default ListDrinks;
