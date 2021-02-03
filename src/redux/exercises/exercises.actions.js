import { GET_EXERCISES_ARRAY } from "./exercises.types";
import { getExercisesByMuscles } from "../exercises/exercises.utils";

export const getExercises = (exercisesArray) => ({
  type: GET_EXERCISES_ARRAY,
  payload: getExercisesByMuscles(exercisesArray)
});
