import React, { useReducer } from 'react';
import './App.css';
import { TodoContext } from './Contexts/TodoContext.js';
import { initialTodo, todoReducer } from './reducers';
import TodoList from './Components/TodoList'
function App() {
  const [state, dispatch] = useReducer(todoReducer, initialTodo)
  return (
    <div className="App">
      <TodoContext.Provider value={{state, dispatch}}>
        {/* <TodoForm /> */}
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
