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
              
            <h1 className="show-header">{meal.title}</h1>
            <section className="show-basics">
              {/* <p>Title: </p> */}
              <p>Ready in: {`${meal.readyInMinutes} minutes`}</p>
              <p>Preparation Time: {`${meal.preparationMinutes}`}</p>
              <p>Cooking Time: {`${meal.cookingMinutes} minutes`}</p>
              <p>Servings: {meal.servings}</p>
              {/* <p>Cuisine: {meal.cuisines.map(cuisine => {
                        return <li>cuisine</li>
                    })}</p> */}
              <img src={meal.image} />
            </section>
            <section className="show-ingredients">
              Ingredients
              <p>
                {meal.extendedIngredients.map((ingredient) => {
                  return (
                    <ul>
                      <li>{ingredient.original}</li>
                      <li>
                        <img src={`https://spoonacular.com/cdn/ingredients_500x500/${ingredient.image}`}/>
                      </li>
                      <li>{ingredient.amount}</li>
                      <li>{ingredient.unit}</li>
                      <li>{ingredient.originalName}</li>
                    </ul>
                  );
                })}
              </p>
            </section>
            <section className="show-instructions">
              Instructions
              <p>Instructions: {meal.instructions}</p>
              <p>
                Steps:{" "}
                {meal.analyzedInstructions[0].steps.map((stepObj) => {
                  return <li>{stepObj.step}</li>;
                })}
              </p>
            </section>
            <section className="show-summary">
              Summary:
              <div
                dangerouslySetInnerHTML={{ __html: `${meal.summary}` }}
              ></div>
              
            </section>
            {/* <section>Wine Pairing</section> */}
          </div>
        );
    }
}

export default Show