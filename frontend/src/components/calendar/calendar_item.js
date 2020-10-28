import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


class CalendarItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        
    }

    render() {
        // debugger
        return(
            <div className={`meal-${this.props.mealNum}`}>
                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/${this.props.id}-636x393.${this.props.imageType}`}/></div>
                <div className='meal-description'>
                    <div className='check-icon'><FontAwesomeIcon icon={faCheck} /></div>
                    <p className='meal-title'>{this.props.title}</p>
                    <p className='meal-time'>{this.props.readyInMinutes} minutes</p>
                </div>
                <button id='complete-btn' onClick={this.handleClick}>Completed?</button>
            </div>
        )
    }
}

export default CalendarItem