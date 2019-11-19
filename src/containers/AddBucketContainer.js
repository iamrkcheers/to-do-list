import React from "react";
import { connect } from "react-redux";
import { addBucket } from "../actions/actionCreators";
import AddBucket from "../components/AddBucket";

let AddBucketContainer = ({ buckets, dispatch }) => {
  var nextBucketId = buckets.length;
  
  var submitForm = (input, event) => {
    event.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addBucket(input.value, nextBucketId));
    input.value = "";
  };
  return <AddBucket submitForm={submitForm} />;
};

var mapStateToProps = state => {
  return {
    buckets: state
  };
};

export default AddBucketContainer = connect(mapStateToProps)(
  AddBucketContainer
);
