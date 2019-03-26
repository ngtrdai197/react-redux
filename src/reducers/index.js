import FoodReducer from './foods.reducer';
import ActiveFoodReducer from './active-food-reducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    foods: FoodReducer,
    activeFood: ActiveFoodReducer
});

export default allReducers;
