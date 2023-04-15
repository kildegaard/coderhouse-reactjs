import React from 'react'
import { Item } from '../Item/Item'
import './itemList.css'

export const ItemList = ({ productos = [] }) => {
    return (
        <>
            <h3>Nuestros productos</h3>
            <div className='item-list'>
                {productos.map((item) => <Item {...item} key={item.id} />)}
            </div>
        </>
    )
}
