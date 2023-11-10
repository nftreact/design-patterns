'use client';

import React from 'react';
import { useTodoState, useTodoDispatch } from './TodoContext';

const TodoList: React.FC = () => {
  const todos = useTodoState();
  const dispatch = useTodoDispatch();

  const handleToggleTodo = (id: number) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={() => handleToggleTodo(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
