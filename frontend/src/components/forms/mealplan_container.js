import { connect } from 'react-redux';
import { receiveMealInfo, getMealInfo } from '../../actions/meal_actions';
import MealPlanForm from './mealplan_form';



const mapDispatchToProps = (dispatch) => {
  return {
    receiveMealInfo: meal => dispatch(receiveMealInfo(meal))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(MealPlanForm);