export const RECEIVE_COMPLETED_MEAL = "RECEIVE_COMPLETED_MEAL";

export const receiveCompletedMeal = (completedMeals, mealID) => {
    return {
        type: RECEIVE_COMPLETED_MEAL,
        completedMeals,
        mealID
    }
}