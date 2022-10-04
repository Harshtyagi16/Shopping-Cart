import React, { useEffect, useState } from "react";

const Cartitem = ({ cartItem, removeFromCart, setCart, totalAmount, cart }) => {
  const [quantity, setQuantity] = useState(parseInt(cartItem.quantity));
  const [currentPrice, setCurrentPrice] = useState(parseInt(cartItem.price));

  useEffect(()=>{
    setCurrentPrice(cartItem.quantity*cartItem.price)
  },[])

  const handleQuantity = (type) => {
    if (type === "add") {
      setCart(totalAmount + parseInt(cartItem.price));
      setCurrentPrice(currentPrice + parseInt(cartItem.price));
      setQuantity(quantity + 1);
      const idx = cart && cart.findIndex((item) => item.id === cartItem.id);
      if (idx !== -1) {
        const updatedItem = { ...cart[idx], quantity: quantity + 1 };
        cart[idx] = updatedItem;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    } else {
      if (quantity > 1) {
        setCart(totalAmount - parseInt(cartItem.price));
        setCurrentPrice(currentPrice - parseInt(cartItem.price));
        setQuantity(quantity - 1);
        const idx = cart && cart.findIndex((item) => item.id === cartItem.id);
        if (idx !== -1) {
          const updatedItem = { ...cart[idx], quantity: quantity - 1 };
          cart[idx] = updatedItem;
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }
    }
  };
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={cartItem.img} alt="images" />
        </div>
        <div className="title">
          <h4>{cartItem.name}</h4>
        </div>
        <div className="add-minus-quantity">
          <i
            className="fas fa-minus minus"
            onClick={() => handleQuantity("minus")}
          ></i>
          <input type="text" value={quantity} disabled />
          <i
            className="fas fa-plus add"
            onClick={() => handleQuantity("add")}
          ></i>
        </div>
        <div className="prices">
          <h3>{currentPrice}</h3>
        </div>
        <div
          className="remove-item"
          onClick={() => removeFromCart(cartItem.id)}
        >
          <i className="fas fa-trash-alt remove"></i>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
