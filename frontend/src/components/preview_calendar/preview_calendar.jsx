import React, { Component } from "react";

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
    return <div>Test Calendar</div>;
  }
}
