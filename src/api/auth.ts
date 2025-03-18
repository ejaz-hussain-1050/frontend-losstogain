// src/services/authService.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../config/firebaseConfig";

export const signUp = async ({
  email,
  password,
  fullName,
  age,
  weight,
  height,
  description,
}: {
  email: string;
  password: string;
  fullName: string;
  age: number;
  weight: number;
  height: number;
  description: string;
}) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Set display name in authentication profile
    await updateProfile(user, { displayName: fullName });

    // Store additional user details in Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullName,
      email,
      age,
      weight,
      height,
      description,
      createdAt: new Date(),
    });

    return { success: true, user };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Fetch user details from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) throw new Error("User data not found");

    return { success: true, user: { ...user, ...userDoc.data() } };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const getUserProfile = async (uid: string) => {
  const userDoc = await getDoc(doc(db, "users", uid));
  return userDoc.exists() ? userDoc.data() : null;
};

import { updateDoc } from "firebase/firestore";

interface UserProfileUpdate {
  uid: string;
  height: number;
  weight: number;
  description: string;
}

export const updateUserProfile = async ({
  uid,
  height,
  weight,
  description,
}: UserProfileUpdate) => {
  if (!uid) throw new Error("User ID is required");

  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, {
      height,
      weight,
      description,
    });

    console.log("User profile updated successfully");
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

