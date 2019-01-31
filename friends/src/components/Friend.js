import React from 'react';

import { FormView } from "../views";
const Friend = props => {
   const renderUpdateForm = () => {
        if(props.isUpdating && props.friendId === props.friend.id){
            return <FormView />
        }
    }
    return (
        <div className="friend-wrapper">
            <h1>Name: {props.friend.name}</h1>
            <h2>Email: {props.friend.email}</h2>
            <h2>Age: {props.friend.age}</h2>  
            {renderUpdateForm()}
            <button onClick={e => props.populateForm(e, props.friend.id)}>Update</button>
            <button onClick={e => props.deleteFriend(e, props.friend.id)}>Delete</button>
        </div>
    );
}

export default Friend;