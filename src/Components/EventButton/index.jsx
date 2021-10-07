import { ContainerButton } from "./style";
function EventButton({ callback, param, event, counter }) {
  return (
    <ContainerButton onClick={() => callback(param)}>
      {event}
      <span>{counter}</span>
    </ContainerButton>
  );
}
export default EventButton;
