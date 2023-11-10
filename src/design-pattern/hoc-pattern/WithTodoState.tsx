// import React, { useState, Dispatch, SetStateAction } from 'react';
// export type Todo = {
//   id: number;
//   text: string;
//   completed: boolean;
// };

// export type TodoAction =
//   | { type: 'ADD_TODO'; payload: { text: string } }
//   | { type: 'TOGGLE_TODO'; payload: { id: number } };

// interface WithTodoStateProps {
//   todos: Todo[];
//   dispatch: (value: React.SetStateAction<Todo[]>) => void;
// }

// const WithTodoState = <P extends WithTodoStateProps>(WrappedComponent: React.FC<P>) => {
//   const initialState: Todo[] = [];
//   const [todos, dispatch] = useState(initialState);

//   const addTodo = (text: string) => {
//     dispatch({ type: 'ADD_TODO', payload: { text } });
//   };

//   const toggleTodo = (id: number) => {
//     dispatch({ type: 'TOGGLE_TODO', payload: { id } });
//   };

//   const updatedProps: WithTodoStateProps = {
//     todos,
//     dispatch,
//   };

//   return (props: P) => {
//     return <WrappedComponent {...props} {...updatedProps} addTodo={addTodo} toggleTodo={toggleTodo} />;
//   };
// };

// export default WithTodoState;
