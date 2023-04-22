import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(init)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    console.log(cart)

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const calcularCantidad = () => {
        return cart.reduce((acum, item) => acum + item.counter, 0)
    }

    const precioTotal = () => {
        return cart.reduce((acum, item) => acum + item.counter * item.price, 0)
    }

    const removerItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id)
        setCart(newCart)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, calcularCantidad, precioTotal, removerItem, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}