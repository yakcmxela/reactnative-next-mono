import {Todo} from '@todo/types';
import {StyleSheet, Text} from 'react-native';
import {useState} from 'react';
import {Button, Card, DatePicker, Input} from '@todo/ui/react-native';

export const TodoEdit = ({
  todo,
  onSubmit,
}: {
  todo?: Todo;
  onSubmit: (todo: Partial<Todo>) => Promise<void>;
}) => {
  const [text, setText] = useState(todo?.text ?? '');
  const [due, setDue] = useState(todo?.due ?? new Date().getTime());

  const onChangeDate = (date: Date) => {
    setDue(date.getTime());
  };

  const onSubmitTodo = async () => {
    const submittedTodo: Partial<Todo> = {
      text,
      due,
    };
    await onSubmit(submittedTodo);
  };

  return (
    <Card>
      <Text style={styles.text}>
        {todo ? 'Edit your task' : 'Create a new task'}
      </Text>
      <Input
        placeholder="What do you want to do?"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <DatePicker
        value={due ? new Date(due) : new Date()}
        onChangeDate={onChangeDate}
      />
      <Button
        onPress={onSubmitTodo}
        variant="primary"
        text={todo ? 'Save' : 'Create'}
        textStyle={styles.textButton}
        style={styles.button}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
  },
  button: {
    marginTop: 8,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
