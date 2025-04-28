import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteWorkout, trackProgress } from "../api/workoutApis";
import { AppDispatch } from "../store/store";
import { removeUserWorkout } from "../store/userWorkoutSlice";
import { Workout } from "../utils/interfaces";
import BarChart from "./charts/BarChart";

const WorkoutProgress = ({
  workout,
  setSelected,
}: {
  workout: Workout;
  setSelected?: (workout: Workout | undefined) => void;
}) => {
  const [duration, setDuration] = useState(0);

  const dispatch = useDispatch<AppDispatch>();

  const handleProgressSubmit = async () => {
    try {
      await trackProgress({ workoutId: workout.id, duration });
      toast("Progress Updated successfully!");
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  };

  const handleDeleteWorkout = async (workoutId: string) => {
    try {
      await deleteWorkout(workoutId);

      dispatch(removeUserWorkout(workout.id));
      toast("Workout deleted successfully!");
      // Optionally refresh workouts list
    } catch (error) {
      console.log(error);
      toast("Failed to delete workout.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6  w-full max-w-lg text-center">
      <div className="p-[2rem]">
        <BarChart data={sampleBarChartData} />
      </div>

      <p className="text-gray-800 font-semibold mt-2">
        Duration: {workout.duration} min
      </p>
      <div className="mt-4">
        <label className="block font-semibold mb-2">
          Enter Your workout duration Today:
        </label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="border border-gray-300 p-2 w-full rounded-md"
          placeholder="Enter minutes completed"
        />
        <button
          onClick={() => {
            if (setSelected) setSelected(undefined);
          }}
          className="mt-3  text-dark px-4 py-2 rounded-md "
        >
          Cancel
        </button>
        <button
          onClick={handleProgressSubmit}
          className="m-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Submit Progress
        </button>
        <button
          onClick={() => handleDeleteWorkout(workout.id)}
          className="m-3 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Delete Workout
        </button>
      </div>
    </div>
  );
};

export default WorkoutProgress;

const sampleBarChartData = [
  { name: "Mon", value: 60 },
  { name: "Tue", value: 45 },
  { name: "Wed", value: 30 },
  { name: "Thu", value: 50 },
  { name: "Fri", value: 75 },
  { name: "Sat", value: 20 },
  { name: "Sun", value: 90 },
];
