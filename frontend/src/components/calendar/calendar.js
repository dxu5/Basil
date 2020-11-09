import React from "react";
import CalendarItem from "./calendar_item";
import "./calendar.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Monday: null,
      Tuesday: null,
      Wednesday: null,
      Thursday: null,
      Friday: null,
      Saturday: null,
      Sunday: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.getFutureDays = this.getFutureDays.bind(this);
  }

  //need to handle click link to meal plan form
  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/mealplan");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentMealPlanTime !== this.props.currentMealPlanTime) {
      this.setState(
        {
          Monday: this.props.mealPlan.week.monday,
          Tuesday: this.props.mealPlan.week.tuesday,
          Wednesday: this.props.mealPlan.week.wednesday,
          Thursday: this.props.mealPlan.week.thursday,
          Friday: this.props.mealPlan.week.friday,
          Saturday: this.props.mealPlan.week.saturday,
          Sunday: this.props.mealPlan.week.sunday,
        },
        () => {
          const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          const weekday = new Date();
          const startDay = new Date(this.props.currentMealPlanTime);
          const currentDay = days[weekday.getDay()];
          const pastDays = days.slice(startDay, weekday.getDay());

          pastDays.forEach((day) => {
            if (document.getElementById(day)) {
              document.getElementById(day).classList.add("past");
            }
          });

          if (document.getElementById(currentDay)) {
            document.getElementById(currentDay).classList.add("current");
          }
        }
      );
    }
  }

  getFutureDays() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const weekday = new Date();
    const startDay = new Date(this.props.currentMealPlanTime).getDay();
    return days.slice(0, startDay).concat(days.slice(weekday.getDay() + 1));
  }

  componentDidMount() {
    
    let today = new Date();

    if (((today - new Date(this.props.currentMealPlanTime) )/ 1000 ) > (604800) ) {
      this.props.clearCurrentMealPlan();
    } else if (this.props.mealPlan && Object.keys(this.props.mealPlan).length > 0) {
      this.setState(
        {
          Monday: this.props.mealPlan.week.monday,
          Tuesday: this.props.mealPlan.week.tuesday,
          Wednesday: this.props.mealPlan.week.wednesday,
          Thursday: this.props.mealPlan.week.thursday,
          Friday: this.props.mealPlan.week.friday,
          Saturday: this.props.mealPlan.week.saturday,
          Sunday: this.props.mealPlan.week.sunday,
        },
        () => {
          const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          const weekday = new Date();
          const startDay = new Date(this.props.currentMealPlanTime).getDay();
          const currentDay = days[weekday.getDay()];
          const pastDays = days.slice(startDay, weekday.getDay());

          pastDays.forEach((day) => {
            if (document.getElementById(day)) {
              document.getElementById(day).classList.add("past");
            }
          });

          if (document.getElementById(currentDay)) {
            document.getElementById(currentDay).classList.add("current");
          }
        }
      );
    }
  }

  render() {
    if (this.state["Monday"] === null) {
      return (
        <button
          className="create-meal-btn"
          style={{ outline: "none" }}
          onClick={this.handleClick}
        >
          Create a mealplan
        </button>
      );
    } else {
      const displayMeal = (field) =>
        this.state[field].meals.map((meal, idx) => {
          return (
            <CalendarItem
              key={meal.id}
              futureDays={this.getFutureDays()}
              id={meal.id}
              day={field}
              imageType={meal.imageType}
              title={meal.title}
              readyInMinutes={meal.readyInMinutes}
              mealNum={idx}
              // completedMealCount={this.props.completedMealCount}
              receiveCompletedMeal={this.props.receiveCompletedMeal}
            />
          );
        });

      return (
        <div>
          <div className="calendar-container">
            <table className="table">
              <div className="day-container">
                <p id="Sunday">Sunday</p>
                {displayMeal("Sunday")}
              </div>
              <div className="day-container">
                <p id="Monday">Monday</p>
                {displayMeal("Monday")}
              </div>
              <div className="day-container">
                <p id="Tuesday">Tuesday</p>
                {displayMeal("Tuesday")}
              </div>
              <div className="day-container">
                <p id="Wednesday">Wednesday</p>
                {displayMeal("Wednesday")}
              </div>
              <div className="day-container">
                <p id="Thursday">Thursday</p>
                {displayMeal("Thursday")}
              </div>
              <div className="day-container">
                <p id="Friday">Friday</p>
                {displayMeal("Friday")}
              </div>
              <div className="day-container">
                <p id="Saturday">Saturday</p>
                {displayMeal("Saturday")}
              </div>
            </table>
          </div>
          <div className="center-div">
            <div className="regenerate-text">
              Don't Like Your Current Mealplan?
            </div>
            <button
              className="create-meal-btn"
              style={{ outline: "none" }}
              onClick={this.handleClick}
            >
              Generate a new mealplan
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Calendar;
