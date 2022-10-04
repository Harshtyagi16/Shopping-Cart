import React from "react";
import Items from "./Items";

const Main = ({ items }) => {
 
  const handleCart = (newItem, action) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (action === "add") {
      if (!cart) {
        return localStorage.setItem("cart", JSON.stringify([newItem]));
      }
      const idx = cart.findIndex((item) => item.id === newItem.id);
      if (idx !== -1) {
        const updatedItem = {
          ...cart[idx],
          quantity: newItem.quantity,
        };
        cart[idx] = updatedItem;
        return localStorage.setItem("cart", JSON.stringify(cart));
      }
      
      localStorage.setItem("cart", JSON.stringify([...cart,newItem]));
    } else {
      if (!cart) return;
      const newCart = cart.filter((item) => item.id !== newItem.id);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };
  return (
    <>
      {items &&
        items.map((curItem, index) => {
          const cart =JSON.parse(localStorage.getItem("cart"))
          const idx = cart && cart.findIndex((item) => item.id === curItem.id);
          return (
            <Items
              key={curItem.id}
              curItem={curItem}
              handleCart={handleCart}
              exists={cart && cart[idx]}
            />
          );
        })}
    </>
  );
};

export default Main;
