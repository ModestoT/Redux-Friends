import React from 'react';

import { FormView } from "../views";
import '../styles/Friend.css';
const Friend = props => {
   const renderUpdateForm = () => {
        if(props.isUpdating && props.friendId === props.friend.id){
            return <FormView />
        }
        return (
            <form className="friend-btns">
                <button onClick={e => props.populateForm(e, props.friend.id)}>Update</button>
                <button className="delete-btn" onClick={e => props.deleteFriend(e, props.friend.id)}>Delete</button>
            </form>
        );
    }
    return (
        <div className="friend-wrapper">
            <h1>{props.friend.name}</h1>
            <h2>Email: {props.friend.email}</h2>
            <h2>Age: {props.friend.age}</h2>  
            {renderUpdateForm()}
        </div>
    );
}

export default Friend;