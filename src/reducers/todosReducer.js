export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [...state, {
        text: action.text,
        completed: false,
        todoId: action.todoId,
        isEditable: false,
      }];
    }
    
    case 'TOGGLE_TODO': {
      return state.map((todo, id) => {
        if (id === action.todoId) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    }
    
    case 'DELETE_TODO': {
      var filteredTodos = state.filter(todo => todo.todoId !== action.todoId);
      return filteredTodos.map((todo, id) => {
        todo.todoId = id;
        return todo;
      });
    }

    case 'EDIT_TODO': {
      return state.map((todo, id) => {
        if (id === action.todoId) {
          todo.isEditable = true;
        }
        return todo;
      });
    }
    
    case 'SAVE_TODO': {
      return state.map((todo, id) => {
        if (id === action.todoId) {
          todo.isEditable = false;
          todo.text = action.text;
        }
        return todo;
      });
    }

    default: {
      return state;
    }
  }
}