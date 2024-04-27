import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createTodo, updateTodo} from '@todo/data';
import {ScreenProps, Todo} from '@todo/types';
import {TodoEdit} from '../../ui/TodoEdit';

export default function ({
  route,
  navigation,
}: NativeStackScreenProps<ScreenProps, 'Todo'>) {
  const onSubmitTodo = async (todo: Partial<Todo>) => {
    if (todo.id) {
      await updateTodo(todo as Todo);
    } else {
      await createTodo(todo);
    }
    navigation.goBack();
  };
  return <TodoEdit onSubmit={onSubmitTodo} todo={route.params.todo} />;
}
