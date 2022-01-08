import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './styles.css';


export const Layout = () => {

    

    const {counter, increment} = useCounter(1);

    const url = `https://breakingbadapi.com/api/quotes/${counter}`;
    const { data } = useFetch(url)
    // console.log(state);
                        //!!data means = if data exists, then return data[0]
    const {quote} = !!data && data[0];

    const pTag = useRef();
    useLayoutEffect(() => {

        console.log(pTag.current.getBoundingClientRect());

    }, [quote] );

    return (
        <>
            <h1>Layout Effect</h1>
            <hr/>
            <blockquote className='blockquote text-end'>
                <p ref={pTag}className='mb-3'>
                    {quote}
                </p>
            </blockquote>
            <button onClick={() =>increment(1)} className='btn btn-primary'>Load next</button>

        </>
    );
};
