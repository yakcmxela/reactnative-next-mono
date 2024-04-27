import { doc, getDoc, getDocs } from "firebase/firestore";

import { Todo } from "@todo/types";
import { todosCollection } from "../app";

const formatTodo = (data: Record<string, any>): Todo => {
  return {
    id: data.id,
    text: data.text,
    due: data.due.seconds * 1000,
    completed: data.completed,
  };
};

export async function getTodos(): Promise<Todo[]> {
  const querySnapshot = await getDocs(todosCollection);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return formatTodo({ ...data, id: doc.id });
  });
}

export async function getTodo(id: string): Promise<Todo | null> {
  const docRef = doc(todosCollection, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    return formatTodo({ ...data, id: docSnap.id });
  } else {
    return null;
  }
}
