import React, { useState, useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContext';

const TodoForm = () => {
    const { dispatch } = useContext(TodoContext)
    const [newTodo, setNewTodo] = useState('')
    const handleChange = e => {
        setNewTodo(e.target.value)
    }
    return (
        <div>
            <form>
                <input
                    onChange={handleChange}
                    type='text'
                    name='todo'
                    value={newTodo}
                />
            </form>
            <div>
                <button 
                    onClick = {() => {
                        dispatch({ type: 'ADD_TODO', payload: newTodo});
                        setNewTodo('');
                    }}
                >
                    Add Todo
                </button>
                <button>Clear Completed</button>
            </div>
        </div>
    )
}
export default TodoForm;