import axios from "axios";

export const apiBaseURL = "https://api.spoonacular.com";

export const getWeeklyMealPlan = (params) => {
  return axios({
    method: "GET",
    headers: {
      ...params,
      apiKey: "9b2746dcbbd44a4485d1cb4138c48307",
    },
    url: `${apiBaseURL}/mealplanner/generate`,
  });
};
