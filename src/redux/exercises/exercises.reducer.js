import INITIAL_STATE from "../root.state";
import {
  GET_EXERCISES_ARRAY,
  FILTER_EXERCISES_ARRAY,
  SAVE_MUSCLES_GROUP
} from "./exercises.types";

const exercisesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EXERCISES_ARRAY:
      return {
        ...state,
        data: action.payload
      };
    case FILTER_EXERCISES_ARRAY:
      return {
        ...state,
        exercises: action.payload
      };
    case SAVE_MUSCLES_GROUP:
      return {
        ...state,
        muscles: action.payload
      };
    default:
      return state;
  }
};

export default exercisesReducer;
