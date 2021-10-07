import { Card } from "./style.js";
import { Close } from "../Button/index.jsx";
function CardCart({
  data: { id = 0, name = "vazio", description = "vazio", image_url = "vazio" },
  callback,
}) {
  return (
    <Card>
      <li>
        <Close
          param={{ id, name, description, image_url }}
          callback={callback}
        />
      </li>
      <li>
        <img src={`${image_url}`} alt={name} />
      </li>
      <li>{name}</li>
    </Card>
  );
}
export default CardCart;
