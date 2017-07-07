import React, { Component } from 'react';

export default class AppHeader extends Component {
 static defaultProps = {
    appTitle: "Let’s pass this App title from Home.jsx",
    userNav: null
  }
  render() {
    return (
        <header>
          <h1>{this.props.appTitle}</h1>
          <div className="controls">{this.props.userNav}</div>
        </header>
    )
  }
}