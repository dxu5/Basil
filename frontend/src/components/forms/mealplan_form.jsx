import React from 'react';
import { withRouter } from 'react-router-dom';
import "./mealplan.css"

class MealPlan extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            targetCalories:"",
            diet:"",
            exclude:[],
            statusCal: false,
            statusDiet: false,
            statusExclude: false
        }
        this.update = this.update.bind(this);
        this.showCal = this.showCal.bind(this);
        this.showDiet = this.showDiet.bind(this);
        this.showExclude = this.showExclude.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }
    
    handleChange(field) {
        if(field === "statusDiet"){
            return e=> this.setState({
              [field]: !this.state.statusDiet
            })
        }else if(field === "statusCal"){
            return e=> this.setState({
                [field]: !this.state.statusCal
            })
        }else if(field === "statusExclude"){
            return e=> this.setState({
                [field]: !this.state.statusExclude
            })
        }

    }
    
    showCal(){
        return(
            <div>
                <input className="cal-range-bar" type="range" min="1000" max="4000"/>
            </div>
        )
    }

    showDiet(){
        return(
            <div>
                <label className="toggle">Gluten Free
                    <input className="toggle-input" name="diet" type="radio" value="Gluten Free" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                    <label>avoiding wheat, barley, rye, and other gluten-containing grains and foods</label>
                </label>

                <label className="toggle" >Ketogenic
                    <input className="toggle-input" name="diet" type="radio" value="Ketogenic" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                    <label>avoiding high fat, protein-rich foods and high carbohydrate foods</label>
                </label>

                <label className="toggle">Vegetarian
                    <input className="toggle-input" type="radio" name="diet" value="Vegetarian" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                    <label>avoiding meat or meat by-products, such as bones or gelatin</label>                
                </label>

                <label className="toggle">Lacto-Vegetarian
                    <input className="toggle-input" type="radio" name="diet" value="Lacto-Vegetarian" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                    <label for="input-4">All ingredients must be vegetarian and none of the ingredients can be or contain egg.</label>
                </label>

                <label className="toggle">Ovo-Vegetarian
                    <input className="toggle-input" type="radio" name="diet" value="Ovo-Vegetarian" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                    <label for="input-5">All ingredients must be vegetarian and none of the ingredients can be or contain dairy.</label>
                </label>

                <label className="toggle">Vegan
                    <input className="toggle-input" type="radio" name="diet" value="Vegan" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                    <label for="input-6">No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</label>
                </label>

                <label className="toggle">Pescetarian
                    <input className="toggle-input" type="radio" name="diet" value="Pescetarian" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                    <label for="input-7">Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.</label>
                
                </label>

                <label className="toggle">Paleo
                    <input className="toggle-input" type="radio" name="diet" value="Paleo" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                    <label for="input-8">Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.</label>
                </label>

                <label className="toggle">Primal
                    <input className="toggle-input" type="radio" name="diet" value="Primal" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                    <label for="input-9">It stresses that people eat raw, minimally processed foods, such as fruits, vegetables, certain oils, and dairy products.</label>
                
                </label>


                <label className="toggle">Whole30
                    <input className="toggle-input" type="radio" name="diet" value="Whole30" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                    <label for="input-10">Ingredients not allowed include added sweeteners,alcohol, grains, legumes, and food additives, such as carrageenan, MSG, and sulfites.</label>
                </label>
            </div>
        )
    }

    showExclude(){
        return(
            <div>
                Is it working?
            </div>
        )
    }
    
    render(){
        let cal_div;
        let diet_div;
        let exclude_div;
        if(this.state.statusCal){
            cal_div = this.showCal();
        }else{
            cal_div = null;
        }
        if(this.state.statusDiet){
            diet_div = this.showDiet();
        }else{
            diet_div = null;
        }
        if(this.state.statusExclude){
            exclude_div = this.showExclude();
        }else{
            exclude_div = null;
        }

        return <div className="meal-plan-form-div">
            <form>
                <div>
                    <label className="toggle" for="myToggle1">Calories:
                        <input type="checkbox" className="toggle-input" id="myToggle1" onClick={this.handleChange("statusCal")}/>
                        <div className="toggle-fill"></div>
                    </label>
                    {cal_div}
                </div>
                <div>
                    <label className="toggle" for="myToggle2">Diet:
                        <input className="toggle-input" type="checkbox" id="myToggle2"onClick={this.handleChange("statusDiet")}/>
                        <div className="toggle-fill"></div>
                    </label>
                    {diet_div}
                </div>
                <div>
                    <label className="toggle" for="myToggle3">Foods you don't like:
                        <input type="checkbox" id="myToggle3" className="toggle-input" onClick={this.handleChange("statusExclude")}/>
                        <div className="toggle-fill"></div>
                    </label>
                    {exclude_div}
                </div>
                <button type="submit">??</button>
            </form>
        </div>
    }
}

export default withRouter(MealPlan);