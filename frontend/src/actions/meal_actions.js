import * as MealplanAPIUtil from "../util/spoonacular_api_util";

export const RECEIVE_MEAL_INFO = "RECEIVE_MEAL_INFO";

export const receiveMealInfo = (meal) => {
  return {
    type: RECEIVE_MEAL_INFO,
    meal,
  };
};

export const getMealInfo = (id) => (dispatch) => {
  return MealplanAPIUtil.getMealInfo(id).then((res) => {
    dispatch(receiveMealInfo(res.data));
  });
};
