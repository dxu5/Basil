import {
  RECEIVE_MEAL_PLAN,
  RECEIVE_NEW_MEAL_PLAN,
} from "../actions/mealplan_actions";
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_INFO_HOME,
} from "../actions/session_actions";
import {
  RECEIVE_COMPLETED_MEAL
} from "../actions/user_actions"

const _nullState = {
  currentMealplan: undefined,
  completedMealplans: {},
  prospectiveMealplan: undefined,
  currentMealplanStartTime: undefined,
};

const mealplansReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MEAL_PLAN:
      newState.prospectiveMealplan = action.mealplan;
      return newState;
    case RECEIVE_CURRENT_USER:
      if (action.currentUser.currentMealplan) {
        newState.currentMealplan = JSON.parse(
          action.currentUser.currentMealplan
        );
      }
      if (action.currentUser.currentMealplanStartTime) {
        newState.currentMealplanStartTime =
          action.currentUser.currentMealplanStartTime;
      }
      return newState;
    case RECEIVE_NEW_MEAL_PLAN:
      if (action.mealplan.currentMealplan) {
        newState.currentMealplan = JSON.parse(action.mealplan.currentMealplan);
      }
      if (action.mealplan.currentMealplanStartTime) {
        newState.currentMealplanStartTime =
          action.mealplan.currentMealplanStartTime;
      }
      return newState;
    case RECEIVE_USER_INFO_HOME:
      if (action.user.currentMealplan) {
        newState.currentMealplan = JSON.parse(action.user.currentMealplan);
      }
      if (action.user.currentMealplanStartTime) {
        newState.currentMealplanStartTime =
          action.user.currentMealplanStartTime;
      }
      if (action.user.completedMealplans) {
        newState.completedMealplans = action.user.completedMealplans;
      }
      return newState;
    case RECEIVE_COMPLETED_MEAL:
      const mealCompletedObj = JSON.parse(action.completedMealInfo)
      const weekday = mealCompletedObj['weekday']
      if(!newState.completedMealplans[weekday]){
        newState.completedMealplans[weekday] = [];
      }
      if(mealCompletedObj['completed']){
        newState.completedMealplans[weekday].push(mealCompletedObj['mealId']) ;
      }
      else{
        newState.completedMealplans[weekday] = newState.completedMealplans[weekday].filter(id => id !== mealCompletedObj['mealId'])
      }
      return newState;
    case RECEIVE_USER_LOGOUT:
      return _nullState;
    default:
      return state;
  }
};

export default mealplansReducer;
