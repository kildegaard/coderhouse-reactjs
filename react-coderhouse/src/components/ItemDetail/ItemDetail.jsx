import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const ItemDetail = ({ id, description, price, image, category, stock }) => {

    const navigate = useNavigate()

    const volverHaciaAtras = () => {
        navigate(-1)
    }

    const [counter, setCounter] = useState(0);

    const sumarAlCarrito = () => {
        const newItem = {
            id,
            description,
            image,
            price,
            category,
            counter
        }
        console.log(newItem)
    }


    return (
        <>
            <Card style={{
                width: '25rem',
                margin: '50px auto',
                padding: '30px',
                backgroundColor: '#BABABA'
            }}>
                <Card.Title className='fs-1 text-center'>{description}</Card.Title>
                <hr />
                <Card.Img variant='top' src={image} />
                <Card.Body className='text-center'>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odio tenetur qui cum iusto placeat unde aut sapiente delectus numquam.</p>
                    <hr />
                    <Card.Text className='fs-2 border border-4 border-info-subtle rounded-pill'>Precio: ${price}</Card.Text>

                    < ItemCount max={stock} modify={setCounter} cant={counter} />
                    <Link to={`/detail/${id}`} className='btn btn-success' onClick={sumarAlCarrito}>Agregar al carrito</Link>
                    <hr />
                    <button className='btn btn-secondary' onClick={volverHaciaAtras}>Volver</button>
                </Card.Body>

            </Card>
        </>

    )
}
