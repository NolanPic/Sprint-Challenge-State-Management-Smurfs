import React, { useContext } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';
import axios from 'axios';

const Smurf = ({ smurf }) => {

    const { id, name, age, height } = smurf;

    const { dispatch } = useContext(SmurfsContext);

    const deleteSmurf = () => {
        if(window.confirm('Ooo, those goody-goody Smurfs make me sick! Are you sure?')) {
            axios.delete(`http://localhost:3333/smurfs/${id}`)
                .then(res => dispatch({ type: 'DELETE_SMURF', payload: id }))
                .catch(err => dispatch({ type: 'FETCH_ERROR', payload: err.message }));
        }
    };

    return (
        <div className="smurf">
            <h3>{name}</h3>
            <p><strong>Age: </strong>{age}</p>
            <p><strong>Height: </strong>{height}</p>
            <button onClick={() => dispatch({ type: 'EDIT_SMURF', payload: smurf })}>Edit</button>
            <button onClick={deleteSmurf}>X</button>
        </div>
    );
};

export default Smurf;
