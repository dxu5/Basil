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
    }

    handleClick(e) {
        e.preventDefault();
        let bool = this.state.completed
        this.setState({completed: !bool})
    }

    render() {
        // debugger
        let completeIcon = this.state.completed ? <div className='check-icon'><FontAwesomeIcon icon={faCheck} /></div> : null;
        let uncompleteBtn = this.state.completed ? <button id='complete-btn' onClick={this.handleClick}>Undo</button> : <button id='complete-btn' onClick={this.handleClick}>Complete?</button>;
        return(
            <div className={`meal-${this.props.mealNum}`}>
                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/${this.props.id}-636x393.${this.props.imageType}`}/></div>
                <div className='meal-description'>
                    {completeIcon}
                    <p className='meal-title'>{this.props.title}</p>
                    <p className='meal-time'>{this.props.readyInMinutes} minutes</p>
                </div>
                {uncompleteBtn}
            </div>
        )
    }
}

export default CalendarItem