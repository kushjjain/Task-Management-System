import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Features/index'
export const Store = configureStore({
    reducer: todoReducer
})