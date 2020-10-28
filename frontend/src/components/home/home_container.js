import { connect } from "react-redux";
import { getUserInfo } from "../../actions/session_actions";

import Home from "./home";

const mapStateToProps = (state) => ({
  user: state.session.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: () => dispatch(getUserInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
