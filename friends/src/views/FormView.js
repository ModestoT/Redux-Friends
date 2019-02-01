import React from "react";
import { connect } from "react-redux";

import { Form } from "../components";
import { addNewFriend, updateFriend } from '../store/actions';

class FormView extends React.Component {
    state = {
        name: '',
        age: '',
        email: '',
        friendId: this.props.friendId,
        isUpdating: this.props.isUpdating
    };

    handleInput = e => {
        const target = e.target.placeholder.toLowerCase();
    
        switch(target){
          case 'name':
            this.setState({name: e.target.value});
            break;
          case 'age':
            this.setState({age: e.target.value});
            break;
          case 'email':
            this.setState({email: e.target.value});
            break;
          default:
            console.log("invalid input")
        }
    }

    addNewFriend = () => {
        const newFriend = {name: this.state.name, age: this.state.age, email: this.state.email};
        this.props.addNewFriend(newFriend)
        this.setState({ name: '', age: '', email: '' });
    }

    componentDidMount(){
        if(this.state.isUpdating){
            const tempFriend = this.props.friends.find(friend => friend.id === this.state.friendId);
            this.setState({ 
                name: tempFriend.name,
                email: tempFriend.email,
                age: tempFriend.age,
                friendId: tempFriend.id
            });
        }
    } 
    updateFriend = (id) => {
        const updatedFriend = {name: this.state.name, age: this.state.age, email: this.state.email};
        this.props.updateFriend(updatedFriend, id);        
    }

    render(){
        return (
            <Form 
                name={this.state.name} 
                age={this.state.age} 
                email={this.state.email} 
                handleInput={this.handleInput} 
                addNewFriend={this.addNewFriend} 
                isUpdating={this.state.isUpdating} 
                updateFriend={this.updateFriend}
                friendId={this.state.friendId}
            />
        );
    }
}
const mapStateToProps = state => ({
    friends: state.friendsReducer.friends,
    isUpdating: state.friendsReducer.isUpdating,
    friendId: state.friendsReducer.friendId
});

export default connect(
    mapStateToProps,
    { addNewFriend, updateFriend }
)(FormView);