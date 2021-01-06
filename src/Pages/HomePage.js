import React from 'react'
import AddTodoField from '../components/AddTodoField'
import DisplayTodo from '../components/DisplayTodo'

const HomePage = () => {
    return (
        <div className='homepage-container'>
            <AddTodoField />
            <DisplayTodo />
        </div>
    )
}

export default HomePage