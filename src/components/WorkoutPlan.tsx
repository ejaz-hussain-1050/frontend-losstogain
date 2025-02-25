// src/components/WorkoutPlan.tsx
import React from "react";
import { WorkoutPlanProps } from "../utils/interfaces";
import { workouts } from "../utils/sampleData";
import WorkoutCard from "./WorkoutCard";

const WorkoutPlan: React.FC<WorkoutPlanProps> = ({ plan }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">{plan.name}</h1>
      <p className="text-xl mb-4">{plan.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plan?.workoutIds?.map((id) => {
          const temp = workouts.find((item) => item.id === id);
          return temp ? <WorkoutCard key={temp.id} workout={temp} /> : <></>;
        })}
      </div>
    </div>
  );
};

export default WorkoutPlan;
