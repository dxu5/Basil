import React from 'react';
import { withRouter } from 'react-router-dom';
import './form.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/tweets');
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
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
  
              <input id="input-1"
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                autoFocus
              />
              <label for="input-1">
                <span className="label-text">Email</span>
                <span className="nav-dot"></span>
                <div className="signup-button-trigger">Sign up</div>
              </label>

              <input id="input-2"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <label for="input-2">
                <span className="label-text">Password</span>
                <span className="nav-dot"></span>
              </label>
            
              <button className="btn" type="submit">Sign in</button>
              <p className="tip">Press Tab</p>
            {this.renderErrors()}

        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);