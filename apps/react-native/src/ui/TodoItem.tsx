import { Todo } from "@todo/types";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from "@todo/ui/react-native";
import { navigate } from "@todo/ui/react-native";

export const TodoItem = ({
  todo,
  onPressComplete,
}: {
  todo: Todo;
  onPressComplete: (todo: Todo) => Promise<void>;
}) => {
  const onPressEdit = () => {
    navigate("Todo", { todo });
  };

  return (
    <Card>
      <View
        style={{ ...styles.item, ...(todo.completed ? styles.completed : {}) }}
      >
        <View style={styles.content}>
          <Text style={styles.text}>{todo.text}</Text>
          {todo.due && (
            <Text style={styles.due}>
              Due on: {new Date(todo.due).toDateString()}
            </Text>
          )}
        </View>
        <Button
          style={styles.edit}
          variant="secondary"
          text="Edit"
          onPress={onPressEdit}
        />
        <Button
          variant="primary"
          text={todo.completed ? "Completed" : "Complete"}
          onPress={() => onPressComplete(todo)}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  completed: {
    opacity: 0.5,
  },
  content: {
    marginRight: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  due: {
    fontSize: 12,
    fontStyle: "italic",
  },
  edit: {
    marginRight: 8,
    marginLeft: "auto",
  },
});
