import React from 'react'
import './box.css'

export const Box = (props) => {
    return (
        <div className='box'>
            <h1>{props.title}</h1>
            <div className='content'>
                {props.children}
            </div>
        </div>

    )
}