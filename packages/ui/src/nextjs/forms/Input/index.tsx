"use client";

import classNames from "classnames";
import { HTMLProps } from "react";

import styles from "./index.module.css";

export const Input = ({ ...props }: HTMLProps<HTMLInputElement>) => {
  return (
    <input className={classNames(props.className, styles.input)} {...props} />
  );
};
