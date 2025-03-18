import axios from "axios";
import { Blog, IWorkoutPlan, Workout } from "../utils/interfaces";

const API_URL = "http://localhost:3000"; // Adjust based on your backend URL

export const fetchGeneratedWorkouts = async (
  weight: number,
  height: number,
  description: string
): Promise<Workout[]> => {
  const response = await axios.post(`${API_URL}/generateWorkouts`, {
    weight,
    height,
    description,
  });
  return response.data.workouts;
};

export const fetchGeneratedWorkoutPlans = async (
  weight: number,
  height: number,
  description: string
): Promise<IWorkoutPlan[]> => {
  const response = await axios.post(`${API_URL}/generateWorkoutPlans`, {
    weight,
    height,
    description,
  });
  return response.data.workoutPlans;
};

export const fetchGeneratedHealthBlogs = async (
  weight: number,
  height: number,
  description: string
): Promise<Blog[]> => {
  const response = await axios.post(`${API_URL}/generateBlogs`, {
    weight,
    height,
    description,
  });
  return response.data.healthBlogs;
};
