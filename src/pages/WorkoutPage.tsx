import WorkoutCard from "../components/WorkoutCard";
import { workouts } from "../utils/sampleData";

export default function WorkoutPage() {
  return (
    <div className="flex flex-wrap w-[80%] h-auto gap-5">
      <div className="bg-gray-800 w-full text-white p-20 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2 text-center">Exercises</h1>
        <p className="mb-2 text-center">
          All Exercises that will be displayed over here is done{" "}
        </p>
      </div>
      {workouts.map((item) => {
        return <WorkoutCard workout={item} />;
      })}
    </div>
  );
}
// src/data/workouts.ts
