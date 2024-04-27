"use client";

import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./index.module.css";
import classNames from "classnames";

export const DatePicker = ({ ...props }: {} & ReactDatePickerProps) => {
  return (
    <ReactDatePicker
      {...props}
      className={classNames(styles.datePicker, props.className)}
    />
  );
};
