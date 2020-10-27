import React from 'react';
import { withRouter } from 'react-router-dom';
import "./meal_plan_form.css"

class MealPlanForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div className="meal-plan-form-div">
            meal-plan-form
            <form>
                <label>Calories</label>
                <input className="cal-range-bar" type="range" min="1500" max="3000"/>
            </form>
        </div>
    }
}

export default withRouter(MealPlanForm);