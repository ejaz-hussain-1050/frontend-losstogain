import axios from "axios";
import { Blog, IWorkoutPlan, Workout } from "../utils/interfaces";

export const fetchGeneratedWorkouts = async (
  weight: number,
  height: number,
  description: string
): Promise<Workout[]> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/generateWorkouts`,
    {
      weight,
      height,
      description,
    }
  );
  return response.data.workouts;
};

export const fetchGeneratedWorkoutPlans = async (
  weight: number,
  height: number,
  description: string
): Promise<IWorkoutPlan[]> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/generateWorkoutPlans`,
    {
      weight,
      height,
      description,
    }
  );
  return response.data.workoutPlans;
};

export const fetchGeneratedHealthBlogs = async (
  weight: number,
  height: number,
  description: string
): Promise<Blog[]> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/generateBlogs`,
    {
      weight,
      height,
      description,
    }
  );
  return response.data.healthBlogs;
};
