import * as actionConstants from './actionConstants';

// Action creators
export const addBucket = (text, bucketId) => {
  return {
    type: actionConstants.ADD_BUCKET,
    bucketId,
    text
  };
}

export const addTodo = (text, bucketId, todoId) => {
  return {
    type: actionConstants.ADD_TODO,
    todoId,
    bucketId,
    text
  };
}

export const toggleTodo = (todoId, bucketId) => {
  return {
    type: actionConstants.TOGGLE_TODO,
    todoId,
    bucketId
  };
}

export const deleteTodo = (todoId, bucketId) => {
  return {
    type: actionConstants.DELETE_TODO,
    todoId,
    bucketId
  };
}

export const editTodo = (todoId, bucketId) => {
  return {
    type: actionConstants.EDIT_TODO,
    todoId,
    bucketId
  };
}

export const saveTodo = (todoId, bucketId, text) => {
  return {
    type: actionConstants.SAVE_TODO,
    todoId,
    bucketId,
    text
  };
}

export const setVisibilityFilter = (filter, bucketId) => {
  return {
    type: actionConstants.SET_VISIBILITY_FILTER,
    bucketId,
    filter
  };
}