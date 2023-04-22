import './ItemCount.css';

export const ItemCount = ({ max, cant, modify }) => {

    // const [counter, setCounter] = useState(0);

    const sumar = () => {
        if (cant < max) {
            modify(cant + 1);
        }
    }
    const restar = () => {
        if (cant > 0) {
            modify(cant - 1);
        }
    }
    const reset = () => {
        modify(0);
    }

    return (
        <>
            <h4>Cantidad: {cant}</h4>
            <div className='counter-btns'>
                <button onClick={sumar}>➕</button>
                {cant === 0 ? <button style={{ opacity: '0.5' }}>➖</button> : <button onClick={restar}>➖</button>}
                <button onClick={reset}>🔄</button>
            </div>
        </>
    )
}
