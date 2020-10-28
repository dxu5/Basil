import { connect } from "react-redux";
import ProgressBar from "./progress_bar";

const mapStateToProps = (state) => {
  debugger
  return ({
    user: state.session.user,
    completedMeals: state.session.user.completedMeals,
  }) 
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };

export default connect(mapStateToProps, null)(ProgressBar);
