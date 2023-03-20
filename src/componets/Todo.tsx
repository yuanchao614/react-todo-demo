import React from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
// import TodoApp from '../TodoApp'
import { toggleTodo } from '../redux/action'

interface TodoItem {
    id?: number
    content: string
    complete: boolean
}

interface PropsType {
    todo: TodoItem,
    index: number
    toggleTodo: (id: number) => void
}

function Todo({ todo, index, toggleTodo }: PropsType) {
    return (
        <li onClick={() => toggleTodo(todo.id || 0)} className={cx('todo-item', {
            'todoed': todo.complete
        })} title={todo.complete ? '标记为未完成' : '标记为已完成'}>
            {
                `${index}：`
            }
            {
                todo.complete ? "👌" : "👋"
            }{todo.content}
        </li>
    )
}


export default connect(null, { toggleTodo })(Todo)