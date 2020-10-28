import { connect } from "react-redux";
import ProgressBar from "./progress_bar";

const mapStateToProps = (state) => {
  return ({
    user: state.session.user,
    completedMeals: state.session.user.completedMeals,
  }) 
};

export default connect(mapStateToProps, null)(ProgressBar);
