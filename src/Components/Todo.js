import React from 'react';


const Todo = (props) => {
    const handleClick = e => {
        props.dispatch({ type: 'TOGGLE_COMPLETED', payload: props.todo.item })
        console.log(props.todo.completed)
    }
    return (
        <div  onClick = {handleClick} className={`${props.todo.completed ? 'completed' : 'not-completed'} todo-item`}>
            <p>{props.todo.item}</p>
        </div>
    )
}
export default Todo;