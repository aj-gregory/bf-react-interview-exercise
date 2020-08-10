import { connect } from "react-redux";
import Columns from "./Columns";

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapDispatchToProps)(Columns);
