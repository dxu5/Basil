import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMealInfo } from "../../actions/meal_actions";
import { getUserInfo } from "../../actions/session_actions";
import Show from "./show";

const mapStateToProps = (state) => {
  return {
    meal: state.entities.meals.currentMeal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMealInfo: (mealId) => dispatch(getMealInfo(mealId)),
    getUserInfo: () => dispatch(getUserInfo()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show));
