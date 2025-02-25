// src/interfaces.ts

export interface Workout {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  duration: number;
  created_at?: string;
  updated_at?: string;
}

export interface UserProgress {
  totalTime: number;
  date: string;
}

export interface WorkoutPlan {
  imageUrl: string;
  id: string;
  name: string;
  workouts?: Workout[];
  description?: string;
  workoutIds?: string[];
  duration: number;
}

export interface WorkoutPlanCardProps {
  plan: WorkoutPlan;
}

export interface UserWorkoutPlanType {
  id: string;
  name: string;
  userWorkouts: {
    workout: Workout;
    progress: UserProgress;
  }[];
}

export interface WorkoutCardProps {
  workout: Workout;
}

export interface UserWorkoutProps {
  workout: Workout;
  userProgress: UserProgress;
}

export interface WorkoutPlanProps {
  plan: WorkoutPlan;
}

export interface UserWorkoutPlanProps {
  userPlan: UserWorkoutPlanType;
}

export interface HeaderProps {
  toggleSidebar: () => void;
}

export interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

// src/interfaces.ts
export interface Blog {
  id: string;
  title: string;
  author: string;
  writeTime: string; // You can also use Date if you prefer
  content: string;
  imageUrl: string;
}
