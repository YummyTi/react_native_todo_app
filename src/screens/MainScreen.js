import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';


const MainScreen = ({ handleAddTodo, todos, removeTodo }) => {
  return (
    <View>
      <AddTodo onSubmit={handleAddTodo} />

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({

})

export default MainScreen
