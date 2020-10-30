import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import * as UserAPIUtil from '../../util/user_api_util'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CalendarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false
        }

        this.handleComplete = this.handleComplete.bind(this);
        this.handleUndo = this.handleUndo.bind(this);
        this.displayIcon = this.displayIcon.bind(this);
        this.displayCompleteButton = this.displayCompleteButton.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        let bool;
        if (Object.keys(prevProps.completedMeals).length === 0 && 
            Object.keys(this.props.completedMeals).length !== 0) {
            
                if (this.props.completedMeals[this.props.day]) {
                    bool = this.props.completedMeals[this.props.day].includes(this.props.id) ? true : false;
                    this.setState({completed: bool})
                }
        }
    }

    componentDidMount() {
        let bool;
        if (this.props.completedMeals[this.props.day]) {
                bool = this.props.completedMeals[this.props.day].includes(this.props.id) ? true : false;
                this.setState({completed: bool})
        }
    }

    handleUndo(e) {
        e.preventDefault();

        let completedMeal = `{"weekday": "${this.props.day}", "mealId": ${this.props.id}, "completed": ${false}}`;
        let parsedMeal = JSON.parse(completedMeal);
        const weekday = parsedMeal['weekday']

        let modifiedCompletedMeals = JSON.parse(JSON.stringify(this.props.completedMeals));

        if(!modifiedCompletedMeals[weekday]){
            modifiedCompletedMeals[weekday] = [];
        }

        if(parsedMeal['completed']){
            modifiedCompletedMeals[weekday].push(parsedMeal['mealId']) ;
        }
        else{
            modifiedCompletedMeals[weekday] = modifiedCompletedMeals[weekday].filter(id => id !== parsedMeal['mealId'])
        }
        

        this.setState({completed: false})
        UserAPIUtil.updateCompletedMeals(modifiedCompletedMeals, this.props.completedMealCount - 1)
        this.props.receiveCompletedMeal(this.props.completedMealCount - 1, completedMeal)
    }

    handleComplete(e) {
        e.preventDefault();
        
        let completedMeal = `{"weekday": "${this.props.day}", "mealId": ${this.props.id}, "completed": ${true}}`;
        let parsedMeal = JSON.parse(completedMeal);
        const weekday = parsedMeal['weekday']

        let modifiedCompletedMeals = JSON.parse(JSON.stringify(this.props.completedMeals));
        if(!modifiedCompletedMeals[weekday]){
            modifiedCompletedMeals[weekday] = [];
        }
        
        if(parsedMeal['completed']){
            modifiedCompletedMeals[weekday].push(parsedMeal['mealId']) ;
        }
        else{
            modifiedCompletedMeals[weekday] = modifiedCompletedMeals[weekday].filter(id => id !== parsedMeal['mealId'])
        }
        
        this.setState({completed: true})
        UserAPIUtil.updateCompletedMeals(modifiedCompletedMeals, this.props.completedMealCount + 1)
        this.props.receiveCompletedMeal(this.props.completedMealCount + 1, completedMeal)
    }

    displayIcon() {
        return this.state.completed ? <div className='check-icon'><FontAwesomeIcon icon={faCheck} /></div> : null
    }

    displayCompleteButton() {
        if (this.props.futureDays.includes(this.props.day)) {
            return null;
        } else if (this.state.completed) {
            return <button id='complete-btn' onClick={this.handleUndo}>Undo</button>;
        } else {
            return <button id='complete-btn' onClick={this.handleComplete}>Complete?</button>;
        }
    }

    render() {
        return(
            <div className={`meal-${this.props.mealNum}`}>
                <Link to={`/meal/${this.props.id}`}>
                    <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/${this.props.id}-636x393.${this.props.imageType}`}/></div>
                    <div className='meal-description'>
                        {this.displayIcon()}
                        <p className='meal-title'>{this.props.title}</p>
                        <p className='meal-time'>{this.props.readyInMinutes} minutes</p>
                    </div>
                </Link>
                {this.displayCompleteButton()}
            </div>
        )
    }
}


const mSTP = (state) => {
    return {
        completedMeals: state.entities.mealplans.completedMealplans,
        completedMealCount: state.session.user.completedMeals,
    }
}

export default connect(mSTP, null)(CalendarItem)