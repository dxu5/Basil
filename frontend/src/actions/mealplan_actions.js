import * as MealplanAPIUtil from "../util/spoonacular_api_util";

export const RECEIVE_MEAL_PLAN = "RECEIVE_MEAL_PLAN";
export const RECEIVE_MEAL_INFO = "RECEIVE_MEAL_INFO";

export const receiveMealPlan = (mealplan) => {
  return {
    type: RECEIVE_MEAL_PLAN,
    mealplan,
  };
};

export const receiveMealInfo = (meal) => {
  return {
    type: RECEIVE_MEAL_INFO,
    meal,
  };
};

export const getMealPlans = (details) => (dispatch) => {
  return MealplanAPIUtil.getWeeklyMealPlan(details).then((res) => {
    dispatch(receiveMealPlan(res.data));
  });
};

export const getMealInfo = (id) => (dispatch) => {
  return MealplanAPIUtil.getMealInfo(id).then((res) => {
    dispatch(receiveMealInfo(res.data));
  });
};
