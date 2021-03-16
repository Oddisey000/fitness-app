import { GET_EXERCISES_ARRAY, FILTER_EXERCISES_ARRAY, SAVE_MUSCLES_GROUP } from "./exercises.types";
import { getExercisesByMuscles } from "../exercises/exercises.utils";

export const getExercises = (exercisesArray) => ({
  type: GET_EXERCISES_ARRAY,
  payload: exercisesArray
});

export const filterExercises = (exercisesArray) => ({
  type: FILTER_EXERCISES_ARRAY,
  payload: getExercisesByMuscles(exercisesArray)
});

export const saveMuscleGroup = (exercisesArray) => ({
  type: SAVE_MUSCLES_GROUP,
  payload: getExercisesByMuscles(exercisesArray)
});
