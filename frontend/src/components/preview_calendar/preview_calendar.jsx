import React, { Component } from "react";
import PreviewCalendarItem from "./preview_calendar_item.jsx";

export default class PreviewCalendar extends Component {
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
  }

  componentDidMount() {
    if (this.props.previewMealplan !== undefined) {
      this.setState({
        Monday: this.props.mealPlan.week.monday,
        Tuesday: this.props.mealPlan.week.tuesday,
        Wednesday: this.props.mealPlan.week.wednesday,
        Thursday: this.props.mealPlan.week.thursday,
        Friday: this.props.mealPlan.week.friday,
        Saturday: this.props.mealPlan.week.saturday,
        Sunday: this.props.mealPlan.week.sunday,
      });
    }
  }

  render() {
    if (this.props.previewMealplan === undefined) {
      return null;
    }
    const displayMeal = (field) =>
      this.state[field].meals.map((meal, idx) => {
        return (
          <PreviewCalendarItem
            key={meal.id}
            id={meal.id}
            day={field}
            imageType={meal.imageType}
            title={meal.title}
            readyInMinutes={meal.readyInMinutes}
            mealNum={idx}
          />
        );
      });
    return (
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
    );
  }
}
