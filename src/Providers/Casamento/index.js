import { createContext, useState } from "react";

export const CasamentoContext = createContext();

export const CasamentoProvider = ({ children }) => {
  const [cartCasamento, setCartCasamento] = useState([]);
  const addCartToCasamento = () => {};
  const removedCartToCasamento = () => {};
  return (
    <CasamentoContext.Provider
      value={{ cartCasamento, addCartToCasamento, removedCartToCasamento }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
