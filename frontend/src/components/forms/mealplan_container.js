import { connect } from "react-redux";
import {
  getMealPlans,
  addMealPlan,
  clearMealPlan,
} from "../../actions/mealplan_actions";
import { getUserInfo } from "../../actions/session_actions";
import MealPlanForm from "./mealplan_form";

const mapStateToProps = (state) => {
  return {
    previewMealplan: state.entities.mealplans.prospectiveMealplan || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMealPlans: (options) => dispatch(getMealPlans(options)),
    addMealplan: (mealplan) => dispatch(addMealPlan(mealplan)),
    clearMealPlan: () => dispatch(clearMealPlan()),
    getUserInfo: () => dispatch(getUserInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanForm);
