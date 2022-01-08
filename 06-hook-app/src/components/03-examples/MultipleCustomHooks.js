import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './styles.css';


export const MultipleCustomHooks = () => {

    

    const {counter, increment} = useCounter(1);

    const url = `https://breakingbadapi.com/api/quotes/${counter}`;
    const { data, loading } = useFetch(url)
    // console.log(state);
                        //!!data means = if data exists, then return data[0]
    const {author, quote} = !!data && data[0];


    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            {loading 
                ? 
                <div className='alert alert-info text-center'>
                    Loading...
                </div>
                : 
                <blockquote className='blockquote text-end'>
                    <p className='mb-3'>
                        {quote}
                    </p>
                    <footer className='blockquote-footer'>
                        {author}
                    </footer>
                </blockquote>
            }
            <button onClick={() =>increment(1)} className='btn btn-primary'>Load next</button>

        </>
    );
};
