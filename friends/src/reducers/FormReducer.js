import { ADDING_FRIEND, ADDING_FRIEND_SUCCESS, ADDING_FRIEND_FAILURE } from '../actions';

const initialState = {
    friend: {},
    isAddingFriend: false,
    error: ''
}

export const FormReducer = (state = initialState, action) => {
    switch(action.type){
        case ADDING_FRIEND:
            return {
                ...state,
                isAddingFriend: true,
                error: ''
            };
        case ADDING_FRIEND_SUCCESS:
            return {
                ...state,
                friend: action.payload,
                isAddingFriend: false,
                error: ''
            };
        case ADDING_FRIEND_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isAddingFriend: false
            };
        default: 
            return state;
    }
}