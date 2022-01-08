import {useState, useEffect, useRef} from 'react';

export const useFetch = (url) => {
    //when the component is created, the component is mounted 100%
    const isMounted = useRef(true);
    const [state, setState] = useState({data:null, loading:true, error:null});

    //in case the component is unmounted, the var is mounted turns into false:
    useEffect(() => {
        return () =>{
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setState({data:null, loading:true, error:null});
        fetch(url)
            .then(response => response.json())
            .then(data =>{

                //if the component is not mounted, setState won't trigger. 
                if(isMounted.current){
                    setState({
                        loading:false,
                        error:null,
                        data:data,
                    });
                }
                
            });

    },[url]);

    return state;

};
