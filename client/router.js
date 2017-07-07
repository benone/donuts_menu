import HomeContainer from './components/Home.jsx';
import {FlowRouter} from 'meteor/kadira:flow-router';
import Homepage from './views/Homepage.jsx';

import Login from './views/Login.jsx';
import Register from './views/Register.jsx';
import App from '../imports/ui/App.jsx';

import React from 'react';
import {mount} from 'react-mounter';

// const Home = ({}) => ("test");


FlowRouter.route('/', {
    name: 'home',
    action: function(params, queryParams) {
      mount(HomeContainer, {
          content: <Homepage />
      })
    }
});

FlowRouter.route('/login', {
  name: "login",
  action: function(params, queryParams) {
    mount(HomeContainer, {
      content: <Login />
    })
  }
});


FlowRouter.route('/logout', {
  name: "logout",
  action: function(params, queryParams) {
   Meteor.logout(function(){
      FlowRouter.go('home');
    });
  }
});

FlowRouter.route('/register', {
  name: "register",
  action: function(params, queryParams) {
    mount(HomeContainer, {
      content: <Register />
    })
  }
});

FlowRouter.route('/app', {
  name: "app",
  action: function(params, queryParams) {
    mount(HomeContainer, {
      content: <App />
    })
  }
});