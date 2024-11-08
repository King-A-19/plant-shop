import {createContext, useContext, useState} from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addToCart = async (plantId, quantity = 1) => {
        const response = await fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ plantId, quantity })
        });
        const updatedCart = await response.json();
        setCart(updatedCart.items); // Update cart with populated items
    }
    
    const removeFromCart = async (plantId) => {
        const response = await fetch(`/api/cart/${plantId}`, { method: 'DELETE' });
        const updatedCart = await response.json();
        setCart(updatedCart.items);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}