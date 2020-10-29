import React, { Component } from "react";

export default class PreviewCalendarItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`meal-${this.props.mealNum}`}>
        <div className="meal-img">
          <img
            src={`https://spoonacular.com/recipeImages/${this.props.id}-636x393.${this.props.imageType}`}
          />
        </div>
        <div className="meal-description">
          <p className="meal-title">{this.props.title}</p>
          <p className="meal-time">{this.props.readyInMinutes} minutes</p>
        </div>
      </div>
    );
  }
}
