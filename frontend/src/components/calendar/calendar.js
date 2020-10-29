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
          const currentDay = days[weekday.getDay()];
          const pastDays = days.slice(0, weekday.getDay());

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
    return days.slice(weekday.getDay() + 1);
  }

  componentDidMount() {
    if (this.props.mealPlan) {
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
          const currentDay = days[weekday.getDay()];
          const pastDays = days.slice(0, weekday.getDay());

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
          Create a mealplan!
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
        <div className="calendar-container">
          {/* <div className='table-responsive'> */}
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
          {/* </div> */}
        </div>
      );
    }
  }
}

export default Calendar;
