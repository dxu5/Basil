import React from "react";
// import "./user_info.css";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //placeholder for user info
      completed: 123,
    };
  }

  render() {
    return (
      <div className="user-info-div">
        <div className="user-stat">
          <h5>I am</h5>
          <h5>{this.props.user.username}</h5>
        </div>
        <div className="user-stat">
          <h5>I am level</h5>
          <h5>{`${Math.floor(this.state.completed/20)} `}</h5>
        </div>
        <div className="user-stat">
          <h5>I have made</h5>
          <h5>{`${this.state.completed} meals`}</h5>
        </div>
        <div className="user-stat">
          <h5>I completed</h5>
          <h5>{`${this.state.completed} % of my meals`}</h5>
        </div>
        <div className="user-stat">
          <h5>I averaged</h5>
          <h5>{`${this.state.completed} cal/meal`}</h5>
        </div>

      </div>
    );
  }
}

export default UserInfo;
