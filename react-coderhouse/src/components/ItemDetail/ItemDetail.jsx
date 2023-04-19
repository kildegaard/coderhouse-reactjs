import React from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { Card } from 'react-bootstrap'

export const ItemDetail = (props) => {
    return (
        <>
            <Card style={{
                width: '25rem',
                margin: '50px auto',
                padding: '30px',
                backgroundColor: '#BABABA'
            }}>
                <Card.Title className='fs-1 text-center'>{props.description}</Card.Title>
                <hr />
                <Card.Img variant='top' src={props.image} />
                <Card.Body className='text-center'>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odio tenetur qui cum iusto placeat unde aut sapiente delectus numquam.</p>
                    <hr />
                    <Card.Text className='fs-2 border border-4 border-info-subtle rounded-pill'>Precio: ${props.price}</Card.Text>

                    < ItemCount />
                    <Link to={`/detail/${props.id}`} className='btn btn-success'>Agregar al carrito</Link>
                </Card.Body>

            </Card>
        </>

    )
}
