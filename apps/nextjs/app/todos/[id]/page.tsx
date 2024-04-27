import Link from "next/link";

import { TodoEdit } from "@todo/nextjs/ui/TodoEdit";
import { getTodo } from "@todo/data";
import styles from "./page.module.css";

export default async function Page({
  params: { id },
}: {
  params: { id?: string };
}): Promise<JSX.Element> {
  const todo = id ? await getTodo(id) : undefined;

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        {id ? "Edit your task" : "Create a task"}
      </h1>
      <Link href="/">
        <span className={styles.back}>Go back</span>
      </Link>
      <div className={styles.container}>
        <TodoEdit todo={todo || undefined} />
      </div>
    </main>
  );
}
