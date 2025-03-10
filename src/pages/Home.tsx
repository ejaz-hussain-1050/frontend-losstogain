import { PieChart } from "react-minimal-pie-chart";
import BarChart from "../components/charts/BarChart";
import ConeChart from "../components/charts/PieChart";
import WorkoutPlanCard from "../components/WorkoutPlanCard";
import { WorkoutPlan } from "../utils/interfaces";
import { workoutPlans } from "../utils/sampleData";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
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
        <div className="w-[15%]">
          <PieChart
            labelPosition={10}
            data={[
              { title: "Completed", value: 30, color: "gray" },
              { title: "Remaining", value: 40, color: "#C13C37" },
            ]}
          />
        </div>
        ;
        <ConeChart data={exerciseDistributionData} />
      </div>
      <div className=" mt-6 w-full  p-20 ">
        <h1 className="text-3xl font-bold mb-2 text-center">Workout Plans</h1>
        <p className=" text-center">
          Choose your personalized workout plans for yourself to be Fit
        </p>
      </div>
      <div className="p-6 w-full flex flex-wrap">
        {workoutPlans.slice(1, 3).map((item: WorkoutPlan) => {
          return (
            <div className="md:w-[40%] cursor-pointer">
              <WorkoutPlanCard plan={item} />
            </div>
          );
        })}
      </div>
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
