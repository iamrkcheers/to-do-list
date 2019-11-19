import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actionCreators";
import AddTodo from "../components/AddTodo";

let AddTodoContainer = ({ bucket, dispatch }) => {
  // Redirect if local storage deleted
  if (bucket === undefined) window.location.replace("/");

  var nextTodoId = bucket.todos.length;
  
  var submitForm = (input, event) => {
    event.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addTodo(input.value, bucket.bucketId, nextTodoId));
    input.value = "";
  };
  return <AddTodo submitForm={submitForm} />;
};

var mapStateToProps = state => {
  return {
    bucket: state.find(
      bucket =>
        bucket.bucketId === Number(window.location.pathname.split("/").pop())
    )
  };
};

export default AddTodoContainer = connect(mapStateToProps)(AddTodoContainer);
