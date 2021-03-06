import React from "react";
import { Line } from "rc-progress";
import "./progress_bar.css";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.completedMeals,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.completedMeals !== this.props.completedMeals) {
      this.setState({ completed: this.props.completedMeals });
    }
  }

  render() {
    if (this.props.completedMeals === undefined) {
      return null;
    }
    const levelUp = 10;
    const level = Math.floor(this.state.completed / levelUp);
    // let basils = [...Array(level).keys()].map((lvl) => {
    //   return ;
    // });
    let basils = [];
    for (let i = 0; i < level; i++) {
      basils.push(<img key={i} src={`/images/basilLevel4.png`} />);
    }
    const basilLevel =
      Math.ceil((this.state.completed - level * levelUp) / (levelUp / 4)) % 5;
    return (
      <div className="progress-bar-div">
        <div className="progress-bar-head">
          <h3>Complete your meals and watch the garden grow!</h3>
        </div>
        <div className="grow-basil">
          {basils}
          <img
            src={`/images/basilLevel${basilLevel}.png`}
            className="grow-basil-small"
          />
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <Line
              percent={((this.state.completed % levelUp) / levelUp) * 100}
              strokeWidth="1"
              strokeColor="#013328"
              strokeLinecap="round"
              trailWidth="1"
              trailColor="lightgray"
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
