import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class LoginForm extends Component {
  static defaultProps = {
    submitBtnLabel: "Submit",
  }
  
  render() {
    return (
      <form onSubmit={this.props.submitAction.bind(this)}>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input placeholder="Email" ref="email" type="email" id="email" className="form-control"/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input placeholder="Password" ref="password" type="password" id="password" className="form-control"/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary">{this.props.submitBtnLabel}</button>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  submitAction: PropTypes.func.isRequired
};
