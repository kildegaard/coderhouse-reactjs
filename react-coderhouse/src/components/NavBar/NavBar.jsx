import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <div className='menu'>
            <ul className='links'>
                <li className='fs-1'><a href="#">E-commerce</a></li>
                <li><a href="#">Enlace 1</a></li>
                <li><a href="#">Enlace 2</a></li>
                <li><a href="#">Enlace 3</a></li>
            </ul>

            <CartWidget />
        </div>
    )
}


