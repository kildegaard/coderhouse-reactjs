import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import { link } from 'react-router-dom' // Esto es para evitar que la página se recargue al hacer click en los links

export const NavBar = () => {
    return (
        <div className='menu'>
            {/* <ul className='links'>
                <li className='fs-1'><a href="#">E-commerce</a></li>
                <li><a href="#" className='btn btn-secondary opacity-75'>Enlace 1</a></li>
                <li><a href="#" className='btn btn-secondary opacity-75'>Enlace 2</a></li>
                <li><a href="#" className='btn btn-secondary opacity-75'>Enlace 3</a></li>
            </ul> */}

            <a href='/'>Inicio</a>
            <a href='/counter'>Contador</a>
            <a href='/pika'>Pokemones</a>
            <CartWidget />
        </div>
    )
}


