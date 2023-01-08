import React from 'react';

import './todo-list-item.css';

const TodoListItem = props => {

    let classNames = `todo-list-item ${props.done ? 'done' : null} ${props.important ? 'important' : ''}`

    return (
        <span className={ classNames }>
          <span
              className="todo-list-item-label"
              onClick={ props.onToggleDone }
          >
            { props.label }
          </span>

          <button
              type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={ props.onToggleImportant }
          >
            <i className="fa fa-exclamation" />
          </button>

          <button
              type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={ props.onDeleted }
          >
            <i className="fa fa-trash-o" />
          </button>
        </span>
    )
}

export default TodoListItem
