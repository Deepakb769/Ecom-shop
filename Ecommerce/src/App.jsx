// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import ProductItem from './Pages/ProductItem'
import {
  createBrowserRouter,
  RouterProvider,
  
} from 'react-router-dom';
import Navigate from './Components/Navigate';
import CartList from './Pages/CartList';
import Wishlist from './Pages/Wishlist';
import Footer from './Components/Footer';
import PurchaseItem from './Pages/PurchaseItem';
import Catagory from './Components/Catagory';

function App() {
 const [cart, setCart] = useState({})

//  function to add item in cart
 const addToCart = (product) => {
  setCart((prevCart) => {
    const updatedCart = {...prevCart}
    // Increament the quantity of product
    updatedCart[product.id] = {
      ...product,
      quantity : (updatedCart[product.id]?.quantity || 0) + 1,
    }
    return updatedCart;
  })
}

// Calculate total cart count

const cartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0)

// Extract unique catagory


const router = createBrowserRouter([
     {
       path : "/",
       element : (
       <>
        <Navigate count={cartCount}/>
        <div className='container'>
          {/* <Catagory /> */} 
          <ProductItem cart={cart} addToCart={addToCart}/>
        </div>
        <Footer />
      </>
      )
     },
     {
       path : "/CartList",
       element : (
       <>
        <Navigate count={cartCount}/>
        <CartList cart = {cart}/>
        <Footer />
      </>
      )
     },
     {
      path : "/Wishlist",
      element : (
      <>
        <Navigate count = {cartCount}/>
        <Wishlist />
        <Footer />
      </>
      )
     },
     {
      path : "/PurchaseItem",
      element : (
      <>
        <Navigate count = {cartCount}/>
        <PurchaseItem />
        <Footer />
      </>
      )
     },
   ])

   return (
     <>
       <RouterProvider router={router} /> 
     </>
   )
}

export default App

// import React, { useState } from 'react';
// import './App.css';
// import ProductItem from './Pages/ProductItem';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';
// import Navigate from './Components/Navigate';
// import CartList from './Pages/CartList';
// import Wishlist from './Pages/Wishlist';
// import Footer from './Components/Footer';

// function App() {
//   const [cart, setCart] = useState({}); // Centralized cart state

//   // Function to add items to the cart
//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const updatedCart = { ...prevCart };
//       updatedCart[product.id] = {
//         ...product,
//         quantity: (updatedCart[product.id]?.quantity || 0) + 1,
//       };
//       return updatedCart;
//     });
//   };

//   // Calculate total cart count
//   const cartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <>
//           <Navigate count={cartCount} />
//           <ProductItem cart={cart} addToCart={addToCart} />
//           <Footer />
//         </>
//       ),
//     },
//     {
//       path: "/CartList",
//       element: (
//         <>
//           <Navigate count={cartCount} />
//           <CartList cart={cart} />
//           <Footer />
//         </>
//       ),
//     },
//     {
//       path: "/Wishlist",
//       element: (
//         <>
//           <Navigate count={cartCount} />
//           <Wishlist />
//           <Footer />
//         </>
//       ),
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

// export default App;
