// src/store/planSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWorkoutPlan } from "../utils/interfaces";

interface PlanState {
  plan: IWorkoutPlan | null;
}

const initialState: PlanState = {
  plan: null,
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    // Sets the single workout plan
    setPlan(state, action: PayloadAction<IWorkoutPlan>) {
      state.plan = action.payload;
    },
    // Updates fields of the existing plan (if any)
    updatePlan(state, action: PayloadAction<Partial<IWorkoutPlan>>) {
      if (state.plan) {
        state.plan = { ...state.plan, ...action.payload };
      }
    },
    // Removes the current plan (sets it to null)
    removePlan(state) {
      state.plan = null;
    },
  },
});

export const { setPlan, updatePlan, removePlan } = planSlice.actions;
export default planSlice.reducer;
