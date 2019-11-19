import { connect } from "react-redux";
import Link from "../components/Link";
import { setVisibilityFilter } from "../actions/actionCreators";

var mapStateToProps = (state, ownProps) => {
  var bucket = state.find(
    bucket => bucket.bucketId === Number(window.location.pathname.split("/").pop())
  );
  return {
    active: ownProps.filter === bucket.visibilityFilter,
    bucketId: bucket.bucketId
  };
};

var mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: bucketId => {
      dispatch(setVisibilityFilter(ownProps.filter, bucketId));
    }
  };
};

let FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
