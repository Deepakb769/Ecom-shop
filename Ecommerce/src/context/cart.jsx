import { createContext, useState, useEffect } from "react";

const cartContext = createContext()

const cartProvider = ({ children }) => {
    // initializing cart state
    const [cartItems, setCartItems] = useState([])
}

const addCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    
}