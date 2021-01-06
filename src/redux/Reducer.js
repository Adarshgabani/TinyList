import { ADD_TODO, SELECT_TODO, EDIT_TODO, DELETE_TODO, DONE_TODO, UNDO_DONE, DELETE_DONE_TODO, EDIT_DONE_TODO } from "./const";


const initialState = {
    todos: [],
    doneTodos: [],
    nextTodoId: 0,
    nextDoneTodoId: 0,
    selectedId: -1,
}
const sortedList = (list) => {
    // decending Order
    return [...list].sort((a, b) => -(a.id - b.id))

}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const tempTodo = state.todos
            tempTodo.unshift(action.payload)
            const sorted = sortedList(tempTodo)
            return { ...state, todos: sorted, nextTodoId: state.nextTodoId + 1, selectedIndex: -1 }
        case SELECT_TODO:
            return { ...state, selectedId: action.payload }
        case EDIT_TODO:
            const tempTodos = state.todos.filter(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload
                } else {
                    return todo
                }
            })
            return { ...state, todos: tempTodos, selectedId: -1 }
        case EDIT_DONE_TODO:
            const tempDoneTodos = state.doneTodos.filter(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload
                } else {
                    return todo
                }
            })
            return { ...state, todos: tempDoneTodos, selectedId: -1 }
        case DELETE_TODO:
            return { ...state, selectedId: -1, todos: state.todos.filter(todo => todo.id !== action.payload) }
        case DELETE_DONE_TODO:
            return { ...state, selectedId: -1, doneTodos: state.doneTodos.filter(todo => todo.id !== action.payload) }
        case DONE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload.id), doneTodos: [...state.doneTodos, action.payload], nextDoneTodoId: state.nextDoneTodoId + 1, selectedIndex: -1 }
        case UNDO_DONE:
            return { ...state, todos: [...state.todos, action.payload], doneTodos: state.doneTodos.filter(todo => todo.id !== action.payload.id), selectedIndex: -1 }
        default:
            return { ...state }
    }

}

export default rootReducer;