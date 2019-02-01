import React from 'react';
import Friend from './Friend';

import '../styles/FriendsList.css';

const FriendsList = props => {
    return (
        <div className="friends-list">
            {props.friends.map(friend => {
                return <Friend friend={friend} key={friend.id} deleteFriend={props.deleteFriend} populateForm={props.populateForm} isUpdating={props.isUpdating} friendId={props.friendId}/>
            })}
        </div>
    );
}

export default FriendsList;