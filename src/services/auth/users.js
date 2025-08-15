import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const addNewUser = async (user) => {
  try {
    const docRef = await addDoc(collection(db, "users"), user);
    return docRef.id;
  } catch (error) {
    console.error("Error adding new user to database", error.message);
    throw error;
  }
};
