import React from 'react';

class CalendarItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className={`meal-${this.props.mealNum}`}>
                <div className='meal-img'><img src={`https://spoonacular.com/recipeImages/${this.props.id}-636x393.${this.props.imageType}`}/></div>
                <div className='meal-description'>
                    <p className='meal-title'>{this.props.title}</p>
                    <p className='meal-time'>{this.props.readyInMinutes}</p>
                </div>
            </div>
        )
    }
}

export default CalendarItem