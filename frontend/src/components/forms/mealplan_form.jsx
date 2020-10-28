import React from 'react';
import { withRouter } from 'react-router-dom';
import "./mealplan.css"
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import ExcludeList from "./excludeList"

class MealPlanForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            targetCalories:2500,
            diet:"",
            exclude:{},
            statusCal: false,
            statusDiet: false,
            statusExclude: false,
            inputExclude: ""
        }
        this.update = this.update.bind(this);
        this.showCal = this.showCal.bind(this);
        this.showDiet = this.showDiet.bind(this);
        this.showExclude = this.showExclude.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSlider = this.handleChangeSlider.bind(this);
        this.handleSubmitExclude = this.handleSubmitExclude.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleExcludeInputChange = this.handleExcludeInputChange.bind(this)
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }
    deleteItem(item){
        return()=>{
            let newCopy = Object.assign({},this.state.exclude)
            delete newCopy[item]
            this.setState({exclude:newCopy})
        }
    }


    handleSubmitExclude(e){
        e.preventDefault();
        let newState = Object.assign({},this.state.exclude)
        newState[this.state.inputExclude] = true
        this.setState({inputExclude: "", exclude: newState})
    }

    handleChange(field) {
        if(field === "statusDiet"){
            return e=> this.setState({
              [field]: !this.state.statusDiet,
              targetCalories: 0
            })
        }else if(field === "statusCal"){
            return e=> this.setState({
                [field]: !this.state.statusCal,
                diet:""
            })
        }else if(field === "statusExclude"){
            return e=> this.setState({
                [field]: !this.state.statusExclude,
                exclude: {}
            })
        }
    }
    
    handleChangeSlider = value => {
        this.setState({
          targetCalories: value
        })
    
    };

    handleExcludeInputChange(e){
        this.setState({inputExclude: e.currentTarget.value})
    }

    
    
    showCal(){

        return(
            <div className="range-div"> 
                <Slider min={1000} max={4000} value={this.state.targetCalories} onChange={this.handleChangeSlider}/>
                    <p className="cal-tips">Generally, the recommended daily calorie intake is 2,000 calories a day for women and 2,500 for men.</p>
            </div>

        )
    }

    showDiet(){
        return(
            <div>
                <label className="toggle">Gluten Free: <br></br>
                    <label>avoiding wheat, barley, rye, and other gluten-containing grains and foods</label>
                    <input className="toggle-input" name="diet" type="radio" value="Gluten Free" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                </label>

                <label className="toggle" >Ketogenic: <br></br>
                    <label>avoiding high fat, protein-rich foods and high carbohydrate foods</label>
                    <input className="toggle-input" name="diet" type="radio" value="Ketogenic" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                </label>

                <label className="toggle">Vegetarian: <br></br>
                    <label>avoiding meat or meat by-products, such as bones or gelatin</label>                
                    <input className="toggle-input" type="radio" name="diet" value="Vegetarian" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                </label>

                <label className="toggle">Lacto-Vegetarian: <br></br>
                    <label for="input-4">All ingredients must be vegetarian and none of the ingredients can be or contain egg.</label>
                    <input className="toggle-input" type="radio" name="diet" value="Lacto-Vegetarian" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                </label>

                <label className="toggle">Ovo-Vegetarian: <br></br>
                    <label for="input-5">All ingredients must be vegetarian and none of the ingredients can be or contain dairy.</label>
                    <input className="toggle-input" type="radio" name="diet" value="Ovo-Vegetarian" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                </label>

                <label className="toggle">Vegan: <br></br>
                    <label for="input-6">No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</label>
                    <input className="toggle-input" type="radio" name="diet" value="Vegan" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                </label>

                <label className="toggle">Pescetarian: <br></br>
                    <label for="input-7">Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.</label>
                    <input className="toggle-input" type="radio" name="diet" value="Pescetarian" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                
                </label>

                <label className="toggle">Paleo: <br></br>
                    <label for="input-8">Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.</label>
                    <input className="toggle-input" type="radio" name="diet" value="Paleo" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                </label>

                <label className="toggle">Primal: <br></br>
                    <label for="input-9">It stresses that people eat raw, minimally processed foods, such as fruits, vegetables, certain oils, and dairy products.</label>
                    <input className="toggle-input" type="radio" name="diet" value="Primal" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                
                </label>


                <label className="toggle">Whole30: <br></br>
                    <label for="input-10">Ingredients not allowed include added sweeteners,alcohol, grains, legumes, and food additives, such as carrageenan, MSG, and sulfites.</label>
                    <input className="toggle-input" type="radio" name="diet" value="Whole30" onChange={this.update("diet")}/>
                    <div className="toggle-fill"></div>
                </label>
            </div>
        )
    }

    showExclude(){
        return(
            <div class="group">      
                    <div className="exclude-form" onSubmit={this.handleSubmitExclude}>
                        <input type="text" name="exclude" className="question" id="nme" required autocomplete="on" value={this.state.inputExclude} onChange={this.handleExcludeInputChange}/>
                        <label className="question-label" for="exclude"><span className="question-span">FOOD'S YOU DON'T LIKE</span></label>
                        <button onClick={this.handleSubmitExclude}>Add</button>
                    </div>
                    <ExcludeList exclude={Object.keys(this.state.exclude)} deleteItem={this.deleteItem}/>
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

export default withRouter(MealPlanForm);