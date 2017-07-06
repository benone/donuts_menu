import Home from './components/Home.jsx';
import Homepage from './views/Homepage.jsx';
import React from 'react';
import {mount} from 'react-mounter';


FlowRouter.route('/', {
    name: 'home',
    action: function(params, queryParams) {
      mount(Home, {
          content: '123'
      })
      // BlazeLayout.render("mainLayout", {area: "blog"});
      // mount(MainLayout, {
      //   content: <WelcomeComponent name="Arunoda" />
      // });

    }
});

FlowRouter.route('/login', {

    action: function(params, queryParams) {
      // BlazeLayout.render("mainLayout", {area: "blog"});
      // mount(MainLayout, {
      //   content: <WelcomeComponent name="Arunoda" />
      // });

    }
});