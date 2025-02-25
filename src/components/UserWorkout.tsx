// src/components/UserWorkout.tsx
import React from "react";
import { UserWorkoutProps } from "../utils/interfaces";
import WorkoutCard from "./WorkoutCard";

const UserWorkout: React.FC<UserWorkoutProps> = ({ workout, userProgress }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
      <WorkoutCard workout={workout} />
      <div className="mt-4 border-t pt-2">
        <p className="text-lg font-semibold">Your Progress</p>
        <p className="text-gray-700">
          Total Time: {userProgress.totalTime} min
        </p>
        <p className="text-gray-500">Last Done: {userProgress.date}</p>
      </div>
    </div>
  );
};

export default UserWorkout;
