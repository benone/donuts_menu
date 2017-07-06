import React, { Component } from 'react';
import App from '../../imports/ui/App.jsx';


export default class Home extends Component {
  render(){
    return (
      <div className="app-container">
        1{this.props.content}2
      </div>
    );
  }
}