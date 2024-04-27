import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import { ButtonProps } from "@todo/ui/types/button";
import styles from "./index.module.css";

export const Button = ({
  children,
  variant,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={classNames(styles.button, styles[variant], props.className)}
    >
      {children}
    </button>
  );
};
