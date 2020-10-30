import React, { Component } from "react";

export default class PreviewCalendarItem extends Component {
  constructor(props) {
    super(props);
  }
  handleTitle() {
    let title = this.props.title;
    if (title.length > 30) {
      return title.slice(0, 27).concat("...");
    } else {
      return title;
    }
  }
  render() {
    return (
      <div className={`meal-${this.props.mealNum}-preview`}>
        <div className="meal-img">
          <img
            src={`https://spoonacular.com/recipeImages/${this.props.id}-636x393.${this.props.imageType}`}
          />
        </div>
        <div className="meal-description">
          <p className="meal-title">{this.handleTitle()}</p>
          <p className="meal-time">{this.props.readyInMinutes} minutes</p>
        </div>
      </div>
    );
  }
}
