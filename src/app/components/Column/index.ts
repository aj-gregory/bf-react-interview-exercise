import { connect } from "react-redux";
import Column from "./Column";

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapDispatchToProps)(Column);
