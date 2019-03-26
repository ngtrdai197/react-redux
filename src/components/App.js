import React, { Component } from 'react';
import './App.css';
import FoodContainer from '../containers/food-list';
import FoodDetailContainer from '../containers/food-detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>List of foods</h2>
        <hr />
        <FoodContainer></FoodContainer>

        <h3>Detail of food</h3>
        <FoodDetailContainer></FoodDetailContainer>
      </div>
    );
  }
}

export default App;
