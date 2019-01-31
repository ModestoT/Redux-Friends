import React from "react";
import { connect } from "react-redux";

import { FriendsList } from "../components";
import { getFriends, deleteFriend } from '../actions';


class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.getFriends();
    }

    deleteFriend = (e, id) => {
        e.preventDefault();
        this.props.deleteFriend(id);
      }

    render() {
        return (
            <>
                <h1>Friends List</h1>
                {this.props.isFetchingFriends && (
                    <h1>Loading.....</h1>
                )}
                {this.props.friends && (
                    <div className="friends-wrapper">
                        <FriendsList friends={this.props.friends} updateFriend={this.updateFriend} deleteFriend={this.deleteFriend} populateForm={this.populateForm} />
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friendsReducer.friends,
    isFetchingFriends: state.friendsReducer.isFetchingFriends
});

export default connect(
    mapStateToProps,
    { getFriends, deleteFriend }
)(FriendsListView);