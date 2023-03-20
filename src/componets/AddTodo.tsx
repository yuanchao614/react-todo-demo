import React from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { addTodo } from '../redux/action'

interface PropsType {
    addTodo: (content: string) => void
}

interface StateType {
    value: string
}
class AddTodo extends React.Component<PropsType, StateType> {
    constructor(props: PropsType | Readonly<PropsType>) {
        super(props)
        this.state = {
            value: ''
        }
    }

    inputChange(value: string) {
        this.setState({
            value
        })
    }

    handleAddTodo() {
        debugger
        console.log(this.props)
        if (!this.state.value) {
            alert('输入框不能为空！')
            return
        }
        this.props.addTodo(this.state.value)
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.value} onChange={(e) => this.inputChange(e.target.value)}></input>
                <button className="add-btn" onClick={() => this.handleAddTodo()}>AddTodo</button>
            </div>
        )
    }
}

export default connect(null, {
    addTodo
})(AddTodo)