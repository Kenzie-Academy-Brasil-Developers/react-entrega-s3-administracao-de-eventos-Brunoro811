import { createContext, useState } from "react";

export const ConfraternizacaoContext = createContext();

export const ConfraternizacaoProvider = ({ children }) => {
  const [cartConfraternizacao, setCartConfraternizacao] = useState([]);
  const addCartToConfraternizacao = (item) => {
    setCartConfraternizacao([...cartConfraternizacao, item]);
  };
  const removedCartToConfraternizacao = (item) => {
    setCartConfraternizacao(
      cartConfraternizacao.filter((value) => value.name !== item.name)
    );
  };
  return (
    <ConfraternizacaoContext.Provider
      value={{
        cartConfraternizacao,
        addCartToConfraternizacao,
        removedCartToConfraternizacao,
      }}
    >
      {children}
    </ConfraternizacaoContext.Provider>
  );
};
