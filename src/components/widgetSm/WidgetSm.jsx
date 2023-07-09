import React, { useEffect, useState } from 'react'
import './WidgetSm.scss'
import NewUser from '../newUser/NewUser'

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/fetch-users', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(
                response => response.json()
            )
            .then(
                data => setNewUsers(data.newUsers)
            )
            
    }, [])

    console.log(newUsers)
    return (
        <>
            <div className="widget-sm-container">
                <h3>New Join Members</h3>
                {newUsers && newUsers.map(user => (
                    <NewUser {...user} />
                ))}
            </div>
        </>
    )
}
