import React from 'react';
import { withRouter } from 'react-router-dom';
import './form.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      errors: {}
    };
    this.password = React.createRef()
    this.username= React.createRef()
    this.password2 = React.createRef()
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  // componentDidMount(){
  //   this.password.current.focus()
  // }

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
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
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
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input id="input-1" type="text"
            value={this.state.username}
            onChange={this.update('username')}
            placeholder="Username"
          />

          <label for="input-1">
            <span className="label-text">Username</span>
            <span className="nav-dot"></span>
            <div className="signup-button-trigger">Sign up</div>
          </label>
        
          <input id="input-2"
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            ref={this.password}
            // placeholder="Password"
            placeholder="Password"
          />
          <label for="input-2">
            <span className="label-text">Password</span>
            <span className="nav-dot"></span>
          </label>
        
          <input id="input-3"
            type="password"
            value={this.state.password2}
            onChange={this.update('password2')}
            // placeholder="Confirm Password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />

          <label for="input-3">
            <span className="label-text">Confirm Password</span>
            <span className="nav-dot"></span>
          </label>
            
          {/* <input type="submit" value="Submit" /> */}
          <button className="btn" type="submit">Create your Account</button>
          <p className="tip">Press Tab</p>
          <div className="signup-button">Sign up</div>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);