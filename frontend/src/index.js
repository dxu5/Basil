import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";
import { getMealPlans, addMealPlan } from "./actions/mealplan_actions";
import { getMealInfo } from "./actions/meal_actions";
import { saveMealplan } from "./util/spoonacular_api_util";
import { getUserInfo } from "./actions/session_actions";
import { updateCompletedMeals } from "./util/user_api_util";
// discuss whether to delete
// import './index.css';
// import App from './App';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const user = {
      exp: decodedUser.exp,
      iat: decodedUser.iat,
      id: decodedUser.id,
      username: decodedUser.username,
    };
    const preloadedState = {
      entities: {
        mealplans: {
          currentMealplan: decodedUser.currentMealplan
            ? JSON.parse(decodedUser.currentMealplan)
            : undefined,
          currentMealplanStartTime:
            decodedUser.currentMealplanStartTime || undefined,
        },
      },
      session: { isAuthenticated: true, user },
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById("root");

  window.getMealPlans = getMealPlans;
  window.getMealInfo = getMealInfo;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.saveMealplan = saveMealplan;
  window.addMealPlan = addMealPlan;
  window.getUserInfo = getUserInfo;
  window.updateCompletedMeals = updateCompletedMeals;

  ReactDOM.render(<Root store={store} />, root);
});
