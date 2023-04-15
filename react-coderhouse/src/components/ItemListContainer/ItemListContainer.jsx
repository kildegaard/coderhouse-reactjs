import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = (props) => {
    // Probando el formato de props
    // Object.keys(props).forEach((key) => console.log(key, props[key]))

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                setItems(res)
                console.log(res)
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='ItemListContainer'>
            {loading ? (
                <h3>Cargando...</h3>
            ) : (
                <ItemList productos={items} />
            )}
        </div>
    )
}