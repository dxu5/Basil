import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBarContainer from './navbar/navbar_container'

import SplashPage from "./splash/splash_page";
import LoginFormContainer from "./forms/login_form_container";
import SignupFormContainer from "./forms/signup_form_container";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      {/* <ProtectedRoute path="/home" component /> */}
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={SplashPage} />
      <Redirect to='/home' />
    </Switch>
  </div>
);

export default App;
