import React from 'react'
import './CartWidget.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const CartWidget = () => {
    return (
        <div className="cart-widget">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>0</p>
        </div>
    )
}
