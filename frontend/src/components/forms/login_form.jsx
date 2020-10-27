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
  }


  componentWillReceiveProps(nextProps) {
    // debugger
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

  componentDidUpdate(prevProps){
    if(prevProps.errors !== this.props.errors){
      if(this.state.errors["username"]){  
        this.username.current.focus();
        // this.username.current.blur();
      }else{
        if(this.state.errors["password"]){
          this.password.current.focus();
        }
      }
    }    
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
          />
          <label for="input-1">
            <span className="label-text">Username</span>
            <span className="nav-dot"></span>
            <div className="signup-button-trigger">Log in</div>
            {this.state.errors["username"] ? <div className="error-text">
              {this.state.errors["username"]}
          </div> : null}
          </label>

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
            {this.state.errors["password"] ? <div className="error-text">
              {this.state.errors["password"]}
          </div> : null}
          </label>


          <button className="btn" type="submit">Sign in</button>
          <p className="tip">Press Tab</p>
          <div className="signup-button">Log in</div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);