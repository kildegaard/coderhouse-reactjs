import React, { useState, useEffect } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import { ImSpinner3 } from 'react-icons/im'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId))) // Busco el producto por id y lo guardo en el estado item
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        <section className='item-detail'>
            {loading ? (
                <>
                    <h3>Cargando...</h3>
                    <ImSpinner3 />
                </>
            ) : (
                <ItemDetail {...item} /> // Le paso el item al componente ItemDetail como props
            )}
        </section>
    )
}
