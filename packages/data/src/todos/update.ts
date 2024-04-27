import { doc, updateDoc } from "firebase/firestore";

import { Todo } from "@todo/types";
import { todosCollection } from "../app";

export async function updateTodo(todo: Todo) {
  await updateDoc(doc(todosCollection, todo.id), todo);
}
