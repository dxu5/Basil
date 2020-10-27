import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout()
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className='navbar-links'>
                <a class="nav-link" href="#"><Link to={'/home'}>Home</Link></a>
                <a class="nav-link" href="#"><Link to={'/profile'}>Profile</Link></a>
                <a class="nav-link" href="#"><div onClick={this.logoutUser}>Logout</div></a>
            </div>
        );
      } else {
        return (
            <div className='navbar-links'>
                <a class="nav-link" href="#"><Link to={'/signup'}>Signup</Link></a>
                <a class="nav-link" href="#"><Link to={'/login'}>Login</Link></a>
            </div>
        );
      }
  }

  render() {
      return (
        <div className='container'>
            <nav className='navbar fixed-top'>
                <a class="navbar-brand" href="#"><img src="/logoDark.png"/></a>
                { this.getLinks() }
            </nav>
        </div>
      );
  }
}

export default NavBar;