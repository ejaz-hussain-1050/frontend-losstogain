/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Wrapper.tsx
import { doc, DocumentSnapshot, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  fetchGeneratedHealthBlogs,
  fetchGeneratedWorkoutPlans,
  fetchGeneratedWorkouts,
} from "../api/ai";
import { getWorkoutPlansByUser, getWorkoutsByUser } from "../api/workoutApis";
import { auth, db } from "../config/firebaseConfig";
import { logout, setUser } from "../store/authSlice";
import { setBlogs } from "../store/blogsSlice";
import { AppDispatch, RootState } from "../store/store";
import { setUserPlans } from "../store/userPlansSlice";
import { setUserWorkouts } from "../store/userWorkoutSlice";
import { setWorkoutPlans } from "../store/workoutPlanSlice";
import { setWorkouts } from "../store/workoutSlice";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Wrapper: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const navigation = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        console.log({ currentUser });
        // Fetch user details from Firestore
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap: DocumentSnapshot = await getDoc(userRef);

        if (userSnap.exists()) {
          const user: any = userSnap.data();
          dispatch(
            setUser({
              uid: currentUser?.uid ?? "",
              email: user?.email ?? " ",
              fullName: user.fullName,
              age: user?.age,
              height: user?.height,
              weight: user?.weight,
              description: user?.description,
            })
          );
        } else {
          dispatch(
            setUser({ uid: currentUser.uid, email: currentUser?.email ?? "" })
          );
        }
      } else {
        dispatch(logout());
        if (location?.pathname?.includes("dashboard") && !user) {
          navigation("/");
        }
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const storeWorkoutsData = async () => {
    try {
      const plans = await getWorkoutPlansByUser(user?.uid ?? "");
      dispatch(setUserPlans(plans));
      const workouts = await getWorkoutsByUser(user?.uid ?? "");
      dispatch(setUserWorkouts(workouts));
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  useEffect(() => {
    if (user) {
      storeWorkoutsData();
    }
  }, [user]);
  const generateAndStoreWorkoutsPlans = async (
    weight: number,
    height: number,
    description: string
  ) => {
    try {
      const plans = await fetchGeneratedWorkoutPlans(
        weight,
        height,
        description
      );
      console.log({ plans });
      dispatch(setWorkoutPlans(plans ?? []));
    } catch (error) {
      console.error("Error generating workouts:", error);
    }
  };

  const generateAndStoreWorkouts = async (
    weight: number,
    height: number,
    description: string
  ) => {
    try {
      const workouts = await fetchGeneratedWorkouts(
        weight,
        height,
        description
      );
      dispatch(setWorkouts(workouts ?? []));
    } catch (error) {
      console.error("Error generating workouts:", error);
    }
  };

  const generateAndStoreHealthBlogs = async (
    weight: number,
    height: number,
    description: string
  ) => {
    try {
      const blogs = await fetchGeneratedHealthBlogs(
        weight,
        height,
        description
      );
      dispatch(setBlogs(blogs ?? []));
    } catch (error) {
      console.error("Error generating workouts:", error);
    }
  };
  useEffect(() => {
    if (user) {
      generateAndStoreWorkouts(
        user.weight ?? 60,
        user?.height ?? 180,
        user?.description ?? ""
      );
      generateAndStoreWorkoutsPlans(
        user.weight ?? 60,
        user?.height ?? 180,
        user?.description ?? ""
      );
      generateAndStoreHealthBlogs(
        user.weight ?? 60,
        user?.height ?? 180,
        user?.description ?? ""
      );
    }
  }, [user]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 flex justify-center overflow-y-auto bg-gray-200 p-4 md:ml-[20%] md:w-[80%]">
          <Outlet />
        </main>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Wrapper;
