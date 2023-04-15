import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom' // Esto es para evitar que la página se recargue al hacer click en los links

export const NavBar = () => {
    return (
        <div className='menu'>
            <Link to='/'>Logo</Link>
            <Link to='/'>Inicio</Link>
            <Link to='/counter'>Contador</Link>
            <Link to='/pika'>Pokemones</Link>
            <Link to='/cart'><CartWidget /></Link>
        </div>
    )
}


