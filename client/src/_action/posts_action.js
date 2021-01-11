import {
    ADD_POST,
    REMOVOE_POST,
    UPDATE_POST
} from './types'

export function addPosts(dataToSubmit){
    return {
        type: ADD_POST,
        payload: dataToSubmit
    }
}

export function removePosts(dataToSubmit){
    console.log(dataToSubmit)

    return{
        type: REMOVOE_POST,
        id: dataToSubmit.id
    }
}

export function updatePosts(dataToSubmit){
    return {
        type: UPDATE_POST,
        id: dataToSubmit.id,
        payload: dataToSubmit
    }
}
    