// src/components/UserWorkoutPlan.tsx
import React from "react";
import { UserWorkoutPlanProps } from "../utils/interfaces";
import UserWorkout from "./UserWorkout";

const UserWorkoutPlan: React.FC<UserWorkoutPlanProps> = ({ userPlan }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">{userPlan.name}</h1>
      <div className="space-y-4">
        {userPlan.userWorkouts.map(({ workout, progress }) => (
          <UserWorkout
            key={workout.id}
            workout={workout}
            userProgress={progress}
          />
        ))}
      </div>
    </div>
  );
};

export default UserWorkoutPlan;
