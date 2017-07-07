import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../../imports/ui/App.jsx';
import AppHeader from './layout/AppHeader.jsx'
import dbDonuts from '../../imports/api/donuts.js'

class Home extends Component {
  
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    return nextProps
  }
  showNavLinks(){
    return <div>
      <form action="/register" method="get">
        <button className="link">Signup</button>
      </form>
      <form action="/login" method="get">
        <button className="link">Login</button>
      </form>
    </div>;
  }


  showUserInfo(){
    return (
      <div>
        {Meteor.user().username} Logged in
          <form action="/logout" method="get">
          <button className="link">logout</button>
          </form>
        </div>
    )
  }

  showUserNav() {
    return Meteor.user() ? this.showUserInfo() : this.showNavLinks()
  }

  render(){
    return (
      <div className="app-container">
        <AppHeader appTitle="My Awesome Donut App" userNav={this.showUserNav()}/>
        <main className="container" >
          {this.props.content}
        </main>
      </div>
    );
  }
}

export default HomeContainer = createContainer(props => {
  
  let subscription = Meteor.subscribe("userData");
  let sub = subscription.ready();
  let currentUser = Meteor.user();
  Meteor.subscribe("donuts")
  Meteor.subscribe("donuts_menu")

  return {
    sub: sub
  };
}, Home);

// export default Home;