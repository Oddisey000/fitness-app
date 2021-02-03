import INITIAL_STATE from "../root.state";
import { GET_EXERCISES_ARRAY } from "./exercises.types";

const exercisesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EXERCISES_ARRAY:
      return {
        ...state,
        exercises: action.payload
      };
    default:
      return state;
  }
};

export default exercisesReducer;
