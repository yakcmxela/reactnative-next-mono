import classNames from "classnames";

import { Todo } from "@todo/types";
import { TodoItem } from "@todo/nextjs/ui/TodoItem";
import { Card } from "@todo/ui/nextjs";
import styles from "./index.module.css";

export const TodoList = ({
  className,
  todos,
}: {
  className?: string;
  todos: Todo[];
}) => {
  return (
    <Card>
      <ul className={classNames(styles.todoList, className)}>
        {todos
          .sort((a, b) => a.due - b.due)
          .sort((a, b) => Number(a.completed) - Number(b.completed))
          .map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} />
            </li>
          ))}
      </ul>
    </Card>
  );
};
