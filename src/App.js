import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';
// import { connect } from 'react-redux'
// import { addRestaurant } from './actions/restaurants.js'

export class App extends Component {
  render() {
    // debugger
    return (
      <div className="App">
        <RestaurantInput store={this.props.store} />
        <Restaurants />
      </div>
    );
  }
};



// export default connect(mapStateToProps, { addRestaurant })(App);
export default App;
