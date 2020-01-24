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
        default:
            return state;
    }
};

export default reducer;
