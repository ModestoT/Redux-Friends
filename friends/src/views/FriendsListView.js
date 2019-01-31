import React from "react";
import { connect } from "react-redux";

import { FriendsList } from "../components";
import { getFriends, deleteFriend } from '../store/actions';


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
        const tempFriend = this.props.friends.find(friend => friend.id === id);
        
        this.props.updateFriend(tempFriend, id)
        // this.setState({ 
        //   name: tempFriend.name,
        //   email: tempFriend.email,
        //   age: tempFriend.age,
        //   friendId: tempFriend.id,
        //   isUpdating: true
        // });
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