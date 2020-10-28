import React from "react";
import { Line } from "rc-progress";
import './progress_bar.css'

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  //placeholder for user info
        completed: 21,
    }
  }

  render() {
    const levelUp = 20;
    const basilLevel = Math.floor(this.state.completed/5) % 5
    return (
    <div className="progress-bar-div">
        <div className="grow-basil">
            <img src={`/images/basilLevel${basilLevel}.jpg`}/>
        </div>
        <div className="progress-bar">
            <Line
            percent={((this.state.completed%levelUp) / levelUp) * 100}
            strokeWidth="1"
            strokeColor="#013328"
            trailWidth="1"
            trailColor="#e3dcd2"
            strokeLinecap="square"
            />
        </div>
        <div className="progress-bar-info">
            {/* {`${Math.floor((1-(this.state.completed/levelUp))*100)}% until level ${this.state.level + 1}`} */}
            <span>{`${levelUp - this.state.completed%levelUp} more meals until level 
                ${Math.floor(this.state.completed/levelUp) + 1}`}</span>
        </div>
    </div>
    );
  }
}

export default ProgressBar;
