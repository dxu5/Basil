import React from 'react';
import './show.css'

class Show extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getMealInfo(Number(this.props.match.params.mealId));
    }

    render(){
        const {meal} = this.props
        if(!meal) {return null}
        return (
          <div className="show">
            <div className="show-header">
              <h1>{meal.title}</h1>
            </div>
            <section className="show-summary">
                <h2>About me</h2>
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
            <section className="show-main">
                <div className="show-left">
                    <img src={meal.image} className="show-img" />
                    <h3>Ingredients</h3>
                    <ul className="show-ing-list">
                        {meal.extendedIngredients.map((ingredient) => {
                        return <li>{ingredient.original}</li>;
                        })}
                    </ul>
                </div>
            
              <div className="show-right">
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
                <div className="read-me-img"></div>
                <div>
                    <h2>Read me</h2>
                    <p>{meal.instructions}</p>
                </div>
            </section>
            <section className="show-steps">
                <div>
                    <h2>Follow me</h2>
                    <ol>
                        {meal.analyzedInstructions[0].steps.map((stepObj) => {
                            return <li>{stepObj.step}</li>;
                        })}
                    </ol>
                </div>
                <div className="follow-me-img"></div>
            </section>

            {/* <section>Wine Pairing</section> */}
          </div>
        );
    }
}

export default Show