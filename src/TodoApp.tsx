import React from 'react'
import AddTodo from './componets/AddTodo'
import TodoList from './componets/TodoList'
import VisibilityFilters from './componets/VisibilityFilters'
import "./style.css"


export default function TodoApp() {
    return (
        <div className="todo-app">
            <h2>ToDo List Demo</h2>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
    )
}