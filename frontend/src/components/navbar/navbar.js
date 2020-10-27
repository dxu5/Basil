import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { username: "basil", password: "password" };
    this.props.login(demoUser).then(() => this.props.history.push("/home"));
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <nav className="navbar fixed-top navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="/logoDark.png" />
          </a>
          <div className="navbar-links">
            <a class="nav-link" href="#">
              <Link to={"/home"}>Home</Link>
            </a>
            <a class="nav-link" href="#">
              <Link to={"/profile"}>Profile</Link>
            </a>
            <a class="nav-link" href="#">
              <div onClick={this.logoutUser}>Logout</div>
            </a>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar fixed-top">
          <a class="navbar-brand" href="#">
            <img src="/logoDark.png" />
          </a>
          <div className="navbar-links">
            <a class="nav-link" href="#">
              <div onClick={this.handleDemo}>Demo</div>
            </a>
            <a class="nav-link" href="#">
              <Link to={"/signup"}>Signup</Link>
            </a>
            <a class="nav-link" href="#">
              <Link to={"/login"}>Login</Link>
            </a>
          </div>
        </nav>
      );
    }
  }

  render() {
    return <div className="container">{this.getLinks()}</div>;
  }
}

export default NavBar;
