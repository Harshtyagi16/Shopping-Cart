import React from "react";
import AddCart from "./AddCart";

const CartComponent = ({ cartArray, setCartArray }) => {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return (
    <AddCart cartArray={cartArray} setCartArray={setCartArray} cart={cart} />
  );
};

export default CartComponent;
