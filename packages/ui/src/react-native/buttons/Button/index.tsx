import { ButtonProps } from "@todo/ui/types/button";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";

export const Button = ({
  children,
  textStyle,
  ...props
}: {
  textStyle?: StyleProp<TextStyle>;
  text: string;
} & ButtonProps &
  TouchableHighlightProps) => {
  return (
    <TouchableHighlight
      {...props}
      style={[
        {
          ...styles.button,
          ...(props.variant === "primary" ? styles.primary : styles.secondary),
        },
        props.style,
      ]}
    >
      <Text
        style={[
          styles.text,
          props.variant === "primary"
            ? styles.primaryText
            : styles.secondaryText,
          textStyle,
        ]}
      >
        {props.text}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 4,
  },
  primary: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    borderWidth: 2,
  },
  primaryText: {
    color: "#fff",
  },
  secondary: {
    borderColor: "#6c757d",
    borderWidth: 2,
  },
  secondaryText: {
    color: "#6c757d",
  },
  text: {
    textAlign: "center",
  },
});
