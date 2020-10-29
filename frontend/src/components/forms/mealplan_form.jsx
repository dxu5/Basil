import React from 'react';
import { withRouter } from 'react-router-dom';
import "./mealplan.css"
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import ExcludeList from "./excludeList"
import TextField from '@material-ui/core/TextField';
import "./button.scss"
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';

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
        this.handleSubmit = this.handleSubmit.bind(this)
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
        if(this.state.inputExclude !== ""){
            let newState = Object.assign({},this.state.exclude)
            newState[this.state.inputExclude] = true
            this.setState({inputExclude: "", exclude: newState})
        }
    }

    handleChange(field) {
        if(field === "statusDiet"){
            return e=> this.setState({
              [field]: !this.state.statusDiet,
              diet:""
            })
        }else if(field === "statusCal"){
            return e=> this.setState({
                [field]: !this.state.statusCal,
                targetCalories: 0
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

    handleSubmit(e){
        e.preventDefault()
        let newCopy = {}
        
        if(this.state.statusCal){
            newCopy.targetCalories = this.state.targetCalories
        }
        if(this.state.statusDiet){
            newCopy.diet = this.state.diet
        }
        if(this.state.statusExclude){
            newCopy.exclude = Object.keys(this.state.exclude).join(",")
        }
        
        this.props.getMealPlans(newCopy)
    }
    
    showCal(){

        return(
            <div className="range-div"> 
                <div>
                    <span>Min: 1000</span>
                    <Slider min={1000} max={4000} value={this.state.targetCalories} onChange={this.handleChangeSlider} className="cal-slider"/>
                    <span className="max-span">Max: 4000</span>
                    <p className="cal-tips">Generally, the recommended daily calorie intake is 2,000 calories a day for women and 2,500 for men.</p>
                </div>
            </div>

        )
    }

    showDiet(){
        return(
            <div className="diet-div">
                <div className="diet-item-div">
                    <div className="diet-infor-div">
                        <label style={{fontWeight:"600"}}>Gluten Free</label>
                        <div style={{color:"#4f4846"}} className="diet-description">Avoiding wheat, barley, rye, and other gluten-containing grains and foods</div>
                    </div>
                    <label className="toggle">
                        <input className="toggle-input" name="diet" type="radio" value="Gluten Free" onChange={this.update("diet")}/>
                        <div className="toggle-fill"></div>
                    </label>
                </div>

                <div className="diet-item-div">
                    <div className="diet-infor-div">
                        <label style={{fontWeight:"600"}}>Ketogenic</label>
                        <label style={{color:"#4f4846"}} className="diet-description">Avoiding high fat, protein-rich foods and high carbohydrate foods</label>
                    </div>
                    <label className="toggle">
                        <input className="toggle-input" name="diet" type="radio" value="Ketogenic" onChange={this.update("diet")}/>
                        <div className="toggle-fill"></div>
                    </label>
                </div>

                <div className="diet-item-div">
                    <div className="diet-infor-div">
                        <label style={{fontWeight:"600"}}>Vegetarian</label>
                        <label style={{color:"#4f4846"}} className="diet-description">Avoiding meat or meat by-products, such as bones or gelatin</label>                
                    </div>
                    <label className="toggle">
                        <input className="toggle-input" type="radio" name="diet" value="Vegetarian" onChange={this.update("diet")}/>
                        <div className="toggle-fill"></div>
                    </label>
                </div>


                <div className="diet-item-div">
                    <div className="diet-infor-div">
                        <label style={{fontWeight:"600"}}>Lacto-Vegetarian</label>
                        <label style={{color:"#4f4846"}} className="diet-description">All ingredients must be vegetarian and none of the ingredients can be or contain egg.</label>
                    </div>
                    <label className="toggle">
                        <input className="toggle-input" type="radio" name="diet" value="Lacto-Vegetarian" onChange={this.update("diet")}/>
                        <div className="toggle-fill"></div>
                    </label>
                </div>


                <div className="diet-item-div">
                    <div className="diet-infor-div">
                        <label style={{fontWeight:"600"}}>Ovo-Vegetarian</label>
                        <label style={{color:"#4f4846"}} className="diet-description">All ingredients must be vegetarian and none of the ingredients can be or contain dairy.</label>
                    </div>
                    <label className="toggle">
                        <input className="toggle-input" type="radio" name="diet" value="Ovo-Vegetarian" onChange={this.update("diet")}/>
                        <div className="toggle-fill"></div>
                    </label>
                </div>

                <div className="diet-item-div">
                    <div className="diet-infor-div">
                        <label style={{fontWeight:"600"}}>Vegan</label>
                        <label style={{color:"#4f4846"}} className="diet-description">No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</label>
                    </div>
                    <label className="toggle">
                        <input className="toggle-input" type="radio" name="diet" value="Vegan" onChange={this.update("diet")}/>
                        <div className="toggle-fill"></div>
                    </label>
                </div>


                <div className="diet-item-div">
                    <div className="diet-infor-div">
                        <label style={{fontWeight:"600"}}>Pescetarian</label>
                        <label style={{color:"#4f4846"}} className="diet-description">Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.</label>
                    </div>
                    <label className="toggle">
                        <input className="toggle-input" type="radio" name="diet" value="Pescetarian" onChange={this.update("diet")}/>
                        <div className="toggle-fill"></div>
                    </label>
                </div>


                <div className="diet-item-div">
                    <div className="diet-infor-div">
                        <label style={{fontWeight:"600"}}>Paleo</label>
                        <label style={{color:"#4f4846"}} className="diet-description">Ingredients not allowed include legumes (e.g. beans and lentils), grains,</label>
                        <label style={{color:"#4f4846"}}>dairy, refined sugar, and processed foods.</label>
                    </div>
                    <label className="toggle">
                        <input className="toggle-input" type="radio" name="diet" value="Paleo" onChange={this.update("diet")}/>
                        <div className="toggle-fill"></div>
                    </label>
                </div>


                <div className="diet-item-div">
                    <div className="diet-infor-div">
                        <label style={{fontWeight:"600"}}>Primal</label>
                        <label style={{color:"#4f4846"}} className="diet-description">It stresses that people eat raw, minimally processed foods, such as fruits, vegetables, certain oils, and dairy products.</label>
                    </div>
                    <label className="toggle">
                        <input className="toggle-input" type="radio" name="diet" value="Primal" onChange={this.update("diet")}/>
                        <div className="toggle-fill"></div>
                    </label>
                </div>


                <div className="diet-item-div">
                    <div className="diet-infor-div">
                        <label style={{fontWeight:"600"}}>Whole30</label>
                        <label style={{color:"#4f4846"}} className="diet-description">Ingredients not allowed include added sweeteners,alcohol, grains,</label>
                        <label style={{color:"#4f4846"}}>legumes, and food additives, such as carrageenan, MSG, and sulfites.</label>
                    </div>
                    <label className="toggle">
                        <input className="toggle-input" type="radio" name="diet" value="Whole30" onChange={this.update("diet")}/>
                        <div className="toggle-fill"></div>
                    </label>
                </div>
            </div>
        )
    }

    showExclude(){
        const CssTextField = withStyles({
            root: {
              '& label.Mui-focused': {
                color: '#6a996b',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'green',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                //   borderColor: 'red',
                },
                '&:hover fieldset': {
                //   borderColor: 'yellow',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'green',
                },
              },
            },
          })(TextField);
          const styles = theme => ({
            notchedOutline: {},
            focused: {
              "& $notchedOutline": {
                borderColor: "yellow"
              }
            }
          });
        return(
            <div className="group">      
                {/* <div className="gropu-width"> */}
                    <div className="ex-div">
                        <TextField id="outlined-basic" label="Excluded foods" variant="outlined" value={this.state.inputExclude} onChange={this.handleExcludeInputChange} color="third"/>
                        <button onClick={this.handleSubmitExclude} className="add-btn">ADD</button>
                    </div>
                {/* </div> */}
                <div className="ex-item-item">
                    <ExcludeList exclude={Object.keys(this.state.exclude)} deleteItem={this.deleteItem}/>
                </div>
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
            <form className="meal-plan-form" onSubmit={this.handleSubmit}>
                <div className="category">
                    <label>What is the caloric target for one day?</label>
                    <label className="toggle" for="myToggle1">
                        <input type="checkbox" className="toggle-input" id="myToggle1" onClick={this.handleChange("statusCal")}/>
                        <div className="toggle-fill"></div>
                    </label>
                    {cal_div}
                </div>
                <div className="category">
                    <label>Enter a diet for your meal plan</label>
                    <label className="toggle" for="myToggle2">
                        <input className="toggle-input" type="checkbox" id="myToggle2"onClick={this.handleChange("statusDiet")}/>
                        <div className="toggle-fill"></div>
                    </label>
                    {diet_div}
                </div>
                <div className="category">
                    <label>Foods you don't like:</label>
                    <label className="toggle" for="myToggle3">
                        <input type="checkbox" id="myToggle3" className="toggle-input" onClick={this.handleChange("statusExclude")}/>
                        <div className="toggle-fill"></div>
                    </label>
                    {exclude_div}
                </div>
                <button type="submit" className="sub-btn">Create Mealplan</button>
            </form>
        </div>
    }
}

export default withRouter(MealPlanForm);