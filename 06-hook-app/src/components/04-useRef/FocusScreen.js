import React, { useRef } from 'react';
import '../03-examples/styles.css';



export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef);

    const handleClick = () =>{
        inputRef.current.select();
    };

    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>
            <input 
                ref={inputRef}
                className='form-control'
                placeholder='Write your name here'
            />
            <button 
                className='btn btn-outline-primary mt-5'
                onClick={handleClick}
            >
                    Focus!
            </button>
        </>
    );

}
