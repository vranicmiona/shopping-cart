import React, { createContext, useState } from "react";
import productsJSON from "../common/products.json";
import { toast } from "react-hot-toast";
const AppContext = createContext();

function ContextProvider({ children }) {
  const [products, setProducts] = useState(productsJSON);
  const [cart, setCart] = useState([]); // dodajem producte u cart

  const addToCart = (id) => {
    if (products.find((product) => product.id === id).quantity === 0) {
      toast.error("There are no products in stock!");
    } else {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            return {
              ...product, // spread operator vraca klonirani niz
              quantity: product.quantity - 1,
            };
          } else {
            return product;
          }
        })
      );
      setCart((prev) => [
        ...prev, // uzima prethodne klonira ih i sabira
        {
          ...products.find((product) => product.id === id),
          quantityInCart: 1,
        },
      ]);
      toast.success("Successefully added to cart!");
    }
  };

  const values = { products, setProducts, cart, addToCart };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export { AppContext, ContextProvider };
