import React, { useState, useContext, useReducer } from "react";

export const ProductsContext = React.createContext();

let initialState = [
  { id: 1, name: "motorola", price: 40 },
  { id: 2, name: "iphone", price: 80 },
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((prod) => {
        return prod.id !== action.payload.id;
      });

    default:
      throw new Error();
  }
}

export function ProductsContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={[state, dispatch]}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
