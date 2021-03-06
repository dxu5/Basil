import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { receiveMealPlan, clearCurrentMealPlan } from "../../actions/mealplan_actions";
import { receiveCompletedMeal } from "../../actions/user_actions";

import Calendar from "./calendar";

const mapStateToProps = (state) => {
    return ({
        mealPlan: state.entities.mealplans.currentMealplan,
        currentMealPlanTime: state.entities.mealplans.currentMealplanStartTime,
        completedMealCount: state.session.user.completedMeals,
        
    })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMealPlan: (mealId) => dispatch(receiveMealPlan(mealId)),
    receiveCompletedMeal: (count, mealInfo) => dispatch(receiveCompletedMeal(count, mealInfo)),
    clearCurrentMealPlan: () => dispatch(clearCurrentMealPlan())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Calendar));
