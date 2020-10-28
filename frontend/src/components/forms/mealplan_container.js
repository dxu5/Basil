import { connect } from 'react-redux';
import { receiveMealInfo, getMealInfo } from '../../actions/meal_actions';
import MealPlan from './mealplan_form';



const mapDispatchToProps = (dispatch) => {
  return {
    receiveMealInfo: meal => dispatch(receiveMealInfo(meal)),
    getMealInfo: id=> dispatch(getMealInfo(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(MealPlan);