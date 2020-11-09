import axios from "axios";

export const updateCompletedMeals = (completedMealplans, completedMeals) => {
  const strCompletedMealplans = JSON.stringify(completedMealplans);
  return axios.patch(
    "/api/users/completedMeals",
    {
      updatedCompletedMealplans: strCompletedMealplans,
      updatedCompletedMeals: completedMeals,
    },
    {
      headers: { Authorization: localStorage.jwtToken },
    }
  );
  // return axios({
  //     method: "PATCH",
  //     url: "/api/users/completedMeals",
  //     data: {
  //         updatedCompletedMealplans: strCompletedMealplans,
  //         updatedCompletedMeals: completedMeals,
  //     }
  // })
};

// replace entire completedMeals object in database with object string input
