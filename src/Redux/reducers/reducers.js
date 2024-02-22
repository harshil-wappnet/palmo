import { combineReducers } from 'redux';
import countReducer from './countReducers';
import loggedinReducer from './loggedinReducer';

const rootReducer = combineReducers({
    count: countReducer,
    loggedin: loggedinReducer,
});

export default rootReducer;
