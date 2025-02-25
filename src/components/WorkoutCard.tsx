// src/components/WorkoutCard.tsx
import React from "react";
import { WorkoutCardProps } from "../utils/interfaces";

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout }) => {
  return (
    <div className=" rounded-lg p-5 max-h-80 w-80">
      <img
        src={workout.imageUrl}
        alt={workout.name}
        className="h-40 w-40 object-cover rounded-full "
      />
      <h2 className="font-bold mt-2">{workout.name}</h2>
      <p className="text-gray-600 mt-1">{workout.description}</p>
      <p className="text-gray-800 font-semibold mt-2">
        Duration : {workout.duration} min
      </p>
      <button className="bg-gray-800 text-white rounded-md w-full p-2 mt-2">
        Start
      </button>
    </div>
  );
};

export default WorkoutCard;
