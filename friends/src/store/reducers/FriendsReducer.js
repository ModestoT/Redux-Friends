import { 
    FETCHING_FRIENDS, 
    FETCHING_FRIENDS_SUCCESS, 
    FETCHING_FRIENDS_FAILURE, 
    ADDING_FRIEND, 
    ADDING_FRIEND_SUCCESS, 
    ADDING_FRIEND_FAILURE,
    DELETE_FRIEND,
    DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_FAILURE,
    UPDATING_FRIEND,
    UPDATE_FRIEND,
    UPDATE_FRIEND_SUCCESS,
    UPDATE_FRIEND_FAILURE,
} from '../actions';

const initialState = {
    friends: [],
    isFetchingFriends: false,
    isAddingFriend: false,
    isDeletingFriend: false,
    isUpdating: false,
    friendId: '',
    error: ''
};

export const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        // ===================== FETCHING_FRIENDS
        case FETCHING_FRIENDS:
            return {
                ...state,
                error: '',
                isFetchingFriends: true
            };

        case FETCHING_FRIENDS_SUCCESS: 
            return {
                ...state,
                friends: action.payload,
                error: '',
                isFetchingFriends: false
            }
        case FETCHING_FRIENDS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetchingFriends: false
            };
        // ===================== ADDING_FRIENDS
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
        // ===================== DELETE_FRIEND
        case DELETE_FRIEND:
            return {
                ...state,
                isDeletingFriend: true,
                error: ''
            };
        case DELETE_FRIEND_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isDeletingFriend: false,
                error: ''
            };
        case DELETE_FRIEND_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isDeletingFriend: false
            };
        // ======================= UPDATING_FRIEND
        case UPDATING_FRIEND: 
            return {
                ...state,
                isUpdating: true,
                friendId: action.payload
            };
        // ======================= UPDATE_FRIEND
        case UPDATE_FRIEND:
            return {
                ...state,
                isUpdating: true,
                error: ''
            }
        case UPDATE_FRIEND_SUCCESS: 
            return {
                ...state,
                friends: action.payload,
                isUpdating: false,
                error: ''
            }
        case UPDATE_FRIEND_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isUpdating: false
            }
        default: 
            return state;
    }
};