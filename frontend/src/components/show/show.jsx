import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClock,
  faUtensilSpoon,
  faUtensils,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import "./show.css";

class Show extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMealInfo(Number(this.props.match.params.mealId));
  }
  componentDidUpdate() {
    let { meal } = this.props;
    if (meal) {
      document.querySelector(".show").scrollIntoView({ behavior: "smooth" });
    }
  }

  render() {
    const { meal } = this.props;
    const BG = Math.ceil(Math.random() * 7);
    if (!meal) {
      return null;
    }
    return (
      <div className="show">
        <div className="show-header">
          {/* {document.querySelector(".show-header").background = `../../images/showBG${BG}.jpg`} */}
          <h1>{meal.title}</h1>
        </div>
        <section className="show-summary">
          <h2>About me</h2>
          <div dangerouslySetInnerHTML={{ __html: `${meal.summary}` }}></div>
        </section>
        <section className="show-basics">
          <p>
            <FontAwesomeIcon icon={faClock} />
            {` ${meal.readyInMinutes} min.`}
          </p>
          {meal.preparationMinutes ? (
            <p>
              <FontAwesomeIcon icon={faUtensils} />
              {` ${meal.preparationMinutes} min.`}
            </p>
          ) : null}
          {meal.cookingMinutes ? (
            <p>
              <FontAwesomeIcon icon={faFire} />
              {` ${meal.cookingMinutes} min.`}
            </p>
          ) : null}
          <p>
            <FontAwesomeIcon icon={faUser} />
            {` ${meal.servings} servings`}
          </p>
        </section>
        <section className="show-main">
          <div className="show-left">
            <img src={meal.image} className="show-img" />
            <div className="show-ing-container">
              <h2>Ingredients</h2>
              <ul className="show-ing-list">
                {meal.extendedIngredients.map((ingredient) => {
                  return <li>{ingredient.original}</li>;
                })}
              </ul>
              <div className="show-left-bg"></div>
            </div>
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
          <div className="read-me-img">
            <p className="quote">
              “We abide by the old adage — quality over quantity. While we now
              have a large database built over time, the quality of meals has
              always been at the forefront.”
              <span id="line-break"></span>-Zhang Zhang (Co-founder)
            </p>
          </div>
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
          <div className="follow-me-img">
            <p className="quote">
              “My family and I are a walking testament that the process works,
              but rather than hear me talk about it we’ll let the results speak
              for themselves.”
              <span id="line-break"></span>-Derek Xu (Co-founder)
            </p>
          </div>
        </section>

        {/* <section>Wine Pairing</section> */}
      </div>
    );
  }
}

export default Show;
