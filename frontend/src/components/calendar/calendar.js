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
                day={field}
                imageType={meal.imageType}
                title={meal.title}
                readyInMinutes={meal.readyInMinutes}
                mealNum={idx}
            />
        })
    }

    componentDidMount() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const weekday = new Date();
        const currentDay = days[weekday.getDay()];
        const pastDays = days.slice(0, weekday.getDay())

        pastDays.forEach (day => {
            if (document.getElementById(day)) {
                document.getElementById(day).classList.add('past')
            }
        })
        debugger
        if (document.getElementById(currentDay)) {
            document.getElementById(currentDay).classList.add('current')
        }
    }

    render() {

        // const days = ['#Sunday', '#Monday', 'Tuesday', '#Wednesday', '#Thursday', '#Friday', '#Saturday']
        // const weekday = new Date();
        // const currentDay = days[weekday.getDay()];
        debugger
        // if (document.getElementById(currentDay)) {
        //     document.getElementById(currentDay).classList.add('current')
        // }
        // $(currentDay).addClass('current')

        return (
            <div className='calendar-container'>
                {/* <div className='day-container'>
                    <p id='Sunday'>Sunday</p>
                    {this.displayMeal('Sunday')}</div>
                <div className='day-container'>
                    <p id='Monday'>Monday</p>
                    {this.displayMeal('Monday')}</div>
                <div className='day-container'>
                    <p id='Tuesday'>Tuesday</p>
                    {this.displayMeal('Tuesday')}</div>
                <div className='day-container'>
                    <p id='Wednesday'>Wednesday</p>
                    {this.displayMeal('Wednesday')}</div>
                <div className='day-container'>
                    <p id='Thursday'>Thursday</p>
                    {this.displayMeal('Thursday')}</div>
                <div className='day-container'>
                    <p id='Friday'>Friday</p>
                    {this.displayMeal('Friday')}</div>
                <div className='day-container'>
                    <p id='Saturday'>Saturday</p>
                    {this.displayMeal('Saturday')}</div>
                <div className='day-container' className='meal-label'>
                    <p>Morning</p>
                    <p>Afternoon</p>
                    <p>Evening</p>
                </div> */}

                <div className='table-responsive'>
                    <table className='table'>

                        <div className='day-container'>
                            <p id='Sunday'>Sunday</p>
                            <div className='meal-0'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/720583-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Quinoa Breakfast Tacos with Kale + Butternut Squash</p>
                                    <p className='meal-time'>25 minutes</p>
                                </div>
                            </div>
                            <div className='meal-1'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/91909-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Clams with Black Bean Sauce, Bok Choy, and Noodles</p>
                                    <p className='meal-time'>30 minutes</p>
                                </div>
                            </div>
                            <div className='meal-2'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/598933-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Black and White Chocolate Cake with Crème Anglaise</p>
                                    <p className='meal-time'>60 minutes</p>
                                </div>
                            </div>
                        </div>
                        <div className='day-container'>
                            <p id='Monday'>Monday</p>
                            <div className='meal-0'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/720583-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Quinoa Breakfast Tacos with Kale + Butternut Squash</p>
                                    <p className='meal-time'>25 minutes</p>
                                </div>
                            </div>
                            <div className='meal-1'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/91909-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Clams with Black Bean Sauce, Bok Choy, and Noodles</p>
                                    <p className='meal-time'>30 minutes</p>
                                </div>
                            </div>
                            <div className='meal-2'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/598933-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Black and White Chocolate Cake with Crème Anglaise</p>
                                    <p className='meal-time'>60 minutes</p>
                                </div>
                            </div>
                        </div>
                        <div className='day-container'>
                            <p id='Tuesday'>Tuesday</p>
                            <div className='meal-0'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/720583-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Quinoa Breakfast Tacos with Kale + Butternut Squash</p>
                                    <p className='meal-time'>25 minutes</p>
                                </div>
                            </div>
                            <div className='meal-1'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/91909-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Clams with Black Bean Sauce, Bok Choy, and Noodles</p>
                                    <p className='meal-time'>30 minutes</p>
                                </div>
                            </div>
                            <div className='meal-2'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/598933-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Black and White Chocolate Cake with Crème Anglaise</p>
                                    <p className='meal-time'>60 minutes</p>
                                </div>
                            </div>
                        </div>
                        <div className='day-container'>
                            <p id='Wednesday'>Wednesday</p>
                            <div className='meal-0'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/720583-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Quinoa Breakfast Tacos with Kale + Butternut Squash</p>
                                    <p className='meal-time'>25 minutes</p>
                                </div>
                            </div>
                            <div className='meal-1'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/91909-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Clams with Black Bean Sauce, Bok Choy, and Noodles</p>
                                    <p className='meal-time'>30 minutes</p>
                                </div>
                            </div>
                            <div className='meal-2'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/598933-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Black and White Chocolate Cake with Crème Anglaise</p>
                                    <p className='meal-time'>60 minutes</p>
                                </div>
                            </div>
                        </div>
                        <div className='day-container'>
                            <p id='Thursday'>Thursday</p>
                            <div className='meal-0'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/720583-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Quinoa Breakfast Tacos with Kale + Butternut Squash</p>
                                    <p className='meal-time'>25 minutes</p>
                                </div>
                            </div>
                            <div className='meal-1'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/91909-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Clams with Black Bean Sauce, Bok Choy, and Noodles</p>
                                    <p className='meal-time'>30 minutes</p>
                                </div>
                            </div>
                            <div className='meal-2'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/598933-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Black and White Chocolate Cake with Crème Anglaise</p>
                                    <p className='meal-time'>60 minutes</p>
                                </div>
                            </div>
                        </div>
                        <div className='day-container'>
                            <p id='Friday'>Friday</p>
                            <div className='meal-0'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/720583-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Quinoa Breakfast Tacos with Kale + Butternut Squash</p>
                                    <p className='meal-time'>25 minutes</p>
                                </div>
                            </div>
                            <div className='meal-1'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/91909-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Clams with Black Bean Sauce, Bok Choy, and Noodles</p>
                                    <p className='meal-time'>30 minutes</p>
                                </div>
                            </div>
                            <div className='meal-2'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/598933-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Black and White Chocolate Cake with Crème Anglaise</p>
                                    <p className='meal-time'>60 minutes</p>
                                </div>
                            </div>
                        </div>
                        <div className='day-container'>
                            <p id='Saturday'>Saturday</p>
                            <div className='meal-0'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/720583-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Quinoa Breakfast Tacos with Kale + Butternut Squash</p>
                                    <p className='meal-time'>25 minutes</p>
                                </div>
                            </div>
                            <div className='meal-1'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/91909-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Clams with Black Bean Sauce, Bok Choy, and Noodles</p>
                                    <p className='meal-time'>30 minutes</p>
                                </div>
                            </div>
                            <div className='meal-2'>
                                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/598933-636x393.jpg`}/></div>
                                <div className='meal-description'>
                                    <p className='meal-title'>Black and White Chocolate Cake with Crème Anglaise</p>
                                    <p className='meal-time'>60 minutes</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </table>
                </div>

            </div>
        );
    }
}

export default Calendar