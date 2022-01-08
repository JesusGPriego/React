import React, {useMemo, useState} from 'react'
import { useCounter } from '../../hooks/useCounter'
import { heavyProcess } from '../helpers/heavyProcess';

export const MemoHook = () => {
    const {counter, increment} = useCounter(100);
    const [show, setShow] = useState(true)

    
    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <hr/>
            <h3>Counter: {counter}</h3>
            <p>{memoHeavyProcess}</p>
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
