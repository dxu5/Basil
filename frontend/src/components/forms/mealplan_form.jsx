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
        // this.handleStatus = this.handleStatus.bind(this);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
        
    }
    // handleStatus(field){
    //     if(this.state[field]){
    //         return this.setState({
    //             [field]:false
    //         });
    //     }else{
    //         return this.setState({
    //             [field]:true
    //         })
    //     }
    // }
    
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
                {/* <form> */}
                    <input id="input-1" type="radio" name="diet" value="Gluten Free" onChange={this.update("diet")}/>
                    <label for="diet">Gluten Free</label><br></br>
                    <label for="input-1">avoiding wheat, barley, rye, and other gluten-containing grains and foods</label>

                    <input id="input-2" type="radio" name="diet" value="Ketogenic" onChange={this.update("diet")}/>
                    <label for="diet">Ketogenic</label><br></br>
                    <label for="input-2">avoiding high fat, protein-rich foods and high carbohydrate foods</label>

                    <input id="input-3" type="radio" name="diet" value="Vegetarian" onChange={this.update("diet")}/>
                    <label for="diet">Vegetarian</label><br></br>
                    <label for="input-3">avoiding meat or meat by-products, such as bones or gelatin</label>

                    <input id="input-4" type="radio" name="diet" value="Lacto-Vegetarian" onChange={this.update("diet")}/>
                    <label for="diet">Lacto-Vegetarian</label><br></br>
                    <label for="input-4">All ingredients must be vegetarian and none of the ingredients can be or contain egg.</label>

                    <input id="input-5" type="radio" name="diet" value="Ovo-Vegetarian" onChange={this.update("diet")}/>
                    <label for="diet">Ovo-Vegetarian</label><br></br>
                    <label for="input-5">All ingredients must be vegetarian and none of the ingredients can be or contain dairy.</label>

                    <input id="input-6" type="radio" name="diet" value="Vegan" onChange={this.update("diet")}/>
                    <label for="diet">Vegan</label><br></br>
                    <label for="input-6">No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</label>

                    <input id="input-7" type="radio" name="diet" value="Pescetarian" onChange={this.update("diet")}/>
                    <label for="diet">Pescetarian</label><br></br>
                    <label for="input-7">Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.</label>

                    <input id="input-8" type="radio" name="diet" value="Paleo" onChange={this.update("diet")}/>
                    <label for="diet">Paleo</label><br></br>
                    <label for="input-8">Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.</label>

                    <input id="input-9" type="radio" name="diet" value="Primal" onChange={this.update("diet")}/>
                    <label for="diet">Primal</label><br></br>
                    <label for="input-9">It stresses that people eat raw, minimally processed foods, such as fruits, vegetables, certain oils, and dairy products.</label>

                    <input id="input-10" type="radio" name="diet" value="Whole30" onChange={this.update("diet")}/>
                    <label for="diet">Whole30</label><br></br>
                    <label for="input-10">Ingredients not allowed include added sweeteners,alcohol, grains, legumes, and food additives, such as carrageenan, MSG, and sulfites.</label>
                {/* </form> */}
            </div>
        )
    }

    showExclude(){
        return(
            <div>
                
            </div>
        )
    }
    
    render(){
        let cal_div;
        let diet_div;
        let exclude_div;
        if(this.state.statusCal === "y"){
            cal_div = this.showCal();
        }else{
            cal_div = null;
        }
        if(this.state.statusDiet === "y"){
            diet_div = this.showDiet();
        }else{
            diet_div = null;
        }
        if(this.state.statusExclude === "y"){
            exclude_div = this.showExclude();
        }else{
            exclude_div = null;
        }

        return <div className="meal-plan-form-div">
            <form>
                <div>
                    <label>Calories:</label>
                    <input type="radio" id="yes" className="radio-btn" value="y" name="cal" onClick={this.update("statusCal")}/>
                    <input className="radio-btn" type="radio" value="n" name="cal" onClick={this.update("statusCal")}/>
                    {cal_div}
                </div>
                <div>
                    <label>Diet:</label>
                    <input className="radio-btn" type="radio" value="y" name="d" onClick={this.update("statusDiet")}/>
                    <input className="radio-btn" type="radio" value="n" name="d" onClick={this.update("statusCal")}/>
                    {diet_div}
                </div>
                <div>
                    <label>Foods you don't like:</label>
                    <input className="radio-btn" type="radio" value="y" name="exclude" onClick={this.update("statusExclude")}/>
                    <input className="radio-btn" type="radio" value="n" name="exclude" onClick={this.update("statusCal")}/>
                    {exclude_div}
                </div>
            </form>
        </div>
    }
}

export default withRouter(MealPlan);