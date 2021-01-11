import {combineReducers} from 'redux';
import user from './users_reducer';
import post from './posts_reducer';

const rootReducer = combineReducers({
    user,
    post
})

export default rootReducer;