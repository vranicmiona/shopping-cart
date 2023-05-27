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

  const deleteFromCart = (id) => {
    const quantityInCart = cart.find(
      (product) => product.id === id
    ).quantityInCart; // pristupamo propertiju u korpi
    // vracanje u zalihama
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          // kad nadjem taj id koji brisem iz korpe
          return {
            ...product, // spread operator vraca klonirani niz
            quantity: product.quantity + quantityInCart, // vracamo u zalihama koliko smo imali u korpi
          };
        } else {
          return product;
        }
      })
    );
    // brisanje sve iz korpe
    setCart(() => {
      const newCart = cart.filter((product) => product.id !== id); // filtriramo trenutno stanje korpe i treba da vratimo new cart
      return newCart;
    });
    toast.success("Successfully deleted from cart!");
  };
  const increase = (id) => {
    const product = product.find((product) => product.id === id);
    if (product.quantity > 0) {
      // setPorduct zalihe
      setProducts(); // setujemo novu vrednost statea, mapiram prethodno i vracamo novi niz, kloniram prethodnos tanje samo sto se taj jedan deo propertija menja
    } else {
      toast.error("There are no product in stock!");
    }
  };

  const values = { products, setProducts, cart, addToCart };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export { AppContext, ContextProvider, deleteFromCart };
