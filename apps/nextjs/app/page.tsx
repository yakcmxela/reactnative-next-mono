import Link from "next/link";

import { getTodos } from "@todo/data";
import { Button } from "@todo/ui/nextjs";
import { TodoList } from "@todo/nextjs/ui/TodoList";
import styles from "./page.module.css";

export default async function Page(): Promise<JSX.Element> {
  const todos = await getTodos();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Todo/Next.js</h1>
      {todos === undefined ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <TodoList className={styles.todos} todos={todos} />
      )}
      <Link href="/todos/new" className={styles.new}>
        <Button variant="primary">Create a new todo</Button>
      </Link>
    </main>
  );
}
