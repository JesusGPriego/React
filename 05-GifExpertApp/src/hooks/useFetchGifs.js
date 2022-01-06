import { useState, useEffect } from "react"
import {getGifs} from '../helpers/getGifs'

/**
 * Custom hook that calls 'getGifs' and serve info to the component that calls it.
 * In this case, this hook is called by GigGrid to create 10 GifGridItem with its info.
 * @param {*} category the topic that the user is looking for.
 * @returns an object with imgs data and a boolean 'loading' which allow the dev to dinamically
 * change the web appearence.
 */
export const useFetchGifs = (category) =>{
    const [state, setState] = useState(
        {
            data:[],
            loading:true
        }
    );

    //use effect allow us to execute the code just one time, by setting second argument as an empty array.
    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading:false,
                });
            });
    }, []);


    // setTimeout(() =>{
    //     setState({
    //         data: [1,2,3,4,5],
    //         loading:false,
    //     })
    // }, 1500)

    return state; //state is data and loading.
}
