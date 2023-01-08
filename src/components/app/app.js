import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

class App extends React.Component {

    state = {
        todoData: [
            { done: false, label: 'Drink Coffee', important: false, id: 1 },
            { done: false, label: 'Make Awesome App', important: true, id: 2 },
            { done: false, label: 'Have a lunch', important: false, id: 3 }
        ]
    }

    deleteTodo = (id) => {
        this.setState(state => ({
            todoData: this.state.todoData.filter(todo => {
                return todo.id !== id
            })
        }))
    }

    addItem = () => {
        this.setState(state => {
            const newTodos = [...state.todoData]
            newTodos.push({ label: 'Drink Coffee', important: false, id: Math.random() })

            return {
                todoData: newTodos
            }
        })
    }

    toggleProperty = (prop, id) => {
        this.setState(state => {
            const todoData = JSON.parse(JSON.stringify(state.todoData))
            const indexOfDone = todoData.findIndex(todo => todo.id === id)

            todoData[indexOfDone][prop] = !todoData[indexOfDone][prop]

            return {
                todoData
            }
        })
    }

    toggleDone = (id) => {
        this.setState(state => {
            return this.toggleProperty('done', id)
        })
    }

    toggleImportant = (id) => {
        this.setState(state => {
            const todoData = [...state.todoData]
            const indexOfDone = todoData.findIndex(todo => todo.id === id)
            const newTodo = {
                ...todoData[indexOfDone],
                important: !todoData[indexOfDone].important
            }

            todoData[indexOfDone] = newTodo

            return {
                todoData
            }
        })
    }

    render() {

        const {todoData} = this.state

        const doneCount = todoData.filter(todo => todo.done).length
        const todoCount = todoData.length - doneCount

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteTodo}
                    onToggleDone={this.toggleDone}
                    onToggleImportant={this.toggleImportant}
                />

                <button onClick={this.addItem}>Add Item</button>
            </div>
        );
    }
}

export default App