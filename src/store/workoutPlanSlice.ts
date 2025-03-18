import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWorkoutPlan } from "../utils/interfaces";

interface WorkoutPlanState {
  workoutPlans: IWorkoutPlan[];
}

const initialState: WorkoutPlanState = {
  workoutPlans: [],
};

const workoutPlanSlice = createSlice({
  name: "workoutPlans",
  initialState,
  reducers: {
    setWorkoutPlans: (state, action: PayloadAction<IWorkoutPlan[]>) => {
      state.workoutPlans = action.payload;
    },
    addWorkoutPlan: (state, action: PayloadAction<IWorkoutPlan>) => {
      state.workoutPlans.push(action.payload);
    },
    removeWorkoutPlan: (state, action: PayloadAction<string>) => {
      state.workoutPlans = state.workoutPlans.filter(
        (plan) => plan.id !== action.payload
      );
    },
  },
});

export const { setWorkoutPlans, addWorkoutPlan, removeWorkoutPlan } =
  workoutPlanSlice.actions;
export default workoutPlanSlice.reducer;
