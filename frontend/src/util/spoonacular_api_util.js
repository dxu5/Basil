import axios from "axios";

export const apiBaseURL = "https://api.spoonacular.com";

export const getWeeklyMealPlan = (details) => {
  return axios.get(`${apiBaseURL}/mealplanner/generate`, {
    params: {
      ...details,
      timeFrame: "week",
      apiKey: "9b2746dcbbd44a4485d1cb4138c48307",
    },
  });
};

export const getMealInfo = (mealId) => {
  return axios.get(`${apiBaseURL}/recipes/${mealId}/information`, {
    params: {
      apiKey: "9b2746dcbbd44a4485d1cb4138c48307",
    },
  });
};
