import React from 'react';
import { withRouter } from 'react-router-dom';
import './form.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };
    this.username= React.createRef()
    this.password = React.createRef()
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/home');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {

    // Username field is required
    // Password field is required
    // Incorrect password
    // This user does not exist
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
    // let err;
    // let errBox = <div>
    //   {err}
    // </div>
    // let errs = Object.keys(this.state.errors)
    // if(errs.length === 0){
    //   return null;
    // }
    // if(this.state.errors["username"].length !== 0){
    //   this.username.current.focus();
    //   err = this.state.errors["username"];
    //   return errBox;
    // }
    // if(this.state.errors["password"].length !== 0){
    //   this.password.current.focus();
    //   err = this.state.errors["password"];
    //   return errBox;
    // }
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input id="input-1" type="text"
            value={this.state.username}
            onChange={this.update('username')}
            placeholder="Username"
            ref={this.username}
            // autoFocus
          />
          <label for="input-1">
            
            <span className="label-text">Username</span>
            <span className="nav-dot"></span>
            <div className="signup-button-trigger">Log in</div>
          </label>
          {this.renderErrors()}

          <input id="input-2"
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            ref={this.password}
            placeholder="Password"
          />
          <label for="input-2">
            <span className="label-text">Password</span>
            <span className="nav-dot"></span>
          </label>
          {this.renderErrors()}

          <button className="btn" type="submit">Sign in</button>
          <p className="tip">Press Tab</p>
          <div className="signup-button">Log in</div>
          {/* {this.renderErrors()} */}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);