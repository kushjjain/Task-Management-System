import { createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todo: [{id:1,text:"Hello"}]
}

export const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todos = {
                id:nanoid(),
                text:action.payload    
            }
            state.todo.push(todos)
        },
        deleteTodo: (state,action) => {
            state.todo = state.todo.filter((todos) => todos.id !== action.payload)
        }
    }
})

export const {addTodo,deleteTodo} = todoSlice.actions

export  default todoSlice.reducer