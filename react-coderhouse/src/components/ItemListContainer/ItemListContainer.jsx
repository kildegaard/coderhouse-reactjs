import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = (props) => {
    return (
        <div className='ItemListContainer'>
            <h2>Contenedor!</h2>
            <h3>{props.saludo}</h3>
        </div>
    )
}