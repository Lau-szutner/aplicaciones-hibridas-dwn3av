import React from 'react';
const TodoItem = ({ children }) => {
  return (
    <div className="task">
      <h3>{children}</h3>
    </div>
  );
};

export default TodoItem;
