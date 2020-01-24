import React, { useContext, useState } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';
import axios from 'axios';

const AddSmurf = () => {

    const { state, dispatch } = useContext(SmurfsContext);

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: -1
    });

    const handleChange = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        });
    }

    const getUniqueId = () => {
        return state.smurfs
            .sort((a, b) => a.id - b.id)
            .reverse()[0].id + 1;
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newId = getUniqueId();
        axios.post('http://localhost:3333/smurfs', {
            ...newSmurf,
            id: newId
        })
        .then(res => {
            dispatch({type: 'ADD_SMURF', payload: { ...newSmurf, id: newId }});
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={newSmurf.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="age"
                placeholder="Age"
                value={newSmurf.age}
                onChange={handleChange}
            />
            <input
                type="text"
                name="height"
                placeholder="Height"
                value={newSmurf.height}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form> 
    );
};

export default AddSmurf;
