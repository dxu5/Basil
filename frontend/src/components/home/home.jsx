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
        <section className="header">
          <div className="ptext-home-page">
            {/* <span className="border"> */}
            <img src="/logoDark.png" />
            {/* </span> */}
          </div>
          <h2>Welcome back, {this.props.user.username}</h2>
        </section>
        <section className="progress">
          <ProgressBarContainer />
        </section>
        <div className="pimg1-home"></div>
        <section className="user-info">
          <UserInfo user={this.props.user} />
        </section>
        <div className="pimg2-home"></div>
        <section className="calendar">
          <h3 className="calendar-intro">Check out your meals for the week.</h3>
          <CalendarContainer />
        </section>
        <div className="pimg3-home"></div>
      </div>
    );
  }
}

export default Home;
