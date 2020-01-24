import React, { useContext, useEffect } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';
import axios from 'axios';

import Smurf from './Smurf';

const SmurfList = () => {

    const { state, dispatch } = useContext(SmurfsContext);

    useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
            .then(res => dispatch({ type: 'FETCH_SUCCESS', payload: res.data }))
            .catch(err => dispatch({ type: 'FETCH_ERROR', payload: err.message }));
    }, []);

    return (
        <div className="smurf-list">
            {state.smurfs.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))}
        </div>
    );
};

export default SmurfList;
