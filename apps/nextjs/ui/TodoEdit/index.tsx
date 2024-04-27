"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createTodo, deleteTodo, updateTodo } from "@todo/data";
import { Button, Card, DatePicker, ErrorMessage, Input } from "@todo/ui/nextjs";
import { Todo } from "@todo/types";
import styles from "./index.module.css";

export const TodoEdit = ({ todo }: { todo?: Todo }) => {
  const router = useRouter();
  const [error, setError] = useState<string>();
  const [todoEditing, setTodoEditing] = useState<Partial<Todo>>(
    todo ?? {
      due: new Date().getUTCMilliseconds(),
      text: "",
    }
  );

  const onDeleteTodo = async () => {
    try {
      if (todo?.id) {
        await deleteTodo(todo.id);
      }
    } catch (error) {
      router.replace("/");
    }
  };

  const onChangeDate = (date: Date) => {
    setTodoEditing((t) => ({ ...t, due: date.getTime() }));
  };

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoEditing((t) => ({ ...t, text: event.target.value }));
  };

  const onSubmitTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!todoEditing.text) throw new Error("Task is required");
      if (!todoEditing.due) throw new Error("Due date is required");
      if (!todoEditing.id) {
        createTodo({ ...todoEditing, completed: false });
      } else {
        updateTodo(todoEditing as Todo);
      }
      router.replace("/");
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occurred");
      }
    }
  };

  return (
    <Card className={styles.card} title="Create a new todo">
      <form className={styles.form} onSubmit={onSubmitTodo}>
        <Input
          onChange={onChangeText}
          placeholder="Task"
          value={todoEditing.text}
          required={true}
        />
        <DatePicker
          selected={new Date(todoEditing.due ?? 0)}
          required={true}
          onChange={onChangeDate}
          placeholderText="Due date"
        />
        <Button variant="primary" className={styles.button} type="submit">
          Save
        </Button>
      </form>
      {todo?.id && (
        <Button
          onClick={onDeleteTodo}
          className={styles.delete}
          variant="tertiary"
        >
          Delete this task
        </Button>
      )}

      <ErrorMessage message={error} />
    </Card>
  );
};
