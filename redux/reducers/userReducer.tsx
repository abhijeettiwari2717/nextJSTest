import { ADD_TODO, DELETE_TODO } from "redux/actions/todoActionType";

export const userReducer = (state = [], action: any) => {

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload]
      }
    case DELETE_TODO:
      return state.filter((todo: Object, i: number) => i !== action.id)
    default:
      return state
  }
}