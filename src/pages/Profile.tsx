// src/pages/Profile.tsx
import React from "react";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import WorkoutPlanCard from "../components/WorkoutPlanCard";
import { WorkoutPlan } from "../utils/interfaces";
import { workoutPlans } from "../utils/sampleData";

interface UserProfile {
  name: string;
  email: string;
  age: number;
  height: string;
  weight: string;
  profilePicture?: string;
  totalWorkouts: number;
  totalDuration: number; // in minutes
  fitnessGoals: string;
}

const Profile: React.FC = () => {
  // Sample user data for demonstration purposes
  const user: UserProfile = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
    height: "6 ft",
    weight: "180 lbs",
    totalWorkouts: 150,
    totalDuration: 3500, // total minutes spent working out
    fitnessGoals: "Build muscle and increase stamina",
  };

  return (
    <div className="w-full p-8  flex flex-col items-center">
      <div className="w-[80%] mx-auto bg-gray-800 text-white p-6 rounded-xl shadow-lg">
        {/* Header Section with Profile Picture and Basic Info */}
        <div className="flex flex-col md:flex-row items-center">
          {user.profilePicture ? (
            <svg
              className="w-8 h-8 text-gray-700"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
            </svg>
          ) : (
            <img
              src={user.profilePicture}
              alt={user.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-primary"
            />
          )}
          <div className="mt-4 md:mt-0 md:ml-6">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-400">{user.email}</p>
          </div>
        </div>

        {/* Personal Info and Fitness Summary */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Personal Info</h2>
            <p>
              <span className="font-bold">Age:</span> {user.age}
            </p>
            <p>
              <span className="font-bold">Height:</span> {user.height}
            </p>
            <p>
              <span className="font-bold">Weight:</span> {user.weight}
            </p>
          </div>

          {/* Fitness Summary */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Fitness Summary</h2>
            <p>
              <span className="font-bold">Total Workouts:</span>{" "}
              {user.totalWorkouts}
            </p>
            <p>
              <span className="font-bold">Total Duration:</span>{" "}
              {user.totalDuration} minutes
            </p>
            <p>
              <span className="font-bold">Goals:</span> {user.fitnessGoals}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%]  h-[100%] p-6 flex flex-col md:flex-row justify-between">
        {/* <LineChart data={dailyWorkoutData} /> */}
        <BarChart data={sampleBarChartData} />
        <PieChart data={exerciseDistributionData} />
      </div>
      <div className=" mt-6 w-full  p-20 ">
        <h1 className="text-3xl font-bold mb-2 text-center">User Plans</h1>
        <p className=" text-center">
          Choose your personalized workout plans for yourself to be Fit
        </p>
      </div>
      <div className="p-6 w-full flex flex-wrap">
        {workoutPlans.slice(1, 4).map((item: WorkoutPlan) => {
          return (
            <div className="md:w-[40%] cursor-pointer">
              <WorkoutPlanCard plan={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
export const sampleBarChartData = [
  { name: "Mon", value: 10 },
  { name: "Tue", value: 422 },
  { name: "Wed", value: 303 },
  { name: "Thu", value: 501 },
  { name: "Fri", value: 752 },
  { name: "Sat", value: 20 },
  { name: "Sun", value: 903 },
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
  { name: "Cardio", value: 90 },
  { name: "Strength", value: 10 },
];
