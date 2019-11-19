import React from "react";
import Todo from "../components/Todo";

let TodoContainer = ({
  onClick,
  completed,
  isEditable,
  text,
  onDeleteTodo,
  onEditTodo,
  onTodoEdited
}) => {
  const styles = {
    textDecoration: completed ? "line-through" : "none"
  };

  var submitForm = (input, event) => {
    event.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    onTodoEdited(input.value);
  };

  var handleChange = (input, event) => {
    input.value = event.target.value;
  };
  
  return (
    <Todo
      isEditable={isEditable}
      onClick={onClick}
      styles={styles}
      onEditTodo={onEditTodo}
      onDeleteTodo={onDeleteTodo}
      submitForm={submitForm}
      text={text}
      handleChange={handleChange}
    />
  );
};

export default TodoContainer;
