import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoContext } from './Contexts/TodoContext.js';
import { initialTodo, todoReducer } from './reducers';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialTodo)
  return (
    <div className="App">
      <TodoContext.Provider value={{}}>
        {/* <TodoForm /> */}
        <p>Item: {state.item}</p>
        <p>ID: {state.id}</p>
        <p>Completed: {JSON.stringify(state.completed)}</p>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
