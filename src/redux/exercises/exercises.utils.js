export const getExercisesByMuscles = (exercisesArray) => {
  //Transform object's data into the array
  return Object.entries(
    exercisesArray.reduce((exercises, exercise) => {
    //Each exercise is an array which contaign muscles group
    const { muscles } = exercise;
    //If name of exercise group not in exercise array than add it
    exercises[muscles] = exercises[muscles]
    ? [...exercises[muscles], exercise]
    : [exercise];

    return exercises;
    }, {})
  );
};
