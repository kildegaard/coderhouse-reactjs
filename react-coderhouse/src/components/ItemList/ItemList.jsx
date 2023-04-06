import React, { useEffect, useState } from 'react'


export const ItemList = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            setTimeout(async () => {
                console.log('Entro a la funcion')
                const response = await fetch('./usuarios.json')
                console.log('Hice el fetch')
                // console.log(response)
                const data = await response.json()
                console.log('Guardé la data')
                console.log(data)
                // setUsers(data)
                // setLoading(false)
            }, 2000)
        }
        catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div>
            <h1>Lista de productos</h1>
            {loading ?
                (<p>Cargando Usuarios...</p>)
                :
                (<ul>
                    {users.map(user =>
                        <li key={user.id}>{user.name} - {user.age}</li>)}
                </ul>)
            }
        </div>
    )
}
