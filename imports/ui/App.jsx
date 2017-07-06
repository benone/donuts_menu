import React, { Component } from 'react';
import DonutsCartContainer from './DonutsCart.jsx';
import DonutsMenuContainer from './DonutsMenu.jsx';

  
export default class App extends Component {

  // getDonuts(){
  //   console.log(this.props.donuts)
  //   return this.props.donuts;//["donut 1", "donut 2", "donut 3"]
  // }

  // renderDonuts(){
  //   return (
  //     this.getDonuts().map(function(donut){
  //       return <li key={donut._id}>{"" + donut["_id"]}: {donut.name}</li>
  //     })
  //   )
  // }

  render() {
    return (
      <div>
        <header>Donut Menu</header>
        <DonutsMenuContainer />
        <header>Donuts Cart</header>
        <DonutsCartContainer />
        
      </div>
    )
  }

}

