import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getTodos, updateTodo} from '@todo/data';
import {useEffect, useState} from 'react';
import {ScreenProps, Todo} from '@todo/types';
import {Button} from '@todo/ui/react-native';
import {TodoList} from '../../ui/TodoList';

export const Home = ({
  navigation,
}: NativeStackScreenProps<ScreenProps, 'Home'>) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onPressComplete = async (todo: Todo) => {
    try {
      await updateTodo({
        ...todo,
        completed: !todo.completed,
      });
      requestTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const requestTodos = async () => {
    try {
      setTodos(await getTodos());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    requestTodos();
  }, []);

  return (
    <SafeAreaView
      style={{
        height: '100%',
        display: 'flex',
      }}>
      <TodoList todos={todos} onPressComplete={onPressComplete} />
      <Button
        variant="primary"
        text="Create a new task"
        onPress={() => navigation.navigate('Todo', {todo: undefined})}
        style={{
          margin: 16,
        }}
      />
    </SafeAreaView>
  );
};
