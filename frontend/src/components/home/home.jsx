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
    document.querySelector(".home").scrollIntoView();
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
        <div className="pimg1-home">
          <p className="quote">
            "Basil stands out as a differentiator amongst the hundreds of
            mealplan apps because of its inclusivity of all different types of
            diets and restrictions."
            <span id="line-break"></span>-Lisa Lam (Co-founder)
          </p>
        </div>
        <section className="user-info">
          <UserInfo user={this.props.user} />
        </section>
        <div className="pimg2-home">
          <p className="quote">
            "I tried many mealplan apps and my biggest complaints were that
            there were too many options and none of the meals were appetizing. I
            know I'm not the only one who experienced this. Hence, the genesis
            of Basil."
            <span id="line-break"></span>-Nate Oh (Co-founder)
          </p>
        </div>
        <section className="calendar">
          <h3 className="calendar-intro">Check out your meals for the week.</h3>
          <CalendarContainer />
        </section>
        <div className="pimg3-home">
          <p className="quote">
            "We would never sell a product we wouldn't use ourselves. Our team
            has found great success in our individual goals. We hope you love it
            as much as we do. This couldn't have been accomplished without your
            support. Thank you!"
            <span id="line-break"></span>-Basil Team
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
