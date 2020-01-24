import React, { useContext, useEffect } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';
import axios from 'axios';

const SmurfList = () => {

    const { state, dispatch } = useContext(SmurfsContext);

    useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
            .then(res => dispatch({ type: 'FETCH_SUCCESS', payload: res.data }))
            .catch(err => dispatch({ type: 'FETCH_ERROR', payload: err.message }));
    }, []);

    return (
        <div className="smurf-list">
            {JSON.stringify(state)}
        </div>
    );
};

export default SmurfList;
