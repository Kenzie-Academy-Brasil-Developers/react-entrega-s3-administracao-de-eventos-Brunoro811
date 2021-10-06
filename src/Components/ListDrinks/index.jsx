import { useEffect, useState } from "react";
import { Container } from "./styles";
import api from "../../Services/Api";
function ListDrinks() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    api
      .get("/beers")
      .then((response) => setBeers(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      {console.log(beers)}
      {beers[0] && beers.map((item, index) => <p key={index}>{item.name}</p>)}
    </Container>
  );
}
export default ListDrinks;
