import React, { useState } from 'react';
import './ItemCount.css';

export const ItemCount = () => {

    const [counter, setCounter] = useState(0);

    const sumar = () => {
        setCounter(counter + 1);
    }
    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }
    const reset = () => {
        setCounter(0);
    }

    return (
        <>
            <h4>Cantidad: {counter}</h4>
            <div className='counter-btns'>
                <button onClick={sumar}>➕</button>
                {counter === 0 ? <button disabled>➖</button> : <button onClick={restar}>➖</button>}
                <button onClick={reset}>🔄</button>
            </div>
        </>
    )
}
