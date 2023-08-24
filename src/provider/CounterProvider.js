import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { useState } from "react";

// 1. createContext
const CountContext = createContext();

const initialState = [
  { title: "React.js", price: "90€", quantity: 2, id: 1 },
  { title: "CSS", price: "30€", quantity: 3, id: 2 },
  { title: "JavaScript", price: "60€", quantity: 2, id: 3 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "remove":
      const mySetProduct = state.filter((p) => p.id !== action.id);
      return mySetProduct;

    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const myProducts = { ...state[index] };
      myProducts.quantity++;
      const updateProducts = [...state];
      updateProducts[index] = myProducts;
      console.log(myProducts)
      return updateProducts;
    }
    case "decrement": {
        const index = state.findIndex((item) => item.id === action.id);
        const myProducts = { ...state[index] };
        myProducts.quantity--;
        const updateProducts = [...state];
        updateProducts[index] = myProducts;
        console.log(myProducts)
        return updateProducts;
      }

    default:
      return state;
  }
};
const CounterProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);
  //   const [products, setProducts] = useState([
  //     { title: "React.js", price: "90€", quantity: 2, id: 1 },
  //     { title: "CSS", price: "30€", quantity: 3, id: 2 },
  //     { title: "JavaScript", price: "60€", quantity: 2, id: 3 },
  //   ]);
  // 2. Provider
  return (
    <CountContext.Provider value={{ products, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

export default CounterProvider;

export const useProductActions = () => {
  return useContext(CountContext);

  //   const productList = useContext(CountContext);

  //   const removeHandler = (goalId) => {
  //     console.log("Removed", goalId);
  //     const mySetProduct = productList.products.filter((p) => p.id !== goalId);
  //     productList.setProducts(mySetProduct);
  //   };

  //   const addHandler = (goalId) => {
  //     const myProducts = [...productList.products];
  //     const selectedItem = myProducts.find((p) => p.id === goalId);
  //     selectedItem.quantity++;
  //     productList.setProducts(myProducts);
  //   };

  //   const minusHandler = (goalId) => {
  //     const myProducts = [...productList.products];
  //     const selectedItem = myProducts.find((p) => p.id === goalId);
  //     selectedItem.quantity--;
  //     productList.setProducts(myProducts);
  //   };

  //   return {
  //     removeHandler,
  //     addHandler,
  //     minusHandler,
  //     products: productList.products,
  //   };
};
