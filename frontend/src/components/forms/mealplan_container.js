import { connect } from 'react-redux';
import { getMealPlans} from '../../actions/mealplan_actions';
import MealPlanForm from './mealplan_form';



const mapDispatchToProps = (dispatch) => {
  return {
    getMealPlans: options => dispatch(getMealPlans(options))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(MealPlanForm);