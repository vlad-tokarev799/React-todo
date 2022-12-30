import React from 'react'

const TodoListItem = (props) => {
    return (
        <span className={props.important ? 'important' : null}>{props.label}</span>
    )
}

export default TodoListItem