import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='menu footer'>
            <Link className='text-secondary links fs-2' to='/'><img className='logo' src={logo} /></Link>
            <p className='fs-3 text-secondary mb-0'>Made with ♥ by gus.dev</p>
            <Link className='text-secondary links fs-2' to='https://www.linkedin.com/in/gustavo-kildegaard/'>Contacto</Link>
        </div>
    )
}
