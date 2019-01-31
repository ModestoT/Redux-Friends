import { 
    FETCHING_FRIENDS, 
    FETCHING_FRIENDS_SUCCESS, 
    FETCHING_FRIENDS_FAILURE, 
    ADDING_FRIEND, 
    ADDING_FRIEND_SUCCESS, 
    ADDING_FRIEND_FAILURE 
} from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    isAddingFriend: false,
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
        case ADDING_FRIEND:
            return {
                ...state,
                isAddingFriend: true,
                error: ''
            };
        case ADDING_FRIEND_SUCCESS:
            return {
                ...state,
                friends: action.payload,
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
};