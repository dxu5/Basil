import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

import SplashPage from "./splash/splash_page";
import LoginFormContainer from "./forms/login_form_container";
import SignupFormContainer from "./forms/signup_form_container";
import HomeContainer from "./home/home_container"

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>
      <ProtectedRoute path="/home" component={HomeContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
