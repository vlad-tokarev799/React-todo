import React from "react";

import TodoListItem from "./todo-list-item";

const TodoList = (props) => {
    const elements = props.todos.map((item) => <li key={ item.id }><TodoListItem {...item}/></li>)

    return (
        <ul>{ elements }</ul>
    )
}

export default TodoList