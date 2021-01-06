import React from 'react'
import { connect } from 'react-redux'
import TodoCard from './TodoCard'
import { selectTodo, editTodo, deleteTodo } from '../redux/actions'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeIn } from '../animations'

const DisplayTodo = (props) => {

    return (

        <div className='displaytodo-container'>
            <AnimatePresence>
                <motion.ul>
                    {props.todoList?.map(todo => (
                        <motion.li key={todo.id} variants={fadeIn} initial="hidden" animate="show" exit='removed'><TodoCard todoObj={todo} /></motion.li>
                    ))}
                </motion.ul>
            </AnimatePresence>
            <AnimatePresence>
                <motion.ul>
                    {props.doneTodoList?.map(todo => (
                        <motion.li key={todo.id} variants={fadeIn} initial="hidden" animate="show" exit='removed'><TodoCard todoObj={todo} /></motion.li>

                    ))}
                </motion.ul>
            </AnimatePresence>
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
