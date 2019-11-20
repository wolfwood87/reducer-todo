import React from 'react';
import moment from "moment";

const Todo = (props) => {
    const handleClick = e => {
        props.dispatch({ type: 'TOGGLE_COMPLETED', payload: props.todo.item })
        console.log(props.todo.completed)
    }

    const completeDate = () => {
        if(props.todo.completed){
            return (
                `Completed on ${moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}`
            )
        }
    }
    return (
        <div className="todo-item" >
            <span onClick = {handleClick} className={`${props.todo.completed ? 'completed' : 'not-completed'}`}>{props.todo.item}</span>
            <span className="complete-date">{completeDate()}</span>
            
        </div>
    )
}
export default Todo;