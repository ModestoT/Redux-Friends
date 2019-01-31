import React from "react";
import { connect } from "react-redux";

import { Form } from "../components";
import { addNewFriend } from '../actions';

class FormView extends React.Component {
    state = {
        name: '',
        age: '',
        email: '',
        friendId: '',
        isUpdating: false
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
    }

    // updateFriend = (id) => {
    //     const updatedFriend = {name: this.state.name, age: this.state.age, email: this.state.email};

    //     axios
    //     .put(`http://localhost:5000/friends/${id}`, updatedFriend)
    //     .then(res => {
    //         this.setState({friends: res.data, name: '', age: '', email: '', isUpdating:false});
    //         this.props.history.push("/");
    //     })
    //     .catch(err => {
    //         console.log(err.response);
    //     })
    // }
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
const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    { addNewFriend }
)(FormView);