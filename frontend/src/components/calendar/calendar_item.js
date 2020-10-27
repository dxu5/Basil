import React from 'react';

class CalendarItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className={this.props.mealNum}>
                <img src={`https://spoonacular.com/recipeImages/${this.props.id}-636x393.${this.props.imageType}`}/>
                <p>{this.props.title}</p>
                <p>{this.props.readyInMinutes}</p>
            </div>
        )
    }
}

export default CalendarItem