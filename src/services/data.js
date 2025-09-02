import { db } from "./firebase";
import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

// crear workspace en firebase
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

// traer workspace de firebase
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

// crear proyectos en firebase
export const createProject = async (uid, workspaceId, name, description) => {
  try {
    const projectRef = doc(
      collection(db, "users", uid, "workspaces", workspaceId, "projects")
    );

    const projectData = {
      name: name,
      description: description,
      createdAt: serverTimestamp(),
    };

    await setDoc(projectRef, projectData);
    return projectData;
  } catch (error) {
    console.error(error.message);
  }
};

// traer proyectos de firebase
export const listenUserProjects = (uid, workspaceId, callback) => {
  const ref = collection(
    db,
    "users",
    uid,
    "workspaces",
    workspaceId,
    "projects"
  );

  const unsubscribe = onSnapshot(ref, (snapshot) => {
    const projects = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(projects);
  });

  return unsubscribe;
};
