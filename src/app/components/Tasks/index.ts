import { connect } from "react-redux";
import Tasks from "./Tasks";

const mapStateToProps = ({ tasks }) => {
  return {
    tasks
  };
};

export default connect(mapStateToProps)(Tasks);
