import { createContext, useEffect, useState } from "react";

export const CasamentoContext = createContext();

export const CasamentoProvider = ({ children }) => {
  const [cartCasamento, setCartCasamento] = useState([]);
  const [counterCartCasamento, setCounterCartCasamento] = useState(
    cartCasamento.reduce((acc, value) => acc + 1, 0)
  );
  const addCartToCasamento = (item) => {
    setCartCasamento([...cartCasamento, item]);
  };
  const removedCartToCasamento = (item) => {
    setCartCasamento(cartCasamento.filter((value) => value.name !== item.name));
  };
  useEffect(() => {
    setCounterCartCasamento(cartCasamento.reduce((acc, value) => acc + 1, 0));
  }, [cartCasamento]);
  return (
    <CasamentoContext.Provider
      value={{
        counterCartCasamento,
        cartCasamento,
        addCartToCasamento,
        removedCartToCasamento,
      }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
