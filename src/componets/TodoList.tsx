import React from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import Todo from './Todo'
import { getTodosByVisibilityFilter } from '../redux/selectors'
import { TodoItem, Store } from '../interface/TodoInterface'

interface PropsType {
    todos: TodoItem[]
}


const TodoList = ({ todos }: PropsType) => {
    return (
        <ul className="todo-list">
            {
                todos && todos.length ? todos.map(
                    (todo, index) => <Todo todo={todo} index={index + 1} key={index} />
                ) : 'no todos data!'
            }
        </ul>
    )
}

const mapStateToProps = (state: Store) => {
    const { visibilityFilter } = state;
    debugger
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
  };

export default connect(mapStateToProps)(TodoList as any)