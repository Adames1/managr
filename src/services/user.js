import { db } from "../services/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const createUserProfile = async (uid, userData) => {
  try {
    const docRef = doc(db, "users", uid);
    const data = await setDoc(docRef, userData);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getUserProfile = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return docSnap.data();
  } catch (error) {
    console.error(error.message);
  }
};
