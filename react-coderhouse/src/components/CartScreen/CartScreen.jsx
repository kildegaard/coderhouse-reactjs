import React from 'react'
import './CartScreen.css'
import { Button } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'

export const CartScreen = () => {
    return (
        <div className='cart-container my-5'>
            <h3>Carrito de compras</h3>
            <hr />
            <div className='cart-items'>
                <p>Producto</p>
                <p>$</p>
                <p>Cantidad</p>
                <Button className='btn btn-danger'>
                    <BsTrash />
                </Button>
            </div>



        </div>
    )
}
