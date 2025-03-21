// Enums for better consistency
export enum WorkoutCategory {
  STRENGTH = "Strength",
  CARDIO = "Cardio",
  YOGA = "Yoga",
  HIIT = "HIIT",
  FLEXIBILITY = "Flexibility",
}

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";
export type ProgressStatus = "Not Started" | "In Progress" | "Completed";

// Core Workout Interface
export interface Workout {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  duration: number; // Duration in minutes
  createdAt?: string;
  updatedAt?: string;
}

// Workout Plan Interface
export interface IWorkoutPlan {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  duration: number; // Total duration in minutes
  workouts?: Workout[]; // List of workouts in the plan
  workoutIds?: string[]; // Store workout IDs separately for reference
}

// User's Workout Plan
export interface UserWorkoutPlan {
  id: string;
  name: string;
  userWorkouts: {
    workout: Workout;
    progress: UserProgress;
  }[];
}

// Blog Interface (Optimized for SEO)
export interface Blog {
  id: string;
  title: string;
  author: string;
  writeTime: Date;
  content: string;
  imageUrl: string;
}

// UI Component Props
export interface WorkoutCardProps {
  workout: Workout;
  isSelected?: boolean;
  setSelected?: (workout: Workout) => void;
}

export interface WorkoutPlanCardProps {
  plan: IWorkoutPlan;
}

export interface UserWorkoutPlanProps {
  userPlan: UserWorkoutPlan;
}

export interface HeaderProps {
  toggleSidebar: () => void;
}

export interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  userRole?: "admin" | "user"; // Role-based UI
}
