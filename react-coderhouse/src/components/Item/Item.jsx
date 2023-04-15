import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

export const Item = (props) => {
    return (
        <div className='item-box'>
            <h3>Item</h3>
            <ul>
                <li>Id: {props.id}</li>
                <li>Desc: {props.description}</li>
                <li>Price: {props.price}</li>
                <li>Categoría: {props.category}</li>
                <hr />

                <Link to={`/detail/${props.id}`}><button>Ver más detalles</button></Link>
            </ul>
        </div>
    )
}
