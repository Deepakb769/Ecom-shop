import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartList = ({cart}) => {
  const cartItems = Object.values(cart);
  return(
    <div className="cart-list">
      <h1>Cart Items</h1>
      {cartItems.length > 0 ? (
        <div style={{ display : 'flex', flexWrap : 'wrap', gap : '20px'}}>
          {cartItems.map((item) => (
          <div key={item.id} className="cart-item" >
            <Card>
              <Card.Img src={item.images} alt={item.name} style={{ width: "120px", height: "120px", objectFit: "cover"}} />
              <Card.Body >
                <Card.Text>{item.title}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.price}</Card.Text>
                <Link 
                  to = "/PurchaseItem"
                  state = {{ item }} ><Button variant='primary'>Buy Now</Button></Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      ) : (
        <p>Your cart is empty</p>
      )};
    </div>
  )
}

export default CartList


// Experimented

// import React from 'react';

// const CartList = ({ cart }) => {
//   const cartItems = Object.values(cart);

//   return (
//     <div className="cart-list">
//       <h1>Cart Items</h1>
//       {cartItems.length > 0 ? (
//         cartItems.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img src={item.images[0]} alt={item.title} style={{ width: '120px' }} />
//             <h2>{item.title}</h2>
//             <p>Price: Rs.{item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//           </div>
//         ))
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default CartList;
