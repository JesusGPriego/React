import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './simpleform.css';
export const FormWithCustomHook = () => {
    
    const  [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });
    const {name, email, password} = values;
    useEffect(() => {
        console.log('email changed');
    }, [email])

    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };   


    return (
        <form onSubmit={handleSubmit}>
            <h1>Form with custom hook</h1>
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
            <div className='form-group'>
                <input 
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='********'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button type ='submit' className='btn btn-primary'>Enviar</button>
        </form>
    )
}
