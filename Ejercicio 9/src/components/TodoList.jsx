import React from 'react';

const TodoList = ({ children }) => {
  return (
    <div>
      <h2>lista de tareas</h2>
      <ul>{children}</ul>
    </div>
  );
};

export default TodoList;
