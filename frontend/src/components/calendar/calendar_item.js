import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


class CalendarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.displayIcon = this.displayIcon.bind(this);
        this.displayCompleteButton = this.displayCompleteButton.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let bool = this.state.completed
        this.setState({completed: !bool})
    }

    displayIcon() {
        return this.state.completed ? <div className='check-icon'><FontAwesomeIcon icon={faCheck} /></div> : null
    }

    displayCompleteButton() {
        if (this.props.futureDays.includes(this.props.day)) {
            return null;
        } else if (this.state.completed) {
            return <button id='complete-btn' onClick={this.handleClick}>Undo</button>;
        } else {
            return <button id='complete-btn' onClick={this.handleClick}>Complete?</button>;
        }
    }

    render() {
        return(
            <div className={`meal-${this.props.mealNum}`}>
                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/${this.props.id}-636x393.${this.props.imageType}`}/></div>
                <div className='meal-description'>
                    {this.displayIcon()}
                    <p className='meal-title'>{this.props.title}</p>
                    <p className='meal-time'>{this.props.readyInMinutes} minutes</p>
                </div>
                {this.displayCompleteButton()}
            </div>
        )
    }
}

export default CalendarItem