import React , { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import '../03-examples/styles.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)


    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>
            <button 
                onClick={() => {
                    setShow(!show);
                }}
                className='btn btn-primary mb-3'
            >
                Show/hide
            </button>
            {
                show && < MultipleCustomHooks />
            }
            
            
        </div>
    )
}
