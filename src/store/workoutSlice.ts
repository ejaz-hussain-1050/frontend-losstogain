import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Workout } from "../utils/interfaces";

interface WorkoutState {
  workouts: Workout[];
}

const initialState: WorkoutState = {
  workouts: [],
};

const workoutSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    setWorkouts: (state, action: PayloadAction<Workout[]>) => {
      state.workouts = action.payload;
    },
    addWorkout: (state, action: PayloadAction<Workout>) => {
      state.workouts.push(action.payload);
    },
    removeWorkout: (state, action: PayloadAction<string>) => {
      state.workouts = state.workouts.filter(
        (workout) => workout.id !== action.payload
      );
    },
  },
});

export const { setWorkouts, addWorkout, removeWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;
