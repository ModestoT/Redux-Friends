import React from "react";
import { connect } from "react-redux";

import { FriendsList } from "../components";
import { getFriends, deleteFriend, populateForm} from '../store/actions';

import '../styles/FriendsListView.css'

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.getFriends();
    }

    deleteFriend = (e, id) => {
        e.preventDefault();
        this.props.deleteFriend(id);
    }

    populateForm = (e, id) => {
        e.preventDefault();
        this.props.populateForm(id)
    }

    render() {
        return (
            <>
                {this.props.isFetchingFriends && (
                    <h1>Loading.....</h1>
                )}
                {this.props.friends && (
                    <div className="friends-wrapper">
                        <h1>Friends List</h1>
                        <FriendsList friends={this.props.friends} deleteFriend={this.deleteFriend} populateForm={this.populateForm} isUpdating={this.props.isUpdating } friendId={this.props.friendId}/>
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friendsReducer.friends,
    isFetchingFriends: state.friendsReducer.isFetchingFriends,
    isUpdating: state.friendsReducer.isUpdating,
    friendId: state.friendsReducer.friendId
});

export default connect(
    mapStateToProps,
    { getFriends, deleteFriend, populateForm }
)(FriendsListView);