import { firebaseConfig } from "@todo/constants";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

export const app = initializeApp(firebaseConfig);
export const todosCollection = collection(getFirestore(app), "todos");
