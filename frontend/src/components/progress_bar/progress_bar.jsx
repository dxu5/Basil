import React from "react";
import { Line } from "rc-progress";
import './progress_bar.css'

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  //placeholder for user info
        completed: 20,
        level: 1
    }
  }

  render() {
    const levelUp = 25;
    return (
    <div className="progress-bar-div">
        <div className="progress-bar">
            <Line
            percent={(this.state.completed / levelUp) * 100}
            strokeWidth="1"
            strokeColor="#013328"
            trailWidth="1"
            trailColor="#e3dcd2"
            strokeLinecap="square"
            />
        </div>
        <div className="progress-bar-info">
            {/* {`${Math.floor((1-(this.state.completed/levelUp))*100)}% until level ${this.state.level + 1}`} */}
            <span>{`${levelUp - this.state.completed} more meals until level 
                ${this.state.level + 1}`}</span>
        </div>
    </div>
    );
  }
}

export default ProgressBar;
