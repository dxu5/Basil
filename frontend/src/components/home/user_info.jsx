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
import { connect } from "react-redux";
// import "./user_info.css";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //placeholder for user info
      viewPortEntered: false,
      completed: this.props.completedMeals,
    };
    this.myCountUp = React.createRef();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.completedMeals !== this.props.completedMeals) {
      this.setState({ completed: this.props.completedMeals });
    }
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
            {/* <h5>I am</h5> */}
            <h4>{this.props.user.username}</h4>
          </div>
          <div className="user-stat">
            <FontAwesomeIcon icon={faMedal} />
            <h5>level</h5>

            <h4>{Math.floor(this.state.completed / 10)}</h4>
          </div>
          <div className="user-stat">
            <FontAwesomeIcon icon={faUtensils} />
            <h5>made</h5>
            <h4>{this.props.completedMeals}</h4>
            <h5>meals</h5>
          </div>
          <div className="user-stat">
            <FontAwesomeIcon icon={faCheck} />
            <h5>completed</h5>
            <h4>{this.props.completedThisWeek} / 21</h4>
            <h5>meals this week</h5>
          </div>
          {/* <div className="user-stat">
            <FontAwesomeIcon icon={faHandHoldingHeart} />
            <h5>I averaged</h5>
            <h4>{this.props.completedMeals}</h4>
            <h5>cal/meal</h5>
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    completedMeals: state.session.user.completedMeals,
    completedThisWeek: countCompleted(
      state.entities.mealplans.completedMealplans
    ),
  };
};

const countCompleted = (week) => {
  let final = 0;
  for (const day in week) {
    final += week[day].length;
  }
  return final;
};

export default connect(mapStateToProps, null)(UserInfo);
