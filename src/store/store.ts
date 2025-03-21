// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import blogsSlice from "./blogsSlice";
import planReducer from "./planSlice";
import userPlansSlice from "./userPlansSlice";
import userWorkoutSlice from "./userWorkoutSlice";
import workoutPlanSlice from "./workoutPlanSlice";
import workoutSlice from "./workoutSlice";

const store = configureStore({
  reducer: {
    plan: planReducer,
    workouts: workoutSlice,
    workoutPlans: workoutPlanSlice,
    auth: authSlice,
    blogs: blogsSlice,
    userPlans: userPlansSlice,
    userWorkouts: userWorkoutSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
