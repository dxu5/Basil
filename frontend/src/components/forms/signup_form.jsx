import React from "react";
import { withRouter } from "react-router-dom";
import "./form.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: "",
      errors: {},
    };
    this.username = React.createRef();
    this.password = React.createRef();
    this.password2 = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  // componentDidMount(){
  //   this.password.current.focus()
  // }
  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      if (this.state.errors["username"]) {
        this.username.current.focus();
        // this.username.current.blur();
      } else {
        if (this.state.errors["password"]) {
          this.password.current.focus();
        } else if (this.state.errors["password2"]) {
          this.password2.current.focus();
        }
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/home");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

  render() {
    return (
      <div>
        <div className="signup-background"></div>
        <div className="form-container">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              className="auth-input"
              id="input-1"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
              ref={this.username}
            />

            <label for="input-1">
              <span className="label-text">Username</span>
              <span className="nav-dot"></span>
              <div className="signup-button-trigger">Sign up</div>
              {this.state.errors["username"] ? (
                <div className="error-text">
                  {this.state.errors["username"]}
                </div>
              ) : null}
            </label>

            <input
              className="auth-input"
              id="input-2"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              ref={this.password}
              placeholder="Password"
            />
            <label for="input-2">
              <span className="label-text">Password</span>
              <span className="nav-dot"></span>
              {this.state.errors["password"] ? (
                <div className="error-text">
                  {this.state.errors["password"]}
                </div>
              ) : null}
            </label>

            <input
              className="auth-input"
              id="input-3"
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              ref={this.password2}
            />

            <label for="input-3">
              <span className="label-text">Confirm Password</span>
              <span className="nav-dot"></span>
              {this.state.errors["password2"] ? (
                <div className="error-text">
                  {this.state.errors["password2"]}
                </div>
              ) : null}
            </label>

            <button className="btn" type="submit">
              Signup
            </button>
            <p className="tip">Press Tab</p>
            <div className="signup-button">Get started</div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
