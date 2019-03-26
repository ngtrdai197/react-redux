import React, { Component } from 'react'
import { connect } from 'react-redux'

class FoodDetail extends Component {
    render() {
        return (
            <div>
                <p>Name is of food: {this.props.activeFood.name}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    activeFood: state.activeFood
})

let FoodDetailContainer = connect(mapStateToProps)(FoodDetail);

export default FoodDetailContainer;
