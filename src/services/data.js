import { db } from "./firebase";
import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export const createWorkspace = async (uid, name, description) => {
  try {
    const workspaceRef = doc(collection(db, "users", uid, "workspaces"));

    const workspaceData = {
      id: workspaceRef.id,
      name: name,
      description: description,
      createdAt: serverTimestamp(),
    };

    await setDoc(workspaceRef, workspaceData);
    return workspaceData;
  } catch (error) {
    console.error(error.message);
  }
};

export const listenUserWorkspaces = (uid, callback) => {
  const ref = collection(db, "users", uid, "workspaces");

  const unsubscribe = onSnapshot(ref, (snapshot) => {
    const workspaces = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(workspaces);
  });

  return unsubscribe;
};
