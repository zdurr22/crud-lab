import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props
    const restaurantList = restaurants.map(res => {
      return (
        <Restaurant 
          key={res.id}
          restaurant={res}
          deleteRestaurant={deleteRestaurant}  
        />
      )
    })
    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;