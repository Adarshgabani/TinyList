import React from 'react'
import { connect } from 'react-redux'
import TodoCard from './TodoCard'
import { selectTodo, editTodo, deleteTodo } from '../redux/actions'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { fadeIn } from '../animations'

const DisplayTodo = (props) => {

    return (

        <motion.div variants={fadeIn} initial="hidden" animate="show" exit='removed' className='displaytodo-container'>
            <AnimateSharedLayout type='switch' >
                <AnimatePresence >
                    <motion.ul layout >
                        {props.todoList?.map(todo => (
                            <motion.li key={todo.id} variants={fadeIn}>
                                <TodoCard todoObj={todo} />
                            </motion.li>
                        ))}
                    </motion.ul>
                </AnimatePresence>
                <AnimatePresence>
                    <motion.ul layout>
                        {props.doneTodoList?.map(todo => (
                            <motion.li key={todo.id} variants={fadeIn} >
                                <TodoCard todoObj={todo} />
                            </motion.li>
                        ))}
                    </motion.ul>
                </AnimatePresence>
            </AnimateSharedLayout>
        </motion.div>
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
