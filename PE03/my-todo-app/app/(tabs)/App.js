import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoIndex, setTodoIndex] = useState(0);

  const handleInputChange = (text) => {
    console.log('Input Value:', text);
    setInputValue(text);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === '') return;

    const newTodo = {
      title: inputValue,
      todoIndex: todoIndex,
      complete: false,
      type: 'All'
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setTodoIndex(todoIndex + 1);
    setInputValue('');

    console.log('State:', { todos: updatedTodos });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>todos</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What needs to be done?"
          value={inputValue}
          onChangeText={handleInputChange}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 40,
    color: '#e0bebe',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 20,
    width: '100%',
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
  },
});
