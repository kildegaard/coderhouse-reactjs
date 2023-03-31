import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <div className='menu'>
            <p className='fs-1'>E-commerce</p>
            <p>Enlace 1</p>
            <p>Enlace 2</p>
            <p>Enlace 3</p>

            <CartWidget />
        </div>
    )
}


