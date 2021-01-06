import React from 'react'
import { connect } from 'react-redux'
import TodoCard from './TodoCard'
import { selectTodo, editTodo, deleteTodo } from '../redux/actions'

const DisplayTodo = (props) => {

    return (
        <div className='displaytodo-container'>
            <ul>
                {props.todoList?.map(todo => (
                    <TodoCard todoObj={todo} key={todo.id} />
                ))}
            </ul>
            <ul>
                {props.doneTodoList?.map(todo => (
                    <TodoCard todoObj={todo} key={todo.id} />
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedId: state.selectedId,
        todoList: state.todos,
        doneTodoList: state.doneTodos
    }
}
export default connect(mapStateToProps, { selectTodo, editTodo, deleteTodo })(DisplayTodo)
