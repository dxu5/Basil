import * as MealplanAPIUtil from "../util/spoonacular_api_util";

export const RECEIVE_MEAL_PLAN = "RECEIVE_MEAL_PLAN";
export const RECEIVE_NEW_MEAL_PLAN = "RECEIVE_NEW_MEAL_PLAN";
export const CLEAR_PROSPECTIVE_MEAL_PLAN = "CLEAR_PROSPECTIVE_MEAL_PLAN";
export const receiveMealPlan = (mealplan) => {
  return {
    type: RECEIVE_MEAL_PLAN,
    mealplan,
  };
};

export const receiveNewMealplan = (mealplan) => {
  return {
    type: RECEIVE_NEW_MEAL_PLAN,
    mealplan,
  };
};

export const clearMealPlan = () => {
  return {
    type: CLEAR_PROSPECTIVE_MEAL_PLAN,
  };
};

export const getMealPlans = (details) => (dispatch) => {
  return MealplanAPIUtil.getWeeklyMealPlan(details).then((res) => {
    dispatch(receiveMealPlan(res.data));
  });
};

export const addMealPlan = (mealplan) => (dispatch) => {
  return MealplanAPIUtil.saveMealplan(mealplan).then((res) => {
    dispatch(receiveNewMealplan(res.data));
  });
};
