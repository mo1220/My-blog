import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
} from '../_action/types'

export default function (prevState={}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...prevState, loginSuccess: action.payload }

        case REGISTER_USER: 
            return {...prevState, success: action.payload}

         case AUTH_USER: 
            return {...prevState, userData: action.payload}

        default:
            return prevState;
    }
}   

