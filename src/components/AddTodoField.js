import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

const AddTodoField = (props) => {

    //states
    const [inputText, setInputText] = useState('')

    //event handlers
    const handleChange = (e) => {
        setInputText(e.target.value)
    }
    const handleEnterKeyPress = (e) => {
        console.log(e.key)
        if (e.key === 'Enter' && inputText.trim()) { //trim because if only white space than not save todo
            console.log('Enter Pressed', inputText)
            props.addTodo({ id: props.todoId, title: inputText, isCompleted: false, doneId: -1 })
            setInputText('')
        }
    }



    return (
        <div className='addtodofield-container'>
            <div className='inputup'>
                <div className='plus'>+</div>
                <input type='text' value={inputText} onChange={handleChange} onKeyPress={handleEnterKeyPress} placeholder='Add to list...' />
            </div>
            <div className='line'></div>
        </div>
    )
}


//to connect redux state to this component's props
const mapStateToProps = (state) => {
    return {
        todoId: state.nextTodoId
    }
}

export default connect(mapStateToProps, { addTodo })(AddTodoField)