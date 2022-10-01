import React, { useState } from "react";
import "./cart.css";

const Items = ({ curItem, handleCart }) => {
  const [checked, setChecked] = useState(false);
  const [quantity, setQuantity] = useState(1)
  const handleChange=(e)=>{
    if(e.target.value<0){
      alert("Quantity cannot ne negative");
      return

    }
    const cart = JSON.parse(localStorage.getItem("cart"))
    if(cart){
      let index =-1
      for(let i=0;i<cart.length;i++){
        if(cart[i].id===curItem.id){
          index =i;
          break
        }
      }
     if(index !==-1){
      cart[index]={...cart[index],quantity:e.target.value}
      localStorage.setItem(
          "cart",JSON.stringify(cart)
      )
     }
    }
    setQuantity(e.target.value);
  }

  const handleCheck = () => {
    setChecked(!checked);
    
    handleCart({...curItem,quantity}, !checked ? "add" : "remove");
  };
  return (
    <>
      <div className="items-infos">
        <div className="product-imgs">
          <img src={curItem.img} alt="imagek" />
        </div>
        <div className="name">
          <h4>{curItem.name}</h4>
        </div>
        <div className="color">
          <h4>{curItem.color}</h4>
        </div>
        <div className="size">
          <h4>{curItem.size}</h4>
        </div>

        <div className="category">
          <h4>{curItem.category}</h4>
        </div>
        <div className="price">
          <h4>{curItem.price}</h4>
        </div>
        <div className="instock">
        <h4>{curItem.instock}</h4>

        </div>
        <div className="total_quantity">
        <label htmlFor="quantity"/>
        <input type="text"  id="quantity" name="quantity" value={quantity} onChange={handleChange} required />
        </div>
        <div className="Cartbutton">
          <span
            class="fas fa-cart-plus"
            // type="submit"
            // onClick={() => handleCart(curItem, "add")}
          >
          </span>
        </div>
        <div className="CheckBox">
          <input checked={checked} type="checkbox" onClick={handleCheck} />
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Items;
