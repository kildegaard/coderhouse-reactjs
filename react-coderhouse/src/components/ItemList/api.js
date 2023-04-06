export function fetchData() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('./productos.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error - No se pueden obtener los productos')
                    }
                    return response.json()
                })
                .then(data => resolve(data))
                .catch(error => reject(error))
        }, 2000)
    })
}