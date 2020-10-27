import { connect } from "react-redux";

import Home from "./home";

const mapStateToProps = (state) => ({
  user: state.session.user,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };

export default connect(mapStateToProps, null)(Home);
