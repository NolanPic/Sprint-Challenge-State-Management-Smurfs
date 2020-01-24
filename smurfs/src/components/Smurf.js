import React, { useContext } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';

const Smurf = ({ smurf }) => {

    const { name, age, height } = smurf;

    const { dispatch } = useContext(SmurfsContext);

    return (
        <div className="smurf">
            <h3>{name}</h3>
            <p><strong>Age: </strong>{age}</p>
            <p><strong>Height: </strong>{height}</p>
            <button onClick={() => dispatch({ type: 'EDIT_SMURF', payload: smurf })}>Edit</button>
        </div>
    );
};

export default Smurf;
