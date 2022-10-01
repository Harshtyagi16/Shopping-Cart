import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useNavigate } from "react-router-dom";
import "./addcart.css";
import Cartitem from "./Cartitem";

const AddCart = ({ cartArray, setCartArray }) => {
  const [totalAmount, setTotalAmount] = useState(0);
 
  const navigate=useNavigate();
  const removeFromCart = (id) => {
    const filterCart = cartArray.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(filterCart));
    setCartArray([...filterCart]);
    let amount = 0;
    for (const item of filterCart) {
      amount += item.price;
    }
    setTotalAmount(amount);
  };
  const onClick=()=>{
    navigate("/thankYou")
  }

  useEffect(() => {
    if (cartArray && cartArray.length > 0) {
      let amount = 0;
      for (const item of cartArray) {
        amount += item.price*item.quantity;
      }
      setTotalAmount(amount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
   
      <section className="main-cart-section">
        <div className="">
          <div className="cart-items-container">
            <Scrollbars>
              {cartArray &&
                cartArray.map((cartItem) => (
                  <Cartitem cartItem={cartItem}  removeFromCart={removeFromCart} setCart ={setTotalAmount} totalAmount={totalAmount}/>
                  
                ))}
              <hr></hr>
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>totalAmout ₹{totalAmount}</span>
          </h3>
          <button onClick={onClick}>checkout</button>
        </div>
      </section>
    </>
  );
};

export default AddCart;
