// src/components/WorkoutCard.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createWorkout, getWorkoutsByUser } from "../api/workoutApis";
import { AppDispatch, RootState } from "../store/store";
import { setWorkouts } from "../store/workoutSlice";
import { WorkoutCardProps } from "../utils/interfaces";

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  workout,
  isSelected,
  setSelected,
}) => {
  const navigation = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const storeWorkoutsData = async () => {
    const workouts = await getWorkoutsByUser(user?.uid ?? "");
    dispatch(setWorkouts(workouts));
  };

  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <div className=" rounded-lg p-5 max-h-80 w-80 m-5 justify-center flex-col items-center">
      <img
        src={workout.imageUrl}
        alt={"No Image"}
        className="h-40 w-40 object-cover rounded-full "
      />
      <h2 className="font-bold mt-2">{workout.name}</h2>
      <p className="text-gray-600 mt-1">{workout.description}</p>
      <p className="text-gray-800 font-semibold mt-2">
        Duration : {workout.duration} min
      </p>
      {isSelected ? (
        <button
          onClick={async () => {
            if (setSelected) setSelected(workout);
          }}
          className="bg-gray-800 text-white rounded-md w-full p-2 mt-2"
        >
          Details
        </button>
      ) : (
        <button
          onClick={async () => {
            try {
              await createWorkout(workout, user?.uid ?? "");
              await storeWorkoutsData();
              toast("Workout Added For User");

              navigation("/dashboard");
            } catch (error) {
              console.log(error);
            }
          }}
          className="bg-gray-800 text-white rounded-md w-full p-2 mt-2"
        >
          Start
        </button>
      )}
    </div>
  );
};

export default WorkoutCard;
