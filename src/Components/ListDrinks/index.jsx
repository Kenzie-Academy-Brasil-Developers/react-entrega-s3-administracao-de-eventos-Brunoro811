import { useEffect, useState, useContext } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import { Close, Container, Modal } from "./styles";
import api from "../../Services/Api";
import CardBeers from "../CardBeers";
import EventButton from "../EventButton";
function ListDrinks() {
  const [selectItem, setSelectItem] = useState({});
  const [isSelectEvent, setIsSelectEvent] = useState(false);
  const handleCloseModal = () => {
    setIsSelectEvent(!isSelectEvent);
  };
  const handleSelectItem = (item) => {
    console.log(item);
    setSelectItem(item);
    handleCloseModal();
  };
  // const handleIsSelectEvent = (item) => {
  //   if (!isSelectEvent) {
  //     setIsSelectEvent(!isSelectEvent);
  //   }
  //   if (item) {
  //     addCartToCasamento(item);
  //   }
  // };
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    api
      .get("/beers")
      .then((response) => setBeers(response.data))
      .catch((error) => console.log(error));
  }, []);
  // providers
  const {
    counterCartCasamento,
    cartCasamento,
    addCartToCasamento,
    removedCartToCasamento,
  } = useContext(CasamentoContext);
  return (
    <>
      <Container>
        {beers[0] &&
          beers.map((item, index) => (
            <CardBeers callback={handleSelectItem} key={index} data={item} />
          ))}
      </Container>
      {isSelectEvent && (
        <Modal>
          {console.log(cartCasamento)}
          <div>
            <Close onClick={handleCloseModal}>X</Close>
          </div>

          <h4>Eventos : </h4>
          <EventButton
            callback={addCartToCasamento}
            param={selectItem}
            counterCartCasamento={counterCartCasamento}
            event={"Casamento"}
          />
          <EventButton event={"Confraternização"} />
          <EventButton event={"Formatura"} />
          {cartCasamento[0] &&
            cartCasamento.map((element, indice) => (
              <p key={indice}>
                {element.name}
                <Close onClick={() => removedCartToCasamento(element)}>X</Close>
              </p>
            ))}
        </Modal>
      )}
    </>
  );
}
export default ListDrinks;
