import { stock } from '../data/stock.js'

export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
            reject('Error al obtener los productos')
        }, 500)
    })
}