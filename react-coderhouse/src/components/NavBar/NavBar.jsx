import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom' // Esto es para evitar que la página se recargue al hacer click en los links
import logo from './logo.png'

export const NavBar = () => {
    return (
        <div className='menu'>
            <Link className='text-secondary links fs-2' to='/'><img className='logo' src={logo} /></Link>
            <Link className='text-secondary links fs-2' to='/'>Inicio</Link>
            <Link className='text-secondary links fs-2' to='/productos/electrodomesticos'>Electrodomésticos</Link>
            <Link className='text-secondary links fs-2' to='/productos/ropa'>Ropa</Link>
            <Link className='text-secondary links' to='/cart'><CartWidget /></Link>
        </div>
    )
}


