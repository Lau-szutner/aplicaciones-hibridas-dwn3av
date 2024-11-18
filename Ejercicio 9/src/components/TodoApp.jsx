import React from 'react';
import Header from './Header.jsx';
import TodoList from './TodoList.jsx';
import TodoItem from './TodoItem.jsx';

const TodoApp = () => {
  return (
    <div>
      <Header></Header>
      <TodoList>
        <TodoItem>Mi primer tarea</TodoItem>
        <TodoItem>Mi primer tarea</TodoItem>
        <TodoItem>Mi primer tarea</TodoItem>
      </TodoList>
    </div>
  );
};

export default TodoApp;
