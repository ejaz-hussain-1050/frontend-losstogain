// src/pages/Profile.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateUserProfile } from "../api/auth";
import ConeChart from "../components/charts/PieChart";
import WorkoutPlanCard from "../components/WorkoutPlanCard";
import { setUser, UserState } from "../store/authSlice";
import { AppDispatch, RootState } from "../store/store";
import { IWorkoutPlan } from "../utils/interfaces";
import { workoutPlans } from "../utils/sampleData";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [previousState, setPreviousState] = useState<UserState | null>();
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();
  // Sample user data for demonstration purposes
  const profile = {
    totalWorkouts: 150,
    totalDuration: 3500, // total minutes spent working out
    fitnessGoals: "Build muscle and increase stamina",
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPreviousState((prevState) => {
      if (!prevState) return null;
      if (prevState) return { ...prevState, [e?.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    setPreviousState(user);
  }, []);
  return (
    <div className="w-full p-8  flex flex-col items-center">
      <div className="w-[80%] mx-auto bg-gray-800 text-white p-6 rounded-xl shadow-lg">
        {/* Header Section with Profile Picture and Basic Info */}
        <div className="flex flex-col md:flex-row items-center">
          <svg
            className="w-8 h-8 text-gray-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
          </svg>

          <div className="mt-4 md:mt-0 md:ml-6">
            <h1 className="text-3xl font-bold">{user?.fullName}</h1>
            <p className="text-gray-400">{user?.email}</p>
          </div>
        </div>

        {/* Personal Info and Fitness Summary */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Personal Info</h2>
            <p>
              <span className="font-bold">Age:</span> {user?.age}
            </p>
            <p>
              <span className="font-bold">Height:</span> {user?.height} cm
            </p>
            <p>
              <span className="font-bold">Weight:</span> {user?.weight} Kg
            </p>
          </div>

          {/* Fitness Summary */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Fitness Summary</h2>
            <p>
              <span className="font-bold">Total Workouts:</span>{" "}
              {profile.totalWorkouts}
            </p>
            <p>
              <span className="font-bold">Total Duration:</span>{" "}
              {profile.totalDuration} minutes
            </p>
            <p>
              <span className="font-bold">Goals:</span> {profile.fitnessGoals}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%]  h-[100%] p-6 flex flex-col md:flex-row justify-between">
        {/* <LineChart data={dailyWorkoutData} /> */}
        <div className="space-y-4">
          <div>
            <label htmlFor="weight" className="block mb-1">
              Weight (kg)
            </label>
            <input
              id="weight"
              name="weight"
              type="number"
              value={previousState?.weight}
              onChange={handleChange}
              placeholder="Enter your weight"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="height" className="block mb-1">
              Height (cm)
            </label>
            <input
              id="height"
              name="height"
              type="number"
              value={previousState?.height}
              onChange={handleChange}
              placeholder="Enter your height"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={previousState?.description}
              onChange={handleChange}
              placeholder="Describe your fitness goals"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            onClick={async (e) => {
              try {
                e.preventDefault();
                console.log({ previousState });
                await updateUserProfile({
                  uid: previousState?.uid ?? "",
                  height: previousState?.height,
                  weight: previousState?.weight,
                  description: previousState?.description,
                });
                dispatch(setUser(previousState));
                toast("Profile Updated Successfully");
                navigation("/dashboard");
              } catch (error: any) {
                console.log(error.message);
              }
            }}
            className="w-full bg-white text-gray-800 py-2 rounded hover:bg-primary-dark transition-colors"
          >
            Update Profile
          </button>
        </div>
        <ConeChart data={exerciseDistributionData} />
      </div>
      <div className=" mt-6 w-full  p-20 ">
        <h1 className="text-3xl font-bold mb-2 text-center">User Plans</h1>
        <p className=" text-center">
          Choose your personalized workout plans for yourself to be Fit
        </p>
      </div>
      <div className="p-6 w-full flex flex-wrap">
        {workoutPlans.slice(1, 4).map((item: IWorkoutPlan) => {
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
