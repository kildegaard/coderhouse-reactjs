import React from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = (props) => {
    return (
        <div className='item-box'>
            <h3>Item</h3>
            <ul>
                <li>Id: {props.id}</li>
                <li>Desc: {props.description}</li>
                <li>Price: {props.price}</li>
                <li>Categoría: {props.category}</li>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta?</p>

                < ItemCount />
                <Link to={`/detail/${props.id}`}><button>Agregar al carrito!</button></Link>
            </ul>
        </div>
    )
}
