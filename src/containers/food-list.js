import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectFood } from '../actions/index';
class FoodList extends Component {

    createFoodList() {
        let listItem = this.props.foods.map(x => {
            return (
                <li key={x.id} onClick={() => { this.props.selectFood(x) }}>Food is name: {x.name}</li>
            )
        });
        return listItem;
    }

    render() {
        return (
            <ul>{this.createFoodList()}</ul>
        )
    }
}

const mapStateToProps = (state) => ({
    foods: state.foods
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectFood: selectFood }, dispatch);
}


let FoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList);

export default FoodContainer;