// Imports from global libraries
import { combineReducers } from "redux";

// Imports custom variables
import exercisesReducer from "./exercises/exercises.reducer";

const rootReducer = combineReducers({
  exercises: exercisesReducer
});

// Let redux-persist handle local storage and global reducer of the application
export default rootReducer;
