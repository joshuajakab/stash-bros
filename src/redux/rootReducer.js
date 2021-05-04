import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
import biosReducer from './Bios/bios.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    bioData: biosReducer
});

export default rootReducer;
