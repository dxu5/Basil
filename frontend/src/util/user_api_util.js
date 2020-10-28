import axios from "axios";

export const updateCompletedMeals = (completedMealIds, completedMeals) => {
    const strCompletedMealIds = JSON.stringify(completedMealIds)
    return axios({
        method: "PATCH",
        url: "/api/users/completedMeals",
        data: {
            updatedCompletedMealIds: strCompletedMealIds,
            updatedCompletedMeals: completedMeals,
        }
    })
}

// replace entire completedMeals object in database with object string input