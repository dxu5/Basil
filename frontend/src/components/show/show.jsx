import React from 'react';
import './show.css'

class Show extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        debugger
        this.props.getMealInfo(Number(this.props.match.params.mealId));
    }

    render(){
        debugger
        const {meal} = this.props
        if(!meal) {return null}
        return (
          <div className="show">
            <div className="show-header">
              <h1>{meal.title}</h1>
            </div>
            <section className="show-summary">
              <div
                dangerouslySetInnerHTML={{ __html: `${meal.summary}` }}
              ></div>
            </section>
            <section className="show-basics">
              <p>Total Time: {`${meal.readyInMinutes} minutes`}</p>
              <p>Prep Time: {`${meal.preparationMinutes} minutes`}</p>
              <p>Cook Time: {`${meal.cookingMinutes} minutes`}</p>
              <p>Servings: {meal.servings}</p>
            </section>
            <img src={meal.image} className="show-img" />
            <section className="show-ingredients">
              <ul className="show-ing-list">
                {meal.extendedIngredients.map((ingredient) => {
                  return <li>{ingredient.original}</li>;
                })}
              </ul>
              <div className="show-ing-imgs">
                {meal.extendedIngredients.map((ingredient) => {
                  return (
                    <ul className="show-ing">
                      <li>
                        <img
                          src={`https://spoonacular.com/cdn/ingredients_500x500/${ingredient.image}`}
                        />
                      </li>
                      <div className="show-ing-img-info">
                        <li>{Math.round(ingredient.amount * 100) / 100}</li>
                        <li>{ingredient.unit}</li>
                        <li>{ingredient.originalName}</li>
                      </div>
                    </ul>
                  );
                })}
              </div>
            </section>
            <section className="show-instructions">
              <p>{meal.instructions}</p>
            </section>
            <section className="show-steps">
              Steps:{" "}
              {meal.analyzedInstructions[0].steps.map((stepObj) => {
                return <li>{stepObj.step}</li>;
              })}
            </section>

            {/* <section>Wine Pairing</section> */}
          </div>
        );
    }
}

export default Show