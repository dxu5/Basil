import React from 'react';
import CalendarItem from './calendar_item';
import './calendar.css'


class Calendar extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            // Monday: this.props.mealPlan.week.monday,
            // Tuesday: this.props.mealPlan.week.tuesday,
            // Wednesday: this.props.mealPlan.week.wednesday,
            // Thursday: this.props.mealPlan.week.thursday,
            // Friday: this.props.mealPlan.week.friday,
            // Saturday: this.props.mealPlan.week.saturday,
            // Sunday: this.props.mealPlan.week.sunday,
        }
        this.showMealPlan = this.showMealPlan.bind(this);
        this.displayMeal = this.displayMeal.bind(this);
    }

    showMealPlan(e) {
        e.preventDefault();
        
    }

    displayMeal(field) {
        // let day = field;
        this.state[field].meals.map((meal, idx) => {
            <CalendarItem key={meal.id}
                id={meal.id}
                imageType={meal.imageType}
                title={meal.title}
                readyInMinutes={meal.readyInMinutes}
                mealNum={idx}
            />
        })
    }

    render() {


        return (
            <div className='calendar-container'>
                {/* <div>{this.displayMeal('Monday')}</div>
                <div>{this.displayMeal('Tuesday')}</div>
                <div>{this.displayMeal('Wednesday')}</div>
                <div>{this.displayMeal('Thursday')}</div>
                <div>{this.displayMeal('Friday')}</div>
                <div>{this.displayMeal('Saturday')}</div>
                <div>{this.displayMeal('Sunday')}</div> */}
                
                <div>Monday
                    <div className='meal-0'>
                        <img src={`https://spoonacular.com/recipeImages/720583-636x393.jpg`}/>
                        <p>Quinoa Breakfast Tacos with Kale + Butternut Squash</p>
                        <p>25 minutes</p>
                    </div>
                    <div className='meal-1'>
                        <img src={`https://spoonacular.com/recipeImages/720583-636x393.jpg`}/>
                        <p>Quinoa Breakfast Tacos with Kale + Butternut Squash</p>
                        <p>25 minutes</p>
                    </div>
                    <div className='meal-2'>
                        <img src={`https://spoonacular.com/recipeImages/720583-636x393.jpg`}/>
                        <p>Quinoa Breakfast Tacos with Kale + Butternut Squash</p>
                        <p>25 minutes</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calendar