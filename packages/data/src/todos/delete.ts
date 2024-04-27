import { deleteDoc, doc } from "firebase/firestore";

import { todosCollection } from "../app";

export async function deleteTodo(id: string) {
  await deleteDoc(doc(todosCollection, id));
}
