import React, {useState, useEffect} from 'react';
import makeRequest from './makeRequest'

export default function useGetData(){
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState(null);

    useEffect( ()=> {
        makeRequest('http://localhost:3000/products').then(res => {
        setData(res);
        setLoaded(true);
    });
    },[])
    

    return [data, loaded];
}