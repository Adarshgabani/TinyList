import React, { useState } from 'react'
import checked from '../assets/checked.svg'
import unchecked from '../assets/unchecked.svg'
import trashcan from '../assets/trashcan.svg'
import { connect } from 'react-redux'
import { selectTodo, editTodo, deleteTodo, doneTodo, undoDone, deleteDoneTodo, editDoneTodo } from '../redux/actions'
const TodoCard = (props) => {
    //states
    const visibility = window.innerWidth < 600 ? true : false
    const { id, title, isCompleted } = props.todoObj
    const isSelected = id === props.selectedId ? true : false
    const [todoTitle, setTodoTitle] = useState(title)
    const [checkboxState, setCheckboxState] = useState(isCompleted)
    const [isVisible, setIsVisible] = useState(visibility)



    //handler
    const handleHover = () => {
        setIsVisible(true)
    }
    const onMouseLeave = () => {
        setIsVisible(false)
    }
    const handleSelection = () => {

        props.selectTodo(id)
    }
    const handleInputFieldChange = (e) => {
        setTodoTitle(e.target.value)

    }
    const handleEnterKeyPress = (e) => {
        console.log(e.key)
        if (e.key === 'Enter' && todoTitle.trim() && isSelected) { //trim because if only white space than not save todoTitle
            console.log('Enter Pressed', todoTitle)
            if (isCompleted) {
                props.editDoneTodo({ ...props.todoObj, title: todoTitle, isCompleted: true })
            } else {
                props.editTodo({ ...props.todoObj, title: todoTitle, isCompleted: false })
            }
        }
    }
    const handleCheckboxChange = () => {
        setCheckboxState(!checkboxState)
        if (isCompleted) {
            props.undoDone({ ...props.todoObj, title: todoTitle, doneId: -1, isCompleted: false })
        } else {
            props.doneTodo({ ...props.todoObj, title: todoTitle, isCompleted: true })
        }
    }
    const handleDelete = () => {
        if (isCompleted) {
            props.deleteDoneTodo(id)
        } else {
            props.deleteTodo(id)
        }
    }
    return (
        <div onMouseEnter={handleHover} onMouseLeave={onMouseLeave} className='todocard-container'>
            <div className={`todoitem ${checkboxState ? 'completed' : ''}`}>
                <div className='checkbox'>
                    {checkboxState ? <img src={checked} onClick={handleCheckboxChange} alt='Checked' /> :
                        <img src={unchecked} onClick={handleCheckboxChange} alt='unChecked' />}

                </div>
                {isSelected
                    ? (
                        <input type='text' value={todoTitle} onChange={handleInputFieldChange} onKeyPress={handleEnterKeyPress} />)
                    : (
                        <div onClick={handleSelection} className='title'>{todoTitle} </div>
                    )
                }
            </div>
            {isVisible && <div className='delete' onClick={handleDelete} ><img src={trashcan} alt='delete' /></div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedId: state.selectedId
    }
}
export default connect(mapStateToProps, { selectTodo, editTodo, doneTodo, undoDone, deleteTodo, deleteDoneTodo, editDoneTodo })(TodoCard)
