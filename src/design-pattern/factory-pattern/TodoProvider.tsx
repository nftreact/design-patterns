'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

class TodoFactory {
  private static idCounter: number = 1;

  static createTodo(text: string): Todo {
    const todo: Todo = {
      id: TodoFactory.idCounter++,
      text,
      completed: false,
    };
    return todo;
  }
}

interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = TodoFactory.createTodo(text);
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>{children}</TodoContext.Provider>;
};

export const useTodoContext = (): TodoContextProps => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
