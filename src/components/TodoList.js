import React from "react";
import TodoContainer from "../containers/TodoContainer";

let TodoList = ({
  todos,
  bucket,
  onTodoClick,
  onEditTodo,
  onDeleteTodo,
  onTodoEdited
}) => {
  return (
    <div className="list">
      <ul>
        {todos.map(todo => (
          <TodoContainer
            key={todo.todoId}
            {...todo}
            onClick={() => onTodoClick(todo.todoId, bucket.bucketId)}
            onDeleteTodo={() => onDeleteTodo(todo.todoId, bucket.bucketId)}
            onEditTodo={() => onEditTodo(todo.todoId, bucket.bucketId)}
            onTodoEdited={text =>
              onTodoEdited(todo.todoId, bucket.bucketId, text)
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
