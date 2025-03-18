import { useSelector } from "react-redux";
import WorkoutCard from "../components/WorkoutCard";
import { RootState } from "../store/store";
import { Workout } from "../utils/interfaces";

export default function WorkoutPage() {
  const workouts = useSelector((state: RootState) => state.workouts.workouts);
  console.log(workouts);
  return (
    <div className="flex flex-wrap w-[80%] h-auto gap-5">
      <div className="bg-gray-800 w-full text-white p-20 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2 text-center">Exercises</h1>
        <p className="mb-2 text-center">
          All Exercises that will be displayed over here is done{" "}
        </p>
      </div>
      {workouts.map((item: Workout) => {
        return <WorkoutCard workout={item} />;
      })}
    </div>
  );
}
// src/data/workouts.ts
