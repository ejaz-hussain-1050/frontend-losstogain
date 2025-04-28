import { useState } from "react";
import { useSelector } from "react-redux";
import BarChart from "../components/charts/BarChart";
import ConeChart from "../components/charts/PieChart";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutProgress from "../components/WorkoutProgress";
import { RootState } from "../store/store";
import { Workout } from "../utils/interfaces";

export default function Home() {
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | undefined>(
    undefined
  );
  const userWorkouts = useSelector(
    (state: RootState) => state.userWorkouts.workouts
  );
  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="bg-gray-800 w-full text-white p-20 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2 text-center">LOSS TO GAIN</h1>
        <p className=" text-center">
          Choose your personalized workout plans for yourself to be Fit
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:w-[50%] mt-10 items-center">
        {/* Calories Burnt */}
        <div className="flex-1 bg-white rounded-lg p-2 ">
          <p className="mb-2">Calories Burnt</p>
          <p className="text-2xl text-center text-bold mb-2">500 kcal</p>
          <p className="text-end">10%</p>
        </div>

        {/* Steps Taken */}
        <div className="flex-1 bg-white  rounded-lg p-2">
          <p className=" mb-2">Steps Taken</p>
          <p className="text-2xl text-center text-bold mb-2">10,000</p>
          <p className="text-end">10%</p>
        </div>

        {/* Workouts */}
        <div className="flex-1 bg-white rounded-lg p-2">
          <p className="mb-2">Workouts</p>
          <p className="text-2xl text-center text-bold mb-2">5</p>
          <p className="text-end">10%</p>
        </div>
      </div>
      <div className="w-[80%]  h-[100%] p-6 flex flex-col md:flex-row justify-between">
        {/* <LineChart data={dailyWorkoutData} /> */}
        <BarChart data={sampleBarChartData} />

        <ConeChart data={exerciseDistributionData} />
      </div>
      <div className=" mt-6 w-full  p-20 ">
        <h1 className="text-3xl font-bold mb-1 text-center">
          {selectedWorkout ? selectedWorkout.name : "User Workouts"}
        </h1>
        {selectedWorkout === undefined && (
          <p className=" text-center">
            Choose your personalized workout plans for yourself to be Fit
          </p>
        )}
      </div>
      {selectedWorkout ? (
        <div className="p-6">
          <WorkoutProgress
            workout={selectedWorkout}
            setSelected={(workout: Workout | undefined) => {
              setSelectedWorkout(workout);
            }}
          />
        </div>
      ) : (
        <div className="p-6 w-full flex flex-wrap">
          {userWorkouts?.map((item: Workout) => {
            return (
              <WorkoutCard
                workout={item}
                isSelected={true}
                setSelected={(workout: Workout) => {
                  setSelectedWorkout(workout);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
// src/data/sampleData.ts
export const sampleBarChartData = [
  { name: "Mon", value: 60 },
  { name: "Tue", value: 45 },
  { name: "Wed", value: 30 },
  { name: "Thu", value: 50 },
  { name: "Fri", value: 75 },
  { name: "Sat", value: 20 },
  { name: "Sun", value: 90 },
];

// const dailyWorkoutData = [
//   { name: "Mon", value: 60 },
//   { name: "Tue", value: 45 },
//   { name: "Wed", value: 30 },
//   { name: "Thu", value: 50 },
//   { name: "Fri", value: 75 },
//   { name: "Sat", value: 0 },
//   { name: "Sun", value: 90 },
// ];

// Sample data for exercise distribution (pie chart)
const exerciseDistributionData = [
  { name: "Cardio", value: 40 },
  { name: "Strength", value: 35 },
];
