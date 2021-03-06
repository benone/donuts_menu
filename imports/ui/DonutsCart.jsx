import React, { Component } from 'react';

import { dbDonuts } from '/imports/api/donuts.js';

import PropTypes from 'prop-types';

import { createContainer } from 'meteor/react-meteor-data';


class Donut extends Component {
  removeItem(event){
    event.preventDefault();
    dbDonuts.remove({"_id": this.props.donut._id})
  }
  
  render(){
    return (
      <li key={this.props.donut._id}>
        <span>{this.props.donut.name} ({this.props.donut.count})</span>
        <a className="remove_donut" href="#" onClick={this.removeItem.bind(this)}>X</a>
      </li>
    )
  }
}


class DonutsCart extends Component {
  
  render(){
    return(
      <ul>
        {this.props.donuts.map(function(donut){
          return <Donut key={donut._id} donut={donut}/>
        })
        }
      </ul>
    )
  }
}

DonutsCart.propTypes = {
  donuts: PropTypes.array.isRequired
}

export default DonutsMenuContainer = createContainer(() => {
  console.log(dbDonuts.find({}).fetch())
  return { donuts: dbDonuts.find({}).fetch() };
}, DonutsCart)