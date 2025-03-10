// src/pages/Plans.tsx
import React, { useState } from "react";
import PlanDetails from "../components/PlanDetails";
import WorkoutPlanCard from "../components/WorkoutPlanCard";
import { WorkoutPlan } from "../utils/interfaces";
import { workoutPlans } from "../utils/sampleData";

const WorkoutPlanPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<WorkoutPlan | undefined>(
    undefined
  );
  return (
    <div className="flex flex-wrap w-[80%] h-auto gap-5">
      {selectedPlan === undefined && (
        <div className="bg-gray-800 w-full text-white p-20 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-2 text-center">
            Personalized AI Workout Plans
          </h1>
          <p className=" text-center">
            Choose your personalized workout plans for yourself to be Fit
          </p>
        </div>
      )}
      {selectedPlan === undefined ? (
        workoutPlans.map((item: WorkoutPlan) => {
          return (
            <div
              className="md:w-[40%] cursor-pointer"
              onClick={() => {
                setSelectedPlan(item);
              }}
            >
              <WorkoutPlanCard plan={item} />
            </div>
          );
        })
      ) : (
        <PlanDetails plan={selectedPlan} />
      )}
    </div>
  );
};

export default WorkoutPlanPage;
