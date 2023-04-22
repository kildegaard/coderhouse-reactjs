import React, { useContext } from 'react'
import './CartScreen.css'
import { Button } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
import { CartContext } from '../context/CartContext'


export const CartScreen = () => {

    const { cart, precioTotal, removerItem, vaciarCarrito } = useContext(CartContext)

    return (
        <div className='container' >
            <h3>Carrito de compras</h3>
            <div className='titulos'>
                <p>Producto</p>
                <p>Precio</p>
                <p>Cantidad</p>
            </div>
            {
                cart.map((prod) => (
                    <>
                        < div className='cart-container my-5 text-center' >
                            <hr />
                            <div className='cart-items'>
                                <p>{prod.description}</p>
                                <p>{prod.price}</p>
                                <p>{prod.counter}</p>
                                <Button className='btn btn-danger' onClick={() => removerItem(prod.id)}>
                                    <BsTrash />
                                </Button>
                            </div>
                        </div>
                    </>
                ))
            }
            <hr />
            <strong>Total: $ {precioTotal()}</strong>
            <Button className='btn btn-danger' onClick={() => vaciarCarrito()}>Vaciar carrito</Button>
        </div >

    )
}
