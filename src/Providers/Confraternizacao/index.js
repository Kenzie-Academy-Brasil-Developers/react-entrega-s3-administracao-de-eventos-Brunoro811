import { createContext, useState, useEffect } from "react";

export const ConfraternizacaoContext = createContext();

export const ConfraternizacaoProvider = ({ children }) => {
  const [cartConfraternizacao, setCartConfraternizacao] = useState([]);
  const [counterCartConfraternizacao, setCounterCartConfraternizacao] =
    useState(cartConfraternizacao.reduce((acc, value) => acc + 1, 0));
  const addCartToConfraternizacao = (item) => {
    setCartConfraternizacao([...cartConfraternizacao, item]);
  };
  const removedCartToConfraternizacao = (item) => {
    setCartConfraternizacao(
      cartConfraternizacao.filter((value) => value.name !== item.name)
    );
  };
  useEffect(() => {
    setCounterCartConfraternizacao(
      cartConfraternizacao.reduce((acc, value) => acc + 1, 0)
    );
  }, [cartConfraternizacao]);
  return (
    <ConfraternizacaoContext.Provider
      value={{
        counterCartConfraternizacao,
        cartConfraternizacao,
        addCartToConfraternizacao,
        removedCartToConfraternizacao,
      }}
    >
      {children}
    </ConfraternizacaoContext.Provider>
  );
};
