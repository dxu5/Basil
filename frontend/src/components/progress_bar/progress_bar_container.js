import { connect } from "react-redux";

import ProgressBar from "./progress_bar";

const mapStateToProps = (state) => ({
  user: state.session.user,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };

export default connect(mapStateToProps, null)(ProgressBar);
