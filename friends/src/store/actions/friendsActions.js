import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: err }))
};

export const deleteFriend = id => dispatch => {
    dispatch({ type: DELETE_FRIEND });
    axios
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_FRIEND_FAILURE, payload: err }))
};

export const populateForm = id => dispatch => {
    dispatch({ type: UPDATING_FRIEND, payload: id })
}