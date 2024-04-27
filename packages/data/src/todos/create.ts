import { addDoc, Timestamp } from "firebase/firestore";

import { Todo } from "@todo/types";
import { todosCollection } from "../app";

export async function createTodo(todo: Partial<Todo>) {
  await addDoc(todosCollection, {
    ...todo,
    due: Timestamp.fromMillis(todo.due!),
  });
}
