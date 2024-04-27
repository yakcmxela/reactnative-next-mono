import { StyleSheet, TextInput, TextInputProps } from "react-native";

export const Input = (props: TextInputProps) => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderRadius: 4,
    borderColor: "#6c757d",
    borderWidth: 1,
  },
});
