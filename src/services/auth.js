import { auth } from "./firebase";
import {
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const observerStateAuth = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const registerUser = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error.message);
  }
};

export const logOutUser = async () => {
  try {
    return await signOut(auth);
  } catch (error) {
    console.error(error.message);
  }
};

export const updateProfileUser = async (displayName) => {
  try {
    return await updateProfile(auth.currentUser, displayName);
  } catch (error) {
    console.error(error.message);
  }
};
