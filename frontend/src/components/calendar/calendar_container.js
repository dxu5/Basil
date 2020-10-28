import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { receiveMealPlan } from "../../actions/mealplan_actions";

import Calendar from "./calendar";

const mapStateToProps = (state) => {
    return ({
        mealPlan: state.entities.mealplans.currentMealplan,
        currentMealPlanTime: state.entities.mealplans.currentMealplanStartTime
    })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMealPlan: (mealId) => dispatch(receiveMealPlan(mealId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Calendar));
