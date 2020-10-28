import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMedal, faUtensils, faCheck, faFire, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faUser} />
          <h5>I am</h5>
          <h5>{this.props.user.username}</h5>
        </div>
        <div className="user-stat">
          <FontAwesomeIcon icon={faMedal} />
          <h5>I am level</h5>
          <h5>{`${Math.floor(this.state.completed / 20)} `}</h5>
        </div>
        <div className="user-stat">
          <FontAwesomeIcon icon={faUtensils} />
          <h5>I have made</h5>
          <h5>{this.state.completed}</h5>
          <h5>meals</h5>
        </div>
        <div className="user-stat">
          <FontAwesomeIcon icon={faCheck} />
          <h5>I completed</h5>
          <h5>{`${this.state.completed} %`}</h5>
          <h5>of my meals</h5>
        </div>
        <div className="user-stat">
          <FontAwesomeIcon icon={faHandHoldingHeart} />
          <h5>I averaged</h5>
          <h5>{`${this.state.completed}`}</h5>
          <h5>cal/meal</h5>
        </div>
      </div>
    );
  }
}

export default UserInfo;
