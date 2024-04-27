"use client";

import { useState } from "react";
import { formatDistance } from "date-fns";
import classNames from "classnames";
import Link from "next/link";

import { CheckboxToggle } from "@todo/ui/nextjs";
import { Todo } from "@todo/types";
import styles from "./index.module.css";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const onClickComplete = async () => {
    setCompleted((completed) => !completed);
  };

  return (
    <div
      className={classNames(
        styles.todo,
        completed ? styles.completed : undefined
      )}
    >
      <CheckboxToggle checked={completed} onChange={onClickComplete} />
      <p onClick={onClickComplete} className={styles.text}>
        {todo.text}
      </p>
      {todo.due && (
        <p className={styles.due}>
          Due{" "}
          {formatDistance(new Date(todo.due), new Date(), {
            addSuffix: true,
          })}
        </p>
      )}
      <Link className={styles.todoEdit} href={`/todos/${todo.id}`}>
        &#9881;
      </Link>
    </div>
  );
};
