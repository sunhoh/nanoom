import { combineReducers } from 'redux';
import auth from './modules/auth';
import board from './modules/board';

const rootReducer = combineReducers({ auth, board });

export default rootReducer;
