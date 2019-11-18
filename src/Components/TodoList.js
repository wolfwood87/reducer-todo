import React, { useContext } from 'react';
import Todo from './Todo';
import { TodoContext } from '../Contexts/TodoContext';
import TodoForm from './TodoForm'

const TodoList = () => {
    const { state } = useContext(TodoContext)
    return(
        <div>
            {state.map(item => (
                <Todo
                    key={item.id}
                    todo={item}
                />
            ))}
            <TodoForm />
        </div>
    )
}

export default TodoList;