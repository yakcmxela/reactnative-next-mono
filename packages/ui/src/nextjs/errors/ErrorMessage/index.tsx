import styles from "./index.module.css";

export const ErrorMessage = ({
  message,
}: {
  message?: string;
}): JSX.Element | null => {
  if (!message) return null;
  return <p className={styles.error}>{message}</p>;
};
