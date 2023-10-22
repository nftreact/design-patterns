import React from 'react';
import { TodoProvider } from './TodoProvider';
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
