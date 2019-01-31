import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
    return (
        <div className="friends-list">
            {props.friends.map(friend => {
                return <Friend friend={friend} key={friend.id} updateFriend={props.updateFriend} deleteFriend={props.deleteFriend} populateForm={props.populateForm}/>
            })}
        </div>
    );
}

export default FriendsList;