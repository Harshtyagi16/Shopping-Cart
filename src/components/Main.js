import React from "react";
import Items from "./Items";

const Main = ({ items }) => {
  
  const handleCart = (newItem, action) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (action === "add") {
      localStorage.setItem(
        "cart",
        cart ? JSON.stringify([...cart, newItem]) : JSON.stringify([newItem]),
      );
    } else {
      if (!cart) return;
      const newCart = cart.filter((item) => item.id !== newItem.id);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };
  return (
    <>
      {items &&
        items.map((curItem) => {
          return (
            <Items  key={curItem.id} curItem={curItem} handleCart={handleCart} />
          );
        })}
    </>
  );
};

export default Main;
