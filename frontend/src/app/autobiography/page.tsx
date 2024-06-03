'use client'
import React, { useEffect, useState } from 'react'
import fetchData from '../../../model/fetchData'

type User = {
    name: String;
    phoneNumber: String;
}

const autobiography = () => {

    const [users, setUsers] = useState<(User[])>([])

    const getAutobiography = async () => {
        const response = await fetchData('/hello', 'GET', null)
        if (response?.status === 200) {
            const data = await response.json()
            setUsers(data)
        }
    }

    useEffect(() => {
        getAutobiography()
    }, [])
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <li key={index}>
                            Name: {user.name}, PhoneNumber: {user.phoneNumber}
                        </li>
                    ))
                ) : (
                    <li>user not fund</li>
                )}
            </ul>
        </div>
    )
}

export default autobiography