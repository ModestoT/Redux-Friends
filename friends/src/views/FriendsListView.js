import React from "react";
import { connect } from "react-redux";

import { FriendsList } from "../components";
import { getFriends } from '../actions';


class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <>
                <h1>Friends List</h1>
                {this.props.isFetchingFriends && (
                    <h1>Loading.....</h1>
                )}
                {this.props.Friends && (
                    <div className="friends-wrapper">
                        <FriendsList friends={this.props.friends}/>
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    isFetchingFriends: state.friendsReducer.isFetchingFriends
});

export default connect(
    mapStateToProps,
    { getFriends }
)(FriendsListView);