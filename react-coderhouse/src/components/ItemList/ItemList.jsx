import React from 'react'
import { Item } from '../Item/Item'
import './itemList.css'

export const ItemList = ({ productos = [] }) => {
    return (
        <div className='item-list'>
            <h3>Nuestros productos</h3>
            {productos.map((item) => <Item {...item} key={item.id} />)}
        </div>
    )
}
