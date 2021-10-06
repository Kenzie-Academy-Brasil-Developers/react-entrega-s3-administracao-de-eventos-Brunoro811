import { ContainerButton } from "./style";
function EventButton({ callback, param, event, counterCartCasamento }) {
  return (
    <ContainerButton onClick={() => callback(param)}>{event}</ContainerButton>
  );
}
export default EventButton;
