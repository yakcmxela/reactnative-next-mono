import classNames from "classnames";

import { CardProps } from "@todo/ui/types/card";
import styles from "./index.module.css";

export const Card = ({
  className,
  children,
}: CardProps & {
  className?: string;
}): JSX.Element => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};
