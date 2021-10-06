import Button from "../Button";
import { Card } from "./style.js";
function CardBeers({
  data: { id = 0, name = "vazio", description = "vazio", image_url = "vazio" },
  callback,
}) {
  return (
    <Card>
      <li>
        <img src={`${image_url}`} alt={name} />
      </li>
      <li>{name}</li>
      <li>
        <Button
          param={{ id, name, description, image_url }}
          callback={callback}
          value={"Adicionar"}
        />
      </li>
    </Card>
  );
}
export default CardBeers;
