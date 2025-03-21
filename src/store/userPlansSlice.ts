import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWorkoutPlan } from "../utils/interfaces";

interface WorkoutPlanState {
  workoutPlans: IWorkoutPlan[];
}

const initialState: WorkoutPlanState = {
  workoutPlans: [],
};

const userPlansSlice = createSlice({
  name: "userPlans",
  initialState,
  reducers: {
    setUserPlans: (state, action: PayloadAction<IWorkoutPlan[]>) => {
      state.workoutPlans = action.payload;
    },
    addUserPlan: (state, action: PayloadAction<IWorkoutPlan>) => {
      state.workoutPlans.push(action.payload);
    },
    removerUserPlan: (state, action: PayloadAction<string>) => {
      state.workoutPlans = state.workoutPlans.filter(
        (plan) => plan.id !== action.payload
      );
    },
  },
});

export const { setUserPlans, addUserPlan, removerUserPlan } =
  userPlansSlice.actions;
export default userPlansSlice.reducer;
