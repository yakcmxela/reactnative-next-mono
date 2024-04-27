import { View, StyleSheet, Text } from "react-native";
import { CardProps } from "../../../types/card";

export const Card = ({ children }: CardProps): JSX.Element => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 6,
    marginTop: 4,
  },
  card: {
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: "#fff",
    padding: 16,
  },
});
