import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE } from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    error: ''
};

export const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_FRIENDS:
            return {
                ...state,
                error: '',
                fetchingFriends: true
            };

        case FETCHING_FRIENDS_SUCCESS: 
            return {
                ...state,
                friends: action.payload,
                error: '',
                fetchingFriends: false
            }
        case FETCHING_FRIENDS_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingFriends: false
            };

        default: 
            return state;
    }
};