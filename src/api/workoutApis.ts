// workoutService.ts
import axios, { AxiosResponse } from "axios";
import { IWorkoutPlan, Workout } from "../utils/interfaces";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export interface Progress {
  workoutId: string;
  duration: number;
  date?: Date;
}

// Workout Plans
export const createWorkoutPlan = async (
  workoutPlan: IWorkoutPlan,
  uid: string
): Promise<AxiosResponse<{ id: string; message: string }>> => {
  console.log(workoutPlan, uid);
  return axios.post(API_BASE_URL + "/workoutPlans", {
    ...workoutPlan,
    userId: uid,
  });
};

export const getWorkoutPlansByUser = async (
  userId: string
): Promise<IWorkoutPlan[]> => {
  const response = await axios.get(`${API_BASE_URL}/workoutPlans/${userId}`);
  console.log(response.data);
  return response.data;
};

// Workouts
export const createWorkout = async (
  workout: Workout,
  uid: string
): Promise<AxiosResponse<{ id: string; message: string }>> => {
  return axios.post(`${API_BASE_URL}/workouts`, {
    ...workout,
    userId: uid,
  });
};

export const getWorkoutsByUser = async (userId: string): Promise<Workout[]> => {
  const response = await axios.get(`${API_BASE_URL}/workouts/${userId}`);
  console.log(response.data);
  return response.data;
};
export const deleteWorkout = async (workoutId: string): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/workouts/${workoutId}`);
    console.log("Workout deleted successfully");
  } catch (error) {
    console.error("Error deleting workout:", error);
    throw error;
  }
};
// Progress Tracking
export const trackProgress = async (
  progress: Progress
): Promise<AxiosResponse<{ id: string; message: string }>> => {
  console.log(progress);
  const response = await axios.post(`${API_BASE_URL}/progress`, progress);
  return response.data;
};

export const getWorkoutProgress = async (
  workoutId: string
): Promise<Progress[]> => {
  const response = await axios.get(`${API_BASE_URL}/progress/${workoutId}`);
  console.log(response.data);
  return response.data;
};
