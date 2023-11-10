'use client';

import React from 'react';
import { TodoProvider } from './TodoContext';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const RootComponent = () => {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

export default RootComponent;
