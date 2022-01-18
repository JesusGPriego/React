import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {
    
    
    const {setUser} = useContext(UserContext)

    const user = {};

    return (
        <div className='container'>
            <h1>AboutScreen</h1>
            <hr/>
            <button
                className='btn btn-primary'
                onClick={() => {setUser(user)}}
            >
                Logout
            </button>
        </div>
    )
}
