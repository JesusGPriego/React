import React, {useState} from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {
    const {counter, increment} = useCounter(0);
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Memorize</h1>
            <hr/>
            <h3>Counter: <Small value={counter} /></h3>
            <button
                className='btn btn-primary mt-5'
                onClick={() => increment(1)}
            >
                +1
            </button>
            <button
                className='btn btn-primary mt-5'
                onClick={() => 
                    setShow(!show)
                }
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
