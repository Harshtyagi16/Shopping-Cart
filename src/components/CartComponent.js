import React from "react";
import AddCart from "./AddCart";

const CartComponent = ({ cartArray, setCartArray }) => {
  return <AddCart cartArray={cartArray} setCartArray={setCartArray} />;
};

export default CartComponent;
