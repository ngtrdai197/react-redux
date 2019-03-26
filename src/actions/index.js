import SELECT_FOOD from './actionType';

export const selectFood = (food) => {
    console.log(food);
    return {
        type: SELECT_FOOD,
        payload: food
    };
}