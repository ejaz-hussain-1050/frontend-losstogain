// src/components/PlanDetails.tsx
import React from "react";
import { IWorkoutPlan, Workout } from "../utils/interfaces";
import WorkoutMiniCard from "./WorkoutMiniCard";

interface PlanDetailsProps {
  plan: IWorkoutPlan;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan }) => {
  return (
    <div className="space-y-6">
      {/* Plan Details Card */}
      <div className="bg-gray-800 text-white p-20 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2 text-center">{plan.name}</h1>
        <p className="mb-2 text-center">{plan.description}</p>
        <p className="italic text-center"> {plan.duration} Days</p>
      </div>

      {/* Exercises Section */}
      <div>
        <div className="flex flex-col md:flex-row justify-between">
          <h2 className="text-xl font-semibold mb-4">Exercises</h2>
          <button className="bg-gray-800 text-white rounded-md w-full md:w-[10%] p-2 mt-2">
            Enroll Plan
          </button>
        </div>
        <div className="space-y-4">
          {plan?.workouts?.map((item: Workout) => {
            return <WorkoutMiniCard workout={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
