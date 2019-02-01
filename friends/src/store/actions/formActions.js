import axios from 'axios';

export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADDING_FRIEND_SUCCESS = 'ADDING_FRIEND_SUCCESS';
export const ADDING_FRIEND_FAILURE = 'ADDING_FRIEND_FAILURE';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS';
export const UPDATE_FRIEND_FAILURE = 'UPDATE_FRIEND_FAILURE';

export const addNewFriend = friend => dispatch => {
    dispatch({ type: ADDING_FRIEND });
    axios
        .post('http://localhost:5000/api/friends', friend)
        .then(res => dispatch({ type: ADDING_FRIEND_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADDING_FRIEND_FAILURE, payload: err }))
}

export const updateFriend = (friend, id) => dispatch => {
    dispatch({ type: UPDATE_FRIEND });
    axios
        .put(`http://localhost:5000/api/friends/${id}`, friend)
        .then(res => dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: UPDATE_FRIEND_FAILURE, payload: err }))
};