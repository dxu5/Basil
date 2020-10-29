import { connect } from "react-redux";
import { getMealPlans } from "../../actions/mealplan_actions";
import MealPlanForm from "./mealplan_form";

const mapStateToProps = (state) => {
  return {
    previewMealplan: state.entities.mealplans.prospectiveMealplan || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMealPlans: (options) => dispatch(getMealPlans(options)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanForm);
