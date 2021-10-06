import { ContainerButton } from "./style";
function EventButton({ callback, param, event, counter }) {
  return (
    <ContainerButton onClick={() => callback(param)}>
      {event}
      {counter}
    </ContainerButton>
  );
}
export default EventButton;
