import React from 'react'
import './CartWidget.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const CartWidget = () => {
    return (
        <div className="cart-widget">
            <AiOutlineShoppingCart className='carrito' />
            <p>13</p>
        </div>
    )
}
