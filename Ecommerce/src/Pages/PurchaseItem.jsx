import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const PurchaseItem = () => {
    let locate = useLocation();
    let { item } = locate.state || {};

    let [quantity, setQuantity] = useState(1);

    // increament handle
    const increaseQuantity = () => {
      setQuantity((prevQuantity) => prevQuantity + 1)
      
    };

    // decrement handle
    const decreaseQuantity = () => {
      setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1))
    };

  return (
    <div className = "purchase-cart">
      {item ? (
        <div>
          <p>{item.title}</p>
          <img src={item.images}
           style={{width : '200px'}}
          />
          <p>{item.description}</p>
          <p>{item.price ? `$${item.price}` : 'Price not available'}</p>

          <div className="quantity-alter">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <p>Total Price : {item.price * quantity}</p>
        </div>
      ) : (
        <p>No item selected</p>
      )}
      
    </div>
  )
}

export default PurchaseItem
