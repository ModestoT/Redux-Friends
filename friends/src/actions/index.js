import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';


export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: err }))
}