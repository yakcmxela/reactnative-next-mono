import { InputHTMLAttributes } from "react";
import styles from "./index.module.css";

export const CheckboxToggle = (
  props: InputHTMLAttributes<HTMLInputElement>
) => {
  return (
    <div
      className={[
        styles.checkboxToggle,
        props.checked ? styles.active : styles.inactive,
      ].join(" ")}
    >
      <div className={styles.toggleContainer}>
        <div className={styles.toggleButton} />
      </div>
      <input {...props} name={props.name || "CheckboxToggle"} type="checkbox" />
    </div>
  );
};
