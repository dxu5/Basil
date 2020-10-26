import axios from "axios";

export const apiBaseURL = "https://api.spoonacular.com";

export const getWeeklyMealPlan = (params) => {
  return axios.get(`${apiBaseURL}/mealplanner/generate`, {
    headers: {
      ...params,
      timeFrame: "week",
      apiKey: "9b2746dcbbd44a4485d1cb4138c48307",
    },
  });
};
