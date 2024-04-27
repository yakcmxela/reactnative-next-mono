import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import DatePickerRN, { DatePickerProps } from "react-native-date-picker";

export const DatePicker = ({
  onChangeDate,
  value,
  ...props
}: {
  onChangeDate: (date: Date) => void;
  value?: Date;
  props?: DatePickerProps;
}) => {
  const [open, setOpen] = useState(false);

  const onChangeOpen = () => setOpen(!open);

  const date = value || new Date();

  return (
    <>
      <TouchableHighlight style={styles.input} onPress={onChangeOpen}>
        <Text>{date.toDateString()}</Text>
      </TouchableHighlight>
      <DatePickerRN
        date={date}
        modal={true}
        onCancel={onChangeOpen}
        onConfirm={onChangeDate}
        onDateChange={onChangeDate}
        open={open}
        {...props}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderColor: "#6c757d",
    borderWidth: 1,
  },
});
