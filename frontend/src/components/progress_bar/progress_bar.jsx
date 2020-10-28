import React from "react";
import { Line } from "rc-progress";
import "./progress_bar.css";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.user.completedMeals,
    };
  }

  render() {
    const levelUp = 10;
    const level = Math.floor(this.state.completed / levelUp);
    let basils = [...Array(level).keys()].map((lvl) => {
      return <img key={lvl} src={`/images/basilLevel4.png`} />;
    });
    const basilLevel =
      Math.ceil((this.state.completed - level * levelUp) / (levelUp / 4)) % 5;
    return (
      <div className="progress-bar-div">
        <div className="progress-bar-head">
          <h2>Welcome back, {this.props.user.username}</h2>
          <h3>Cook meals to grow your basils</h3>
        </div>
        <div className="grow-basil">
          {basils}
          <img src={`/images/basilLevel${basilLevel}.png`} />
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <Line
              percent={((this.state.completed % levelUp) / levelUp) * 100}
              strokeWidth="1"
              strokeColor="#013328"
              strokeLinecap="round"
              trailWidth="1"
              trailColor="#ffffff"
            />
          </div>
          <div className="progress-bar-info">
            {/* {`${Math.floor((1-(this.state.completed/levelUp))*100)}% until level ${this.state.level + 1}`} */}
            <span>{`${
              levelUp - (this.state.completed % levelUp)
            } more meals until level 
                ${Math.floor(this.state.completed / levelUp) + 1}`}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
