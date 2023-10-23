'use client';

import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoAction =
  | { type: 'ADD_TODO'; payload: { text: string } }
  | { type: 'TOGGLE_TODO'; payload: { id: number } };

export type TodoState = Todo[];

type TodoDispatch = Dispatch<TodoAction>;

const TodoStateContext = createContext<TodoState | undefined>(undefined);
const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined);

type TodoProviderProps = { children: ReactNode };

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
};

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

const useTodoState = (): TodoState => {
  const context = useContext(TodoStateContext);
  if (context === undefined) {
    throw new Error('useTodoState must be used within a TodoProvider');
  }
  return context;
};

const useTodoDispatch = (): TodoDispatch => {
  const context = useContext(TodoDispatchContext);
  if (context === undefined) {
    throw new Error('useTodoDispatch must be used within a TodoProvider');
  }
  return context;
};

export { TodoProvider, useTodoState, useTodoDispatch };
