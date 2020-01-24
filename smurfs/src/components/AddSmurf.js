import React, { useContext, useState, useEffect } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';
import axios from 'axios';

const AddSmurf = () => {

    const { state, dispatch } = useContext(SmurfsContext);

    const initialState = {
        name: '',
        age: '',
        height: '',
        id: -1
    };

    const [newSmurf, setNewSmurf] = useState(initialState);

    useEffect(() => {
        if(state.editingSmurf) {
            setNewSmurf(state.editingSmurf);
        }
    }, [state.editingSmurf]);

    const handleChange = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        });
    }

    const getUniqueId = () => {
        return [ ...state.smurfs]
            .sort((a, b) => a.id - b.id)
            .reverse()[0].id + 1;
    };

    const handleSubmit = e => {
        e.preventDefault();

        const api = 'http://localhost:3333/smurfs';

        const dispatchError = err => dispatch({ type: 'FETCH_ERROR', payload: err });
        
        if(newSmurf.id === -1) {
            // new smurf
            const newId = getUniqueId();
            axios.post(api, {
                ...newSmurf,
                id: newId
            })
            .then(res => {
                dispatch({type: 'ADD_SMURF', payload: { ...newSmurf, id: newId }});
                setNewSmurf(initialState);
            })
            .catch(err => {
                dispatchError(err.message);
            });
        }
        else {
            // existing smurf
            axios.put(`${api}/${newSmurf.id}`, newSmurf)
                .then(res => {
                    dispatch({ type: 'UPDATE_SMURF', payload: newSmurf });
                    setNewSmurf(initialState);
                })
                .catch(err => dispatchError(err.message));
        }
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
            <input
                type="hidden"
                name="id"
                value={newSmurf.id}
            />
            <button type="submit">Submit</button>
        </form> 
    );
};

export default AddSmurf;
