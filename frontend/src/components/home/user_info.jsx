import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMedal,
  faUtensils,
  faCheck,
  faFire,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { connect } from "react-redux";
// import "./user_info.css";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //placeholder for user info
      viewPortEntered: false,
      completed: this.props.user.completedMeals,
    };
    this.myCountUp = React.createRef();
  }

  render() {
    return (
      <div className="user-info-div">
        <div className="user-info-head">
          <h2>By the numbers</h2>
          <h3>Amazing job! Keep the momentum going.</h3>
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
                end={Math.floor(this.state.completed / 10)}
                duration={3}
                delay={1}
                ref={this.myCountUp}
                redraw={true}
                start={this.state.viewPortEntered ? null : 0}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
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
                redraw={true}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
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
                redraw={true}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
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
                redraw={true}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h4>
            <h5>cal/meal</h5>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
  };
};

export default connect(mapStateToProps, null)(UserInfo);
