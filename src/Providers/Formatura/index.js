import { createContext, useState, useEffect } from "react";

export const FormaturaContext = createContext();

export const FormaturaProvider = ({ children }) => {
  const [cartFormatura, setCartFormatura] = useState([]);
  const [counterCartFormatura, setCounterCartFormatura] = useState(
    cartFormatura.reduce((acc, value) => acc + 1, 0)
  );
  const addCartToFormatura = (item) => {
    setCartFormatura([...cartFormatura, item]);
  };
  const removedCartToFormatura = (item) => {
    setCartFormatura(cartFormatura.filter((value) => value.name !== item.name));
  };
  useEffect(() => {
    setCounterCartFormatura(cartFormatura.reduce((acc, value) => acc + 1, 0));
  }, [cartFormatura]);
  return (
    <FormaturaContext.Provider
      value={{
        counterCartFormatura,
        cartFormatura,
        addCartToFormatura,
        removedCartToFormatura,
      }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
