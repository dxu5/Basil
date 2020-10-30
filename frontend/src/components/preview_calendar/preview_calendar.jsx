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

  componentDidUpdate(prevProps) {
    if (
      prevProps.previewMealplan.week.monday.meals[0].id !==
      this.props.previewMealplan.week.monday.meals[0].id
    ) {
      this.setState({
        Monday: this.props.previewMealplan.week.monday,
        Tuesday: this.props.previewMealplan.week.tuesday,
        Wednesday: this.props.previewMealplan.week.wednesday,
        Thursday: this.props.previewMealplan.week.thursday,
        Friday: this.props.previewMealplan.week.friday,
        Saturday: this.props.previewMealplan.week.saturday,
        Sunday: this.props.previewMealplan.week.sunday,
      });
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
      <div style={{ marginTop: "2em" }}>
        <div
          className="checkout-text"
          style={{
            textAlign: "center",
            fontSize: "24px",
            color: "black",
            fontWeight: "700",
          }}
        >
          Checkout Your Mealplan Preview!
        </div>
        <div className="preview-calendar" style={{ marginTop: "2em" }}>
          <div className="calendar-container">
            <table className="table">
              <div className="day-container">
                <p className="preview-day" id="Sunday">
                  Sunday
                </p>
                {displayMeal("Sunday")}
              </div>
              <div className="day-container">
                <p className="preview-day" id="Monday">
                  Monday
                </p>
                {displayMeal("Monday")}
              </div>
              <div className="day-container">
                <p className="preview-day" id="Tuesday">
                  Tuesday
                </p>
                {displayMeal("Tuesday")}
              </div>
              <div className="day-container">
                <p className="preview-day" id="Wednesday">
                  Wednesday
                </p>
                {displayMeal("Wednesday")}
              </div>
              <div className="day-container">
                <p className="preview-day" id="Thursday">
                  Thursday
                </p>
                {displayMeal("Thursday")}
              </div>
              <div className="day-container">
                <p className="preview-day" id="Friday">
                  Friday
                </p>
                {displayMeal("Friday")}
              </div>
              <div className="day-container">
                <p className="preview-day" id="Saturday">
                  Saturday
                </p>
                {displayMeal("Saturday")}
              </div>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
