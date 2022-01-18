import {React, useContext} from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    //1. get UserContext reference
    const userContext = useContext(UserContext);
    //2. get setUser
    const {setUser} = userContext;
    //3. create an user object.
    const user = {
        id:123,
        name:'Jesús',
        email:'suleware@gmail.com',
    };
    //4. set the user created before as setUser argument.

    return (
        <div className='container'>
            <h1>LoginScreen</h1>
            <hr/>
            <button 
                 className='btn btn-primary'
                 onClick={() => setUser(user)}
            >
                Login
            </button>
        </div>
    )
}
