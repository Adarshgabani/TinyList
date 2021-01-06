import { ADD_TODO, DELETE_DONE_TODO, DELETE_TODO, DONE_TODO, EDIT_DONE_TODO, EDIT_TODO, SELECT_TODO, UNDO_DONE } from "./const"



export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const selectTodo = (payload) => {
    return {
        type: SELECT_TODO,
        payload
    }
}

export const editTodo = (payload) => {
    return {
        type: EDIT_TODO,
        payload
    }
}

export const editDoneTodo = (payload) => {
    return {
        type: EDIT_DONE_TODO,
        payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const deleteDoneTodo = (payload) => {
    return {
        type: DELETE_DONE_TODO,
        payload
    }
}

export const doneTodo = (payload) => {
    return {
        type: DONE_TODO,
        payload
    }
}

export const undoDone = (payload) => {
    return {
        type: UNDO_DONE,
        payload
    }
}