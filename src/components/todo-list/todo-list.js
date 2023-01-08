import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = (props) => {

  const elements = props.todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
            {...itemProps }
            onDeleted={() => props.onDeleted(id)}
            onToggleDone={() => props.onToggleDone(id)}
            onToggleImportant={() => props.onToggleImportant(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
