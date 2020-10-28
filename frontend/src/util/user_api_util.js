import axios from "axios";

export const updateCompletedMeals = (completedMeals) => {
    return axios({
        method: "PATCH",
        url: "/api/users/completedMeals",
        data: {
            updatedCompletedMeals: completedMeals,
        }
    })
}

// replace entire completedMeals object in database with object string input