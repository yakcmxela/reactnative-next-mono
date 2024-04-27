import { FlatList, StyleSheet } from "react-native";

import { Todo } from "@todo/types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos,
  onPressComplete,
}: {
  todos: Todo[];
  onPressComplete: (todo: Todo) => Promise<void>;
}) => {
  return (
    <FlatList
      style={styles.list}
      data={todos.sort((a, b) => Number(a.completed) - Number(b.completed))}
      renderItem={({ item }) => (
        <TodoItem todo={item} onPressComplete={onPressComplete} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
    paddingHorizontal: 16,
  },
});
