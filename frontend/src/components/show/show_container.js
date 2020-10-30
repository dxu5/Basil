import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMealInfo } from "../../actions/meal_actions";
import Show from "./show";

const mapStateToProps = (state) => {
    return({
        meal: state.entities.meals.currentMeal
    })
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMealInfo: (mealId) => dispatch(getMealInfo(mealId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show));
