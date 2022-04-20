import { ADD_TODO, DELETE_TODO } from "./todoActionType";

export const addTodo = (data: Object) => {
  return {
    type: ADD_TODO,
    payload: data
  }
}