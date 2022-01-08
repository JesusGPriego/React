import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import './simpleform.css';
export const SimpleForm = () => {

    const  [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const {name, email} = formState;
    //triggers on load only
    useEffect(() => {
        // console.log('Hey!');
    },[]);
    //triggers whenever the form changes
    useEffect(() => {
        // console.log('form changed!');
    },[formState]);
    //triggers whenever email changes
    useEffect(() => {
        // console.log('email changed!');
    },[email]);

    const handleInputChange = ({target}) =>{
        setFormState({
            ...formState,
            [target.name] : target.value,
        });
    };

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className='form-group'>
                <input 
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='name'
                    autoComplete='false'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input 
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='false'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {(name === '123') && <Message />}
        </>
    );
}
