import initialState from '../initialState';
import { loadStateFromLocalStorage } from '../localStorage';
import { todosReducer } from './todosReducer';
import { visibilityFilterReducer } from './visibilityFilterReducer';

// Main reducer to alter the state tree
export const bucketsReducer = (state = loadStateFromLocalStorage(initialState.buckets), action) => {
  switch (action.type) {
    case 'ADD_BUCKET': {
      return [...state, {
        name: action.text,
        bucketId: action.bucketId,
        visibilityFilter: "SHOW_ALL",
        todos: []
      }];
    }
    
    case 'ADD_TODO':
    case 'DELETE_TODO':
    case 'EDIT_TODO':
    case 'SAVE_TODO':
    case 'TOGGLE_TODO': {
      return state.map((bucket, id) => {
        if (id === action.bucketId) {
          return {
            ...bucket,
            todos: todosReducer(bucket.todos, action)
          }
        }
        return bucket;
      });
    }
    
    case 'SET_VISIBILITY_FILTER': {
      return state.map((bucket, id) => {
        if (id === action.bucketId) {
          return {
            ...bucket,
            visibilityFilter: visibilityFilterReducer(bucket.visibilityFilter, action)
          }
        }
        return bucket;
      });
    }
    
    default: {
      return state;
    }
  }
}