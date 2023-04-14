import React from 'react'
import { Box } from '../Box/Box'
import './container.css'

export const Container = () => {
    return (
        <div className="container">
            <Box title='Mi Caja'>
                <p>Contenido de la caja</p>
                <button>Click</button>
            </Box>
        </div>
    )
}
