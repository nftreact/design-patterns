'use client';

import React from 'react';
import { useTodoContext } from './TodoProvider';

const TodoList = () => {
  const { todos, toggleTodo } = useTodoContext();

  if (todos.length === 0) return;

  return (
    <section
      style={{
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {todos.map((item) => {
        return (
          <li
            style={{
              border: item.completed ?"1px solid red":"1px solid black",
              padding: '10px',
              borderRadius: '4px',
              minWidth: '220px',
              textDecoration: item.completed ? 'line-through' : 'none',

            }}
            key={item.id}
            onClick={() => toggleTodo(item.id)}
          >
            {item.text}
          </li>
        );
      })}
    </section>
  );
};

export default TodoList;
