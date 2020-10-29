import { connect } from "react-redux";
import { getMealInfo } from "../../actions/meal_actions";
import Show from "./show";

const mapStateToProps = (state) => {
    return({
        currentMeal: state.entities.meals.currentMeal
    })
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMealInfo: (meal) => dispatch(getMealInfo(meal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
