import { connect } from "react-redux";
import { addMealPlan } from "../../actions/mealplan_actions";
import PreviewCalendar from "./preview_calendar.jsx";

const mapStateToProps = (state) => {
  return {
    previewMealplan: state.entities.mealplans.prospectiveMealplan || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMealPlan: (mealplan) => dispatch(addMealPlan(mealplan)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewCalendar);
