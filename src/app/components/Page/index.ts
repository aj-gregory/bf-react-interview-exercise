import { connect } from "react-redux";
import Page from "./Page";

const mapStateToProps = ({ columns }) => {
  return {
    columns
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
