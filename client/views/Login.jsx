import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.jsx';

export default class Login extends Component {
  loginUser(event){
    event.preventDefault()
    const email = this.refs.email.value
    const password = this.refs.password.value
    console.log(email, password)

    Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
        alert("there was an error: " + error.reason);
        console.log("There was an error:" + error.reason);
      } else {
        FlowRouter.go('/app');
      }
    })

  }

  render() {
    return (
      <LoginForm submitBtnLabel="Log in" submitAction={this.loginUser}/>
    );
  }
}