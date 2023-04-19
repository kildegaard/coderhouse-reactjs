import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='menu footer'>
            <Link className='text-secondary links fs-2' to='/'><img className='logo' src={logo} /></Link>
            <Link className='text-secondary links fs-2' to='/'>Inicio</Link>
            <Link className='text-secondary links fs-2' to='/productos/electrodomesticos'>Electrodomésticos</Link>
            <Link className='text-secondary links fs-2' to='/productos/ropa'>Ropa</Link>
        </div>
    )
}
