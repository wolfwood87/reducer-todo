import React, { useContext } from 'react';
import Todo from './Todo';
import { TodoContext } from '../Contexts/TodoContext';
import TodoForm from './TodoForm'

const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext)
    return(
        <div>
            {state.map((item, index) => (
                <Todo
                    key={index}
                    todo={item}
                    dispatch = {dispatch}
                />
            ))}
            <TodoForm />
        </div>
    )
}

export default TodoList;