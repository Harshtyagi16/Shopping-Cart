import React, { useState } from 'react'

const Cartitem = ({cartItem,removeFromCart,setCart,totalAmount}) => {
    const [quantity, setQuantity] = useState(cartItem.quantity)
    const [currentPrice, setCurrentPrice] = useState(cartItem.price)

    const handleQuantity = (type)=>{
            if(type==="add"){
                setCart(totalAmount+cartItem.price)
                setCurrentPrice(currentPrice+cartItem.price)

                setQuantity(quantity+1)
            }
            else{
                if(quantity>1){
                    setCart(totalAmount-cartItem.price)
                    setCurrentPrice(currentPrice-cartItem.price)
                        setQuantity(quantity-1)
                }
            }
    }
  return (
    <>
        <div className="items-info">
                  
                  <div className="product-img">
                    <img src={cartItem.img} alt="images" />
                  </div>
                  <div className="title">
                    <h4>{cartItem.name}</h4>
                  </div>
                  <div className="add-minus-quantity" >
                    <i className="fas fa-minus minus" onClick={()=>handleQuantity("minus")}></i>
                    <input type="text" value={quantity} disabled />
                    <i className="fas fa-plus add" onClick={()=>handleQuantity("add")}></i>
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
  )
}

export default Cartitem
