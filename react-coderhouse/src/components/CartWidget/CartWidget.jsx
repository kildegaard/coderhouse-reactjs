import React, { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../context/CartContext'


export const CartWidget = () => {

    const { calcularCantidad } = useContext(CartContext)

    return (
        <div className="cart-widget">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>{calcularCantidad()}</p>
        </div>
    )
}
