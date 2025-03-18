// src/components/WorkoutPlan.tsx
import React from "react";
import { IWorkoutPlan, Workout } from "../utils/interfaces";
import WorkoutCard from "./WorkoutCard";

const WorkoutPlan: React.FC<IWorkoutPlan> = (plan) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">{plan.name}</h1>
      <p className="text-xl mb-4">{plan.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plan?.workouts?.map((item: Workout) => {
          return <WorkoutCard key={item.name} workout={item} />;
        })}
      </div>
    </div>
  );
};

export default WorkoutPlan;
