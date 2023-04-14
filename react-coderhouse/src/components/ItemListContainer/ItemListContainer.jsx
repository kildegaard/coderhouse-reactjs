import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = (props) => {
    // Probando el formato de props
    Object.keys(props).forEach((key) => console.log(key, props[key]))

    return (
        <div className='ItemListContainer'>
            <h2>Contenedor!</h2>
            <h3>{props.saludo1}</h3>
            <h3>{props.saludo2}</h3>
        </div>
    )
}