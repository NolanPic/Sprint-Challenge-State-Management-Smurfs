const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                smurfs: action.payload
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'ADD_SMURF':
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            }
        case 'EDIT_SMURF':
            return {
                ...state,
                editingSmurf: action.payload
            };
        case 'UPDATE_SMURF':
            return {
                ...state,
                smurfs: state.smurfs.map(smurf => {
                    if(smurf.id === action.payload.id) {
                        return action.payload;
                    }
                    return smurf;
                })
            };
        case 'DELETE_SMURF':
            return {
                ...state,
                smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)
            };
        default:
            return state;
    }
};

export default reducer;
