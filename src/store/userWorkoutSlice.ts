import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Workout } from "../utils/interfaces";

interface WorkoutState {
  workouts: Workout[];
}

const initialState: WorkoutState = {
  workouts: [],
};

const userWorkoutSlice = createSlice({
  name: "userWorkouts",
  initialState,
  reducers: {
    setUserWorkouts: (state, action: PayloadAction<Workout[]>) => {
      state.workouts = action.payload;
    },
    addUserWorkout: (state, action: PayloadAction<Workout>) => {
      state.workouts.push(action.payload);
    },
    removeUserWorkout: (state, action: PayloadAction<string>) => {
      state.workouts = state.workouts.filter(
        (workout) => workout.id !== action.payload
      );
    },
  },
});

export const { setUserWorkouts, addUserWorkout, removeUserWorkout } =
  userWorkoutSlice.actions;
export default userWorkoutSlice.reducer;
