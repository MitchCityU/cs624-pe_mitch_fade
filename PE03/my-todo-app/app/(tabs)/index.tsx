import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoIndex, setTodoIndex] = useState(0);
  const [filter, setFilter] = useState('All');

  const handleInputChange = (text) => {
    setInputValue(text);
    console.log('Input Value:', text);
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

    console.log('State:', updatedTodos);
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
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />

      <View style={styles.tabBar}>
        {['All', 'Active', 'Complete'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabItem, filter === tab && styles.activeTab]}
            onPress={() => setFilter(tab)}
          >
            <Text style={filter === tab ? styles.activeTabText : styles.tabText}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  heading: {
    fontSize: 40,
    color: 'black',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3,
    shadowColor: 'black',
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
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    borderTopWidth: 1,
    borderColor: 'lightgray',
    paddingTop: 10,
    width: '100%',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  activeTabText: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
});
