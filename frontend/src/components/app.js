import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBarContainer from "./navbar/navbar_container";

import SplashPage from "./splash/splash_page";
import LoginFormContainer from "./forms/login_form_container";
import SignupFormContainer from "./forms/signup_form_container";
import HomeContainer from "./home/home_container";
import MealPlanContainer from "./forms/mealplan_container";
import PreviewCalendarContainer from "./preview_calendar/preview_calendar";
import ShowContainer from "./show/show_container";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/test" component={PreviewCalendarContainer} />
      <ProtectedRoute path="/home" component={HomeContainer} />
      <ProtectedRoute path="/mealplan" component={MealPlanContainer} />
      <ProtectedRoute path="/meal/:mealId" component={ShowContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={SplashPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
