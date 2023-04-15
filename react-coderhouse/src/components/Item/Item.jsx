import React from 'react'
import './item.css'

export const Item = (props) => {
    return (
        <div className='item-box'>
            <h3>Item</h3>
            <ul>
                <li>Id: {props.id}</li>
                <li>Desc: {props.description}</li>
                <li>Price: {props.price}</li>
                <button>Agregar al carrito</button>
            </ul>
        </div>
    )
}
