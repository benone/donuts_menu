import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm.jsx'

export default class Register extends Component {
  createUser(event){
    event.preventDefault();

    const name = this.refs.name.value
    const email = this.refs.email.value
    const password = this.refs.password.value
    console.log(name, email, password)
    Accounts.createUser(
      { 
        email: email,
        password: password, 
        username: name
      },
      function(error) {
        if (error) {
          alert("there was an error: " + error.reason); 
          console.log("there was an error: " + error.reason);
        } else { 
          FlowRouter.go('login');
        }
      }
    )
  
  }


  render() {
    return (
      <RegisterForm submitBtnLabel="Sign Up" submitAction={this.createUser}/>
    );
  }
}