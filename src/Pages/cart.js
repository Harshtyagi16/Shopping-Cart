import React, { useState } from "react";
import CartComponent from "../components/CartComponent";

const Cart = () => {
  const [cartArray, setCartArray] = useState(
    JSON.parse(localStorage.getItem("cart")),
  );
  return <CartComponent cartArray={cartArray} setCartArray={setCartArray} />;
};

export default Cart;
