import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemList } from '../ItemList/ItemList'
import { ImSpinner3 } from 'react-icons/im'
import './ItemListContainer.css'

export const ItemListContainer = (props) => {
    // Probando el formato de props
    // Object.keys(props).forEach((key) => console.log(key, props[key]))

    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(false)

    // Desestructuración de la variable param para obtener el valor de categoryId
    const { categoryId } = useParams() // los Params son los valores que se pasan por la URL anteponiendo ':' a la variable

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                if (categoryId) {
                    setItems(res.filter((item) => item.category === categoryId))
                }
                else { setItems(res) }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <div className='ItemListContainer'>
            {loading ? (
                // <h3>Cargando...</h3>
                <ImSpinner3 />
            ) : (
                <ItemList productos={items} />
            )}
        </div>
    )
}