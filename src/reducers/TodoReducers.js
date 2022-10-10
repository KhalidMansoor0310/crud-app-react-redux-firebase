import { UPDATE_TASK } from "../actions/ActionsTypes";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "GET_TODOS":
      return action.payload;
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "UPDATE_TASK":
    case UPDATE_TASK:
      const updatedTasks = [];
      const data = action.payload;
      state.map((task) => {
        if (task.id === data.id) {
          task.isNo = task.isNo;
          task.name = data.name;
          task.email = data.email;
        }
        updatedTasks.push(task);
      });
      return updatedTasks;
    case "LOADING_TRUE":

    case "LOADING_FALSE":
    default:
      return state;
  }
};

export default todoReducer;
