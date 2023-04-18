import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'
import { Card } from 'react-bootstrap'

export const Item = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={props.image} />
                <Card.Body className='text-center'>
                    <Card.Title>Id: {props.id}</Card.Title>
                    <Card.Text>Descripción: {props.description}</Card.Text>
                    <Card.Text>Precio: ${props.price}</Card.Text>
                    <Card.Text>Categoría: {props.category}</Card.Text>

                    <Link to={`/detail/${props.id}`} className='btn btn-primary'>Ver más!</Link>
                </Card.Body>

            </Card>
        </>
    )
}
