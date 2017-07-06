import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.jsx';
import Home from './components/Home.jsx';

Meteor.startup(() => {
  render ( <Home />, document.getElementById("render-target"));
});