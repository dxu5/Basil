import React, { Component } from "react";
import PreviewCalendarItem from "./preview_calendar_item.jsx";

export default class PreviewCalendar extends Component {
  constructor(props) {
    super(props);
    if (Object.keys(this.props.previewMealplan).length > 0) {
      this.state = {
        Monday: this.props.previewMealplan.week.monday,
        Tuesday: this.props.previewMealplan.week.tuesday,
        Wednesday: this.props.previewMealplan.week.wednesday,
        Thursday: this.props.previewMealplan.week.thursday,
        Friday: this.props.previewMealplan.week.friday,
        Saturday: this.props.previewMealplan.week.saturday,
        Sunday: this.props.previewMealplan.week.sunday,
      };
    }
  }

  render() {
    if (Object.keys(this.props.previewMealplan).length === 0) {
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
