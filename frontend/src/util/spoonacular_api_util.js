import axios from "axios";

export const apiBaseURL = "https://api.spoonacular.com";

//details can include:
//target calories (api will get as close to this value DAILY)
//diet (there is a list on spoonacular)
//exclude (comma separated list of lowercase ingredients)

export const getWeeklyMealPlan = (details) => {
  return axios.get(`${apiBaseURL}/mealplanner/generate`, {
    params: {
      ...details,
      timeFrame: "week",
      apiKey: "9b2746dcbbd44a4485d1cb4138c48307",
    },
  });
};

//takes in a meal id and serves over 500 lines of information for the meal,
//including ingredients, instructions, equipment, pictures

export const getMealInfo = (mealId) => {
  return axios.get(`${apiBaseURL}/recipes/${mealId}/information`, {
    params: {
      apiKey: "9b2746dcbbd44a4485d1cb4138c48307",
    },
  });
};

export const saveMealplan = (mealplan) => {
  const strMealplan = JSON.stringify(mealplan);
  return axios({
    method: "PATCH",
    url: "/api/users/mealplan",
    data: {
      mealplan: strMealplan,
    },
  });
};
