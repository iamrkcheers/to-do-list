import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import {
  toggleTodo,
  editTodo,
  deleteTodo,
  saveTodo
} from "../actions/actionCreators";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL": {
      return todos;
    }

    case "SHOW_COMPLETED": {
      return todos.filter(todo => todo.completed);
    }

    case "SHOW_ACTIVE": {
      return todos.filter(todo => !todo.completed);
    }

    default: {
      return todos;
    }
  }
};

var mapStateToProps = state => {
  var bucket = state.find(
    bucket => bucket.bucketId === Number(window.location.pathname.split("/").pop())
  );
  return {
    todos: getVisibleTodos(bucket.todos, bucket.visibilityFilter),
    bucket
  };
};

var mapDispatchToProps = dispatch => {
  return {
    onTodoClick: (todoId, bucketId) => {
      dispatch(toggleTodo(todoId, bucketId));
    },
    onEditTodo: (todoId, bucketId) => {
      dispatch(editTodo(todoId, bucketId));
    },
    onDeleteTodo: (todoId, bucketId) => {
      dispatch(deleteTodo(todoId, bucketId));
    },
    onTodoEdited: (todoId, bucketId, text) => {
      dispatch(saveTodo(todoId, bucketId, text));
    }
  };
};

let TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
