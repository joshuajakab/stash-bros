import biosTypes from './bios.types';

const INITIAL_STATE = {
    bio: []
};

const biosReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case biosTypes.SET_BIO:
            return {
                ...state,
                bio: action.payload
            }
            default:
                return state;
    }
};

export default biosReducer;
