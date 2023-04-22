import React, { useContext } from 'react'
import './CartScreen.css'
import { Button } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


export const CartScreen = () => {

    const { cart, precioTotal, removerItem, vaciarCarrito } = useContext(CartContext)

    return (
        <div className='container' >
            {cart.length === 0 ?
                <>
                    <h3>No hay productos en el carrito</h3>
                    <Link to='/' className='btn btn-secondary'>Volver al inicio</Link>
                </>
                :
                <>
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
                </>
            }

        </div >

    )
}
