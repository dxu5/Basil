import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMedal, faUtensils, faCheck, faFire, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
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
        <div className="user-info-head">
          <h2>A glance at your progress</h2>
          <h3>Keep up these amazing records</h3>
        </div>
        <div className="user-stat-container">
          <div className="user-stat">
            <FontAwesomeIcon icon={faUser} />
            <h5>I am</h5>
            <h4>{this.props.user.username}</h4>
          </div>
          <div className="user-stat">
            <FontAwesomeIcon icon={faMedal} />
            <h5>I am level</h5>
            <h4>
              <CountUp
                start={0}
                end={Math.floor(this.state.completed / 10)}
                duration={3}
                delay={1}
              />
            </h4>
          </div>
          <div className="user-stat">
            <FontAwesomeIcon icon={faUtensils} />
            <h5>I have made</h5>
            <h4>
              <CountUp
                start={0}
                end={this.state.completed}
                duration={3}
                delay={1}
              />
            </h4>
            <h5>meals</h5>
          </div>
          <div className="user-stat">
            <FontAwesomeIcon icon={faCheck} />
            <h5>I completed</h5>
            <h4>
              <CountUp
                start={0}
                end={this.state.completed}
                duration={3}
                delay={1}
              />
              %
            </h4>
            <h5>of my meals</h5>
          </div>
          <div className="user-stat">
            <FontAwesomeIcon icon={faHandHoldingHeart} />
            <h5>I averaged</h5>
            <h4>
              <CountUp
                start={0}
                end={this.state.completed}
                duration={3}
                delay={1}
              />
            </h4>
            <h5>cal/meal</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
