import React from "react";
import ProgressBarContainer from "../progress_bar/progress_bar_container";
import CalendarContainer from "../calendar/calendar_container";
import UserInfo from "./user_info";
import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    return (
      <div className="home">
        <section className="progress">
          <ProgressBarContainer />
        </section>
        <section className="user-info">
          <UserInfo user={this.props.user} />
        </section>
        <section className="calendar">
          <h3 className="calendar-intro">Check Out Your Meals For The Week</h3>
          <CalendarContainer />
        </section>
      </div>
    );
  }
}

export default Home;
